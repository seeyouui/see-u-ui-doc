<template>
  <Layout>
    <template #doc-footer-before>
      <div v-if="showPhone" class="mobile-preview-wrapper">
        <div class="mobile-mockup">
          <iframe :src="iframeUrl" frameborder="0"></iframe>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from "vitepress/theme";
import { useData, useRoute } from "vitepress";
import { computed, onMounted } from "vue";

const { Layout } = DefaultTheme;
const { frontmatter } = useData();
const route = useRoute();

// 演示站点的基准 URL
const BASE_URL = "http://113.44.242.235:9001/#";

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

// 阻止iframe滑动事件穿透到vitepress
onMounted(() => {
  const iframe = document.querySelector("iframe");

  // 鼠标滑入 iframe 时，锁定父页面滚动
  iframe.addEventListener("mouseenter", () => {
    document.body.style.overflow = "hidden";
  });

  // 鼠标离开 iframe 时，恢复父页面滚动
  iframe.addEventListener("mouseleave", () => {
    document.body.style.overflow = "";
  });

  // 触屏设备（移动端）——手指按到 iframe 时锁定滚动
  iframe.addEventListener(
    "touchstart",
    () => {
      document.body.style.overflow = "hidden";
    },
    { passive: true }
  );

  iframe.addEventListener(
    "touchend",
    () => {
      document.body.style.overflow = "";
    },
    { passive: true }
  );
});
</script>

<style scoped>
.mobile-preview-wrapper {
  position: fixed;
  right: max(12px, calc((100vw - var(--vp-layout-max-width, 1920px)) / 2));
  top: 78px;
  z-index: 10;
  display: none;
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
  background: url("./static/iPhone16fff.png") no-repeat center center;
  background-size: 100% 100%;
  padding: 70px 25px 42px;
}

.mobile-mockup iframe {
  width: 100%;
  height: 100%;
  border-radius: 50px;
  /* background-color: #f7f8fa; */
}
</style>
