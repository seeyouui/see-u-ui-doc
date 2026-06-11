---
layout: doc
outline: deep
title: 过渡动画
titleTemplate: SeeYouUI - 过渡动画
description: SeeYouUI 组件库 过渡动画 Hook
iframeSrc: /pages/index/index
---

# 过渡动画（useTransition）

> `useTransition` 是一个动画状态机 Hook，管理 CSS 进入/离开过渡的 6 状态生命周期，自动生成对应的 CSS 类名。
>
> > 此 API 源码：[GitHub](https://github.com/seeyouui/see-u-ui/blob/main/uni_modules/see-u-ui/utils/hooks/useTransition/index.ts)

## 使用方式

```vue
<template>
  <view v-if="isVisible" :class="transitionClass">
    过渡内容
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { useTransition } from 'see-u-ui'

const show = ref(false)
const { isVisible, transitionClass, enter, leave } = useTransition({
  show,
  duration: 300,
  name: 'fade',
  onAfterEnter: () => console.log('进入动画完成'),
  onAfterLeave: () => console.log('离开动画完成')
})
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
```

## 状态流转

```
enter → entering → entered     (进入动画)
leave → leaving  → left        (离开动画)
```

## API

### `useTransition(options)`

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| options.show | `Ref<boolean>` | — | 控制显示/隐藏的响应式状态 |
| options.duration | `number` | `300` | 动画时长(ms) |
| options.name | `string` | `'see'` | CSS 类名前缀 |
| options.onBeforeEnter | `() => void` | `undefined` | 进入动画开始前回调 |
| options.onAfterEnter | `() => void` | `undefined` | 进入动画完成后回调 |
| options.onBeforeLeave | `() => void` | `undefined` | 离开动画开始前回调 |
| options.onAfterLeave | `() => void` | `undefined` | 离开动画完成后回调 |

**返回值：**

| 属性/方法 | 类型 | 说明 |
|-----------|------|------|
| isVisible | `Ref<boolean>` | 是否可见（动画结束后才变为 false） |
| isAnimating | `Ref<boolean>` | 是否正在动画中 |
| state | `Ref<TransitionState>` | 当前动画状态 |
| transitionClass | `ComputedRef<string>` | 当前应应用的 CSS 类名 |
| enter | `() => void` | 手动触发进入动画 |
| leave | `() => void` | 手动触发离开动画 |
| cleanup | `() => void` | 清理定时器 |

### `TransitionState`

```ts
type TransitionState = 'enter' | 'entering' | 'entered' | 'leave' | 'leaving' | 'left'
```
