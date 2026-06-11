---
layout: doc
outline: deep
title: Copy
titleTemplate: SeeYouUI - Copy
description: SeeYouUI component see-copy
iframeSrc: /pages/seeCopy/index
---

# Copy

A component that copies text to the clipboard when clicked. Supports toast feedback and imperative invocation.

## Basic Usage

```vue
<template>
  <see-copy text="Hello, World!">
    <button>Click to copy</button>
  </see-copy>
</template>
```

## Imperative Usage

```ts
import { useCopy } from 'see-u-ui'

const copy = useCopy()

await copy('Text to copy')
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| text | `string` | `''` | Text to copy to clipboard |
| isShowToast | `boolean` | `true` | Whether to show success toast |
| toastMessage | `string` | `'Copied'` | Custom toast message |
| isDisabled | `boolean` | `false` | Whether the copy action is disabled |
| isHighlight | `boolean` | `false` | Whether to highlight the text when copied |

## Events

| Event | Parameters | Description |
|-------|-----------|-------------|
| onSuccess | - | Triggered when text is copied successfully |
| onError | `(error: Error)` | Triggered when copy fails |
| onClick | - | Triggered when the component is clicked |
