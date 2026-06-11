---
layout: doc
outline: deep
title: Subsection 分段器
titleTemplate: SeeYouUI - Subsection 分段器
description: SeeYouUI 组件库 seeSubsection 分段器组件
iframeSrc: /pages/seeSubsection/index
---

# Subsection 分段器

比 Tabs 更轻量的纯切换控件，无内容区。支持三种样式：default（底部高亮条）、button（填充背景）、pill（胶囊滑块）。

## 基础用法

```vue
<template>
  <see-subsection v-model="active" :options="options" />
</template>

<script setup>
import { ref } from 'vue'
const active = ref('one')
const options = [
  { label: '选项一', value: 'one' },
  { label: '选项二', value: 'two' },
  { label: '选项三', value: 'three' }
]
</script>
```

## Button 样式

```vue
<template>
  <see-subsection v-model="active" :options="options" type="button" />
</template>
```

## Pill 样式

```vue
<template>
  <see-subsection v-model="active" :options="options" type="pill" />
</template>
```

## SubsectionOption

| 属性 | 类型 | 说明 |
|------|------|------|
| label | string | 显示文字 |
| value | string \| number | 选项值 |
| isDisabled | boolean | 是否禁用 |

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| modelValue | string \| number | `''` | 当前选中的值 |
| options | SubsectionOption[] | `[]` | 选项列表 |
| type | `'default' \| 'button' \| 'pill'` | `'default'` | 样式类型 |
| size | `'small' \| 'default' \| 'large'` | `'default'` | 尺寸 |
| activeColor | string | `''` | 选中时背景色 |
| isDisabled | boolean | `false` | 是否全部禁用 |
| isFullWidth | boolean | `false` | 是否占满整行宽度 |

## Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| onChange | value, option | 选项切换 |
| update:modelValue | value | v-model 更新 |
