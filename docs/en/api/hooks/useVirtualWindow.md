---
layout: doc
outline: deep
title: Virtual Window
titleTemplate: SeeYouUI - Virtual Window
description: SeeYouUI Component Library Virtual Window Hook
iframeSrc: /pages/index/index
---

# Virtual Window (useVirtualWindow)

> `useVirtualWindow` is a Vue composable for virtual scroll window calculation, used for visible range computation in virtual lists and virtual tables.
>
> It helps you easily handle: large data list rendering, table virtual scrolling, and solving lag issues caused by too many nodes.
>
> > Source code: [GitHub](https://github.com/seeyouui/see-u-ui/blob/main/uni_modules/see-u-ui/utils/hooks/useVirtualWindow/index.ts)

## Usage

::: code-group

```vue [Fixed Height Mode]
<script setup>
import { ref, computed } from 'vue'
import { useVirtualWindow } from 'see-u-ui'

const list = ref(Array.from({ length: 10000 }, (_, i) => `Item ${i}`))
const scrollTop = ref(0)

const virtual = useVirtualWindow({
  total: computed(() => list.value.length),
  itemSize: 50,           // Item height 50px
  viewportSize: 400,      // Viewport height 400px
  buffer: 5               // Buffer 5 items above and below
})

// Render range
const startIndex = virtual.startIndex
const endIndex = virtual.endIndex
const translateOffset = virtual.translateOffset
</script>
```

```vue [Dynamic Height Mode]
<script setup>
import { ref, computed } from 'vue'
import { useVirtualWindow } from 'see-u-ui'

const list = ref([...])

const virtual = useVirtualWindow({
  total: computed(() => list.value.length),
  itemSize: 50,
  viewportSize: 400,
  dynamic: true,                    // Enable dynamic height
  estimatedItemHeight: 80,          // Estimated height
  scrollOffset: currentScrollTop
})
</script>
```

:::

## Calculation Rules

### Fixed Height Mode

```
visibleStart = Math.floor(scrollOffset / itemSize)
visibleEnd = visibleStart + visibleCount + buffer * 2
translateOffset = visibleStart * itemSize
totalSize = total * itemSize
```

### Dynamic Height Mode

Uses `estimatedItemSize` instead of `itemSize` for calculation, `totalSize = total * estimatedItemSize`

## API

### `useVirtualWindow(options)`

**Virtual window calculation Hook**

| Parameter                 | Type                       | Default     | Description                               |
| ------------------------- | -------------------------- | ----------- | ----------------------------------------- |
| options.total             | `Ref<number> \| number`    | —           | Total list length                         |
| options.itemSize          | `Ref<number> \| number`    | —           | Item size (px), primary path for fixed height |
| options.viewportSize      | `Ref<number> \| number`    | —           | Viewport size (px)                        |
| options.buffer            | `number`                   | `5`         | Buffer item count                         |
| options.estimatedItemSize | `Ref<number> \| number`    | `undefined` | Estimated item size (px) for dynamic mode |
| options.dynamic           | `Ref<boolean> \| boolean`  | `false`     | Enable dynamic height                     |
| options.scrollOffset      | `Ref<number> \| number`    | `undefined` | Scroll offset (px)                        |

**Returns:**

| Property/Method | Type                              | Description                              |
| --------------- | --------------------------------- | ---------------------------------------- |
| visibleStart    | `ComputedRef<number>`             | Visible range start index (excl. buffer) |
| visibleEnd      | `ComputedRef<number>`             | Visible range end index (excl. buffer)   |
| visibleCount    | `ComputedRef<number>`             | Visible item count in viewport           |
| translateOffset | `ComputedRef<number>`             | Placeholder offset (px)                  |
| totalSize       | `ComputedRef<number>`             | Total content size (px)                  |
| startIndex      | `ComputedRef<number>`             | Actual render start index (incl. buffer) |
| endIndex        | `ComputedRef<number>`             | Actual render end index (incl. buffer)   |
| range           | `ComputedRef<VirtualWindowRange>` | Visible range object                     |
| scrollOffset    | `ComputedRef<number>`             | Current scroll offset                    |
| setScrollOffset | `(offset: number) => void`        | Update scroll offset                     |
| visibleIndices  | `ComputedRef<number[]>`           | Index array within visible range         |

---

### `VirtualWindowRange`

```typescript
interface VirtualWindowRange {
  visibleStart: number    // Visible range start index
  visibleEnd: number      // Visible range end index
  translateOffset: number // Placeholder offset (px)
  totalSize: number       // Total content size (px)
}
```
