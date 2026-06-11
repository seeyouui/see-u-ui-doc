---
layout: doc
outline: deep
title: Pagination
titleTemplate: SeeYouUI - Pagination
description: SeeYouUI component library seePagination component
---

# Pagination

Pagination navigation component. Supports three modes: button (button + page number), simple (prev/next + text), number (full page numbers + ellipsis).

## Basic Usage

```vue
<template>
  <see-pagination v-model="page" :total="200" :page-size="10" />
</template>

<script setup>
import { ref } from 'vue'
const page = ref(1)
</script>
```

## Button Mode

```vue
<template>
  <see-pagination v-model="page" :total="100" mode="button" />
</template>
```

## Simple Mode

```vue
<template>
  <see-pagination v-model="page" :total="100" mode="simple" />
</template>
```

## Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| modelValue | number | `1` | Current page number |
| total | number | `0` | Total items |
| pageSize | number | `10` | Items per page |
| mode | `'button' \| 'simple' \| 'number'` | `'number'` | Display mode |
| maxPages | number | `7` | Max visible page numbers |
| isShowTotal | boolean | `false` | Whether to show total |
| isShowSizeChanger | boolean | `false` | Whether to show page size selector |
| pageSizeOptions | number[] | `[10, 20, 50, 100]` | Page size options |
| prevText | string | `'‹'` | Previous page text |
| nextText | string | `'›'` | Next page text |
| isDisabled | boolean | `false` | Whether disabled |

## Events

| Event | Parameters | Description |
|-------|-----------|-------------|
| onChange | page, pageSize | Page change |
| update:modelValue | value | v-model update |
