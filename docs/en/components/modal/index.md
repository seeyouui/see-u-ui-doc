---
layout: doc
outline: deep
title: Modal
titleTemplate: SeeYouUI - Modal
description: SeeYouUI component see-modal
iframeSrc: /pages/seeModal/index
---

# Modal

A modal dialog that displays content in a layer above the page. Supports confirmation/cancel actions and imperative invocation.

## Basic Usage

```vue
<script setup>
import { ref } from 'vue'
const show = ref(false)
</script>

<template>
  <see-modal
    v-model:show="show"
    title="Confirm"
    content="Are you sure you want to proceed?"
    @confirm="onConfirm"
    @cancel="onCancel"
  />
</template>
```

## Imperative Usage

```ts
import { useModal } from 'see-u-ui'

const modal = useModal()

// Confirmation dialog
modal.confirm({
  title: 'Confirm',
  content: 'Are you sure?',
  onConfirm: () => console.log('confirmed'),
})

// Alert dialog
modal.alert({
  title: 'Notice',
  content: 'Operation successful.',
})
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| show | `boolean` | `false` | Whether to show the modal |
| title | `string` | `''` | Modal title |
| content | `string` | `''` | Modal body content |
| isShowHeader | `boolean` | `true` | Whether to show header |
| isShowFooter | `boolean` | `true` | Whether to show footer buttons |
| confirmText | `string` | `'Confirm'` | Confirm button text |
| cancelText | `string` | `'Cancel'` | Cancel button text |
| isShowCancelBtn | `boolean` | `true` | Whether to show cancel button |
| confirmType | `string` | `'primary'` | Confirm button style: `primary`, `danger`, `warning` |
| isConfirmLoading | `boolean` | `false` | Whether confirm button shows loading state |
| width | `string` | `''` | Custom modal width |
| beforeClose | `function` | `undefined` | Callback before closing, return `false` to prevent close |

## Events

| Event | Parameters | Description |
|-------|-----------|-------------|
| onConfirm | - | Triggered when confirm button is clicked |
| onCancel | - | Triggered when cancel button is clicked |
| onOpen | - | Triggered when modal opens |
| onClose | - | Triggered when modal closes |
| update:show | `(value: boolean)` | Triggered when show state changes |
