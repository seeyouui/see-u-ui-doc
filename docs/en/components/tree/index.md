---
layout: doc
outline: deep
title: Tree
titleTemplate: SeeYouUI - Tree
description: SeeYouUI component library seeTree component
iframeSrc: /pages/seeTree/index
---

# Tree

Tree data display and selection component. Supports single/multiple/cascade selection, search filtering, and lazy loading.

## Basic Usage

```vue
<template>
  <see-tree :data="data" />
</template>

<script setup>
const data = [
  {
    id: 1,
    label: 'Node 1',
    children: [
      { id: 11, label: 'Node 1-1' },
      { id: 12, label: 'Node 1-2' }
    ]
  },
  { id: 2, label: 'Node 2' }
]
</script>
```

## Checkbox

```vue
<template>
  <see-tree :data="data" :is-checkable="true" />
</template>
```

## Search Filter

```vue
<template>
  <see-tree :data="data" :is-filterable="true" />
</template>
```

## TreeNode

| Property | Type | Description |
|----------|------|-------------|
| id | string \| number | Node unique identifier |
| label | string | Node label |
| children | TreeNode[] | Children nodes |
| isDisabled | boolean | Whether disabled |
| isLeaf | boolean | Whether leaf node |
| icon | string | Node icon |

## Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| data | TreeNode[] | `[]` | Tree data |
| modelValue | (string \| number)[] | `[]` | Selected node keys |
| selectMode | `'single' \| 'multiple' \| 'check-cascade'` | `'single'` | Selection mode |
| childrenField | string | `'children'` | Children field name |
| labelField | string | `'label'` | Label field name |
| keyField | string | `'id'` | Key field name |
| isAccordion | boolean | `false` | Whether accordion mode |
| isShowConnector | boolean | `false` | Whether to show connector lines |
| isCheckable | boolean | `false` | Whether to show checkboxes |
| isExpandAll | boolean | `false` | Whether to expand all by default |
| isFilterable | boolean | `false` | Whether searchable |
| isLazy | boolean | `false` | Whether lazy loading |
| isVirtual | boolean | `false` | Whether virtual scrolling |
| virtualHeight | number | `400` | Virtual scroll height |
| nodeHeight | number | `44` | Node height |
| indent | number | `24` | Indent (px) |
| emptyText | string | `'No data'` | Empty text |

## Events

| Event | Parameters | Description |
|-------|-----------|-------------|
| onNodeClick | node | Node click |
| onNodeExpand | node, expanded | Node expand/collapse |
| onCheckChange | checkedKeys, node | Check change |
| onLazyLoad | node, resolve | Lazy load trigger |
| onSearch | query, filteredNodes | Search trigger |

## Expose

| Method | Parameters | Description |
|--------|-----------|-------------|
| getCheckedNodes | - | Get checked nodes |
| getExpandedKeys | - | Get expanded keys |
| setExpandedKeys | keys | Set expanded keys |
| expandAll | - | Expand all |
| collapseAll | - | Collapse all |
| filter | query | Filter nodes |
| appendNode | parentKey, node | Add node |
| removeNode | key | Remove node |
| updateNode | key, data | Update node |
