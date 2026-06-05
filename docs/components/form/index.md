---
layout: doc
outline: deep
title: Form 表单
titleTemplate: SeeYouUI - Form 表单
description: SeeYouUI 组件库 seeForm 组件
iframeSrc: /pages/seeForm/index
---

# Form 表单

> 表单组件用于数据收集、校验和提交，支持同步/异步校验、联动校验、重置等功能。由 `seeForm` 和 `seeFormItem` 组成。

## 平台差异说明

| App(vue) | App(nvue) | H5 | 小程序 |
| :------: | :-------: | :-: | :----: |
|    √     |     √     |  √  |   √    |

## 基本使用

表单组件需要配合 `seeFormItem` 使用，通过 `model` 绑定表单数据对象。

```html:line-numbers {}
<template>
  <seeForm :model="formData">
    <seeFormItem label="用户名" prop="username">
      <seeInput v-model="formData.username" placeholder="请输入用户名" />
    </seeFormItem>
    <seeFormItem label="密码" prop="password">
      <seeInput v-model="formData.password" type="password" placeholder="请输入密码" />
    </seeFormItem>
  </seeForm>
</template>

<script setup>
import { reactive } from 'vue'

const formData = reactive({
  username: '',
  password: ''
})
</script>
```

## 表单校验

通过 `rules` 属性配置校验规则，支持 `required`、`pattern`、`min`、`max`、`len`、`enum`、`type` 等内置规则，也支持自定义 `validator`。

```html:line-numbers {}
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
    </seeFormItem>
  </seeForm>
</template>

<script setup>
import { reactive, ref } from 'vue'

const formRef = ref(null)
const formData = reactive({
  username: '',
  email: ''
})

const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
  ]
}

const handleSubmit = async () => {
  try {
    await formRef.value?.validate()
    console.log('校验通过', formData)
  } catch (error) {
    console.log('校验失败', error)
  }
}
</script>
```

## 异步校验

支持通过 `asyncValidator` 进行异步校验，例如检查用户名是否已存在。

```html:line-numbers {}
<script setup>
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    {
      asyncValidator: (rule, value, callback) => {
        // 模拟异步校验
        setTimeout(() => {
          if (value === 'admin') {
            callback(new Error('用户名已存在'))
          } else {
            callback()
          }
        }, 1000)
      },
      trigger: 'blur'
    }
  ]
}
</script>
```

## 重置和清除校验

通过 `resetFields` 方法重置表单字段值，通过 `clearValidate` 方法清除校验信息。

```html:line-numbers {}
<template>
  <seeForm ref="formRef" :model="formData" :rules="rules">
    <seeFormItem label="用户名" prop="username">
      <seeInput v-model="formData.username" />
    </seeFormItem>
    <seeFormItem>
      <seeButton type="primary" @click="handleSubmit">提交</seeButton>
      <seeButton @click="handleReset">重置</seeButton>
      <seeButton @click="handleClear">清除校验</seeButton>
    </seeFormItem>
  </seeForm>
</template>

<script setup>
const handleReset = () => {
  formRef.value?.resetFields()
}

const handleClear = () => {
  formRef.value?.clearValidate()
}
</script>
```

## Label 位置

通过 `labelPosition` 属性设置标签位置，支持 `left`、`right`、`top` 三种模式。

```html:line-numbers {}
<template>
  <seeRadioGroup v-model="labelPosition">
    <seeRadio label="left">左对齐</seeRadio>
    <seeRadio label="right">右对齐</seeRadio>
    <seeRadio label="top">顶部对齐</seeRadio>
  </seeRadioGroup>

  <seeForm :model="formData" :label-position="labelPosition">
    <seeFormItem label="用户名">
      <seeInput v-model="formData.username" />
    </seeFormItem>
    <seeFormItem label="邮箱">
      <seeInput v-model="formData.email" />
    </seeFormItem>
  </seeForm>
</template>

<script setup>
import { ref } from 'vue'

const labelPosition = ref('right')
</script>
```

## 登录表单

完整的登录表单示例，包含表单校验和提交。

```html:line-numbers {}
<template>
  <seeForm ref="loginFormRef" :model="loginForm" :rules="loginRules" label-width="0">
    <seeFormItem prop="username">
      <seeInput
        v-model="loginForm.username"
        prefix-icon="user"
        placeholder="请输入用户名"
      />
    </seeFormItem>
    <seeFormItem prop="password">
      <seeInput
        v-model="loginForm.password"
        type="password"
        prefix-icon="lock"
        placeholder="请输入密码"
        show-password
      />
    </seeFormItem>
    <seeFormItem prop="remember">
      <seeCheckbox v-model="loginForm.remember">记住密码</seeCheckbox>
    </seeFormItem>
    <seeFormItem>
      <seeButton type="primary" style="width: 100%" @click="handleLogin">
        登录
      </seeButton>
    </seeFormItem>
  </seeForm>
</template>

<script setup>
import { reactive, ref } from 'vue'

const loginFormRef = ref(null)
const loginForm = reactive({
  username: '',
  password: '',
  remember: false
})

const loginRules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
}

const handleLogin = async () => {
  try {
    await loginFormRef.value?.validate()
    // 执行登录逻辑
  } catch (error) {
    console.log('登录校验失败', error)
  }
}
</script>
```

## API

### Form Props

| 参数名 | 说明 | 类型 | 默认值 | 可选值 | 平台差异 |
| ------ | ---- | ---- | ------ | ------ | -------- |
| model | 表单数据对象（必填） | Record&lt;string, unknown&gt; | - | - | - |
| rules | 校验规则 | Record&lt;string, FormRule \| FormRule[]&gt; | {} | - | - |
| labelPosition | 标签位置 | string | 'right' | 'left' / 'right' / 'top' | - |
| labelWidth | 标签宽度 | string \| number | 'auto' | - | - |
| isDisabled | 是否禁用整组 | boolean | false | - | - |
| isReadonly | 是否只读整组 | boolean | false | - | - |
| isRequiredAsterisk | 是否显示必填星号 | boolean | true | - | - |
| isShowMessage | 是否显示校验错误信息 | boolean | true | - | - |
| isInline | 是否行内模式 | boolean | false | - | - |
| size | 尺寸 | string | 'default' | 'small' / 'default' / 'large' | - |

### FormItem Props

| 参数名 | 说明 | 类型 | 默认值 | 可选值 | 平台差异 |
| ------ | ---- | ---- | ------ | ------ | -------- |
| prop | 表单域字段名 | string | - | - | - |
| label | 标签文本 | string | '' | - | - |
| labelWidth | 标签宽度 | string \| number | - | - | - |
| required | 是否必填 | boolean | - | - | - |
| rules | 表单验证规则 | FormRule \| FormRule[] | - | - | - |
| error | 表单域验证错误信息 | string | - | - | - |
| showMessage | 是否显示校验错误信息 | boolean | true | - | - |
| size | 尺寸 | string | - | 'small' / 'default' / 'large' | - |

### Form Expose 方法

| 方法名 | 说明 | 参数 | 返回值 |
| ------ | ---- | ---- | ------ |
| validate | 对整个表单进行校验 | callback?: (valid: boolean) => void | Promise&lt;boolean&gt; |
| validateField | 对部分字段进行校验 | props: string \| string[], callback?: (valid: boolean) => void | Promise&lt;void&gt; |
| resetFields | 重置表单字段值 | props?: string \| string[] | void |
| clearValidate | 清除表单校验信息 | props?: string \| string[] | void |
| scrollToField | 滚动到指定表单字段 | prop: string | void |
| getFieldsValue | 获取表单所有字段值 | - | Record&lt;string, unknown&gt; |
| setFieldsValue | 设置表单字段值 | values: Record&lt;string, unknown&gt; | void |

### FormRule 类型

| 参数名 | 说明 | 类型 |
| ------ | ---- | ---- |
| required | 是否必填 | boolean |
| message | 错误提示信息 | string |
| type | 字段类型 | string |
| trigger | 触发方式 | 'blur' \| 'change' |
| min | 最小长度/值 | number |
| max | 最大长度/值 | number |
| len | 长度 | number |
| enum | 枚举值 | unknown[] |
| pattern | 正则表达式 | RegExp |
| validator | 自定义校验函数 | (rule, value, callback) => void |
| asyncValidator | 异步校验函数 | (rule, value, callback) => void |
