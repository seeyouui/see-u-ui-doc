---
layout: doc
outline: deep
title: Hooks 工具函数
titleTemplate: SeeYouUI - Hooks 工具函数
description: SeeYouUI 组件库 hooks 工具函数
---

# Hooks 工具函数

SeeYouUI 提供了一组实用的 Hooks，用于处理路由、安全区、滚动监听、树形数据等常见场景。

## useRoute

跨平台路由统一封装，统一参数格式，自动编码 params。

```typescript
import { useRoute } from '@/uni_modules/see-u-ui/utils/hooks/useRoute'

const { navigateTo, redirectTo, switchTab, reLaunch, navigateBack, currentRoute, getQuery } = useRoute()
```

### 返回值

| 属性/方法 | 类型 | 说明 |
|-----------|------|------|
| navigateTo | `(options: RouteOptions) => Promise<void>` | 跳转到新页面（压栈） |
| redirectTo | `(options: RouteOptions) => Promise<void>` | 重定向到新页面（替换当前页） |
| switchTab | `(options: RouteOptions) => Promise<void>` | 切换 Tab 页 |
| reLaunch | `(options: RouteOptions) => Promise<void>` | 关闭所有页面并打开新页面 |
| navigateBack | `(delta?: number) => Promise<void>` | 返回上一页，默认 delta=1 |
| currentRoute | `Ref<{ path, params }>` | 当前路由信息 |
| getQuery | `<T>() => T` | 获取当前页面参数 |

### RouteOptions

| 属性 | 类型 | 说明 |
|------|------|------|
| url | `string` | 目标页面路径 |
| params | `Record<string, any>` | 路由参数，自动序列化编码 |
| animationType | `string` | 页面动画类型（仅 APP） |

### 示例

```typescript
// 跳转并传递参数
await navigateTo({
  url: '/pages/detail/index',
  params: { id: '123', name: 'test' }
})

// 返回上一页
await navigateBack()

// 返回上两页
await navigateBack(2)
```

---

## useSafeArea

获取设备安全区内边距信息，结果缓存在模块级别（单例模式）。

```typescript
import { useSafeArea } from '@/uni_modules/see-u-ui/utils/hooks/useSafeArea'

const { top, bottom, left, right } = useSafeArea()
```

### 返回值

| 属性 | 类型 | 说明 |
|------|------|------|
| top | `Ref<number>` | 顶部安全区距离（px） |
| bottom | `Ref<number>` | 底部安全区距离（px） |
| left | `Ref<number>` | 左侧安全区距离（px） |
| right | `Ref<number>` | 右侧安全区距离（px） |

### 示例

```vue
<template>
  <view :style="{ paddingTop: top + 'px' }">
    <text>内容区域</text>
  </view>
</template>

<script setup>
import { useSafeArea } from '@/uni_modules/see-u-ui/utils/hooks/useSafeArea'
const { top, bottom } = useSafeArea()
</script>
```

---

## useScrollSpy

监听页面或指定容器的滚动位置，支持节流和方向判断。

```typescript
import { useScrollSpy } from '@/uni_modules/see-u-ui/utils/hooks/useScrollSpy'

const { scrollTop, isScrolling, scrollDirection } = useScrollSpy()
```

### 参数

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| target | string | `''` | 滚动容器选择器（H5 专用）；缺省时监听 window/页面滚动 |
| throttle | number | `0` | 节流间隔（ms）。`0`（默认）使用 `requestAnimationFrame` 节流；`> 0` 使用 setTimeout 节流（leading + trailing） |

### 返回值

| 属性 | 类型 | 说明 |
|------|------|------|
| scrollTop | `Ref<number>` | 当前滚动距离（px） |
| isScrolling | `Ref<boolean>` | 是否正在滚动 |
| scrollDirection | `Ref<'up' \| 'down' \| 'idle'>` | 滚动方向，初始为 `'idle'` |

### 示例

```vue
<template>
  <view v-if="scrollTop > 200" class="back-top" @tap="scrollToTop">
    回到顶部
  </view>
</template>

<script setup>
import { useScrollSpy } from '@/uni_modules/see-u-ui/utils/hooks/useScrollSpy'
const { scrollTop, scrollDirection } = useScrollSpy()
</script>
```

---

## useTree

树形数据管理 Hook，提供扁平化、展开/折叠、选中/级联、搜索过滤、懒加载等功能。

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

### 参数

| 属性 | 类型 | 默认值 | 说明 |
|------------|------|--------|------|
| data | `Ref<TreeNode[]>` | - | 树形数据（响应式） |
| keyField | `string` | `'id'` | 主键字段名 |
| labelField | `string` | `'label'` | 标签字段名 |
| childrenField | `string` | `'children'` | 子节点字段名 |
| selectMode | `string` | `'single'` | 选择模式：single / multiple / check-cascade |
| isLazy | `boolean` | `false` | 是否启用懒加载 |

### TreeNode

| 属性 | 类型 | 说明 |
|------|------|------|
| id | string \| number | 节点唯一标识 |
| label | string | 节点标签 |
| children | TreeNode[] | 子节点列表 |
| isDisabled | boolean | 是否禁用 |
| isLeaf | boolean | 是否为叶子节点 |

### 返回值

| 属性/方法 | 类型 | 说明 |
|-----------|------|------|
| flatNodes | `ComputedRef<FlatNode[]>` | 扁平化后的节点列表 |
| expandedKeys | `Ref<Set>` | 展开的节点 key 集合 |
| checkedKeys | `Ref<Set>` | 选中的节点 key 集合 |
| toggleExpand | `(key) => void` | 切换展开/折叠 |
| toggleCheck | `(key) => void` | 切换选中状态 |
| expandAll | `() => void` | 展开所有节点 |
| collapseAll | `() => void` | 折叠所有节点 |
| filterNodes | `(query) => void` | 搜索过滤 |
| getCheckedNodes | `() => TreeNode[]` | 获取选中的节点 |
| appendNode | `(parentKey, node) => void` | 添加节点 |
| removeNode | `(key) => void` | 移除节点 |
| updateNode | `(key, data) => void` | 更新节点 |

### 示例

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

const { flatNodes, toggleExpand, expandAll, getCheckedNodes } = useTree({
  data: treeData,
  selectMode: 'check-cascade'
})
```
