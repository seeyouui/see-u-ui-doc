---
layout: doc
outline: deep
title: useForm
titleTemplate: SeeYouUI - useForm
description: SeeYouUI Component Library useForm Hook
iframeSrc: /pages/index/index
---

# useForm

> `useForm` is a Vue Composition API hook for form management, providing form data binding, validation, reset and other capabilities.
>
> It helps you easily handle common scenarios such as: form data management, form validation, field linkage, and form reset.
>
> > Source code: [GitHub](https://github.com/seeyouui/see-u-ui/blob/main/uni_modules/see-u-ui/utils/hooks/useForm/index.ts)

## Usage

```vue
<template>
  <see-form ref="formRef" :model="formData" :rules="rules">
    <see-form-item label="Username" field="username">
      <see-input v-model="formData.username" placeholder="Enter username" />
    </see-form-item>
    <see-form-item label="Email" field="email">
      <see-input v-model="formData.email" placeholder="Enter email" />
    </see-form-item>
    <see-form-item>
      <see-button type="primary" @click="handleSubmit">Submit</see-button>
      <see-button @click="handleReset">Reset</see-button>
    </see-form-item>
  </see-form>
</template>

<script setup>
import { reactive } from 'vue'
import { useForm } from 'see-u-ui'

const formData = reactive({
  username: '',
  email: ''
})

const rules = {
  username: [{ required: true, message: 'Username is required', trigger: 'blur' }],
  email: [{ required: true, message: 'Email is required', trigger: 'blur' }]
}

const { validate, resetFields, clearValidate } = useForm({
  model: formData,
  rules
})

const handleSubmit = async () => {
  const result = await validate()
  if (result.valid) {
    console.log('Validation passed', formData)
  } else {
    console.log('Validation failed', result.errors)
  }
}

const handleReset = () => {
  resetFields()
}
</script>
```

## Options

`useForm(options)` accepts a configuration object as parameter:

| Parameter | Description | Type | Default |
| --------- | ----------- | ---- | ------- |
| model | Form data object (required) | `Record<string, unknown>` | - |
| rules | Validation rules | `Record<string, FormRule \| FormRule[]>` | `{}` |
| labelPosition | Label position | `'left' \| 'right' \| 'top'` | `'right'` |
| labelWidth | Label width | `string \| number` | `'auto'` |
| isDisabled | Disable the entire form | `boolean` | `false` |
| isReadonly | Set the entire form to readonly | `boolean` | `false` |
| isRequiredAsterisk | Show required asterisk | `boolean` | `true` |
| isShowMessage | Show validation error messages | `boolean` | `true` |
| isInline | Inline mode | `boolean` | `false` |
| size | Size | `'small' \| 'default' \| 'large'` | `'default'` |

## Return Value

`useForm` returns an object containing form operation methods:

| Method | Description | Parameters | Return Value |
| ------ | ----------- | ---------- | ------------ |
| validate | Validate the entire form | - | `Promise<ValidateResult>` |
| validateField | Validate specified fields | `fields: string \| string[]` | `Promise<ValidateResult>` |
| resetFields | Reset form field values | `fields?: string \| string[]` | `void` |
| clearValidate | Clear validation messages | `fields?: string \| string[]` | `void` |
| scrollToField | Scroll to specified field | `field: string` | `void` |
| getFieldsValue | Get all field values | - | `Record<string, unknown>` |
| setFieldsValue | Set field values | `values: Record<string, unknown>` | `void` |

## FormRule Type

| Property | Description | Type |
| -------- | ----------- | ---- |
| required | Whether the field is required | `boolean` |
| message | Error message | `string` |
| trigger | Validation trigger | `'blur' \| 'change'` |
| min | Minimum value / length | `number` |
| max | Maximum value / length | `number` |
| len | Exact length | `number` |
| pattern | Regex pattern | `RegExp` |
| type | Value type | `'string' \| 'number' \| 'boolean' \| 'array' \| 'object' \| 'date' \| 'url' \| 'email'` |
| validator | Custom sync validator | `(value: unknown, rule: FormRule) => boolean \| string` |
| asyncValidator | Custom async validator | `(value: unknown, rule: FormRule) => Promise<boolean \| string>` |

## ValidateResult Type

| Property | Description | Type |
| -------- | ----------- | ---- |
| valid | Whether validation passed | `boolean` |
| errors | List of validation errors | `ValidateError[]` |
| errorFields | Errors grouped by field name | `Record<string, ValidateError[]>` |
