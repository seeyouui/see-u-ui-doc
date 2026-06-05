---
layout: doc
outline: deep
title: Radio 单选框
titleTemplate: SeeYouUI - Radio 单选框
description: SeeYouUI 组件库 seeRadio 组件
iframeSrc: /pages/seeRadio/index
---

# Radio 单选框

> 单选框组件用于在多个选项中进行单选，支持单独使用或配合 RadioGroup 使用。

## 平台差异说明

| App(vue) | App(nvue) | H5 | 小程序 |
| :------: | :-------: | :-: | :----: |
|    √     |     √     |  √  |   √    |

## 基本使用

使用 `seeRadioGroup` 组件包裹多个 `seeRadio`，通过 `v-model` 绑定选中的值。

```html:line-numbers {}
<template>
  <seeRadioGroup v-model="selected">
    <seeRadio label="option1">选项一</seeRadio>
    <seeRadio label="option2">选项二</seeRadio>
    <seeRadio label="option3">选项三</seeRadio>
  </seeRadioGroup>

  <text>选中值：{{ selected }}</text>
</template>

<script setup>
import { ref } from 'vue'

const selected = ref('option1')
</script>
```

## 行内排列

设置 `isInline` 属性为 `true` 可使单选框行内排列。

```html:line-numbers {}
<template>
  <seeRadioGroup v-model="selected" is-inline>
    <seeRadio label="option1">选项一</seeRadio>
    <seeRadio label="option2">选项二</seeRadio>
    <seeRadio label="option3">选项三</seeRadio>
  </seeRadioGroup>
</template>

<script setup>
import { ref } from 'vue'

const selected = ref('option1')
</script>
```

## 不同尺寸

通过 `size` 属性设置单选框尺寸，支持 `small`、`default`、`large`。

```html:line-numbers {}
<template>
  <seeRadioGroup v-model="selected" size="small">
    <seeRadio label="option1">小尺寸</seeRadio>
    <seeRadio label="option2">小尺寸</seeRadio>
  </seeRadioGroup>

  <seeRadioGroup v-model="selected" size="default">
    <seeRadio label="option1">默认尺寸</seeRadio>
    <seeRadio label="option2">默认尺寸</seeRadio>
  </seeRadioGroup>

  <seeRadioGroup v-model="selected" size="large">
    <seeRadio label="option1">大尺寸</seeRadio>
    <seeRadio label="option2">大尺寸</seeRadio>
  </seeRadioGroup>
</template>
```

## 边框模式

设置 `isBorder` 属性为 `true` 可显示边框样式。

```html:line-numbers {}
<template>
  <seeRadioGroup v-model="selected" is-border>
    <seeRadio label="option1">选项一</seeRadio>
    <seeRadio label="option2">选项二</seeRadio>
    <seeRadio label="option3">选项三</seeRadio>
  </seeRadioGroup>
</template>

<script setup>
import { ref } from 'vue'

const selected = ref('')
</script>
```

## 禁用状态

通过 `isDisabled` 属性设置禁用状态，可在 Radio 或 RadioGroup 上设置。

```html:line-numbers {}
<template>
  <!-- 单个禁用 -->
  <seeRadioGroup v-model="selected">
    <seeRadio label="option1">选项一</seeRadio>
    <seeRadio label="option2" is-disabled>禁用选项</seeRadio>
    <seeRadio label="option3">选项三</seeRadio>
  </seeRadioGroup>

  <!-- 整组禁用 -->
  <seeRadioGroup v-model="selected" is-disabled>
    <seeRadio label="option1">选项一</seeRadio>
    <seeRadio label="option2">选项二</seeRadio>
    <seeRadio label="option3">选项三</seeRadio>
  </seeRadioGroup>
</template>

<script setup>
import { ref } from 'vue'

const selected = ref('option1')
</script>
```

## 只读状态

设置 `isReadonly` 属性为 `true`，单选框可选中但不可修改。

```html:line-numbers {}
<template>
  <seeRadioGroup v-model="selected" is-readonly>
    <seeRadio label="option1">选项一</seeRadio>
    <seeRadio label="option2">选项二</seeRadio>
    <seeRadio label="option3">选项三</seeRadio>
  </seeRadioGroup>
</template>
```

## 自定义颜色

通过 `checkedColor` 属性设置选中时的颜色。

```html:line-numbers {}
<template>
  <seeRadioGroup v-model="selected" checked-color="#07c160">
    <seeRadio label="option1">选项一</seeRadio>
    <seeRadio label="option2">选项二</seeRadio>
    <seeRadio label="option3">选项三</seeRadio>
  </seeRadioGroup>
</template>
```

## 表单中使用

在表单中使用单选框，配合 `name` 属性。

```html:line-numbers {}
<template>
  <seeForm :model="formData">
    <seeFormItem label="性别" prop="gender">
      <seeRadioGroup v-model="formData.gender" name="gender">
        <seeRadio label="male">男</seeRadio>
        <seeRadio label="female">女</seeRadio>
        <seeRadio label="other">其他</seeRadio>
      </seeRadioGroup>
    </seeFormItem>
  </seeForm>
</template>

<script setup>
import { reactive } from 'vue'

const formData = reactive({
  gender: 'male'
})
</script>
```

## API

### Radio Props

| 参数名 | 说明 | 类型 | 默认值 | 可选值 | 平台差异 |
| ------ | ---- | ---- | ------ | ------ | -------- |
| label | 选项的值 | string \| number \| boolean | - | - | - |
| isDisabled | 是否禁用 | boolean | false | - | - |
| size | 尺寸 | string | 'default' | 'small' / 'default' / 'large' | - |
| isBorder | 是否显示边框 | boolean | false | - | - |
| checkedColor | 选中时的颜色 | string | '' | - | - |
| name | 表单字段名 | string | '' | - | - |

### RadioGroup Props

| 参数名 | 说明 | 类型 | 默认值 | 可选值 | 平台差异 |
| ------ | ---- | ---- | ------ | ------ | -------- |
| modelValue | 绑定值 | string \| number \| boolean | - | - | - |
| isDisabled | 是否禁用 | boolean | false | - | - |
| isReadonly | 是否只读 | boolean | false | - | - |
| size | 尺寸 | string | 'default' | 'small' / 'default' / 'large' | - |
| isBorder | 是否显示边框 | boolean | false | - | - |
| isInline | 是否行内排列 | boolean | false | - | - |
| checkedColor | 选中时的颜色 | string | '' | - | - |
| name | 表单字段名 | string | '' | - | - |

### Events

| 事件名 | 说明 | 类型 | 默认值 | 可选值 | 平台差异说明 |
| ------ | ---- | ---- | ------ | ------ | ------------ |
| onChange | 值变化时触发 | (value: string \| number \| boolean) => void | - | - | - |
