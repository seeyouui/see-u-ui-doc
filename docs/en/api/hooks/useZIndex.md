---
layout: doc
outline: deep
title: useZIndex
titleTemplate: SeeYouUI - useZIndex
description: SeeYouUI useZIndex Hook
---

# useZIndex

> Global z-index management hook. Maintains a monotonically increasing counter (starting at 1000) for coordinating layer ordering across multiple popup components.

## Usage

```ts
import { useZIndex } from 'see-u-ui'

const { currentZIndex, nextZIndex, releaseZIndex } = useZIndex()
const z = nextZIndex() // 1001

// With base z-index
const { nextZIndex: next } = useZIndex(2000)
next() // 2000
```

## API

### `useZIndex(baseZIndex?)`

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| baseZIndex | `number` | `undefined` | Minimum floor for the global counter |

**Returns:**

| Property | Type | Description |
|----------|------|-------------|
| currentZIndex | `Ref<number>` | Current z-index value |
| nextZIndex | `() => number` | Get next incrementing z-index |
| releaseZIndex | `() => void` | Release instance (counter stays monotonic) |
| getCurrentZIndex | `() => number` | Read current z-index |
