---
layout: doc
outline: deep
title: ActionSheet
titleTemplate: SeeYouUI - ActionSheet
description: SeeYouUI component see-action-sheet
iframeSrc: /pages/seeActionSheet/index
---

# ActionSheet

A bottom-sheet menu that displays a list of actions for the user to choose from. Commonly used for share, edit, and delete operations.

## Basic Usage

```vue
<script setup>
import { ref } from 'vue'
const show = ref(false)
const actions = [
  { name: 'Share', value: 'share' },
  { name: 'Edit', value: 'edit' },
  { name: 'Delete', value: 'delete', color: 'red' },
]
</script>

<template>
  <see-action-sheet
    v-model:show="show"
    title="Choose an action"
    :actions="actions"
    @select="onSelect"
  />
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| show | `boolean` | `false` | Whether to show the action sheet |
| title | `string` | `''` | Title text |
| actions | `object[]` | `[]` | Array of action items `{ name, value, color?, disabled? }` |
| cancelText | `string` | `'Cancel'` | Cancel button text |
| isShowCancelBtn | `boolean` | `true` | Whether to show cancel button |
| beforeClose | `function` | `undefined` | Callback before closing, return `false` to prevent close |

## Events

| Event | Parameters | Description |
|-------|-----------|-------------|
| onSelect | `(action: object, index: number)` | Triggered when an action is selected |
| onCancel | - | Triggered when cancel button is clicked |
| onOpen | - | Triggered when action sheet opens |
| onClose | - | Triggered when action sheet closes |
| update:show | `(value: boolean)` | Triggered when show state changes |
