---
layout: doc
outline: deep
title: Popup
titleTemplate: SeeYouUI - Popup
description: SeeYouUI component see-popup
iframeSrc: /pages/seePopup/index
---

# Popup

A popup layer that slides in from the specified direction, commonly used to display content that requires user attention or interaction.

## Basic Usage

```vue
<script setup>
import { ref } from 'vue'
const show = ref(false)
</script>

<template>
  <see-popup v-model:show="show" position="bottom">
    <view class="content">Popup Content</view>
  </see-popup>
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| show | `boolean` | `false` | Whether to show the popup |
| position | `string` | `'center'` | Popup position: `top`, `bottom`, `left`, `right`, `center` |
| zIndex | `number` | `100` | Custom z-index |
| duration | `number` | `300` | Animation duration in ms |
| isOverlay | `boolean` | `true` | Whether to show overlay mask |
| isCloseOnClickOverlay | `boolean` | `true` | Whether to close when clicking overlay |
| isLockScroll | `boolean` | `true` | Whether to lock background scroll |
| isShowCloseBtn | `boolean` | `false` | Whether to show close button |
| isRound | `boolean` | `false` | Whether to show rounded corners |
| isSafeArea | `boolean` | `true` | Whether to enable safe area adaptation |
| isShowHeader | `boolean` | `false` | Whether to show header area |
| title | `string` | `''` | Header title text |
| beforeClose | `function` | `undefined` | Callback before closing, return `false` to prevent close |

## Events

| Event | Parameters | Description |
|-------|-----------|-------------|
| onOpen | - | Triggered when popup starts to open |
| onOpened | - | Triggered after popup opening animation completes |
| onClose | - | Triggered when popup starts to close |
| onClosed | - | Triggered after popup closing animation completes |
| onClickOverlay | - | Triggered when overlay is clicked |
| update:show | `(value: boolean)` | Triggered when show state changes |
