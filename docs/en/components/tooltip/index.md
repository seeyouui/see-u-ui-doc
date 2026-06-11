---
layout: doc
outline: deep
title: Tooltip
titleTemplate: SeeYouUI - Tooltip
description: SeeYouUI component see-tooltip
iframeSrc: /pages/seeTooltip/index
---

# Tooltip

A tooltip that displays additional information when hovering, clicking, or long-pressing a target element.

## Basic Usage

```vue
<template>
  <see-tooltip content="This is a tooltip">
    <button>Hover me</button>
  </see-tooltip>
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| content | `string` | `''` | Tooltip content text |
| position | `string` | `'bottom'` | Tooltip position: `top`, `bottom`, `left`, `right` |
| trigger | `string` | `'hover'` | Trigger method: `hover`, `click`, `longpress`, `manual` |
| show | `boolean` | `false` | Whether to show (works with `manual` trigger) |
| delay | `number` | `0` | Delay before showing in ms |
| maxWidth | `string` | `''` | Max width of tooltip |
| effect | `string` | `'dark'` | Theme style: `dark`, `light` |
| isDisabled | `boolean` | `false` | Whether the tooltip is disabled |
| isShowArrow | `boolean` | `true` | Whether to show arrow |

## Events

| Event | Parameters | Description |
|-------|-----------|-------------|
| onOpen | - | Triggered when tooltip opens |
| onClose | - | Triggered when tooltip closes |
| update:show | `(value: boolean)` | Triggered when show state changes |
