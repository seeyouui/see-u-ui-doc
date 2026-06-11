---
layout: doc
outline: deep
title: usePopoverPosition
titleTemplate: SeeYouUI - usePopoverPosition
description: SeeYouUI usePopoverPosition Hook
---

# usePopoverPosition

> Popover/tooltip positioning hook. Supports 12 directional positions with automatic boundary detection and flipping.

## Usage

```ts
import { ref } from 'vue'
import { usePopoverPosition } from 'see-u-ui'

const triggerRef = ref(null)
const popoverRef = ref(null)

const { popoverStyle, arrowStyle, updatePosition } = usePopoverPosition({
  triggerRef,
  popoverRef,
  position: ref('top'),
  offset: ref(12)
})
```

## Supported Positions

```
top-left    top    top-right
left-top                   right-top
left                       right
left-bottom                right-bottom
bottom-left bottom bottom-right
```

## API

### `usePopoverPosition(options)`

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| options.triggerRef | `Ref<HTMLElement \| null>` | — | Trigger element |
| options.popoverRef | `Ref<HTMLElement \| null>` | — | Popover element |
| options.position | `MaybeRef<PopoverPosition>` | — | Position |
| options.offset | `MaybeRef<number>` | `12` | Offset (rpx) |
| options.arrowSize | `MaybeRef<number>` | `10` | Arrow size (rpx) |

**Returns:**

| Property | Type | Description |
|----------|------|-------------|
| computedPosition | `Ref<PopoverPosition>` | Computed position (may flip) |
| popoverStyle | `ComputedRef<CSSProperties>` | Popover positioning styles |
| arrowStyle | `ComputedRef<CSSProperties>` | Arrow styles |
| updatePosition | `() => void` | Manual recalculation |
| triggerRect | `Ref<Rect>` | Trigger element rect |

::: tip
Auto-flips to opposite side when overflowing viewport (16px padding). rpx values auto-convert to px.
:::
