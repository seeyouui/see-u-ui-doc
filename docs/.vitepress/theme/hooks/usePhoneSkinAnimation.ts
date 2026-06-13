import { ref, watch, onMounted, onUnmounted, type Ref } from "vue";

/**
 * 钩子返回值的接口定义
 */
interface UsePhoneSkinAnimationReturn {
  bgLightOpacity: Ref<number>;
  bgDarkOpacity: Ref<number>;
  isThemeReady: Ref<boolean>;
  /** 外部强制同步：立即运行动画到目标状态 */
  triggerSync: (dark: boolean) => void;
}

/**
 * 手机壳明暗模式切换动画 Hook
 * @param isDark - 当前是否为暗黑模式的 Ref
 * @param lightImgSrc - 亮色模式背景图路径
 * @param darkImgSrc - 暗色模式背景图路径
 * @param duration - 动画时长 (ms)，默认 300
 */
export function usePhoneSkinAnimation(
  isDark: Ref<boolean>,
  lightImgSrc: string,
  darkImgSrc: string,
  duration: number = 300
): UsePhoneSkinAnimationReturn {
  const bgLightOpacity = ref<number>(1);
  const bgDarkOpacity = ref<number>(0);
  const isThemeReady = ref<boolean>(false); // 图片加载完成且初始状态设置完毕

  let animationFrameId: number | null = null;
  let animationStartTime: number | null = null;

  // 缓动函数
  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  // 动画核心逻辑
  const animateThemeTransition = () => {
    const targetDark = getTargetDark();

    // 零时长：直接设最终值，不走 RAF（避免 0/0=NaN）
    if (duration <= 0) {
      if (targetDark) {
        bgDarkOpacity.value = 1;
        bgLightOpacity.value = 0;
      } else {
        bgLightOpacity.value = 1;
        bgDarkOpacity.value = 0;
      }
      syncTarget.value = null;
      return;
    }

    const animate = (currentTime: number) => {
      if (!animationStartTime) {
        animationStartTime = currentTime;
      }

      const elapsed = currentTime - animationStartTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      const progress = easeInOutCubic(rawProgress);

      if (targetDark) {
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
        syncTarget.value = null;
      }
    };

    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId);
    }
    animationStartTime = null;
    animationFrameId = requestAnimationFrame(animate);
  };

  // 预加载图片
  const preloadImages = (): Promise<void[]> => {
    const sources = [lightImgSrc, darkImgSrc];
    return Promise.all(
      sources.map((src) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          // 注意：这里显式调用 resolve() 而不传参，避免 TS 类型不匹配
          img.onload = () => resolve();
          img.onerror = () => resolve(); // 即使失败也继续，避免阻塞
          img.src = src;
        });
      })
    );
  };

  // 外部强制同步用的方向标记（isDark 是 computed 不可写）
  const syncTarget = ref<boolean | null>(null);

  // 获取当前目标方向：外部触发优先，否则取 isDark
  const getTargetDark = () => syncTarget.value ?? isDark.value;

  // 监听主题变化触发动画
  watch(isDark, () => {
    if (isThemeReady.value) {
      animateThemeTransition();
    }
  });

  // 外部强制同步：iframe 消息到达时直接驱动动画
  const triggerSync = (dark: boolean) => {
    if (!isThemeReady.value) return;
    syncTarget.value = dark;
    animateThemeTransition();
  };

  onMounted(() => {
    preloadImages().then(() => {
      // 图片加载完成后，设置初始状态
      requestAnimationFrame(() => {
        if (isDark.value) {
          bgDarkOpacity.value = 1;
          bgLightOpacity.value = 0;
        } else {
          bgLightOpacity.value = 1;
          bgDarkOpacity.value = 0;
        }
        isThemeReady.value = true;
      });
    });
  });

  onUnmounted(() => {
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId);
    }
  });

  return {
    bgLightOpacity,
    bgDarkOpacity,
    isThemeReady,
    triggerSync,
  };
}
