---
layout: doc
outline: deep
title: Hooks Utilities
titleTemplate: SeeYouUI - Hooks Utilities
description: SeeYouUI component library hooks utilities
---

# Hooks Utilities

SeeYouUI provides a set of practical Hooks for handling common scenarios like routing, safe area, scroll monitoring, and tree data management.

## useRoute

Cross-platform routing unified wrapper with automatic params encoding.

```typescript
import { useRoute } from '@/uni_modules/see-u-ui/utils/hooks/useRoute'

const { navigateTo, redirectTo, switchTab, reLaunch, navigateBack, currentRoute, getQuery } = useRoute()
```

### Returns

| Property/Method | Type | Description |
|-----------------|------|-------------|
| navigateTo | `(options: RouteOptions) => Promise<void>` | Navigate to new page (push) |
| redirectTo | `(options: RouteOptions) => Promise<void>` | Redirect to new page (replace) |
| switchTab | `(options: RouteOptions) => Promise<void>` | Switch tab page |
| reLaunch | `(options: RouteOptions) => Promise<void>` | Close all pages and open new page |
| navigateBack | `(delta?: number) => Promise<void>` | Go back, default delta=1 |
| currentRoute | `Ref<{ path, params }>` | Current route info |
| getQuery | `<T>() => T` | Get current page params |

### RouteOptions

| Property | Type | Description |
|----------|------|-------------|
| url | `string` | Target page path |
| params | `Record<string, any>` | Route params, auto encoded |
| animationType | `string` | Page animation type (APP only) |

### Example

```typescript
// Navigate with params
await navigateTo({
  url: '/pages/detail/index',
  params: { id: '123', name: 'test' }
})

// Go back
await navigateBack()

// Go back 2 pages
await navigateBack(2)
```

---

## useSafeArea

Get device safe area insets, cached at module level (singleton pattern).

```typescript
import { useSafeArea } from '@/uni_modules/see-u-ui/utils/hooks/useSafeArea'

const { top, bottom, left, right } = useSafeArea()
```

### Returns

| Property | Type | Description |
|----------|------|-------------|
| top | `Ref<number>` | Top safe area inset (px) |
| bottom | `Ref<number>` | Bottom safe area inset (px) |
| left | `Ref<number>` | Left safe area inset (px) |
| right | `Ref<number>` | Right safe area inset (px) |

### Example

```vue
<template>
  <view :style="{ paddingTop: top + 'px' }">
    <text>Content area</text>
  </view>
</template>

<script setup>
import { useSafeArea } from '@/uni_modules/see-u-ui/utils/hooks/useSafeArea'
const { top, bottom } = useSafeArea()
</script>
```

---

## useScrollSpy

Monitor page or container scroll position with throttling and direction detection.

```typescript
import { useScrollSpy } from '@/uni_modules/see-u-ui/utils/hooks/useScrollSpy'

const { scrollTop, isScrolling, scrollDirection } = useScrollSpy()
```

### Options

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| target | string | `''` | Scroll container selector (H5 only); falls back to window/page scroll when empty |
| throttle | number | `0` | Throttle interval (ms). `0` (default) uses `requestAnimationFrame`; `> 0` uses setTimeout throttling (leading + trailing) |

### Returns

| Property | Type | Description |
|----------|------|-------------|
| scrollTop | `Ref<number>` | Current scroll position (px) |
| isScrolling | `Ref<boolean>` | Whether scrolling |
| scrollDirection | `Ref<'up' \| 'down' \| 'idle'>` | Scroll direction, initial value is `'idle'` |

### Example

```vue
<template>
  <view v-if="scrollTop > 200" class="back-top" @tap="scrollToTop">
    Back to top
  </view>
</template>

<script setup>
import { useScrollSpy } from '@/uni_modules/see-u-ui/utils/hooks/useScrollSpy'
const { scrollTop, scrollDirection } = useScrollSpy()
</script>
```

---

## useTree

Tree data management Hook providing flattening, expand/collapse, selection/cascade, search filtering, and lazy loading.

```typescript
import { useTree } from '@/uni_modules/see-u-ui/utils/hooks/useTree'

const {
  flatNodes, expandedKeys, checkedKeys,
  toggleExpand, toggleCheck, expandAll, collapseAll,
  filterNodes, getCheckedNodes, appendNode, removeNode
} = useTree({
  data: treeData,
  keyField: 'id',
  labelField: 'label',
  childrenField: 'children',
  selectMode: 'check-cascade'
})
```

### Options

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| data | `Ref<TreeNode[]>` | - | Tree data (reactive) |
| keyField | `string` | `'id'` | Key field name |
| labelField | `string` | `'label'` | Label field name |
| childrenField | `string` | `'children'` | Children field name |
| selectMode | `string` | `'single'` | Selection mode: single / multiple / check-cascade |
| isLazy | `boolean` | `false` | Whether lazy loading |

### TreeNode

| Property | Type | Description |
|----------|------|-------------|
| id | string \| number | Node unique identifier |
| label | string | Node label |
| children | TreeNode[] | Children nodes |
| isDisabled | boolean | Whether disabled |
| isLeaf | boolean | Whether leaf node |

### Returns

| Property/Method | Type | Description |
|-----------------|------|-------------|
| flatNodes | `ComputedRef<FlatNode[]>` | Flattened node list |
| expandedKeys | `Ref<Set>` | Expanded node keys |
| checkedKeys | `Ref<Set>` | Checked node keys |
| toggleExpand | `(key) => void` | Toggle expand/collapse |
| toggleCheck | `(key) => void` | Toggle check state |
| expandAll | `() => void` | Expand all nodes |
| collapseAll | `() => void` | Collapse all nodes |
| filterNodes | `(query) => void` | Search filter |
| getCheckedNodes | `() => TreeNode[]` | Get checked nodes |
| appendNode | `(parentKey, node) => void` | Add node |
| removeNode | `(key) => void` | Remove node |
| updateNode | `(key, data) => void` | Update node |

### Example

```typescript
import { ref } from 'vue'
import { useTree } from '@/uni_modules/see-u-ui/utils/hooks/useTree'

const treeData = ref([
  {
    id: 1,
    label: 'Node 1',
    children: [
      { id: 11, label: 'Node 1-1' },
      { id: 12, label: 'Node 1-2' }
    ]
  }
])

const { flatNodes, toggleExpand, expandAll, getCheckedNodes } = useTree({
  data: treeData,
  selectMode: 'check-cascade'
})
```
