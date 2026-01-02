import { type Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import Badge from "vitepress/dist/client/theme-default/components/VPBadge.vue";
import ThemeToggle from "./components/ThemeToggle.vue";
import "./style.css";
import { onMounted, watch, nextTick } from "vue";
import { useRoute, useData } from "vitepress";

export default {
  ...DefaultTheme,
  Layout: Layout,
  enhanceApp({ app }) {
    app.component("Badge", Badge);
    app.component("ThemeToggle", ThemeToggle);
  },
  setup() {
    const route = useRoute();
    const { isDark } = useData();

    const renderMermaid = async () => {
      if (typeof window === "undefined") return;

      const mermaid = await import("mermaid");
      const currentTheme = isDark.value ? "dark" : "default";

      mermaid.default.initialize({
        startOnLoad: false,
        theme: currentTheme,
        securityLevel: "loose", // 有时需要这个配置来防止 html 标签转义问题
      });

      const elements = document.querySelectorAll(".mermaid");

      // 使用 Promise.all 并发处理所有图表
      await Promise.all(
        [...elements].map(async (el, index) => {
          // 1. 初始化保存原始代码逻辑（和之前一样）
          if (!el.getAttribute("data-original-code")) {
            el.setAttribute("data-original-code", el.textContent || "");
          }

          const code = el.getAttribute("data-original-code");
          if (!code) return;

          // 2. 生成唯一 ID (mermaid.render 需要)
          // 加上时间戳防止 id 冲突报错
          const id = `mermaid-${Date.now()}-${index}`;

          try {
            // 3. 关键修改：使用 render 而不是 run
            // render 函数会在后台生成 SVG 字符串，此时界面不会发生任何变化
            // 注意：mermaid v10+ 的 render 返回的是 object { svg }
            const { svg } = await mermaid.default.render(id, code);

            // 4. 新 SVG 准备好了，瞬间替换，消除闪烁
            el.innerHTML = svg;

            // 渲染成功后标记，可选
            el.setAttribute("data-processed", "true");
          } catch (error) {
            // 如果渲染出错（比如语法错误），可以在这里保留原始内容或显示错误
            console.error("Mermaid render error:", error);
            el.innerHTML = `<span style="color:red">Mermaid Error: ${error}</span>`;
          }
        })
      );
    };

    onMounted(() => {
      renderMermaid();
    });

    watch(
      () => route.path,
      () => nextTick(() => renderMermaid())
    );

    watch(
      () => isDark.value,
      () => {
        // 这里不需要 nextTick，因为只是替换内部 HTML，不需要等待 Vue DOM 更新
        renderMermaid();
      }
    );
  },
} satisfies Theme;
