---
layout: doc
outline: deep
title: useField
titleTemplate: SeeYouUI - useField
description: SeeYouUI 组件库 useField Hook
iframeSrc: /pages/index/index
---

# useField

> `useField` 是一个用于表单字段管理的 Vue 组合式函数，提供单个字段的校验、状态管理等能力。
>
> 它能帮助你轻松处理：字段校验、字段状态追踪、值变更回调等常见场景。
>
> > 此 API 源码：[GitHub](https://github.com/seeyouui/see-u-ui/blob/main/uni_modules/see-u-ui/utils/hooks/useField/index.ts)

## 使用方式

```vue
<template>
  <seeFormItem label="用户名" prop="username">
    <seeInput v-model="formData.username" placeholder="请输入用户名" />
  </seeFormItem>
</template>

<script setup>
import { reactive } from 'vue';
import { useField } from 'see-u-ui';

const formData = reactive({
  username: '',
});

const {
  validateStatus,
  validateMessage,
  validate,
  resetField,
  clearValidate,
  handleChange,
  handleBlur,
} = useField({
  field: 'username',
  getValue: () => formData.username,
  trigger: 'blur',
  rules: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  onValueChange: (value) => {
    formData.username = value;
  },
});
</script>
```

## 参数说明

`useField(options)` 接收一个配置对象作为参数：

| 参数名 | 说明 | 类型 | 默认值 |
| ------ | ---- | ---- | ------ |
| field | 字段名称（必填） | `string` | - |
| getValue | 获取字段当前值的函数（必填） | `() => unknown` | - |
| trigger | 校验触发方式 | `'blur' \| 'change'` | `'blur'` |
| rules | 字段校验规则 | `FormRule \| FormRule[]` | `[]` |
| onValueChange | 字段值变更回调 | `(value: unknown) => void` | - |

## 返回值说明

`useField` 返回一个包含字段操作方法和状态的对象：

| 名称 | 说明 | 类型 |
| ---- | ---- | ---- |
| validateStatus | 当前校验状态 | `Ref<'success' \| 'error' \| 'validating' \| ''>` |
| validateMessage | 当前校验错误信息 | `Ref<string>` |
| isValidating | 是否正在校验中 | `Ref<boolean>` |
| isDisabled | 是否禁用 | `Ref<boolean>` |
| isReadonly | 是否只读 | `Ref<boolean>` |
| isShowMessage | 是否显示校验错误信息 | `Ref<boolean>` |
| validate | 对字段进行校验 | `(trigger?: string) => Promise<void>` |
| resetField | 重置字段值和校验状态 | `() => void` |
| clearValidate | 清除字段校验信息 | `() => void` |
| handleChange | 处理字段值变更（触发 change 校验） | `(value: unknown) => void` |
| handleBlur | 处理字段失焦（触发 blur 校验） | `() => void` |
