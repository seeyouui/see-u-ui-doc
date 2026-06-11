---
layout: doc
outline: deep
title: Popover
titleTemplate: SeeYouUI - Popover
description: SeeYouUI component see-popover
iframeSrc: /pages/seePopover/index
---

# Popover

A floating card that displays rich content when clicking or hovering a trigger element. Unlike Tooltip, Popover supports custom content.

## Basic Usage

```vue
<template>
  <see-popover title="Title" content="Popover content here">
    <button>Click me</button>
  </see-popover>
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| show | `boolean` | `false` | Whether to show the popover |
| position | `string` | `'bottom'` | Popover position: `top`, `bottom`, `left`, `right` |
| trigger | `string` | `'click'` | Trigger method: `click`, `hover`, `manual` |
| title | `string` | `''` | Popover title |
| width | `string` | `''` | Popover width |
| maxWidth | `string` | `''` | Max width of popover |
| isShowArrow | `boolean` | `true` | Whether to show arrow |
| isCloseOnClickOutside | `boolean` | `true` | Whether to close when clicking outside |

## Events

| Event | Parameters | Description |
|-------|-----------|-------------|
| onOpen | - | Triggered when popover opens |
| onClose | - | Triggered when popover closes |
| update:show | `(value: boolean)` | Triggered when show state changes |
