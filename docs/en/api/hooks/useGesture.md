---
layout: doc
outline: deep
title: useGesture
titleTemplate: SeeYouUI - useGesture
description: SeeYouUI useGesture Hook
iframeSrc: /pages/index/index
---

# useGesture

> Touch gesture detection hook. Supports directional swipe and long-press detection (mutually exclusive).

## Usage

```ts
import { ref, onMounted } from 'vue'
import { useGesture } from 'see-u-ui'

const boxRef = ref(null)
const { isSwiping, bindEvents } = useGesture(boxRef, {
  direction: 'horizontal',
  threshold: 10,
  onSwipe: (dir, dist) => console.log(`${dir}: ${dist}px`),
  onLongPress: () => console.log('long press')
})

onMounted(() => bindEvents())
```

## API

### `useGesture(elementRef, options?)`

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| elementRef | `Ref<HTMLElement \| null>` | — | Target element |
| options.direction | `'horizontal' \| 'vertical' \| 'both'` | `'both'` | Detection direction |
| options.threshold | `number` | `10` | Swipe threshold (px) |
| options.longPressDelay | `number` | `350` | Long press delay (ms) |
| options.onSwipe | `(direction, distance) => void` | - | Swipe callback |
| options.onSwipeStart | `() => void` | - | Swipe start callback |
| options.onSwipeEnd | `(direction, distance) => void` | - | Swipe end callback |
| options.onLongPress | `() => void` | - | Long press callback |
| options.onLongPressEnd | `() => void` | - | Long press end callback |

**Returns:**

| Property | Type | Description |
|----------|------|-------------|
| isSwiping | `Ref<boolean>` | Swiping state |
| swipeDistance | `Ref<number>` | Current swipe distance |
| isLongPressing | `Ref<boolean>` | Long pressing state |
| bindEvents | `() => void` | Bind event listeners |
| unbindEvents | `() => void` | Unbind event listeners |
| reset | `() => void` | Reset state |
