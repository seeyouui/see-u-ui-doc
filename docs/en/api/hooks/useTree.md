---
layout: doc
outline: deep
title: useTree
titleTemplate: SeeYouUI - useTree
description: SeeYouUI component library useTree Hook
iframeSrc: /pages/index/index
---

# Tree Data（useTree）

Tree data management Hook providing flattening, expand/collapse, selection/cascade, search filtering, and lazy loading.

## Basic Usage

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

const { flatNodes, toggleExpand, expandAll, collapseAll } = useTree({
  data: treeData
})
```

## API

### Options

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| data | Ref&lt;TreeNode[]&gt; | Yes | - | Tree data (reactive) |
| keyField | string | No | `'id'` | Key field name |
| labelField | string | No | `'label'` | Label field name |
| childrenField | string | No | `'children'` | Children field name |
| selectMode | string | No | `'single'` | Selection mode |
| isLazy | boolean | No | `false` | Whether lazy loading |

### selectMode Values

| Value | Description |
|-------|-------------|
| single | Single select |
| multiple | Multiple select |
| check-cascade | Cascade selection (parent-child linked) |

### TreeNode

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | string \| number | Yes | Node unique identifier |
| label | string | Yes | Node label |
| children | TreeNode[] | No | Children nodes |
| isDisabled | boolean | No | Whether disabled |
| isLeaf | boolean | No | Whether leaf node |

### FlatNode

| Property | Type | Description |
|----------|------|-------------|
| node | TreeNode | Original node |
| level | number | Nesting level |
| parentKey | string \| number \| null | Parent node key |
| expanded | boolean | Whether expanded |
| isLeaf | boolean | Whether leaf node |
| hasChildren | boolean | Whether has children |
| visible | boolean | Whether visible (search filter) |
| checked | boolean | Whether checked |
| indeterminate | boolean | Whether indeterminate |

### Returns

| Property/Method | Type | Description |
|-----------------|------|-------------|
| flatNodes | ComputedRef&lt;FlatNode[]&gt; | Flattened node list |
| expandedKeys | Ref&lt;Set&lt;string \| number&gt;&gt; | Expanded node keys |
| checkedKeys | Ref&lt;Set&lt;string \| number&gt;&gt; | Checked node keys |
| selectedKey | Ref&lt;string \| number \| null&gt; | Currently selected key |
| toggleExpand | (key: string \| number) => void | Toggle expand/collapse |
| toggleCheck | (key: string \| number) => void | Toggle check state |
| selectNode | (key: string \| number) => void | Select node (single) |
| expandAll | () => void | Expand all nodes |
| collapseAll | () => void | Collapse all nodes |
| filterNodes | (query: string) => void | Search filter |
| loadChildren | (key: string \| number, children: TreeNode[]) => void | Lazy load children |
| getCheckedNodes | () => TreeNode[] | Get checked nodes |
| getExpandedKeys | () => (string \| number)[] | Get expanded keys |
| setExpandedKeys | (keys: (string \| number)[]) => void | Set expanded keys |
| appendNode | (parentKey: string \| number \| null, node: TreeNode) => void | Add node |
| removeNode | (key: string \| number) => void | Remove node |
| updateNode | (key: string \| number, data: Partial&lt;TreeNode&gt;) => void | Update node |

## Examples

### Expand/Collapse

```typescript
const { toggleExpand, expandAll, collapseAll } = useTree({ data: treeData })

// Toggle single node
toggleExpand(1)

// Expand all
expandAll()

// Collapse all
collapseAll()
```

### Cascade Selection

```typescript
const { toggleCheck, getCheckedNodes, checkedKeys } = useTree({
  data: treeData,
  selectMode: 'check-cascade'
})

// Check node (auto-links children)
toggleCheck(1)

// Get all checked nodes
const checked = getCheckedNodes()
console.log(checked)

// Watch checked changes
watch(checkedKeys, (keys) => {
  console.log('Checked keys:', Array.from(keys))
})
```

### Search Filter

```typescript
const { filterNodes, flatNodes } = useTree({ data: treeData })

// Filter nodes
filterNodes('keyword')

// Get filtered nodes
console.log(flatNodes.value.filter(n => n.visible))
```

### Dynamic Operations

```typescript
const { appendNode, removeNode, updateNode } = useTree({ data: treeData })

// Add child node
appendNode(1, { id: 13, label: 'Node 1-3' })

// Remove node
removeNode(11)

// Update node
updateNode(1, { label: 'New Node 1' })
```

### Lazy Loading

```typescript
const { toggleExpand, loadChildren } = useTree({
  data: treeData,
  isLazy: true
})

// Listen for expand events, load children
const handleExpand = (node) => {
  if (node.children.length === 0) {
    // Async load children
    fetchChildren(node.id).then((children) => {
      loadChildren(node.id, children)
    })
  }
}
```
