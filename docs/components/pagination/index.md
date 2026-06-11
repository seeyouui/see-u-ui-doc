---
layout: doc
outline: deep
title: Pagination 分页器
titleTemplate: SeeYouUI - Pagination 分页器
description: SeeYouUI 组件库 seePagination 分页器组件
---

# Pagination 分页器

分页导航组件。支持三种模式：button（按钮+页码）、simple（上/下页+文字）、number（完整页码+省略号）。

## 基础用法

```vue
<template>
  <see-pagination v-model="page" :total="200" :page-size="10" />
</template>

<script setup>
import { ref } from 'vue'
const page = ref(1)
</script>
```

## Button 模式

```vue
<template>
  <see-pagination v-model="page" :total="100" mode="button" />
</template>
```

## Simple 模式

```vue
<template>
  <see-pagination v-model="page" :total="100" mode="simple" />
</template>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| modelValue | number | `1` | 当前页码 |
| total | number | `0` | 总条数 |
| pageSize | number | `10` | 每页条数 |
| mode | `'button' \| 'simple' \| 'number'` | `'number'` | 显示模式 |
| maxPages | number | `7` | 最多显示页码数 |
| isShowTotal | boolean | `false` | 是否显示总数 |
| isShowSizeChanger | boolean | `false` | 是否显示每页条数选择器 |
| pageSizeOptions | number[] | `[10, 20, 50, 100]` | 每页条数选项 |
| prevText | string | `'‹'` | 上一页文字 |
| nextText | string | `'›'` | 下一页文字 |
| isDisabled | boolean | `false` | 是否禁用 |

## Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| onChange | page, pageSize | 页码变更 |
| update:modelValue | value | v-model 更新 |
