---
layout: doc
outline: deep
title: Tree 树形组件
titleTemplate: SeeYouUI - Tree 树形组件
description: SeeYouUI 组件库 seeTree 树形组件
iframeSrc: /pages/seeTree/index
---

# Tree 树形组件

树形数据展示与选择组件。支持单选/多选/级联选择、搜索过滤、懒加载。

## 基础用法

```vue
<template>
  <see-tree :data="data" />
</template>

<script setup>
const data = [
  {
    id: 1,
    label: '节点1',
    children: [
      { id: 11, label: '节点1-1' },
      { id: 12, label: '节点1-2' }
    ]
  },
  { id: 2, label: '节点2' }
]
</script>
```

## 复选框

```vue
<template>
  <see-tree :data="data" :is-checkable="true" />
</template>
```

## 搜索过滤

```vue
<template>
  <see-tree :data="data" :is-filterable="true" />
</template>
```

## TreeNode

| 属性 | 类型 | 说明 |
|------|------|------|
| id | string \| number | 节点唯一标识 |
| label | string | 节点标签 |
| children | TreeNode[] | 子节点列表 |
| isDisabled | boolean | 是否禁用 |
| isLeaf | boolean | 是否为叶子节点 |
| icon | string | 节点图标 |

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| data | TreeNode[] | `[]` | 树形数据 |
| modelValue | (string \| number)[] | `[]` | 选中的节点 key 列表 |
| selectMode | `'single' \| 'multiple' \| 'check-cascade'` | `'single'` | 选择模式 |
| childrenField | string | `'children'` | 子节点字段名 |
| labelField | string | `'label'` | 标签字段名 |
| keyField | string | `'id'` | 主键字段名 |
| isAccordion | boolean | `false` | 是否启用手风琴模式 |
| isShowConnector | boolean | `false` | 是否显示连接线 |
| isCheckable | boolean | `false` | 是否显示复选框 |
| isExpandAll | boolean | `false` | 是否默认展开所有节点 |
| isFilterable | boolean | `false` | 是否可搜索 |
| isLazy | boolean | `false` | 是否启用懒加载 |
| isVirtual | boolean | `false` | 是否启用虚拟滚动 |
| virtualHeight | number | `400` | 虚拟滚动可视区域高度 |
| nodeHeight | number | `44` | 节点高度 |
| indent | number | `24` | 缩进量（px） |
| emptyText | string | `'暂无数据'` | 空数据提示文字 |

## Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| onNodeClick | node | 节点点击 |
| onNodeExpand | node, expanded | 节点展开/折叠 |
| onCheckChange | checkedKeys, node | 选中状态变更 |
| onLazyLoad | node, resolve | 懒加载触发 |
| onSearch | query, filteredNodes | 搜索触发 |

## Expose

| 方法名 | 参数 | 说明 |
|--------|------|------|
| getCheckedNodes | - | 获取选中的节点 |
| getExpandedKeys | - | 获取展开的 key 列表 |
| setExpandedKeys | keys | 设置展开的 key 列表 |
| expandAll | - | 展开所有节点 |
| collapseAll | - | 折叠所有节点 |
| filter | query | 过滤节点 |
| appendNode | parentKey, node | 添加节点 |
| removeNode | key | 移除节点 |
| updateNode | key, data | 更新节点 |
