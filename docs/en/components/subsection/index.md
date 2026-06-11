---
layout: doc
outline: deep
title: Subsection Segment Control
titleTemplate: SeeYouUI - Subsection Segment Control
description: SeeYouUI component library seeSubsection segment control component
---

# Subsection Segment Control

A lighter switching control than Tabs, without content area. Supports three styles: default (bottom highlight bar), button (filled background), pill (capsule slider).

## Basic Usage

```vue
<template>
  <see-subsection v-model="active" :options="options" />
</template>

<script setup>
import { ref } from 'vue'
const active = ref('one')
const options = [
  { label: 'Option One', value: 'one' },
  { label: 'Option Two', value: 'two' },
  { label: 'Option Three', value: 'three' }
]
</script>
```

## Button Style

```vue
<template>
  <see-subsection v-model="active" :options="options" type="button" />
</template>
```

## Pill Style

```vue
<template>
  <see-subsection v-model="active" :options="options" type="pill" />
</template>
```

## SubsectionOption

| Property | Type | Description |
|----------|------|-------------|
| label | string | Display text |
| value | string \| number | Option value |
| isDisabled | boolean | Whether disabled |

## Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| modelValue | string \| number | `''` | Currently selected value |
| options | SubsectionOption[] | `[]` | Option list |
| type | `'default' \| 'button' \| 'pill'` | `'default'` | Style type |
| size | `'small' \| 'default' \| 'large'` | `'default'` | Size |
| activeColor | string | `''` | Background color when active |
| isDisabled | boolean | `false` | Whether all disabled |
| isFullWidth | boolean | `false` | Whether to fill full width |

## Events

| Event | Parameters | Description |
|-------|-----------|-------------|
| onChange | value, option | Option switch |
| update:modelValue | value | v-model update |
