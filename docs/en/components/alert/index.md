---
layout: doc
outline: deep
title: Alert
titleTemplate: SeeYouUI - Alert
description: SeeYouUI component see-alert
iframeSrc: /pages/seeAlert/index
---

# Alert

An inline alert message that displays important information to the user. Supports multiple types and display styles.

## Basic Usage

```vue
<template>
  <see-alert type="success" title="Success" content="Operation completed successfully." />
  <see-alert type="error" title="Error" content="Something went wrong." />
  <see-alert type="warning" title="Warning" content="Please check your input." />
  <see-alert type="info" title="Info" content="Here is some information." />
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | `string` | `'info'` | Alert type: `success`, `error`, `warning`, `info` |
| title | `string` | `''` | Alert title |
| content | `string` | `''` | Alert body content |
| effect | `string` | `'light'` | Display style: `light`, `dark`, `border` |
| isClosable | `boolean` | `true` | Whether to show close button |
| isShowIcon | `boolean` | `true` | Whether to show type icon |
| isCollapsible | `boolean` | `false` | Whether content is collapsible |
| actionText | `string` | `''` | Custom action button text |
| isShow | `boolean` | `true` | Whether to show the alert |

## Events

| Event | Parameters | Description |
|-------|-----------|-------------|
| onClose | - | Triggered when alert is closed |
| onAction | - | Triggered when action button is clicked |
| update:isShow | `(value: boolean)` | Triggered when show state changes |
