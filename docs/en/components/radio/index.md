---
layout: doc
outline: deep
title: Radio
titleTemplate: SeeYouUI - Radio
description: SeeYouUI Component Library seeRadio component
iframeSrc: /pages/seeRadio/index
---

# Radio

> Radio component is used for single selection among options. It supports standalone use or use with RadioGroup.

## Platform Compatibility

| App(vue) | App(nvue) | H5 | Mini Program |
| :------: | :-------: | :-: | :----------: |
|    √     |     √     |  √  |      √       |

## Basic Usage

Use `seeRadioGroup` component to wrap multiple `seeRadio` components. Bind the selected value via `v-model`.

```html:line-numbers {}
<template>
  <seeRadioGroup v-model="selected">
    <seeRadio label="option1">Option 1</seeRadio>
    <seeRadio label="option2">Option 2</seeRadio>
    <seeRadio label="option3">Option 3</seeRadio>
  </seeRadioGroup>

  <text>Selected value: {{ selected }}</text>
</template>

<script setup>
import { ref } from 'vue'

const selected = ref('option1')
</script>
```

## Inline Layout

Set `isInline` property to `true` to arrange radio buttons inline.

```html:line-numbers {}
<template>
  <seeRadioGroup v-model="selected" is-inline>
    <seeRadio label="option1">Option 1</seeRadio>
    <seeRadio label="option2">Option 2</seeRadio>
    <seeRadio label="option3">Option 3</seeRadio>
  </seeRadioGroup>
</template>

<script setup>
import { ref } from 'vue'

const selected = ref('option1')
</script>
```

## Sizes

Set radio size via `size` property. Supports `small`, `default`, `large`.

```html:line-numbers {}
<template>
  <seeRadioGroup v-model="selected" size="small">
    <seeRadio label="option1">Small size</seeRadio>
    <seeRadio label="option2">Small size</seeRadio>
  </seeRadioGroup>

  <seeRadioGroup v-model="selected" size="default">
    <seeRadio label="option1">Default size</seeRadio>
    <seeRadio label="option2">Default size</seeRadio>
  </seeRadioGroup>

  <seeRadioGroup v-model="selected" size="large">
    <seeRadio label="option1">Large size</seeRadio>
    <seeRadio label="option2">Large size</seeRadio>
  </seeRadioGroup>
</template>
```

## Border Style

Set `isBorder` property to `true` to display border style.

```html:line-numbers {}
<template>
  <seeRadioGroup v-model="selected" is-border>
    <seeRadio label="option1">Option 1</seeRadio>
    <seeRadio label="option2">Option 2</seeRadio>
    <seeRadio label="option3">Option 3</seeRadio>
  </seeRadioGroup>
</template>

<script setup>
import { ref } from 'vue'

const selected = ref('')
</script>
```

## Disabled State

Set disabled state via `isDisabled` property. Can be set on Radio or RadioGroup.

```html:line-numbers {}
<template>
  <!-- Single disabled -->
  <seeRadioGroup v-model="selected">
    <seeRadio label="option1">Option 1</seeRadio>
    <seeRadio label="option2" is-disabled>Disabled option</seeRadio>
    <seeRadio label="option3">Option 3</seeRadio>
  </seeRadioGroup>

  <!-- Entire group disabled -->
  <seeRadioGroup v-model="selected" is-disabled>
    <seeRadio label="option1">Option 1</seeRadio>
    <seeRadio label="option2">Option 2</seeRadio>
    <seeRadio label="option3">Option 3</seeRadio>
  </seeRadioGroup>
</template>

<script setup>
import { ref } from 'vue'

const selected = ref('option1')
</script>
```

## Readonly State

Set `isReadonly` property to `true`. The radio can be selected but cannot be modified.

```html:line-numbers {}
<template>
  <seeRadioGroup v-model="selected" is-readonly>
    <seeRadio label="option1">Option 1</seeRadio>
    <seeRadio label="option2">Option 2</seeRadio>
    <seeRadio label="option3">Option 3</seeRadio>
  </seeRadioGroup>
</template>
```

## Custom Color

Set the checked color via `checkedColor` property.

```html:line-numbers {}
<template>
  <seeRadioGroup v-model="selected" checked-color="#07c160">
    <seeRadio label="option1">Option 1</seeRadio>
    <seeRadio label="option2">Option 2</seeRadio>
    <seeRadio label="option3">Option 3</seeRadio>
  </seeRadioGroup>
</template>
```

## Usage in Form

Use radio in a form with the `name` property.

```html:line-numbers {}
<template>
  <seeForm :model="formData">
    <seeFormItem label="Gender" prop="gender">
      <seeRadioGroup v-model="formData.gender" name="gender">
        <seeRadio label="male">Male</seeRadio>
        <seeRadio label="female">Female</seeRadio>
        <seeRadio label="other">Other</seeRadio>
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

| Parameter | Description | Type | Default | Platform |
| --------- | ----------- | ---- | ------- | -------- |
| label | Option value | string \| number \| boolean | - | - |
| isDisabled | Whether disabled | boolean | false | - |
| size | Size | string | 'default' | - |
| isBorder | Whether to show border | boolean | false | - |
| checkedColor | Color when checked | string | '' | - |
| name | Form field name | string | '' | - |

### RadioGroup Props

| Parameter | Description | Type | Default | Platform |
| --------- | ----------- | ---- | ------- | -------- |
| modelValue | Bound value | string \| number \| boolean | - | - |
| isDisabled | Whether disabled | boolean | false | - |
| isReadonly | Whether readonly | boolean | false | - |
| size | Size | string | 'default' | - |
| isBorder | Whether to show border | boolean | false | - |
| isInline | Whether to arrange inline | boolean | false | - |
| checkedColor | Color when checked | string | '' | - |
| name | Form field name | string | '' | - |

### Events

| Event | Description | Type | Platform |
| ----- | ----------- | ---- | -------- |
| onChange | Triggered when value changes | (value: string \| number \| boolean) => void | - |
