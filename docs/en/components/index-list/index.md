---
layout: doc
outline: deep
title: IndexList
titleTemplate: SeeYouUI - IndexList
description: SeeYouUI component library seeIndexList component
---

# IndexList

A-Z alphabet index list. Supports data grouping, right-side index navigation bar, sticky group headers, and search filtering.

## Basic Usage

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
  console.log('Selected:', item)
}
</script>
```

## With Search

```vue
<template>
  <see-index-list :data="data" :is-show-search="true" />
</template>
```

## IndexListItem

| Property | Type | Description |
|----------|------|-------------|
| index | string | Index value (e.g. A, B, C) |
| name | string | Display name |
| pinyin | string | Pinyin (optional) |
| firstLetter | string | First letter (optional) |

## Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| data | IndexListItem[] | `[]` | Data list |
| indexList | string[] | `[]` | Custom index list |
| indexKey | string | `'index'` | Index field name |
| isPinyin | boolean | `false` | Whether to enable pinyin index |
| isShowSearch | boolean | `false` | Whether to show search box |
| isStickyHeader | boolean | `true` | Whether group headers are sticky |
| height | string \| number | `'100%'` | List height |
| isVirtual | boolean | `false` | Whether to enable virtual scrolling |

## Events

| Event | Parameters | Description |
|-------|-----------|-------------|
| onSelect | item | Item selected |
| onIndexChange | index | Index changed |
