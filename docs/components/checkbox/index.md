---
layout: doc
outline: deep
title: Checkbox 复选框
titleTemplate: SeeYouUI - Checkbox 复选框
description: SeeYouUI 组件库 seeCheckbox 组件
iframeSrc: /pages/seeCheckbox/index
---

# Checkbox 复选框

> 复选框组件用于在多个选项中进行多选，支持单独使用或配合 CheckboxGroup 使用，支持全选/半选状态。

## 平台差异说明

| App(vue) | App(nvue) | H5 | 小程序 |
| :------: | :-------: | :-: | :----: |
|    √     |     √     |  √  |   √    |

## 基本使用

单独使用 Checkbox，通过 `v-model` 绑定选中状态。

```html:line-numbers {}
<template>
  <seeCheckbox v-model="checked">选项</seeCheckbox>
</template>

<script setup>
import { ref } from 'vue'

const checked = ref(false)
</script>
```

## CheckboxGroup

使用 `seeCheckboxGroup` 组件包裹多个 `seeCheckbox`，通过 `v-model` 绑定选中的值数组。

```html:line-numbers {}
<template>
  <seeCheckboxGroup v-model="checkedList">
    <seeCheckbox label="option1">选项一</seeCheckbox>
    <seeCheckbox label="option2">选项二</seeCheckbox>
    <seeCheckbox label="option3">选项三</seeCheckbox>
  </seeCheckboxGroup>

  <text>选中值：{{ checkedList }}</text>
</template>

<script setup>
import { ref } from 'vue'

const checkedList = ref(['option1'])
</script>
```

## 全选和半选

通过 `isIndeterminate` 属性实现半选状态，配合 CheckboxGroup 的 `max` 属性使用。

```html:line-numbers {}
<template>
  <seeCheckbox
    v-model="isAllChecked"
    :is-indeterminate="isIndeterminate"
    @change="handleCheckAll"
  >
    全选
  </seeCheckbox>

  <seeCheckboxGroup v-model="checkedList" @change="handleCheckedChange">
    <seeCheckbox label="apple">苹果</seeCheckbox>
    <seeCheckbox label="banana">香蕉</seeCheckbox>
    <seeCheckbox label="orange">橙子</seeCheckbox>
  </seeCheckboxGroup>
</template>

<script setup>
import { ref, computed } from 'vue'

const checkedList = ref(['apple'])
const allOptions = ['apple', 'banana', 'orange']

const isAllChecked = computed(() => {
  return checkedList.value.length === allOptions.length
})

const isIndeterminate = computed(() => {
  return checkedList.value.length > 0 && checkedList.value.length < allOptions.length
})

const handleCheckAll = (val) => {
  checkedList.value = val ? [...allOptions] : []
}

const handleCheckedChange = (value) => {
  const checkedCount = value.length
  isAllChecked.value = checkedCount === allOptions.length
}
</script>
```

## 最多/最少选择

通过 `max` 和 `min` 属性限制可选数量。

```html:line-numbers {}
<template>
  <seeCheckboxGroup v-model="checkedList" :max="3" :min="1">
    <seeCheckbox label="option1">选项一</seeCheckbox>
    <seeCheckbox label="option2">选项二</seeCheckbox>
    <seeCheckbox label="option3">选项三</seeCheckbox>
    <seeCheckbox label="option4">选项四</seeCheckbox>
    <seeCheckbox label="option5">选项五</seeCheckbox>
  </seeCheckboxGroup>

  <text>最少选1个，最多选3个</text>
</template>

<script setup>
import { ref } from 'vue'

const checkedList = ref(['option1'])
</script>
```

## 不同尺寸

通过 `size` 属性设置复选框尺寸，支持 `small`、`default`、`large`。

```html:line-numbers {}
<template>
  <seeCheckboxGroup v-model="checkedList" size="small">
    <seeCheckbox label="option1">小尺寸</seeCheckbox>
    <seeCheckbox label="option2">小尺寸</seeCheckbox>
  </seeCheckboxGroup>

  <seeCheckboxGroup v-model="checkedList" size="default">
    <seeCheckbox label="option1">默认尺寸</seeCheckbox>
    <seeCheckbox label="option2">默认尺寸</seeCheckbox>
  </seeCheckboxGroup>

  <seeCheckboxGroup v-model="checkedList" size="large">
    <seeCheckbox label="option1">大尺寸</seeCheckbox>
    <seeCheckbox label="option2">大尺寸</seeCheckbox>
  </seeCheckboxGroup>
</template>
```

## 边框模式

设置 `isBorder` 属性为 `true` 可显示边框样式。

```html:line-numbers {}
<template>
  <seeCheckboxGroup v-model="checkedList" is-border>
    <seeCheckbox label="option1">选项一</seeCheckbox>
    <seeCheckbox label="option2">选项二</seeCheckbox>
    <seeCheckbox label="option3">选项三</seeCheckbox>
  </seeCheckboxGroup>
</template>

<script setup>
import { ref } from 'vue'

const checkedList = ref([])
</script>
```

## 行内排列

设置 `isInline` 属性为 `true` 可使复选框行内排列。

```html:line-numbers {}
<template>
  <seeCheckboxGroup v-model="checkedList" is-inline>
    <seeCheckbox label="option1">选项一</seeCheckbox>
    <seeCheckbox label="option2">选项二</seeCheckbox>
    <seeCheckbox label="option3">选项三</seeCheckbox>
  </seeCheckboxGroup>
</template>
```

## 禁用状态

通过 `isDisabled` 属性设置禁用状态，可在 Checkbox 或 CheckboxGroup 上设置。

```html:line-numbers {}
<template>
  <!-- 单个禁用 -->
  <seeCheckbox v-model="checked" is-disabled>禁用选项</seeCheckbox>

  <!-- 整组禁用 -->
  <seeCheckboxGroup v-model="checkedList" is-disabled>
    <seeCheckbox label="option1">选项一</seeCheckbox>
    <seeCheckbox label="option2">选项二</seeCheckbox>
  </seeCheckboxGroup>
</template>
```

## 自定义颜色

通过 `checkedColor` 属性设置选中时的颜色。

```html:line-numbers {}
<template>
  <seeCheckboxGroup v-model="checkedList" checked-color="#07c160">
    <seeCheckbox label="option1">选项一</seeCheckbox>
    <seeCheckbox label="option2">选项二</seeCheckbox>
  </seeCheckboxGroup>
</template>
```

## API

### Checkbox Props

| 参数名 | 说明 | 类型 | 默认值 | 可选值 | 平台差异 |
| ------ | ---- | ---- | ------ | ------ | -------- |
| modelValue | 绑定值（单独使用时） | boolean | false | - | - |
| label | 选项的值（在 CheckboxGroup 中使用） | string \| number \| boolean | - | - | - |
| isDisabled | 是否禁用 | boolean | false | - | - |
| isIndeterminate | 是否半选状态 | boolean | false | - | - |
| size | 尺寸 | string | 'default' | 'small' / 'default' / 'large' | - |
| isBorder | 是否显示边框 | boolean | false | - | - |
| checkedColor | 选中时的颜色 | string | '' | - | - |
| name | 表单字段名 | string | '' | - | - |

### CheckboxGroup Props

| 参数名 | 说明 | 类型 | 默认值 | 可选值 | 平台差异 |
| ------ | ---- | ---- | ------ | ------ | -------- |
| modelValue | 绑定值 | (string \| number \| boolean)[] | [] | - | - |
| isDisabled | 是否禁用 | boolean | false | - | - |
| isReadonly | 是否只读 | boolean | false | - | - |
| max | 最多可选数量 | number | - | - | - |
| min | 最少可选数量 | number | - | - | - |
| size | 尺寸 | string | 'default' | 'small' / 'default' / 'large' | - |
| isBorder | 是否显示边框 | boolean | false | - | - |
| isInline | 是否行内排列 | boolean | false | - | - |
| checkedColor | 选中时的颜色 | string | '' | - | - |
| name | 表单字段名 | string | '' | - | - |

### Events

| 事件名 | 说明 | 类型 | 默认值 | 可选值 | 平台差异说明 |
| ------ | ---- | ---- | ------ | ------ | ------------ |
| onChange | 值变化时触发 | Checkbox: (value: boolean) => void; Group: (value: (string \| number \| boolean)[]) => void | - | - | - |

### Slots

| 插槽名 | 说明 |
| ------ | ---- |
| default | CheckboxGroup 的子节点（Checkbox 组件） |
