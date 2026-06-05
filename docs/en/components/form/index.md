---
layout: doc
outline: deep
title: Form
titleTemplate: SeeYouUI - Form
description: SeeYouUI Component Library seeForm component
iframeSrc: /pages/seeForm/index
---

# Form

> Form component is used for data collection, validation and submission. It supports sync/async validation, linked validation, reset and other features. Composed of `seeForm` and `seeFormItem`.

## Platform Compatibility

| App(vue) | App(nvue) | H5 | Mini Program |
| :------: | :-------: | :-: | :----------: |
|    √     |     √     |  √  |      √       |

## Basic Usage

Form component needs to be used with `seeFormItem`. Bind the form data object via `model`.

```html:line-numbers {}
<template>
  <seeForm :model="formData">
    <seeFormItem label="Username" prop="username">
      <seeInput v-model="formData.username" placeholder="Please enter username" />
    </seeFormItem>
    <seeFormItem label="Password" prop="password">
      <seeInput v-model="formData.password" type="password" placeholder="Please enter password" />
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

## Form Validation

Configure validation rules via the `rules` property. Supports built-in rules like `required`, `pattern`, `min`, `max`, `len`, `enum`, `type`, as well as custom `validator`.

```html:line-numbers {}
<template>
  <seeForm ref="formRef" :model="formData" :rules="rules">
    <seeFormItem label="Username" prop="username">
      <seeInput v-model="formData.username" placeholder="Please enter username" />
    </seeFormItem>
    <seeFormItem label="Email" prop="email">
      <seeInput v-model="formData.email" placeholder="Please enter email" />
    </seeFormItem>
    <seeFormItem>
      <seeButton type="primary" @click="handleSubmit">Submit</seeButton>
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
    { required: true, message: 'Please enter username', trigger: 'blur' },
    { min: 2, max: 20, message: 'Length should be 2 to 20 characters', trigger: 'blur' }
  ],
  email: [
    { required: true, message: 'Please enter email', trigger: 'blur' },
    { type: 'email', message: 'Please enter a valid email address', trigger: 'blur' }
  ]
}

const handleSubmit = async () => {
  try {
    await formRef.value?.validate()
    console.log('Validation passed', formData)
  } catch (error) {
    console.log('Validation failed', error)
  }
}
</script>
```

## Async Validation

Supports async validation via `asyncValidator`, for example checking if a username already exists.

```html:line-numbers {}
<script setup>
const rules = {
  username: [
    { required: true, message: 'Please enter username', trigger: 'blur' },
    {
      asyncValidator: (rule, value, callback) => {
        // Simulate async validation
        setTimeout(() => {
          if (value === 'admin') {
            callback(new Error('Username already exists'))
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

## Reset and Clear Validation

Reset form field values via `resetFields` method, and clear validation messages via `clearValidate` method.

```html:line-numbers {}
<template>
  <seeForm ref="formRef" :model="formData" :rules="rules">
    <seeFormItem label="Username" prop="username">
      <seeInput v-model="formData.username" />
    </seeFormItem>
    <seeFormItem>
      <seeButton type="primary" @click="handleSubmit">Submit</seeButton>
      <seeButton @click="handleReset">Reset</seeButton>
      <seeButton @click="handleClear">Clear Validation</seeButton>
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

## Label Position

Set label position via `labelPosition` property, supporting `left`, `right` and `top` modes.

```html:line-numbers {}
<template>
  <seeRadioGroup v-model="labelPosition">
    <seeRadio label="left">Left Aligned</seeRadio>
    <seeRadio label="right">Right Aligned</seeRadio>
    <seeRadio label="top">Top Aligned</seeRadio>
  </seeRadioGroup>

  <seeForm :model="formData" :label-position="labelPosition">
    <seeFormItem label="Username">
      <seeInput v-model="formData.username" />
    </seeFormItem>
    <seeFormItem label="Email">
      <seeInput v-model="formData.email" />
    </seeFormItem>
  </seeForm>
</template>

<script setup>
import { ref } from 'vue'

const labelPosition = ref('right')
</script>
```

## Login Form

A complete login form example with validation and submission.

```html:line-numbers {}
<template>
  <seeForm ref="loginFormRef" :model="loginForm" :rules="loginRules" label-width="0">
    <seeFormItem prop="username">
      <seeInput
        v-model="loginForm.username"
        prefix-icon="user"
        placeholder="Please enter username"
      />
    </seeFormItem>
    <seeFormItem prop="password">
      <seeInput
        v-model="loginForm.password"
        type="password"
        prefix-icon="lock"
        placeholder="Please enter password"
        show-password
      />
    </seeFormItem>
    <seeFormItem prop="remember">
      <seeCheckbox v-model="loginForm.remember">Remember password</seeCheckbox>
    </seeFormItem>
    <seeFormItem>
      <seeButton type="primary" style="width: 100%" @click="handleLogin">
        Login
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
  username: [{ required: true, message: 'Please enter username', trigger: 'blur' }],
  password: [{ required: true, message: 'Please enter password', trigger: 'blur' }]
}

const handleLogin = async () => {
  try {
    await loginFormRef.value?.validate()
    // Execute login logic
  } catch (error) {
    console.log('Login validation failed', error)
  }
}
</script>
```

## API

### Form Props

| Parameter | Description | Type | Default | Platform |
| --------- | ----------- | ---- | ------- | -------- |
| model | Form data object (required) | Record&lt;string, unknown&gt; | - | - |
| rules | Validation rules | Record&lt;string, FormRule \| FormRule[]&gt; | {} | - |
| labelPosition | Label position | string | 'right' | - |
| labelWidth | Label width | string \| number | 'auto' | - |
| isDisabled | Whether to disable the entire form | boolean | false | - |
| isReadonly | Whether the entire form is readonly | boolean | false | - |
| isRequiredAsterisk | Whether to show required asterisk | boolean | true | - |
| isShowMessage | Whether to show validation error messages | boolean | true | - |
| isInline | Whether to use inline mode | boolean | false | - |
| size | Size | string | 'default' | - |

### FormItem Props

| Parameter | Description | Type | Default | Platform |
| --------- | ----------- | ---- | ------- | -------- |
| prop | Form field name | string | - | - |
| label | Label text | string | '' | - |
| labelWidth | Label width | string \| number | - | - |
| required | Whether the field is required | boolean | - | - |
| rules | Form validation rules | FormRule \| FormRule[] | - | - |
| error | Form field validation error message | string | - | - |
| showMessage | Whether to show validation error messages | boolean | true | - |
| size | Size | string | - | - |

### Form Expose Methods

| Method | Description | Parameters | Return Value |
| ------ | ----------- | ---------- | ------------ |
| validate | Validate the entire form | callback?: (valid: boolean) => void | Promise&lt;boolean&gt; |
| validateField | Validate specific fields | props: string \| string[], callback?: (valid: boolean) => void | Promise&lt;void&gt; |
| Reset form field values | Reset form field values | props?: string \| string[] | void |
| clearValidate | Clear form validation messages | props?: string \| string[] | void |
| scrollToField | Scroll to the specified form field | prop: string | void |
| getFieldsValue | Get all form field values | - | Record&lt;string, unknown&gt; |
| setFieldsValue | Set form field values | values: Record&lt;string, unknown&gt; | void |

### FormRule Type

| Parameter | Description | Type |
| --------- | ----------- | ---- |
| required | Whether the field is required | boolean |
| message | Error message | string |
| type | Field type | string |
| trigger | Trigger method | 'blur' \| 'change' |
| min | Minimum length/value | number |
| max | Maximum length/value | number |
| len | Length | number |
| enum | Enum values | unknown[] |
| pattern | Regular expression | RegExp |
| validator | Custom validation function | (rule, value, callback) => void |
| asyncValidator | Async validation function | (rule, value, callback) => void |
