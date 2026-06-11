---
layout: doc
outline: deep
title: useField
titleTemplate: SeeYouUI - useField
description: SeeYouUI Component Library useField Hook
iframeSrc: /pages/index/index
---

# Field Management（useField）

> `useField` is a Vue Composition API hook for form field management, providing validation and state management for individual fields.
>
> It helps you easily handle common scenarios such as: field validation, field state tracking, and value change callbacks.
>
> > Source code: [GitHub](https://github.com/seeyouui/see-u-ui/blob/main/uni_modules/see-u-ui/utils/hooks/useField/index.ts)

## Usage

```vue
<template>
  <see-form-item label="Username" field="username">
    <see-input v-model="formData.username" placeholder="Enter username" />
  </see-form-item>
</template>

<script setup>
import { reactive } from 'vue'
import { useField } from 'see-u-ui'

const formData = reactive({
  username: ''
})

const {
  validateStatus,
  validateMessage,
  validate,
  resetField,
  clearValidate,
  handleChange,
  handleBlur
} = useField({
  field: 'username',
  getValue: () => formData.username,
  trigger: 'blur',
  rules: [{ required: true, message: 'Username is required', trigger: 'blur' }],
  onValueChange: (value) => {
    formData.username = value
  }
})
</script>
```

## Options

`useField(options)` accepts a configuration object as parameter:

| Parameter | Description | Type | Default |
| --------- | ----------- | ---- | ------- |
| field | Field name (required) | `string` | - |
| getValue | Function to get the current field value (required) | `() => unknown` | - |
| trigger | Validation trigger mode | `'blur' \| 'change'` | `'blur'` |
| rules | Field validation rules | `FormRule \| FormRule[]` | `[]` |
| onValueChange | Field value change callback | `(value: unknown) => void` | - |

## Return Value

`useField` returns an object containing field operation methods and state:

| Name | Description | Type |
| ---- | ----------- | ---- |
| validateStatus | Current validation status | `Ref<'success' \| 'error' \| 'validating' \| ''>` |
| validateMessage | Current validation error message | `Ref<string>` |
| isValidating | Whether validation is in progress | `Ref<boolean>` |
| isDisabled | Whether the field is disabled | `Ref<boolean>` |
| isReadonly | Whether the field is readonly | `Ref<boolean>` |
| isShowMessage | Whether to show validation error messages | `Ref<boolean>` |
| validate | Validate the field | `(trigger?: string) => Promise<ValidateResult>` |
| resetField | Reset field value and validation state | `() => void` |
| clearValidate | Clear field validation messages | `() => void` |
| handleChange | Handle field value change (triggers change validation) | `(value: unknown) => void` |
| handleBlur | Handle field blur (triggers blur validation) | `() => void` |

## Notes

- `useField` automatically registers with the parent `SeeForm` component via `provide/inject`
- If a `name` prop is provided on the form component, `useField` will automatically register the field for form-level validation
- Validation rules can be defined at the field level via the `rules` option, or at the form level via the `SeeForm` `rules` prop
- Field-level rules take priority over form-level rules
