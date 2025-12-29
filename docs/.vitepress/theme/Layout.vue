<template>
  <Layout>
    <template #doc-footer-before>
      <div
        v-if="showPhone && isThemeReady"
        class="mobile-preview-wrapper"
        :style="wrapperStyle"
      >
        <div
          class="mobile-mockup"
          :class="[{ 'is-dark': isDark, 'is-light': !isDark }]"
        >
          <iframe ref="mobileIframe" :src="iframeUrl" frameborder="0"></iframe>
        </div>
      </div>

      <div v-if="showConfetti" class="confetti-container">
        <div
          v-for="item in ribbons"
          :key="item.id"
          class="ribbon"
          :style="item.style"
        ></div>
      </div>
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from "vitepress/theme";
import { useData, useRoute } from "vitepress";
import { computed, ref, watch, onUnmounted, onMounted, reactive } from "vue";

const { Layout } = DefaultTheme;
const { isDark, frontmatter } = useData();
const route = useRoute();

// 定义 iframe 的引用 (替代 document.querySelector)
const mobileIframe = ref(null);

// 演示站点的基准 URL
const BASE_URL = "https://demo.seeuui.cn/#";
// const BASE_URL = "http://113.44.242.235:9001/#";
// const BASE_URL = "http://localhost:5173/#";

// 根据当前文档路径，计算 iframe 应该显示的 URL
const iframeUrl = computed(() => {
  // 1. 优先使用 markdown 文件头部的 frontmatter 配置 (如果有)
  if (frontmatter.value.iframeSrc) {
    return BASE_URL + frontmatter.value.iframeSrc;
  }

  // 2. 否则根据路由自动推导
  const path = route.path.replace(".html", "");
  return `${BASE_URL}${path}`;
});

// 只有在 frontmatter 中标记了 layout: doc 的页面或者是组件页才显示手机
const showPhone = computed(() => {
  return frontmatter.value.layout === "doc";
  // 这里可以根据你的需求定制规则，例如只在 /components/ 目录下显示
  return route.path.includes("/components/");
});

// 发送主题给 iframe
const postThemeToIframe = () => {
  const iframe = mobileIframe.value;
  if (!iframe?.contentWindow) return;

  iframe.contentWindow.postMessage(
    {
      type: "vp-theme",
      theme: isDark.value ? "dark" : "light",
    },
    BASE_URL
  );
};

// 辅助函数：锁定和解锁滚动
const disableScroll = () => {
  document.body.style.overflow = "hidden";
};
const enableScroll = () => {
  document.body.style.overflow = "";
};

// 阻止iframe滑动事件穿透到vitepress
// 使用 watch 监听 iframe 元素是否渲染完成，确保不会报错 Cannot read properties of null
watch(mobileIframe, (iframeEl) => {
  if (!iframeEl) return; // 如果元素不存在，直接返回

  // 传递是否是暗黑模式
  iframeEl.addEventListener("load", () => {
    postThemeToIframe();
  });

  // 鼠标滑入 iframe 时，锁定父页面滚动
  iframeEl.addEventListener("mouseenter", disableScroll);

  // 鼠标离开 iframe 时，恢复父页面滚动
  iframeEl.addEventListener("mouseleave", enableScroll);

  // 触屏设备（移动端）——手指按到 iframe 时锁定滚动
  iframeEl.addEventListener("touchstart", disableScroll, { passive: true });

  iframeEl.addEventListener("touchend", enableScroll, { passive: true });
});

// VitePress 主题切换时，同步给 iframe
watch(isDark, () => {
  postThemeToIframe();
});

// =======================
// 彩蛋逻辑实现 (Konami Code)
// =======================

// 1. 状态定义
const konamiSequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
let currentIndex = 0; // 当前匹配到第几个键

// 视觉反馈状态
const offset = reactive({ x: 0, y: 0 }); // 位移
const scaleVal = ref(1); // 缩放
const showConfetti = ref(false); // 是否显示彩带
const ribbons = ref([]); // 彩带数据

// 计算 wrapper 的最终样式
const wrapperStyle = computed(() => ({
  transform: `translate(${offset.x}px, ${offset.y}px) scale(${scaleVal.value})`,
  transition: "transform 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275)", // 加一点回弹动画
}));

// 辅助：重置视觉状态（回弹）
const resetVisual = () => {
  setTimeout(() => {
    offset.x = 0;
    offset.y = 0;
    scaleVal.value = 1;
  }, 150); // 150ms 后归位
};

// 辅助：生成彩带
const triggerConfetti = () => {
  showConfetti.value = true;
  const colors = [
    "#ef2964",
    "#00c09d",
    "#2d87e2",
    "#fdbb2d",
    "#8e44ad",
    "#ff0000",
    "#ffff00",
  ];
  // 彩带数量
  const ribbonCount = 250;

  const newRibbons = [];
  for (let i = 0; i < ribbonCount; i++) {
    newRibbons.push({
      id: i,
      style: {
        left: Math.random() * 100 + "vw", // 随机水平位置
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        // 稍微拉长时间范围，让飘落更有层次感 (1.5s ~ 4.5s)
        animationDuration: Math.random() * 3 + 1.5 + "s",
        animationDelay: Math.random() * 2 + "s", // 0~2s 的随机延迟
        transform: `rotate(${Math.random() * 360}deg)`,
        opacity: Math.random() * 0.5 + 0.5, // 随机透明度
      },
    });
  }
  ribbons.value = newRibbons;

  // 6秒后自动清理
  setTimeout(() => {
    showConfetti.value = false;
    ribbons.value = [];
    currentIndex = 0; // 重置游戏
  }, 6000);
};

// 键盘监听处理
const onKeydown = (e) => {
  // [新增逻辑] 如果是长按触发的重复事件，直接忽略，防止手机一直跳
  if (e.repeat) return;

  // 如果彩带正在飘，就不处理按键了
  if (showConfetti.value) return;

  const key = e.key.toLowerCase();
  const targetKey = konamiSequence[currentIndex].toLowerCase();

  if (key === targetKey) {
    // 1. 如果匹配成功，且是方向键，阻止浏览器默认的滚动行为
    if (["arrowup", "arrowdown", "arrowleft", "arrowright"].includes(key)) {
      e.preventDefault();
    }

    // 2. 执行按键对应的动作
    switch (targetKey) {
      case "arrowup":
        offset.y = -20;
        break;
      case "arrowdown":
        offset.y = 20;
        break;
      case "arrowleft":
        offset.x = -20;
        break;
      case "arrowright":
        offset.x = 20;
        break;
      case "b":
      case "a":
        scaleVal.value = 0.92; // 缩小
        break;
    }

    // 视觉复位
    resetVisual();

    // 3. 指针后移
    currentIndex++;

    // 4. 检查是否通关
    if (currentIndex === konamiSequence.length) {
      triggerConfetti();
    }
  } else {
    // === 匹配失败，重置 ===
    currentIndex = 0;
  }
};

const isThemeReady = ref(false);
onMounted(() => {
  window.addEventListener("keydown", onKeydown);

  // 下一帧，确保 VitePress 已完成主题同步
  requestAnimationFrame(() => {
    isThemeReady.value = true;
  });
});

// 组件卸载时清理样式，防止意外锁定
onUnmounted(() => {
  enableScroll();
  window.removeEventListener("keydown", onKeydown);
});
</script>

<style scoped>
.mobile-preview-wrapper {
  position: fixed;
  right: max(12px, calc((100vw - var(--vp-layout-max-width, 1920px)) / 2));
  top: 78px;
  z-index: 10;
  display: none;
  /* 确保 transform 原点在中心，缩放效果才自然 */
  transform-origin: center center;
}

@media (min-width: 1400px) {
  .mobile-preview-wrapper {
    display: block;
  }
}

.mobile-mockup {
  width: 420px;
  height: 820px;
  border-radius: 50px;
  overflow: hidden;
  background-size: 100% 100%;
  padding: 70px 25px 42px;
}

.mobile-mockup.is-light {
  background: url("/static/iphone16fff.png") no-repeat center center;
  background-size: 100% 100%;
}

.mobile-mockup.is-dark {
  background: url("/static/iphone1614171D.png") no-repeat center center;
  background-size: 100% 100%;
}

.mobile-mockup iframe {
  width: 100%;
  height: 100%;
  border-radius: 50px;
}

/* ==================
   彩带 CSS 特效
   ================== */
.confetti-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none; /* 让鼠标穿透，不影响页面操作 */
  z-index: 9999;
  overflow: hidden;
}

.ribbon {
  position: absolute;
  top: -20px;
  width: 10px;
  height: 20px;
  /* 关键帧动画：名字 时长 线性 循环次数 */
  animation: fall linear forwards;
}

@keyframes fall {
  0% {
    top: -10vh;
    transform: rotate(0deg) translate(0, 0);
  }
  100% {
    top: 110vh; /* 掉落到底部以下 */
    transform: rotate(720deg) translate(20px, 0); /* 旋转并稍微偏移 */
  }
}
</style>
