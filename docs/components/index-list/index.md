---
layout: doc
outline: deep
title: IndexList 索引列表
titleTemplate: SeeYouUI - IndexList 索引列表
description: SeeYouUI 组件库 seeIndexList 索引列表组件
---

# IndexList 索引列表

A-Z 字母索引列表。支持数据分组、右侧索引导航条、分组标题吸顶、搜索过滤。

## 基础用法

```vue
<template>
  <see-index-list :data="data" @on-select="onSelect" />
</template>

<script setup>
const data = [
  { index: 'A', name: 'Alice' },
  { index: 'B', name: 'Bob' },
  { index: 'C', name: 'Charlie' }
]

const onSelect = (item) => {
  console.log('选中:', item)
}
</script>
```

## 带搜索框

```vue
<template>
  <see-index-list :data="data" :is-show-search="true" />
</template>
```

## IndexListItem

| 属性 | 类型 | 说明 |
|------|------|------|
| index | string | 索引值（如 A, B, C） |
| name | string | 显示名称 |
| pinyin | string | 拼音（可选） |
| firstLetter | string | 首字母（可选） |

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| data | IndexListItem[] | `[]` | 数据列表 |
| indexList | string[] | `[]` | 自定义索引列表 |
| indexKey | string | `'index'` | 索引字段名 |
| isPinyin | boolean | `false` | 是否启用拼音索引 |
| isShowSearch | boolean | `false` | 是否显示搜索框 |
| isStickyHeader | boolean | `true` | 分组标题是否吸顶 |
| height | string \| number | `'100%'` | 列表高度 |
| isVirtual | boolean | `false` | 是否启用虚拟滚动 |

## Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| onSelect | item | 选中项 |
| onIndexChange | index | 索引变更 |
