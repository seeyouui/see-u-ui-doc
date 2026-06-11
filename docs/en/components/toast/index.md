---
layout: doc
outline: deep
title: Toast
titleTemplate: SeeYouUI - Toast
description: SeeYouUI component see-toast
iframeSrc: /pages/seeToast/index
---

# Toast

A lightweight feedback message that appears briefly and disappears automatically. Supports multiple types and imperative invocation.

## Basic Usage

```vue
<script setup>
import { ref } from 'vue'
const show = ref(false)
</script>

<template>
  <see-toast v-model:show="show" message="Operation successful" type="success" />
</template>
```

## Imperative Usage

```ts
import { useToast } from 'see-u-ui'

const toast = useToast()

toast.success('Operation successful')
toast.error('Something went wrong')
toast.warning('Please check your input')
toast.info('Tips: ...')
toast.loading('Loading...')
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| show | `boolean` | `false` | Whether to show the toast |
| message | `string` | `''` | Toast message text |
| type | `string` | `'default'` | Toast type: `success`, `error`, `warning`, `info`, `loading`, `default` |
| icon | `string` | `''` | Custom icon |
| duration | `number` | `2000` | Display duration in ms |
| position | `string` | `'center'` | Position: `center`, `top`, `bottom` |

## Events

| Event | Parameters | Description |
|-------|-----------|-------------|
| onClose | - | Triggered when toast closes |
| update:show | `(value: boolean)` | Triggered when show state changes |
