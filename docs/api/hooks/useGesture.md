---
layout: doc
outline: deep
title: 手势识别
titleTemplate: SeeYouUI - 手势识别
description: SeeYouUI 组件库 手势识别 Hook
iframeSrc: /pages/index/index
---

# 手势识别（useGesture）

> `useGesture` 是一个触摸手势检测 Hook，支持方向滑动检测和长按检测，滑动与长按互斥。
>
> > 此 API 源码：[GitHub](https://github.com/seeyouui/see-u-ui/blob/main/uni_modules/see-u-ui/utils/hooks/useGesture/index.ts)

## 使用方式

```vue
<template>
  <view ref="boxRef">滑动或长按此区域</view>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useGesture } from 'see-u-ui'

const boxRef = ref(null)
const { isSwiping, bindEvents } = useGesture(boxRef, {
  direction: 'horizontal',
  threshold: 10,
  onSwipe: (direction, distance) => {
    console.log(`向${direction}滑动了 ${distance}px`)
  },
  onLongPress: () => {
    console.log('长按触发')
  }
})

onMounted(() => bindEvents())
</script>
```

## API

### `useGesture(elementRef, options?)`

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| elementRef | `Ref<HTMLElement \| null>` | — | 目标元素引用 |
| options.direction | `'horizontal' \| 'vertical' \| 'both'` | `'both'` | 检测方向 |
| options.threshold | `number` | `10` | 滑动触发阈值(px) |
| options.longPressDelay | `number` | `350` | 长按触发延迟(ms) |
| options.onSwipe | `(direction, distance) => void` | `undefined` | 滑动回调 |
| options.onSwipeStart | `() => void` | `undefined` | 滑动开始回调 |
| options.onSwipeEnd | `(direction, distance) => void` | `undefined` | 滑动结束回调 |
| options.onLongPress | `() => void` | `undefined` | 长按回调 |
| options.onLongPressEnd | `() => void` | `undefined` | 长按结束回调 |

**返回值：**

| 属性/方法 | 类型 | 说明 |
|-----------|------|------|
| isSwiping | `Ref<boolean>` | 是否正在滑动 |
| swipeDistance | `Ref<number>` | 当前滑动距离 |
| isLongPressing | `Ref<boolean>` | 是否正在长按 |
| bindEvents | `() => void` | 绑定事件监听 |
| unbindEvents | `() => void` | 解绑事件监听 |
| reset | `() => void` | 重置状态 |

### 类型定义

```ts
type SwipeDirection = 'left' | 'right' | 'up' | 'down'
type GestureDirection = 'horizontal' | 'vertical' | 'both'
```

::: tip 注意
需要手动调用 `bindEvents()` 绑定事件，组件卸载时自动解绑。滑动超过阈值会取消待触发的长按。
:::
