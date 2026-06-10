---
layout: doc
outline: deep
title: LoadingIcon 加载动画
titleTemplate: SeeYouUI - LoadingIcon 加载动画
description: SeeYouUI 组件库 SeeLoadingIcon 加载动画组件
iframeSrc: /pages/seeLoadingIcon/index
---

# LoadingIcon 加载动画

加载状态动画图标，支持 spinner / circular / dots / pulse 四种动画类型。

## 平台兼容

| 平台 | 支持情况 |
| --- | --- |
| H5 | 支持 |
| 微信小程序 | 支持 |
| 支付宝小程序 | 支持 |
| APP | 支持 |

## 基础用法

默认使用 spinner 类型的加载动画。

```vue
<template>
  <SeeLoadingIcon />
</template>
```

## 动画类型

通过 `type` 属性设置动画类型，支持 `spinner`、`circular`、`dots`、`pulse` 四种类型。

```vue
<template>
  <SeeLoadingIcon type="spinner" />
  <SeeLoadingIcon type="circular" />
  <SeeLoadingIcon type="dots" />
  <SeeLoadingIcon type="pulse" />
</template>
```

## 自定义颜色

通过 `color` 属性设置加载动画的颜色。

```vue
<template>
  <SeeLoadingIcon color="#07c160" />
  <SeeLoadingIcon color="#ee0a24" />
  <SeeLoadingIcon color="#1989fa" />
</template>
```

## 自定义尺寸

通过 `size` 属性设置加载动画的尺寸。

```vue
<template>
  <SeeLoadingIcon size="32rpx" />
  <SeeLoadingIcon size="64rpx" />
  <SeeLoadingIcon size="96rpx" />
</template>
```

## 自定义速度

通过 `speed` 属性设置动画速度，单位为秒。

```vue
<template>
  <SeeLoadingIcon :speed="0.4" />
  <SeeLoadingIcon :speed="0.8" />
  <SeeLoadingIcon :speed="1.2" />
</template>
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 动画类型 | `'spinner' \| 'circular' \| 'dots' \| 'pulse'` | `'spinner'` |
| size | 尺寸 | `string` | `'60rpx'` |
| color | 颜色 | `string` | `'var(--see-primary)'` |
| speed | 动画速度（秒） | `number` | `0.8` |

## 类型定义

```typescript
type LoadingIconType = 'spinner' | 'circular' | 'dots' | 'pulse'

interface SeeLoadingIconProps {
  type?: LoadingIconType
  size?: string
  color?: string
  speed?: number
}
```
