<template>
  <slot :wrapper-style="wrapperStyle"></slot>

  <div v-if="showConfetti" class="confetti-container">
    <div
      v-for="item in ribbons"
      :key="item.id"
      class="ribbon"
      :style="item.style"
    ></div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from "vue";

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
  }, 150);
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
  const ribbonCount = 250;

  const newRibbons = [];
  for (let i = 0; i < ribbonCount; i++) {
    newRibbons.push({
      id: i,
      style: {
        left: Math.random() * 100 + "vw",
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        animationDuration: Math.random() * 3 + 1.5 + "s",
        animationDelay: Math.random() * 2 + "s",
        transform: `rotate(${Math.random() * 360}deg)`,
        opacity: Math.random() * 0.5 + 0.5,
      },
    });
  }
  ribbons.value = newRibbons;

  setTimeout(() => {
    showConfetti.value = false;
    ribbons.value = [];
    currentIndex = 0;
  }, 6000);
};

// 键盘监听处理
const onKeydown = (e) => {
  if (e.repeat) return; // 防止长按
  if (showConfetti.value) return; // 正在飘彩带时不处理

  const key = e.key.toLowerCase();
  const targetKey = konamiSequence[currentIndex].toLowerCase();

  if (key === targetKey) {
    if (["arrowup", "arrowdown", "arrowleft", "arrowright"].includes(key)) {
      e.preventDefault();
    }

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
        scaleVal.value = 0.92;
        break;
    }

    resetVisual();
    currentIndex++;

    if (currentIndex === konamiSequence.length) {
      triggerConfetti();
    }
  } else {
    currentIndex = 0;
  }
};

onMounted(() => {
  window.addEventListener("keydown", onKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", onKeydown);
});
</script>

<style scoped>
/* ==================
   彩带 CSS 特效
   ================== */
.confetti-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
  overflow: hidden;
}

.ribbon {
  position: absolute;
  top: -20px;
  width: 10px;
  height: 20px;
  animation: fall linear forwards;
}

@keyframes fall {
  0% {
    top: -10vh;
    transform: rotate(0deg) translate(0, 0);
  }
  100% {
    top: 110vh;
    transform: rotate(720deg) translate(20px, 0);
  }
}
</style>
