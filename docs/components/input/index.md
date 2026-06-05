---
layout: doc
outline: deep
title: Input 输入框
titleTemplate: SeeYouUI - Input 输入框
description: SeeYouUI 组件库 seeInput 组件
iframeSrc: /pages/seeInput/index
---

# Input 输入框

> 输入框组件用于通过键盘输入内容，是最基础的表单域包装。支持文本、密码、数字等多种输入类型。

## 平台差异说明

| App(vue) | App(nvue) | H5 | 小程序 |
| :------: | :-------: | :-: | :----: |
|    √     |     √     |  √  |   √    |

## 基本使用

```html:line-numbers {}
<template>
  <seeInput v-model="value" placeholder="请输入内容" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>
```

## 输入类型

通过 `type` 属性设置输入类型，支持 `text`、`number`、`password`、`digit`、`tel`、`idcard`。

```html:line-numbers {}
<template>
  <seeInput v-model="textValue" type="text" placeholder="文本输入" />
  <seeInput v-model="numberValue" type="number" placeholder="数字输入" />
  <seeInput v-model="passwordValue" type="password" placeholder="密码输入" />
  <seeInput v-model="digitValue" type="digit" placeholder="整数输入" />
  <seeInput v-model="telValue" type="tel" placeholder="电话输入" />
</template>

<script setup>
import { ref } from 'vue'

const textValue = ref('')
const numberValue = ref('')
const passwordValue = ref('')
const digitValue = ref('')
const telValue = ref('')
</script>
```

## 密码输入

设置 `type="password"` 可创建密码输入框，配合 `showPassword` 属性可切换密码可见性。

```html:line-numbers {}
<template>
  <seeInput
    v-model="password"
    type="password"
    placeholder="请输入密码"
    show-password
  />
</template>

<script setup>
import { ref } from 'vue'

const password = ref('')
</script>
```

## 清除按钮

设置 `isClearable` 属性可显示清除按钮，一键清空输入内容。

```html:line-numbers {}
<template>
  <seeInput
    v-model="value"
    placeholder="可清除的输入框"
    is-clearable
  />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('可清除的内容')
</script>
```

## 字数统计

设置 `isShowWordLimit` 属性可显示字数统计，需配合 `maxlength` 使用。

```html:line-numbers {}
<template>
  <seeInput
    v-model="value"
    placeholder="请输入内容"
    maxlength="20"
    is-show-word-limit
  />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>
```

## 前缀和后缀图标

通过 `prefixIcon` 和 `suffixIcon` 属性设置前缀和后缀图标。

```html:line-numbers {}
<template>
  <seeInput
    v-model="value"
    prefix-icon="search"
    placeholder="搜索内容"
  />
  <seeInput
    v-model="value"
    suffix-icon="calendar"
    placeholder="选择日期"
  />
</template>
```

## 插槽方式

使用 `prefix` 和 `suffix` 插槽自定义前缀和后缀内容。

```html:line-numbers {}
<template>
  <seeInput v-model="value" placeholder="请输入网址">
    <template #prefix>
      <text>https://</text>
    </template>
    <template #suffix>
      <text>.com</text>
    </template>
  </seeInput>
</template>
```

## 格式化输入

通过 `formatter` 属性对输入内容进行格式化，例如手机号、银行卡号等。

```html:line-numbers {}
<template>
  <seeInput
    v-model="phone"
    type="tel"
    placeholder="请输入手机号"
    :formatter="formatPhone"
    maxlength="13"
  />
</template>

<script setup>
import { ref } from 'vue'

const phone = ref('')

const formatPhone = (value) => {
  // 手机号格式化：xxx xxxx xxxx
  const cleaned = value.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{0,4})(\d{0,4})$/)
  if (match) {
    return [match[1], match[2], match[3]].filter(Boolean).join(' ')
  }
  return cleaned
}
</script>
```

## 不同尺寸

通过 `size` 属性设置输入框尺寸，支持 `small`、`default`、`large`。

```html:line-numbers {}
<template>
  <seeInput v-model="value" size="small" placeholder="小尺寸" />
  <seeInput v-model="value" size="default" placeholder="默认尺寸" />
  <seeInput v-model="value" size="large" placeholder="大尺寸" />
</template>
```

## 禁用和只读

通过 `isDisabled` 和 `isReadonly` 属性设置禁用和只读状态。

```html:line-numbers {}
<template>
  <seeInput v-model="value" is-disabled placeholder="禁用状态" />
  <seeInput v-model="value" is-readonly placeholder="只读状态" />
</template>
```

## 无边框模式

设置 `isBorder` 为 `false` 可隐藏输入框边框。

```html:line-numbers {}
<template>
  <seeInput v-model="value" :is-border="false" placeholder="无边框输入框" />
</template>
```

## API

### Props

| 参数名 | 说明 | 类型 | 默认值 | 可选值 | 平台差异 |
| ------ | ---- | ---- | ------ | ------ | -------- |
| modelValue | 绑定值 | string \| number | '' | - | - |
| type | 输入类型 | string | 'text' | 'text' / 'number' / 'password' / 'digit' / 'tel' / 'idcard' | - |
| placeholder | 占位符 | string | '' | - | - |
| isDisabled | 是否禁用 | boolean | false | - | - |
| isReadonly | 是否只读 | boolean | false | - | - |
| isClearable | 是否显示清除按钮 | boolean | false | - | - |
| maxlength | 最大输入长度 | number | -1 | - | - |
| isShowWordLimit | 是否显示字数统计 | boolean | false | - | - |
| prefixIcon | 前缀图标 | string | '' | - | - |
| suffixIcon | 后缀图标 | string | '' | - | - |
| size | 尺寸 | string | 'default' | 'small' / 'default' / 'large' | - |
| isBorder | 是否显示边框 | boolean | true | - | - |
| formatter | 输入格式化函数 | (value: string) => string | - | - | - |
| name | 表单字段名 | string | '' | - | - |
| showPassword | 是否显示密码切换按钮 | boolean | false | - | - |

### Events

| 事件名 | 说明 | 类型 | 默认值 | 可选值 | 平台差异说明 |
| ------ | ---- | ---- | ------ | ------ | ------------ |
| onInput | 输入时触发 | (value: string \| number) => void | - | - | - |
| onFocus | 获取焦点时触发 | (event: FocusEvent) => void | - | - | - |
| onBlur | 失去焦点时触发 | (event: FocusEvent) => void | - | - | - |
| onClear | 点击清除按钮时触发 | () => void | - | - | - |
| onChange | 值改变时触发（失去焦点或回车） | (value: string \| number) => void | - | - | - |
| onConfirm | 点击完成按钮时触发 | (value: string \| number) => void | - | - | 小程序键盘确认 |

### Slots

| 插槽名 | 说明 |
| ------ | ---- |
| prefix | 输入框头部内容 |
| suffix | 输入框尾部内容 |
