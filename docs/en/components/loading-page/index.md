---
title: LoadingPage
description: A fullscreen or area loading page with built-in loading animation and message text.
iframeSrc: /pages/seeLoadingPage/index
---

# SeeLoadingPage

A fullscreen or area loading page with built-in loading animation and message text.

## Basic Usage

Control the loading state via `loading`. After loading completes, the default slot content is displayed.

```vue
<template>
  <see-loading-page :loading="isLoading" message="Loading...">
    <view>Content loaded!</view>
  </see-loading-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const isLoading = ref(true)
</script>
```

## Custom Message

Set the loading message via the `message` prop.

```vue
<see-loading-page :loading="true" message="Fetching data, please wait..." />
```

## Custom Icon Type

Set the loading icon type via `iconType`. Supported values: `spinner`, `circular`, `dots`, `pulse`.

```vue
<see-loading-page :loading="true" iconType="circular" />
```

## Fullscreen Mode

Set `isFullscreen` to `true` to make the loading overlay cover the entire screen.

```vue
<see-loading-page :loading="true" isFullscreen message="Fullscreen loading..." />
```

## Custom Background

Set the mask background color via `background`.

```vue
<see-loading-page :loading="true" background="rgba(0, 0, 0, 0.6)" />
```

## Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| loading | Whether loading | `boolean` | `true` |
| message | Loading message text | `string` | `'加载中...'` |
| iconType | Loading icon type | `'spinner' \| 'circular' \| 'dots' \| 'pulse'` | `'spinner'` |
| iconSize | Loading icon size | `string` | `'80rpx'` |
| isFullscreen | Whether fullscreen | `boolean` | `false` |
| background | Background color | `string` | - |
| zIndex | z-index level | `number` | `999` |

## Slots

| Name | Description |
| --- | --- |
| default | Content shown after loading completes |
