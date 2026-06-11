---
layout: doc
outline: deep
title: SwipeAction
titleTemplate: SeeYouUI - SwipeAction
description: SeeYouUI component see-swipe-action
iframeSrc: /pages/seeSwipeAction/index
---

# SwipeAction

A swipeable list item that reveals action buttons on the left or right side. Commonly used in message lists and item management.

## Basic Usage

```vue
<script setup>
const leftActions = [
  { text: 'Read', value: 'read', background: '#07c160' },
]
const rightActions = [
  { text: 'Delete', value: 'delete', background: '#ee0a24' },
]
</script>

<template>
  <see-swipe-action
    :left-actions="leftActions"
    :right-actions="rightActions"
    @click="onAction"
  >
    <view class="item">Swipe me left or right</view>
  </see-swipe-action>
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| leftActions | `object[]` | `[]` | Left-side action buttons `{ text, value, background?, color?, disabled? }` |
| rightActions | `object[]` | `[]` | Right-side action buttons `{ text, value, background?, color?, disabled? }` |
| isDisabled | `boolean` | `false` | Whether the swipe action is disabled |
| threshold | `number` | `0.3` | Swipe distance ratio to trigger action (0-1) |
| isCloseOnClick | `boolean` | `true` | Whether to close after clicking an action |
| name | `string` | `''` | Unique identifier for the item |

## Events

| Event | Parameters | Description |
|-------|-----------|-------------|
| onClick | `(action: object, position: string)` | Triggered when an action button is clicked |
| onOpen | `(position: string)` | Triggered when action panel is opened |
| onClose | `(position: string)` | Triggered when action panel is closed |
