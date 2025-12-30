<template>
  <Layout>
    <template #doc-footer-before>
      <KonamiEasterEgg v-slot="{ wrapperStyle }">
        <div
          v-if="showPhone && isThemeReady"
          class="mobile-preview-wrapper"
          :style="wrapperStyle"
        >
          <div class="mobile-mockup" :style="mockupStyle">
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
import { computed, ref, watch, onMounted, onUnmounted } from "vue";
import KonamiEasterEgg from "./components/KonamiEasterEgg.vue";

const { Layout } = DefaultTheme;
const { isDark, frontmatter } = useData();
const route = useRoute();

const mobileIframe = ref(null);
const bgLightOpacity = ref(1);
const bgDarkOpacity = ref(0);
let animationFrameId = null;
let animationStartTime = null;
const ANIMATION_DURATION = 300;

const BASE_URL = "https://demo.seeuui.cn/#";

const iframeUrl = computed(() => {
  if (frontmatter.value.iframeSrc) {
    return BASE_URL + frontmatter.value.iframeSrc;
  }
  const path = route.path.replace(".html", "");
  return `${BASE_URL}${path}`;
});

const showPhone = computed(() => {
  return frontmatter.value.layout === "doc";
});

const mockupStyle = computed(() => ({
  backgroundImage: 'url("/static/iphone16fff.png")',
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
}));

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

const disableScroll = () => {
  document.body.style.overflow = "hidden";
};

const enableScroll = () => {
  document.body.style.overflow = "";
};

const easeInOutCubic = (t) => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

const animateThemeTransition = () => {
  const animate = (currentTime) => {
    if (!animationStartTime) {
      animationStartTime = currentTime;
    }

    const elapsed = currentTime - animationStartTime;
    const rawProgress = Math.min(elapsed / ANIMATION_DURATION, 1);
    const progress = easeInOutCubic(rawProgress);

    if (isDark.value) {
      bgDarkOpacity.value = progress;
      bgLightOpacity.value = 1 - progress;
    } else {
      bgLightOpacity.value = progress;
      bgDarkOpacity.value = 1 - progress;
    }

    if (progress < 1) {
      animationFrameId = requestAnimationFrame(animate);
    } else {
      animationStartTime = null;
    }
  };

  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  animationStartTime = null;
  animationFrameId = requestAnimationFrame(animate);
};

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

watch(isDark, () => {
  postThemeToIframe();
  animateThemeTransition();
});

const isThemeReady = ref(false);

const preloadImages = () => {
  return Promise.all([
    new Promise((resolve) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = resolve;
      img.src = "/static/iphone16fff.png";
    }),
    new Promise((resolve) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = resolve;
      img.src = "/static/iphone1614171D.png";
    }),
  ]);
};

onMounted(() => {
  preloadImages().then(() => {
    requestAnimationFrame(() => {
      isThemeReady.value = true;
      if (isDark.value) {
        bgDarkOpacity.value = 1;
        bgLightOpacity.value = 0;
      }
    });
  });
});

onUnmounted(() => {
  enableScroll();
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
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
  transition: none;
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
}
</style>
