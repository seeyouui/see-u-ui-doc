---
layout: doc
outline: deep
title: useForm
titleTemplate: SeeYouUI - useForm
description: SeeYouUI 组件库 useForm Hook
iframeSrc: /pages/index/index
---

# 表单管理（useForm）

> `useForm` 是一个用于表单管理的 Vue 组合式函数，提供表单数据绑定、校验、重置等能力。
>
> 它能帮助你轻松处理：表单数据管理、表单校验、字段联动、表单重置等常见场景。
>
> > 此 API 源码：[GitHub](https://github.com/seeyouui/see-u-ui/blob/main/uni_modules/see-u-ui/utils/hooks/useForm/index.ts)

## 使用方式

```vue
<template>
  <seeForm ref="formRef" :model="formData" :rules="rules">
    <seeFormItem label="用户名" prop="username">
      <seeInput v-model="formData.username" placeholder="请输入用户名" />
    </seeFormItem>
    <seeFormItem label="邮箱" prop="email">
      <seeInput v-model="formData.email" placeholder="请输入邮箱" />
    </seeFormItem>
    <seeFormItem>
      <seeButton type="primary" @click="handleSubmit">提交</seeButton>
      <seeButton @click="handleReset">重置</seeButton>
    </seeFormItem>
  </seeForm>
</template>

<script setup>
import { reactive } from 'vue';
import { useForm } from 'see-u-ui';

const formData = reactive({
  username: '',
  email: '',
});

const rules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
};

const { validate, resetFields, clearValidate } = useForm({
  model: formData,
  rules,
});

const handleSubmit = async () => {
  try {
    await validate();
    console.log('校验通过', formData);
  } catch (error) {
    console.log('校验失败', error);
  }
};

const handleReset = () => {
  resetFields();
};
</script>
```

## 参数说明

`useForm(options)` 接收一个配置对象作为参数：

| 参数名 | 说明 | 类型 | 默认值 |
| ------ | ---- | ---- | ------ |
| model | 表单数据对象（必填） | `Record<string, unknown>` | - |
| rules | 校验规则 | `Record<string, FormRule \| FormRule[]>` | `{}` |
| labelPosition | 标签位置 | `'left' \| 'right' \| 'top'` | `'right'` |
| labelWidth | 标签宽度 | `string \| number` | `'auto'` |
| isDisabled | 是否禁用整组 | `boolean` | `false` |
| isReadonly | 是否只读整组 | `boolean` | `false` |
| isRequiredAsterisk | 是否显示必填星号 | `boolean` | `true` |
| isShowMessage | 是否显示校验错误信息 | `boolean` | `true` |
| isInline | 是否行内模式 | `boolean` | `false` |
| size | 尺寸 | `'small' \| 'default' \| 'large'` | `'default'` |

## 返回值说明

`useForm` 返回一个包含表单操作方法的对象：

| 方法名 | 说明 | 参数 | 返回值 |
| ------ | ---- | ---- | ------ |
| validate | 对整个表单进行校验 | `callback?: (valid: boolean) => void` | `Promise<boolean>` |
| validateField | 对部分字段进行校验 | `props: string \| string[], callback?: (valid: boolean) => void` | `Promise<void>` |
| resetFields | 重置表单字段值 | `props?: string \| string[]` | `void` |
| clearValidate | 清除表单校验信息 | `props?: string \| string[]` | `void` |
| scrollToField | 滚动到指定表单字段 | `prop: string` | `void` |
| getFieldsValue | 获取表单所有字段值 | - | `Record<string, unknown>` |
| setFieldsValue | 设置表单字段值 | `values: Record<string, unknown>` | `void` |
