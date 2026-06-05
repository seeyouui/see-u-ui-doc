---
layout: doc
outline: deep
title: Checkbox
titleTemplate: SeeYouUI - Checkbox
description: SeeYouUI Component Library seeCheckbox component
iframeSrc: /pages/seeCheckbox/index
---

# Checkbox

> Checkbox component is used for multiple selections among options. It supports standalone use or use with CheckboxGroup, and supports check-all / indeterminate states.

## Platform Compatibility

| App(vue) | App(nvue) | H5 | Mini Program |
| :------: | :-------: | :-: | :----------: |
|    √     |     √     |  √  |      √       |

## Basic Usage

Use Checkbox standalone, bind the checked state via `v-model`.

```html:line-numbers {}
<template>
  <seeCheckbox v-model="checked">Option</seeCheckbox>
</template>

<script setup>
import { ref } from 'vue'

const checked = ref(false)
</script>
```

## CheckboxGroup

Use `seeCheckboxGroup` component to wrap multiple `seeCheckbox` components. Bind the selected value array via `v-model`.

```html:line-numbers {}
<template>
  <seeCheckboxGroup v-model="checkedList">
    <seeCheckbox label="option1">Option 1</seeCheckbox>
    <seeCheckbox label="option2">Option 2</seeCheckbox>
    <seeCheckbox label="option3">Option 3</seeCheckbox>
  </seeCheckboxGroup>

  <text>Selected values: {{ checkedList }}</text>
</template>

<script setup>
import { ref } from 'vue'

const checkedList = ref(['option1'])
</script>
```

## Indeterminate State

Implement the indeterminate state via the `isIndeterminate` property, used together with CheckboxGroup's `max` property.

```html:line-numbers {}
<template>
  <seeCheckbox
    v-model="isAllChecked"
    :is-indeterminate="isIndeterminate"
    @change="handleCheckAll"
  >
    Check All
  </seeCheckbox>

  <seeCheckboxGroup v-model="checkedList" @change="handleCheckedChange">
    <seeCheckbox label="apple">Apple</seeCheckbox>
    <seeCheckbox label="banana">Banana</seeCheckbox>
    <seeCheckbox label="orange">Orange</seeCheckbox>
  </seeCheckboxGroup>
</template>

<script setup>
import { ref, computed } from 'vue'

const checkedList = ref(['apple'])
const allOptions = ['apple', 'banana', 'orange']

const isAllChecked = computed(() => {
  return checkedList.value.length === allOptions.length
})

const isIndeterminate = computed(() => {
  return checkedList.value.length > 0 && checkedList.value.length < allOptions.length
})

const handleCheckAll = (val) => {
  checkedList.value = val ? [...allOptions] : []
}

const handleCheckedChange = (value) => {
  const checkedCount = value.length
  isAllChecked.value = checkedCount === allOptions.length
}
</script>
```

## Min / Max Selection

Limit the number of selectable items via `max` and `min` properties.

```html:line-numbers {}
<template>
  <seeCheckboxGroup v-model="checkedList" :max="3" :min="1">
    <seeCheckbox label="option1">Option 1</seeCheckbox>
    <seeCheckbox label="option2">Option 2</seeCheckbox>
    <seeCheckbox label="option3">Option 3</seeCheckbox>
    <seeCheckbox label="option4">Option 4</seeCheckbox>
    <seeCheckbox label="option5">Option 5</seeCheckbox>
  </seeCheckboxGroup>

  <text>Min 1, Max 3 selections</text>
</template>

<script setup>
import { ref } from 'vue'

const checkedList = ref(['option1'])
</script>
```

## Sizes

Set checkbox size via `size` property. Supports `small`, `default`, `large`.

```html:line-numbers {}
<template>
  <seeCheckboxGroup v-model="checkedList" size="small">
    <seeCheckbox label="option1">Small size</seeCheckbox>
    <seeCheckbox label="option2">Small size</seeCheckbox>
  </seeCheckboxGroup>

  <seeCheckboxGroup v-model="checkedList" size="default">
    <seeCheckbox label="option1">Default size</seeCheckbox>
    <seeCheckbox label="option2">Default size</seeCheckbox>
  </seeCheckboxGroup>

  <seeCheckboxGroup v-model="checkedList" size="large">
    <seeCheckbox label="option1">Large size</seeCheckbox>
    <seeCheckbox label="option2">Large size</seeCheckbox>
  </seeCheckboxGroup>
</template>
```

## Border Style

Set `isBorder` property to `true` to display border style.

```html:line-numbers {}
<template>
  <seeCheckboxGroup v-model="checkedList" is-border>
    <seeCheckbox label="option1">Option 1</seeCheckbox>
    <seeCheckbox label="option2">Option 2</seeCheckbox>
    <seeCheckbox label="option3">Option 3</seeCheckbox>
  </seeCheckboxGroup>
</template>

<script setup>
import { ref } from 'vue'

const checkedList = ref([])
</script>
```

## Inline Layout

Set `isInline` property to `true` to arrange checkboxes inline.

```html:line-numbers {}
<template>
  <seeCheckboxGroup v-model="checkedList" is-inline>
    <seeCheckbox label="option1">Option 1</seeCheckbox>
    <seeCheckbox label="option2">Option 2</seeCheckbox>
    <seeCheckbox label="option3">Option 3</seeCheckbox>
  </seeCheckboxGroup>
</template>
```

## Disabled State

Set disabled state via `isDisabled` property. Can be set on Checkbox or CheckboxGroup.

```html:line-numbers {}
<template>
  <!-- Single disabled -->
  <seeCheckbox v-model="checked" is-disabled>Disabled option</seeCheckbox>

  <!-- Entire group disabled -->
  <seeCheckboxGroup v-model="checkedList" is-disabled>
    <seeCheckbox label="option1">Option 1</seeCheckbox>
    <seeCheckbox label="option2">Option 2</seeCheckbox>
  </seeCheckboxGroup>
</template>
```

## Custom Color

Set the checked color via `checkedColor` property.

```html:line-numbers {}
<template>
  <seeCheckboxGroup v-model="checkedList" checked-color="#07c160">
    <seeCheckbox label="option1">Option 1</seeCheckbox>
    <seeCheckbox label="option2">Option 2</seeCheckbox>
  </seeCheckboxGroup>
</template>
```

## API

### Checkbox Props

| Parameter | Description | Type | Default | Platform |
| --------- | ----------- | ---- | ------- | -------- |
| modelValue | Bound value (standalone use) | boolean | false | - |
| label | Option value (used in CheckboxGroup) | string \| number \| boolean | - | - |
| isDisabled | Whether disabled | boolean | false | - |
| isIndeterminate | Whether in indeterminate state | boolean | false | - |
| size | Size | string | 'default' | - |
| isBorder | Whether to show border | boolean | false | - |
| checkedColor | Color when checked | string | '' | - |
| name | Form field name | string | '' | - |

### CheckboxGroup Props

| Parameter | Description | Type | Default | Platform |
| --------- | ----------- | ---- | ------- | -------- |
| modelValue | Bound value | (string \| number \| boolean)[] | [] | - |
| isDisabled | Whether disabled | boolean | false | - |
| isReadonly | Whether readonly | boolean | false | - |
| max | Maximum number of selectable items | number | - | - |
| min | Minimum number of selectable items | number | - | - |
| size | Size | string | 'default' | - |
| isBorder | Whether to show border | boolean | false | - |
| isInline | Whether to arrange inline | boolean | false | - |
| checkedColor | Color when checked | string | '' | - |
| name | Form field name | string | '' | - |

### Events

| Event | Description | Type | Platform |
| ----- | ----------- | ---- | -------- |
| onChange | Triggered when value changes | Checkbox: (value: boolean) => void; Group: (value: (string \| number \| boolean)[]) => void | - |

### Slots

| Slot | Description |
| ---- | ----------- |
| default | Child nodes of CheckboxGroup (Checkbox components) |
