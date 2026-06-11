---
layout: doc
outline: deep
title: useTree 树形数据
titleTemplate: SeeYouUI - useTree 树形数据
description: SeeYouUI 组件库 useTree 树形数据 Hook
iframeSrc: /pages/index/index
---

# 树形数据（useTree）

树形数据管理 Hook，提供扁平化、展开/折叠、选中/级联、搜索过滤、懒加载等功能。

## 基础用法

```typescript
import { ref } from 'vue'
import { useTree } from '@/uni_modules/see-u-ui/utils/hooks/useTree'

const treeData = ref([
  {
    id: 1,
    label: '节点1',
    children: [
      { id: 11, label: '节点1-1' },
      { id: 12, label: '节点1-2' }
    ]
  }
])

const { flatNodes, toggleExpand, expandAll, collapseAll } = useTree({
  data: treeData
})
```

## API

### 参数

| 属性 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| data | Ref&lt;TreeNode[]&gt; | 是 | - | 树形数据（响应式） |
| keyField | string | 否 | `'id'` | 主键字段名 |
| labelField | string | 否 | `'label'` | 标签字段名 |
| childrenField | string | 否 | `'children'` | 子节点字段名 |
| selectMode | string | 否 | `'single'` | 选择模式 |
| isLazy | boolean | 否 | `false` | 是否启用懒加载 |

### selectMode 可选值

| 值 | 说明 |
|------|------|
| single | 单选 |
| multiple | 多选 |
| check-cascade | 级联选择（父子联动） |

### TreeNode

| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | string \| number | 是 | 节点唯一标识 |
| label | string | 是 | 节点标签 |
| children | TreeNode[] | 否 | 子节点列表 |
| isDisabled | boolean | 否 | 是否禁用 |
| isLeaf | boolean | 否 | 是否为叶子节点 |

### FlatNode

| 属性 | 类型 | 说明 |
|------|------|------|
| node | TreeNode | 原始节点 |
| level | number | 层级 |
| parentKey | string \| number \| null | 父节点 key |
| expanded | boolean | 是否展开 |
| isLeaf | boolean | 是否叶子节点 |
| hasChildren | boolean | 是否有子节点 |
| visible | boolean | 是否可见（搜索过滤） |
| checked | boolean | 是否选中 |
| indeterminate | boolean | 是否半选 |

### 返回值

| 属性/方法 | 类型 | 说明 |
|-----------|------|------|
| flatNodes | ComputedRef&lt;FlatNode[]&gt; | 扁平化后的节点列表 |
| expandedKeys | Ref&lt;Set&lt;string \| number&gt;&gt; | 展开的节点 key 集合 |
| checkedKeys | Ref&lt;Set&lt;string \| number&gt;&gt; | 选中的节点 key 集合 |
| selectedKey | Ref&lt;string \| number \| null&gt; | 当前选中的 key |
| toggleExpand | (key: string \| number) => void | 切换展开/折叠 |
| toggleCheck | (key: string \| number) => void | 切换选中状态 |
| selectNode | (key: string \| number) => void | 选择节点（单选） |
| expandAll | () => void | 展开所有节点 |
| collapseAll | () => void | 折叠所有节点 |
| filterNodes | (query: string) => void | 搜索过滤 |
| loadChildren | (key: string \| number, children: TreeNode[]) => void | 懒加载子节点 |
| getCheckedNodes | () => TreeNode[] | 获取选中的节点 |
| getExpandedKeys | () => (string \| number)[] | 获取展开的 key 列表 |
| setExpandedKeys | (keys: (string \| number)[]) => void | 设置展开的 key 列表 |
| appendNode | (parentKey: string \| number \| null, node: TreeNode) => void | 添加节点 |
| removeNode | (key: string \| number) => void | 移除节点 |
| updateNode | (key: string \| number, data: Partial&lt;TreeNode&gt;) => void | 更新节点 |

## 示例

### 展开/折叠

```typescript
const { toggleExpand, expandAll, collapseAll } = useTree({ data: treeData })

// 切换单个节点
toggleExpand(1)

// 展开所有
expandAll()

// 折叠所有
collapseAll()
```

### 级联选择

```typescript
const { toggleCheck, getCheckedNodes, checkedKeys } = useTree({
  data: treeData,
  selectMode: 'check-cascade'
})

// 选中节点（自动联动子节点）
toggleCheck(1)

// 获取所有选中节点
const checked = getCheckedNodes()
console.log(checked)

// 监听选中变化
watch(checkedKeys, (keys) => {
  console.log('选中的 keys:', Array.from(keys))
})
```

### 搜索过滤

```typescript
const { filterNodes, flatNodes } = useTree({ data: treeData })

// 过滤节点
filterNodes('关键词')

// 获取过滤后的节点
console.log(flatNodes.value.filter(n => n.visible))
```

### 动态操作

```typescript
const { appendNode, removeNode, updateNode } = useTree({ data: treeData })

// 添加子节点
appendNode(1, { id: 13, label: '节点1-3' })

// 移除节点
removeNode(11)

// 更新节点
updateNode(1, { label: '新节点1' })
```

### 懒加载

```typescript
const { toggleExpand, loadChildren } = useTree({
  data: treeData,
  isLazy: true
})

// 监听展开事件，加载子节点
const handleExpand = (node) => {
  if (node.children.length === 0) {
    // 异步加载子节点
    fetchChildren(node.id).then((children) => {
      loadChildren(node.id, children)
    })
  }
}
```
