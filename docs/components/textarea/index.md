---
layout: doc
outline: deep
title: Textarea 文本域
titleTemplate: SeeYouUI - Textarea 文本域
description: SeeYouUI 组件库 seeTextarea 组件
iframeSrc: /pages/seeTextarea/index
---

# Textarea 文本域

> 文本域组件用于多行文本输入，支持自动高度、字数统计、清除等功能。

## 平台差异说明

| App(vue) | App(nvue) | H5 | 小程序 |
| :------: | :-------: | :-: | :----: |
|    √     |     √     |  √  |   √    |

## 基本使用

```html:line-numbers {}
<template>
  <seeTextarea v-model="value" placeholder="请输入内容" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>
```

## 设置行数

通过 `rows` 属性设置文本域默认显示行数。

```html:line-numbers {}
<template>
  <seeTextarea v-model="value" :rows="5" placeholder="5行高度的文本域" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>
```

## 自动高度

设置 `isAutoHeight` 属性，文本域高度会根据内容自动调整。

```html:line-numbers {}
<template>
  <seeTextarea
    v-model="value"
    placeholder="输入内容，高度会自动调整"
    is-auto-height
  />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>
```

## 字数统计

设置 `isShowWordLimit` 属性可显示字数统计，需配合 `maxlength` 使用。

```html:line-numbers {}
<template>
  <seeTextarea
    v-model="value"
    placeholder="请输入内容"
    maxlength="200"
    is-show-word-limit
  />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>
```

## 清除按钮

设置 `isClearable` 属性可显示清除按钮，一键清空输入内容。

```html:line-numbers {}
<template>
  <seeTextarea
    v-model="value"
    placeholder="可清除的文本域"
    is-clearable
  />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('可清除的内容')
</script>
```

## 禁用和只读

通过 `isDisabled` 和 `isReadonly` 属性设置禁用和只读状态。

```html:line-numbers {}
<template>
  <seeTextarea v-model="value" is-disabled placeholder="禁用状态" />
  <seeTextarea v-model="value" is-readonly placeholder="只读状态" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>
```

## 不同尺寸

通过 `size` 属性设置文本域尺寸，支持 `small`、`default`、`large`。

```html:line-numbers {}
<template>
  <seeTextarea v-model="value" size="small" placeholder="小尺寸" />
  <seeTextarea v-model="value" size="default" placeholder="默认尺寸" />
  <seeTextarea v-model="value" size="large" placeholder="大尺寸" />
</template>
```

## 无边框模式

设置 `isBorder` 为 `false` 可隐藏文本域边框。

```html:line-numbers {}
<template>
  <seeTextarea v-model="value" :is-border="false" placeholder="无边框文本域" />
</template>
```

## 键盘确认键

通过 `confirmType` 属性设置键盘右下角确认键的文字。

```html:line-numbers {}
<template>
  <seeTextarea v-model="value" confirm-type="done" placeholder="确认键为'完成'" />
</template>
```

## API

### Props

| 参数名 | 说明 | 类型 | 默认值 | 可选值 | 平台差异 |
| ------ | ---- | ---- | ------ | ------ | -------- |
| modelValue | 绑定值 | string | '' | - | - |
| placeholder | 占位符 | string | '' | - | - |
| isDisabled | 是否禁用 | boolean | false | - | - |
| isReadonly | 是否只读 | boolean | false | - | - |
| maxlength | 最大输入长度 | number | -1 | - | - |
| isShowWordLimit | 是否显示字数统计 | boolean | false | - | - |
| rows | 默认显示行数 | number | 3 | - | - |
| isAutoHeight | 是否自动高度 | boolean | false | - | - |
| isBorder | 是否显示边框 | boolean | true | - | - |
| isClearable | 是否显示清除按钮 | boolean | false | - | - |
| size | 尺寸 | string | 'default' | 'small' / 'default' / 'large' | - |
| name | 表单字段名 | string | '' | - | - |
| confirmType | 键盘确认键类型 | string | 'done' | 'done' / 'send' / 'search' / 'next' / 'go' | 小程序 |

### Events

| 事件名 | 说明 | 类型 | 默认值 | 可选值 | 平台差异说明 |
| ------ | ---- | ---- | ------ | ------ | ------------ |
| onInput | 输入时触发 | (value: string) => void | - | - | - |
| onFocus | 获取焦点时触发 | (event: FocusEvent) => void | - | - | - |
| onBlur | 失去焦点时触发 | (event: FocusEvent) => void | - | - | - |
| onClear | 点击清除按钮时触发 | () => void | - | - | - |
| onChange | 值改变时触发（失去焦点） | (value: string) => void | - | - | - |
| onConfirm | 点击完成按钮时触发 | (value: string) => void | - | - | 小程序键盘确认 |
| onLineChange | 行数变化时触发 | (event: { height: number, heightRpx: number, lineCount: number }) => void | - | - | - |
