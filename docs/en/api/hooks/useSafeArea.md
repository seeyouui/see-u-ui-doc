---
layout: doc
outline: deep
title: useSafeArea
titleTemplate: SeeYouUI - useSafeArea
description: SeeYouUI component library useSafeArea Hook
iframeSrc: /pages/index/index
---

# Safe Area（useSafeArea）

Get device safe area insets, cached at module level (singleton pattern).

## Basic Usage

```typescript
import { useSafeArea } from '@/uni_modules/see-u-ui/utils/hooks/useSafeArea'

const { top, bottom, left, right } = useSafeArea()
```

## API

### Returns

| Property | Type | Description |
|----------|------|-------------|
| top | Ref&lt;number&gt; | Top safe area inset (px) |
| bottom | Ref&lt;number&gt; | Bottom safe area inset (px) |
| left | Ref&lt;number&gt; | Left safe area inset (px) |
| right | Ref&lt;number&gt; | Right safe area inset (px) |

## Examples

### Adapt Top Safe Area

```vue
<template>
  <view :style="{ paddingTop: top + 'px' }">
    <text>Content area</text>
  </view>
</template>

<script setup>
import { useSafeArea } from '@/uni_modules/see-u-ui/utils/hooks/useSafeArea'
const { top } = useSafeArea()
</script>
```

### Adapt Bottom Safe Area

```vue
<template>
  <view class="tabbar" :style="{ paddingBottom: bottom + 'px' }">
    <text>Bottom navigation</text>
  </view>
</template>

<script setup>
import { useSafeArea } from '@/uni_modules/see-u-ui/utils/hooks/useSafeArea'
const { bottom } = useSafeArea()
</script>
```

### Multiple Directions

```vue
<template>
  <view :style="{ paddingTop: top + 'px', paddingBottom: bottom + 'px' }">
    <text>Safe area content</text>
  </view>
</template>

<script setup>
import { useSafeArea } from '@/uni_modules/see-u-ui/utils/hooks/useSafeArea'
const { top, bottom, left, right } = useSafeArea()
</script>
```

## Notes

- Results are cached at module level, multiple calls return the same instance
- Internally calls `uni.getSystemInfoSync()` to get safe area info
- Returns default value 0 if retrieval fails
