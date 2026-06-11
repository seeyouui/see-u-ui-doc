---
layout: doc
outline: deep
title: 遮罩管理
titleTemplate: SeeYouUI - 遮罩管理
description: SeeYouUI 组件库 遮罩管理 Hook
iframeSrc: /pages/index/index
---

# 遮罩管理（useOverlay）

> `useOverlay` 是一个遮罩层状态管理 Hook，计算全屏固定定位的遮罩样式，处理显示/隐藏生命周期，支持点击回调。
>
> > 此 API 源码：[GitHub](https://github.com/seeyouui/see-u-ui/blob/main/uni_modules/see-u-ui/utils/hooks/useOverlay/index.ts)

## 使用方式

```vue
<template>
  <view v-if="visible" :style="overlayStyle" @click="handleClick">
    <view class="popup-content">内容</view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { useOverlay } from 'see-u-ui'

const show = ref(false)
const { visible, overlayStyle, handleClick } = useOverlay({
  show,
  opacity: ref(0.5),
  onClick: () => { show.value = false }
})
</script>
```

## API

### `useOverlay(options)`

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| options.show | `Ref<boolean>` | — | 控制显示/隐藏的响应式状态 |
| options.zIndex | `Ref<number>` | `undefined` | z-index 层级 |
| options.background | `string` | `'var(--see-overlay-bg)'` | 遮罩背景色 |
| options.opacity | `Ref<number>` | `1` | 遮罩透明度 |
| options.duration | `number` | `300` | 动画时长(ms) |
| options.isAnimated | `Ref<boolean>` | `true` | 是否启用动画 |
| options.onClick | `() => void` | `undefined` | 点击遮罩回调 |

**返回值：**

| 属性/方法 | 类型 | 说明 |
|-----------|------|------|
| visible | `Ref<boolean>` | 遮罩是否可见 |
| overlayZIndex | `ComputedRef<number>` | 计算后的 z-index |
| overlayStyle | `ComputedRef<CSSProperties>` | 遮罩层样式对象 |
| onAfterEnter | `() => void` | 进入动画完成回调 |
| onAfterLeave | `() => void` | 离开动画完成回调 |
| handleClick | `() => void` | 点击事件处理 |
