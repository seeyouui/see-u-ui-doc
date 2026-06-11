---
layout: doc
outline: deep
title: useScrollSpy 滚动监听
titleTemplate: SeeYouUI - useScrollSpy 滚动监听
description: SeeYouUI 组件库 useScrollSpy 滚动监听 Hook
iframeSrc: /pages/index/index
---

# 滚动监听（useScrollSpy）

监听页面或指定容器的滚动位置，支持节流和方向判断。

## 基础用法

```typescript
import { useScrollSpy } from '@/uni_modules/see-u-ui/utils/hooks/useScrollSpy'

const { scrollTop, isScrolling, scrollDirection } = useScrollSpy()
```

## API

### 参数

| 属性 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| target | string | 否 | `''` | 滚动容器选择器（H5 专用）；缺省时监听 window/页面滚动 |
| throttle | number | 否 | `0` | 节流间隔（ms）。`0`（默认）使用 `requestAnimationFrame` 节流；`> 0` 使用 setTimeout 节流（leading + trailing） |

### 返回值

| 属性 | 类型 | 说明 |
|------|------|------|
| scrollTop | Ref&lt;number&gt; | 当前滚动距离（px） |
| isScrolling | Ref&lt;boolean&gt; | 是否正在滚动 |
| scrollDirection | Ref&lt;'up' \| 'down' \| 'idle'&gt; | 滚动方向，初始为 `'idle'` |

## 示例

### 监听页面滚动

```vue
<template>
  <view>
    <text>当前滚动距离: {{ scrollTop }}px</text>
    <text>滚动方向: {{ scrollDirection }}</text>
  </view>
</template>

<script setup>
import { useScrollSpy } from '@/uni_modules/see-u-ui/utils/hooks/useScrollSpy'
const { scrollTop, scrollDirection } = useScrollSpy()
</script>
```

### 回到顶部按钮

```vue
<template>
  <view v-if="scrollTop > 200" class="back-top" @tap="scrollToTop">
    回到顶部
  </view>
</template>

<script setup>
import { useScrollSpy } from '@/uni_modules/see-u-ui/utils/hooks/useScrollSpy'
const { scrollTop } = useScrollSpy()

const scrollToTop = () => {
  uni.pageScrollTo({ scrollTop: 0, duration: 300 })
}
</script>
```

### 自定义节流间隔

```typescript
import { useScrollSpy } from '@/uni_modules/see-u-ui/utils/hooks/useScrollSpy'

// 改用 setTimeout 节流（leading + trailing），每 50ms 最多触发一次
const { scrollTop } = useScrollSpy({ throttle: 50 })
```

### 监听指定容器

```vue
<template>
  <scroll-view class="container" scroll-y>
    <view v-for="i in 100" :key="i">Item {{ i }}</view>
  </scroll-view>
</template>

<script setup>
import { useScrollSpy } from '@/uni_modules/see-u-ui/utils/hooks/useScrollSpy'
const { scrollTop } = useScrollSpy({ target: '.container' })
</script>
```

## 实现细节

- H5 平台：在 `onMounted` 中注册 `scroll` 监听，在 `onUnmounted` 中自动解绑；指定 `target` 时监听该元素，否则监听 `window`
- 非 H5 平台：使用 `@dcloudio/uni-app` 的 `onPageScroll` 页面级生命周期（仅在页面组件中有效）
- 默认使用 `requestAnimationFrame` 节流；`throttle > 0` 时切换为 setTimeout 节流（leading + trailing 双触发，最新值不会被丢弃）
- 方向判断不被节流影响，每次原生事件都参与对比
- 组件卸载时自动清理事件监听、定时器与 `requestAnimationFrame`，避免内存泄漏
