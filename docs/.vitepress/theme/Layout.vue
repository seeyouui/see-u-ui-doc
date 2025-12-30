<template>
  <Layout>
    <template #doc-footer-before>
      <KonamiEasterEgg v-slot="{ wrapperStyle }">
        <div
          v-if="showPhone"
          class="mobile-preview-wrapper"
          :style="wrapperStyle"
        >
          <div
            class="mobile-mockup"
            :class="[{ 'is-dark': isDark, 'is-light': !isDark }]"
          >
            <iframe
              ref="mobileIframe"
              :src="iframeUrl"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </KonamiEasterEgg>
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from "vitepress/theme";
import { useData, useRoute } from "vitepress";
import { computed, ref, watch, onUnmounted } from "vue";
import KonamiEasterEgg from "./components/KonamiEasterEgg.vue";

const { Layout } = DefaultTheme;
const { isDark, frontmatter } = useData();
const route = useRoute();

// 定义 iframe 的引用
const mobileIframe = ref(null);

// 演示站点的基准 URL
const BASE_URL = "https://demo.seeuui.cn/#";
// const BASE_URL = "http://113.44.242.235:9001/#";
// const BASE_URL = "http://localhost:5173/#";

// 根据当前文档路径，计算 iframe 应该显示的 URL
const iframeUrl = computed(() => {
  if (frontmatter.value.iframeSrc) {
    return BASE_URL + frontmatter.value.iframeSrc;
  }
  const path = route.path.replace(".html", "");
  return `${BASE_URL}${path}`;
});

// 显示规则
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

// 阻止iframe滑动事件穿透
watch(mobileIframe, (iframeEl) => {
  if (!iframeEl) return;

  iframeEl.addEventListener("load", () => {
    postThemeToIframe();
  });
  iframeEl.addEventListener("mouseenter", disableScroll);
  iframeEl.addEventListener("mouseleave", enableScroll);
  iframeEl.addEventListener("touchstart", disableScroll, { passive: true });
  iframeEl.addEventListener("touchend", enableScroll, { passive: true });
});

// VitePress 主题切换时，同步给 iframe
watch(isDark, () => {
  postThemeToIframe();
});

onUnmounted(() => {
  enableScroll();
});
</script>

<style scoped>
.mobile-preview-wrapper {
  position: fixed;
  right: max(12px, calc((100vw - var(--vp-layout-max-width, 1920px)) / 2));
  top: 78px;
  z-index: 10;
  display: none;
  /* 确保 transform 原点在中心 */
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
</style>
