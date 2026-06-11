---
layout: doc
outline: deep
title: useOverlay
titleTemplate: SeeYouUI - useOverlay
description: SeeYouUI useOverlay Hook
iframeSrc: /pages/index/index
---

# useOverlay

> Overlay/mask state management hook. Computes full-screen fixed overlay styles and handles show/hide lifecycle.

## Usage

```ts
import { ref } from 'vue'
import { useOverlay } from 'see-u-ui'

const show = ref(false)
const { visible, overlayStyle, handleClick } = useOverlay({
  show,
  opacity: ref(0.5),
  onClick: () => { show.value = false }
})
```

## API

### `useOverlay(options)`

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| options.show | `Ref<boolean>` | — | Show/hide control |
| options.zIndex | `Ref<number>` | - | z-index |
| options.background | `string` | `'var(--see-overlay-bg)'` | Background color |
| options.opacity | `Ref<number>` | `1` | Opacity |
| options.duration | `number` | `300` | Duration (ms) |
| options.isAnimated | `Ref<boolean>` | `true` | Enable animation |
| options.onClick | `() => void` | - | Click callback |

**Returns:**

| Property | Type | Description |
|----------|------|-------------|
| visible | `Ref<boolean>` | Visibility state |
| overlayZIndex | `ComputedRef<number>` | Computed z-index |
| overlayStyle | `ComputedRef<CSSProperties>` | Overlay styles |
| handleClick | `() => void` | Click handler |
