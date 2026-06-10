---
layout: doc
outline: deep
title: LoadingPage 加载页
titleTemplate: SeeYouUI - LoadingPage 加载页
description: SeeYouUI 组件库 SeeLoadingPage 加载页组件
iframeSrc: /pages/seeLoadingPage/index
---

# SeeLoadingPage 加载页

全屏或区域加载状态页面，内置加载动画和提示文字。

## 基础用法

通过 `loading` 控制加载状态，加载完成后显示默认插槽内容。

```vue
<template>
  <see-loading-page :loading="isLoading" message="加载中...">
    <view>内容加载完成！</view>
  </see-loading-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const isLoading = ref(true)
</script>
```

## 自定义提示文字

通过 `message` 属性设置加载提示文字。

```vue
<see-loading-page :loading="true" message="正在获取数据，请稍候..." />
```

## 自定义图标类型

通过 `iconType` 设置加载图标类型，支持 `spinner`、`circular`、`dots`、`pulse` 四种类型。

```vue
<see-loading-page :loading="true" iconType="circular" />
```

## 全屏模式

设置 `isFullscreen` 为 `true`，加载层将覆盖整个屏幕。

```vue
<see-loading-page :loading="true" isFullscreen message="全屏加载中..." />
```

## 自定义背景色

通过 `background` 设置加载遮罩的背景色。

```vue
<see-loading-page :loading="true" background="rgba(0, 0, 0, 0.6)" />
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| loading | 是否加载中 | `boolean` | `true` |
| message | 加载提示文字 | `string` | `'加载中...'` |
| iconType | 加载图标类型 | `'spinner' \| 'circular' \| 'dots' \| 'pulse'` | `'spinner'` |
| iconSize | 加载图标大小 | `string` | `'80rpx'` |
| isFullscreen | 是否全屏显示 | `boolean` | `false` |
| background | 背景色 | `string` | - |
| zIndex | z-index 层级 | `number` | `999` |

## Slots

| 名称 | 说明 |
| --- | --- |
| default | 加载完成后显示的内容 |
