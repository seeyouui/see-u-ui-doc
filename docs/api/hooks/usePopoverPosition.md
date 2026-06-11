---
layout: doc
outline: deep
title: 气泡定位
titleTemplate: SeeYouUI - 气泡定位
description: SeeYouUI 组件库 气泡定位 Hook
iframeSrc: /pages/index/index
---

# 气泡定位（usePopoverPosition）

> `usePopoverPosition` 是一个气泡/文字提示定位 Hook，支持 12 个方向定位，自动边界检测和翻转，计算箭头样式。
>
> > 此 API 源码：[GitHub](https://github.com/seeyouui/see-u-ui/blob/main/uni_modules/see-u-ui/utils/hooks/usePopoverPosition/index.ts)

## 使用方式

```vue
<template>
  <view ref="triggerRef">触发元素</view>
  <view ref="popoverRef" :style="popoverStyle">
    <view class="arrow" :style="arrowStyle" />
    气泡内容
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { usePopoverPosition } from 'see-u-ui'

const triggerRef = ref(null)
const popoverRef = ref(null)

const { popoverStyle, arrowStyle, updatePosition } = usePopoverPosition({
  triggerRef,
  popoverRef,
  position: ref('top'),
  offset: ref(12)
})
</script>
```

## 支持的位置

```
top-left    top    top-right
left-top                   right-top
left                       right
left-bottom                right-bottom
bottom-left bottom bottom-right
```

## API

### `usePopoverPosition(options)`

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| options.triggerRef | `Ref<HTMLElement \| null>` | — | 触发元素引用 |
| options.popoverRef | `Ref<HTMLElement \| null>` | — | 气泡元素引用 |
| options.position | `MaybeRef<PopoverPosition>` | — | 弹出位置 |
| options.offset | `MaybeRef<number>` | `12` | 偏移距离(rpx) |
| options.arrowSize | `MaybeRef<number>` | `10` | 箭头大小(rpx) |

**返回值：**

| 属性/方法 | 类型 | 说明 |
|-----------|------|------|
| computedPosition | `Ref<PopoverPosition>` | 计算后的位置（可能因边界翻转） |
| popoverStyle | `ComputedRef<CSSProperties>` | 气泡定位样式 |
| arrowStyle | `ComputedRef<CSSProperties>` | 箭头样式 |
| updatePosition | `() => void` | 手动重新计算位置 |
| triggerRect | `Ref<Rect>` | 触发元素矩形信息 |

### `PopoverPosition`

```ts
type PopoverPosition =
  | 'top' | 'top-left' | 'top-right'
  | 'bottom' | 'bottom-left' | 'bottom-right'
  | 'left' | 'left-top' | 'left-bottom'
  | 'right' | 'right-top' | 'right-bottom'
```

::: tip 注意
当气泡超出视口边界（含 16px 内边距）时，自动翻转到对侧。rpx 值会自动转换为 px。
:::
