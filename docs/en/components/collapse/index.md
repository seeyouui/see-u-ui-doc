---
layout: doc
outline: deep
title: Collapse
titleTemplate: SeeYouUI - Collapse
description: SeeYouUI component see-collapse
iframeSrc: /pages/seeCollapse/index
---

# Collapse

A collapsible panel that allows users to expand and collapse content sections. Supports accordion mode.

## Basic Usage

```vue
<script setup>
import { ref } from 'vue'
const active = ref(['1'])
</script>

<template>
  <see-collapse v-model="active">
    <see-collapse-item name="1" title="Title 1">
      Content 1
    </see-collapse-item>
    <see-collapse-item name="2" title="Title 2">
      Content 2
    </see-collapse-item>
  </see-collapse>
</template>
```

## Collapse Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | `string \| string[]` | `[]` | Currently expanded item name(s) |
| isAccordion | `boolean` | `false` | Whether only one item can be expanded at a time |
| isShowBorder | `boolean` | `true` | Whether to show border |

## Collapse Events

| Event | Parameters | Description |
|-------|-----------|-------------|
| onChange | `(value: string \| string[])` | Triggered when expanded items change |
| update:modelValue | `(value: string \| string[])` | Triggered when value changes |

## CollapseItem Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | `string` | `''` | Unique identifier for the item |
| title | `string` | `''` | Item title text |
| icon | `string` | `''` | Custom icon |
| isDisabled | `boolean` | `false` | Whether the item is disabled |
| isLazy | `boolean` | `false` | Whether to lazy render content on first expand |
