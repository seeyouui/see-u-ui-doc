---
layout: doc
outline: deep
title: BackTop Back to Top
titleTemplate: SeeYouUI - BackTop Back to Top
description: SeeYouUI component library seeBackTop back to top component
---

# BackTop Back to Top

A floating "back to top" button for long pages. Automatically shows when scroll exceeds threshold, smoothly scrolls to top on click.

> Cross-platform: On H5, listens to `window` scroll events; on mini-program / App, uses `uni.onPageScroll` page-level lifecycle. Both platforms use `requestAnimationFrame` throttling to avoid high-frequency updates.

## Basic Usage

```vue
<template>
  <see-backtop />
</template>
```

## Custom Position

```vue
<template>
  <see-backtop :right="50" :bottom="100" />
</template>
```

## Custom Icon

```vue
<template>
  <see-backtop>
    <view class="custom-btn">
      <text>TOP</text>
    </view>
  </see-backtop>
</template>
```

## Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| visibilityHeight | number | `200` | Show threshold (px), button shows when scroll exceeds this value |
| right | number | `20` | Distance from right edge (px) |
| bottom | number | `80` | Distance from bottom edge (px) |
| zIndex | number | `999` | z-index |
| duration | number | `300` | Scroll animation duration (ms) |
| target | string | `''` | Target scroll container selector (reserved field, current implementation tracks page/window scroll) |
| isCustom | boolean | `false` | Whether to use custom slot |

## Events

| Event | Parameters | Description |
|-------|-----------|-------------|
| onClick | - | Click event |

## Slots

| Slot Name | Description |
|-----------|-------------|
| default | Custom button content |
