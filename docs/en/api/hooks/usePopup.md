---
layout: doc
outline: deep
title: usePopup
titleTemplate: SeeYouUI - usePopup
description: SeeYouUI usePopup Hook
---

# usePopup

> Popup lifecycle management hook. Manages open/close state with animation timing and async `beforeClose` guard.

## Usage

```ts
import { ref } from 'vue'
import { usePopup } from 'see-u-ui'

const show = ref(false)
const { isVisible, open, close, toggle } = usePopup({
  show,
  duration: 300,
  onOpened: () => console.log('opened'),
  onClosed: () => console.log('closed'),
  onUpdateShow: (val) => { show.value = val }
})

await open()
await close()
```

## API

### `usePopup(options)`

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| options.show | `Ref<boolean>` | — | External show control |
| options.beforeClose | `Ref<(() => boolean \| Promise<boolean>) \| null>` | - | Close guard |
| options.duration | `number` | `300` | Duration (ms) |
| options.onOpen | `() => void` | - | Open callback |
| options.onOpened | `() => void` | - | After open animation |
| options.onClose | `() => void` | - | Close callback |
| options.onClosed | `() => void` | - | After close animation |
| options.onUpdateShow | `(value: boolean) => void` | - | v-model sync |

**Returns:**

| Property | Type | Description |
|----------|------|-------------|
| isVisible | `Ref<boolean>` | Internal visibility |
| isAnimating | `Ref<boolean>` | Animating state |
| open | `() => Promise<void>` | Open popup |
| close | `() => Promise<void>` | Close popup |
| toggle | `() => Promise<void>` | Toggle state |
| cleanup | `() => void` | Cleanup timers |
