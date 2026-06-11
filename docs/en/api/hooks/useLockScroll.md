---
layout: doc
outline: deep
title: useLockScroll
titleTemplate: SeeYouUI - useLockScroll
description: SeeYouUI useLockScroll Hook
iframeSrc: /pages/index/index
---

# useLockScroll

> Background scroll lock management hook with global reference counting. Multiple overlays can independently lock/unlock without conflicts.

## Usage

```ts
import { ref } from 'vue'
import { useLockScroll } from 'see-u-ui'

const isShow = ref(false)
const { locked, lock, unlock } = useLockScroll(isShow)
```

## API

### `useLockScroll(isLocked)`

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| isLocked | `Ref<boolean>` | — | Reactive lock state |

**Returns:**

| Property | Type | Description |
|----------|------|-------------|
| locked | `Ref<boolean>` | Current lock state |
| lock | `() => void` | Manual lock |
| unlock | `() => void` | Manual unlock |

### `resetLockScroll()`

Force-reset global lock state. Use on page navigation or keep-alive scenarios.
