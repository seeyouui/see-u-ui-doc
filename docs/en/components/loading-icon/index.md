---
title: LoadingIcon
description: Loading animation icon with multiple animation types.
iframeSrc: /pages/seeLoadingIcon/index
---

# LoadingIcon

Loading animation icon that supports spinner, circular, dots, and pulse animation types.

## Platform Compatibility

| Platform | Support |
| --- | --- |
| H5 | Supported |
| WeChat Mini Program | Supported |
| Alipay Mini Program | Supported |
| APP | Supported |

## Basic Usage

Default spinner type loading animation.

```vue
<template>
  <SeeLoadingIcon />
</template>
```

## Animation Types

Set the animation type via the `type` property. Supports `spinner`, `circular`, `dots`, and `pulse`.

```vue
<template>
  <SeeLoadingIcon type="spinner" />
  <SeeLoadingIcon type="circular" />
  <SeeLoadingIcon type="dots" />
  <SeeLoadingIcon type="pulse" />
</template>
```

## Custom Color

Set the color of the loading animation via the `color` property.

```vue
<template>
  <SeeLoadingIcon color="#07c160" />
  <SeeLoadingIcon color="#ee0a24" />
  <SeeLoadingIcon color="#1989fa" />
</template>
```

## Custom Size

Set the size of the loading animation via the `size` property.

```vue
<template>
  <SeeLoadingIcon size="32rpx" />
  <SeeLoadingIcon size="64rpx" />
  <SeeLoadingIcon size="96rpx" />
</template>
```

## Custom Speed

Set the animation speed via the `speed` property, in seconds.

```vue
<template>
  <SeeLoadingIcon :speed="0.4" />
  <SeeLoadingIcon :speed="0.8" />
  <SeeLoadingIcon :speed="1.2" />
</template>
```

## Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| type | Animation type | `'spinner' \| 'circular' \| 'dots' \| 'pulse'` | `'spinner'` |
| size | Size | `string` | `'60rpx'` |
| color | Color | `string` | `'var(--see-primary)'` |
| speed | Animation speed (seconds) | `number` | `0.8` |

## Type Definitions

```typescript
type LoadingIconType = 'spinner' | 'circular' | 'dots' | 'pulse'

interface SeeLoadingIconProps {
  type?: LoadingIconType
  size?: string
  color?: string
  speed?: number
}
```
