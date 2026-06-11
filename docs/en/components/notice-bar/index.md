---
layout: doc
outline: deep
title: NoticeBar
titleTemplate: SeeYouUI - NoticeBar
description: SeeYouUI component see-notice-bar
iframeSrc: /pages/seeNoticeBar/index
---

# NoticeBar

A scrollable notice bar that displays a horizontal or vertical message ticker. Commonly used for announcements and tips.

## Basic Usage

```vue
<template>
  <see-notice-bar text="This is a notice message that will scroll automatically." />
</template>
```

## Vertical Mode

```vue
<template>
  <see-notice-bar
    :vertical="true"
    :messages="['Message 1', 'Message 2', 'Message 3']"
  />
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| text | `string` | `''` | Notice text content |
| type | `string` | `'info'` | Notice type: `info`, `warning`, `error` |
| speed | `number` | `50` | Scroll speed in px/s |
| isScrollable | `boolean` | `true` | Whether content is scrollable |
| isClosable | `boolean` | `false` | Whether to show close button |
| isShowIcon | `boolean` | `true` | Whether to show left icon |
| isShow | `boolean` | `true` | Whether to show the notice bar |
| vertical | `boolean` | `false` | Whether to use vertical scrolling mode |
| messages | `string[]` | `[]` | Messages array for vertical mode |

## Events

| Event | Parameters | Description |
|-------|-----------|-------------|
| onClick | - | Triggered when notice bar is clicked |
| onClose | - | Triggered when notice bar is closed |
| onRightClick | - | Triggered when right area is clicked |
| update:isShow | `(value: boolean)` | Triggered when show state changes |
