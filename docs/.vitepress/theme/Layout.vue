<template>
  <Layout>
    <template #doc-footer-before>
      <KonamiEasterEgg v-slot="{ wrapperStyle }">
        <div
          v-if="showPhone && isThemeReady"
          class="mobile-preview-wrapper"
          :style="wrapperStyle"
        >
          <div class="mobile-mockup">
            <div
              class="bg-layer bg-light"
              :style="{ opacity: bgLightOpacity }"
            ></div>
            <div
              class="bg-layer bg-dark"
              :style="{ opacity: bgDarkOpacity }"
            ></div>

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
import { usePhoneSkinAnimation } from "./hooks/usePhoneSkinAnimation";

const { Layout } = DefaultTheme;
const { isDark, frontmatter } = useData();
const route = useRoute();

const BASE_URL = "https://demo.seeuui.cn/#";
// const BASE_URL = "http://113.44.242.235:9001/#";
// const BASE_URL = "http://localhost:5173/#";
const IMG_LIGHT = "/static/iphone16fff.png";
const IMG_DARK = "/static/iphone1614171D.png";

/**
 * 手机壳明暗模式切换动画 Hook
 */
const { bgLightOpacity, bgDarkOpacity, isThemeReady } = usePhoneSkinAnimation(
  isDark,
  IMG_LIGHT,
  IMG_DARK
);

/**
 * 手机预览 Iframe 元素引用
 */
const mobileIframe = ref(null);

/**
 * 计算 Iframe 加载 URL
 */
const iframeUrl = computed(() => {
  if (frontmatter.value.iframeSrc) {
    return BASE_URL + frontmatter.value.iframeSrc;
  }
  const path = route.path.replace(".html", "");
  return `${BASE_URL}${path}`;
});

/**
 * 判断是否显示手机预览
 */
const showPhone = computed(() => {
  return frontmatter.value.layout === "doc";
  // 只在 /components/ 目录下显示
  return route.path.includes("/components/");
});

/**
 * 向 Iframe 发送主题消息
 */
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

/**
 * 禁用滚动
 */
const disableScroll = () => {
  document.body.style.overflow = "hidden";
};

/**
 * 启用滚动
 */
const enableScroll = () => {
  document.body.style.overflow = "";
};

/**
 * 监听 Iframe 加载和交互事件
 */
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

/**
 * 监听主题变化，发送消息到 Iframe
 */
watch(isDark, () => {
  postThemeToIframe();
});

/**
 * 组件卸载时，清理滚动锁定
 */
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
  transform-origin: center center;
}

@media (min-width: 1400px) {
  .mobile-preview-wrapper {
    display: block;
  }
}

.mobile-mockup {
  position: relative;
  width: 420px;
  height: 820px;
  border-radius: 50px;
  overflow: hidden;
  padding: 70px 25px 42px;
  /* 移除了 mockupStyle 计算属性，直接在这里定义或依靠内部 bg-layer */
}

.bg-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  transition: none; /* 关键：禁用 CSS transition，使用 JS 控制 opacity */
  pointer-events: none; /* 确保背景不阻挡 iframe 交互 */
}

.bg-light {
  background-image: url("/static/iphone16fff.png");
}

.bg-dark {
  background-image: url("/static/iphone1614171D.png");
}

.mobile-mockup iframe {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  background: transparent; /* 确保 iframe 背景透明（如果需要透出手机壳颜色） */
}
</style>
