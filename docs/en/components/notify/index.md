---
layout: doc
outline: deep
title: Notify
titleTemplate: SeeYouUI - Notify
description: SeeYouUI component see-notify
iframeSrc: /pages/seeNotify/index
---

# Notify

A notification bar that slides in from the top of the page. Supports multiple types and imperative invocation.

## Basic Usage

```vue
<script setup>
import { ref } from 'vue'
const show = ref(false)
</script>

<template>
  <see-notify v-model:show="show" message="New message received" type="success" />
</template>
```

## Imperative Usage

```ts
import { useNotify } from 'see-u-ui'

const notify = useNotify()

notify.success('Operation successful')
notify.error('An error occurred')
notify.warning('Warning: ...')
notify.info('New message received')
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| show | `boolean` | `false` | Whether to show the notification |
| message | `string` | `''` | Notification message text |
| type | `string` | `'info'` | Notification type: `success`, `error`, `warning`, `info` |
| duration | `number` | `3000` | Display duration in ms |
| icon | `string` | `''` | Custom icon |
| color | `string` | `''` | Custom text color |
| background | `string` | `''` | Custom background color |
| isClosable | `boolean` | `false` | Whether to show close button |

## Events

| Event | Parameters | Description |
|-------|-----------|-------------|
| onClick | - | Triggered when notification is clicked |
| onClose | - | Triggered when notification closes |
| update:show | `(value: boolean)` | Triggered when show state changes |
