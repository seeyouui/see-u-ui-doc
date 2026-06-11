---
layout: doc
outline: deep
title: useScrollSpy
titleTemplate: SeeYouUI - useScrollSpy
description: SeeYouUI component library useScrollSpy Hook
iframeSrc: /pages/index/index
---

# Scroll Spy（useScrollSpy）

Monitor page or container scroll position with throttling and direction detection.

## Basic Usage

```typescript
import { useScrollSpy } from '@/uni_modules/see-u-ui/utils/hooks/useScrollSpy'

const { scrollTop, isScrolling, scrollDirection } = useScrollSpy()
```

## API

### Options

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| target | string | No | `''` | Scroll container selector (H5 only); falls back to window/page scroll when empty |
| throttle | number | No | `0` | Throttle interval (ms). `0` (default) uses `requestAnimationFrame`; `> 0` uses setTimeout throttling (leading + trailing) |

### Returns

| Property | Type | Description |
|----------|------|-------------|
| scrollTop | Ref&lt;number&gt; | Current scroll position (px) |
| isScrolling | Ref&lt;boolean&gt; | Whether scrolling |
| scrollDirection | Ref&lt;'up' \| 'down' \| 'idle'&gt; | Scroll direction, initial value is `'idle'` |

## Examples

### Monitor Page Scroll

```vue
<template>
  <view>
    <text>Current scroll: {{ scrollTop }}px</text>
    <text>Direction: {{ scrollDirection }}</text>
  </view>
</template>

<script setup>
import { useScrollSpy } from '@/uni_modules/see-u-ui/utils/hooks/useScrollSpy'
const { scrollTop, scrollDirection } = useScrollSpy()
</script>
```

### Back to Top Button

```vue
<template>
  <view v-if="scrollTop > 200" class="back-top" @tap="scrollToTop">
    Back to top
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

### Custom Throttle

```typescript
import { useScrollSpy } from '@/uni_modules/see-u-ui/utils/hooks/useScrollSpy'

// Switch to setTimeout throttling (leading + trailing), at most once every 50ms
const { scrollTop } = useScrollSpy({ throttle: 50 })
```

### Monitor Specific Container

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

## Implementation Details

- H5 platform: registers a `scroll` listener in `onMounted` and unbinds it in `onUnmounted`; listens to the element specified by `target`, or `window` when `target` is empty
- Non-H5 platform: uses the `onPageScroll` page-level lifecycle from `@dcloudio/uni-app` (only effective inside page components)
- Defaults to `requestAnimationFrame` throttling; when `throttle > 0`, switches to setTimeout throttling (leading + trailing, so the latest value is never dropped)
- Direction detection is not affected by throttling — every native event participates in the comparison
- Cleans up event listeners, timers, and `requestAnimationFrame` on unmount to prevent memory leaks
