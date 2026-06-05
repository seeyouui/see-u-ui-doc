---
layout: doc
outline: deep
title: Input
titleTemplate: SeeYouUI - Input
description: SeeYouUI Component Library seeInput component
iframeSrc: /pages/seeInput/index
---

# Input

> Input component is used for keyboard input content. It is the most basic form field wrapper. Supports text, password, number and other input types.

## Platform Compatibility

| App(vue) | App(nvue) | H5 | Mini Program |
| :------: | :-------: | :-: | :----------: |
|    √     |     √     |  √  |      √       |

## Basic Usage

```html:line-numbers {}
<template>
  <seeInput v-model="value" placeholder="Please enter content" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>
```

## Input Types

Set input type via `type` property. Supports `text`, `number`, `password`, `digit`, `tel`, `idcard`.

```html:line-numbers {}
<template>
  <seeInput v-model="textValue" type="text" placeholder="Text input" />
  <seeInput v-model="numberValue" type="number" placeholder="Number input" />
  <seeInput v-model="passwordValue" type="password" placeholder="Password input" />
  <seeInput v-model="digitValue" type="digit" placeholder="Integer input" />
  <seeInput v-model="telValue" type="tel" placeholder="Phone input" />
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

## Password Input

Set `type="password"` to create a password input. Use the `showPassword` property to toggle password visibility.

```html:line-numbers {}
<template>
  <seeInput
    v-model="password"
    type="password"
    placeholder="Please enter password"
    show-password
  />
</template>

<script setup>
import { ref } from 'vue'

const password = ref('')
</script>
```

## Clearable

Set the `isClearable` property to show a clear button for clearing input content with one click.

```html:line-numbers {}
<template>
  <seeInput
    v-model="value"
    placeholder="Clearable input"
    is-clearable
  />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('Clearable content')
</script>
```

## Word Limit

Set the `isShowWordLimit` property to display word count. Must be used together with `maxlength`.

```html:line-numbers {}
<template>
  <seeInput
    v-model="value"
    placeholder="Please enter content"
    maxlength="20"
    is-show-word-limit
  />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>
```

## Prefix and Suffix Icons

Set prefix and suffix icons via `prefixIcon` and `suffixIcon` properties.

```html:line-numbers {}
<template>
  <seeInput
    v-model="value"
    prefix-icon="search"
    placeholder="Search content"
  />
  <seeInput
    v-model="value"
    suffix-icon="calendar"
    placeholder="Select date"
  />
</template>
```

## Slot Usage

Use `prefix` and `suffix` slots to customize prefix and suffix content.

```html:line-numbers {}
<template>
  <seeInput v-model="value" placeholder="Please enter URL">
    <template #prefix>
      <text>https://</text>
    </template>
    <template #suffix>
      <text>.com</text>
    </template>
  </seeInput>
</template>
```

## Formatter

Format input content via the `formatter` property, for example phone numbers, bank card numbers, etc.

```html:line-numbers {}
<template>
  <seeInput
    v-model="phone"
    type="tel"
    placeholder="Please enter phone number"
    :formatter="formatPhone"
    maxlength="13"
  />
</template>

<script setup>
import { ref } from 'vue'

const phone = ref('')

const formatPhone = (value) => {
  // Phone number format: xxx xxxx xxxx
  const cleaned = value.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{0,4})(\d{0,4})$/)
  if (match) {
    return [match[1], match[2], match[3]].filter(Boolean).join(' ')
  }
  return cleaned
}
</script>
```

## Sizes

Set input size via `size` property. Supports `small`, `default`, `large`.

```html:line-numbers {}
<template>
  <seeInput v-model="value" size="small" placeholder="Small size" />
  <seeInput v-model="value" size="default" placeholder="Default size" />
  <seeInput v-model="value" size="large" placeholder="Large size" />
</template>
```

## Disabled and Readonly

Set disabled and readonly states via `isDisabled` and `isReadonly` properties.

```html:line-numbers {}
<template>
  <seeInput v-model="value" is-disabled placeholder="Disabled state" />
  <seeInput v-model="value" is-readonly placeholder="Readonly state" />
</template>
```

## Borderless Mode

Set `isBorder` to `false` to hide the input border.

```html:line-numbers {}
<template>
  <seeInput v-model="value" :is-border="false" placeholder="Borderless input" />
</template>
```

## API

### Props

| Parameter | Description | Type | Default | Platform |
| --------- | ----------- | ---- | ------- | -------- |
| modelValue | Bound value | string \| number | '' | - |
| type | Input type | string | 'text' | - |
| placeholder | Placeholder text | string | '' | - |
| isDisabled | Whether disabled | boolean | false | - |
| isReadonly | Whether readonly | boolean | false | - |
| isClearable | Whether to show clear button | boolean | false | - |
| maxlength | Maximum input length | number | -1 | - |
| isShowWordLimit | Whether to show word count | boolean | false | - |
| prefixIcon | Prefix icon | string | '' | - |
| suffixIcon | Suffix icon | string | '' | - |
| size | Size | string | 'default' | - |
| isBorder | Whether to show border | boolean | true | - |
| formatter | Input formatter function | (value: string) => string | - | - |
| name | Form field name | string | '' | - |
| showPassword | Whether to show password toggle button | boolean | false | - |

### Events

| Event | Description | Type | Platform |
| ----- | ----------- | ---- | -------- |
| onInput | Triggered on input | (value: string \| number) => void | - |
| onFocus | Triggered on focus | (event: FocusEvent) => void | - |
| onBlur | Triggered on blur | (event: FocusEvent) => void | - |
| onClear | Triggered when clear button is clicked | () => void | - |
| onChange | Triggered when value changes (on blur or enter) | (value: string \| number) => void | - |
| onConfirm | Triggered when confirm button is clicked | (value: string \| number) => void | - |

### Slots

| Slot | Description |
| ---- | ----------- |
| prefix | Content at the beginning of the input |
| suffix | Content at the end of the input |
