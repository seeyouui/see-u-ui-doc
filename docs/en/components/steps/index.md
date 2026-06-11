---
layout: doc
outline: deep
title: Steps
titleTemplate: SeeYouUI - Steps
description: SeeYouUI component library seeSteps component
---

# Steps

Multi-step process guidance component. Supports horizontal/vertical directions, four states (wait/process/finish/error), dot style, and clickable switching.

## Basic Usage

```vue
<template>
  <see-steps v-model="current" :steps="steps" />
</template>

<script setup>
import { ref } from 'vue'
const current = ref(1)
const steps = [
  { title: 'Step One', description: 'Description One' },
  { title: 'Step Two', description: 'Description Two' },
  { title: 'Step Three', description: 'Description Three' }
]
</script>
```

## Vertical Direction

```vue
<template>
  <see-steps v-model="current" :steps="steps" direction="vertical" />
</template>
```

## Dot Style

```vue
<template>
  <see-steps v-model="current" :steps="steps" :is-dot-style="true" />
</template>
```

## StepItem

| Property | Type | Description |
|----------|------|-------------|
| title | string | Step title |
| description | string | Step description |
| icon | string | Step icon |
| status | `'wait' \| 'process' \| 'finish' \| 'error'` | Step status |

## Free Jumping

By default (when `isClickable=true`), users can only step back to previously completed steps. To allow jumping freely between any steps, enable `isFreeJump`:

```vue
<template>
  <see-steps
    v-model="current"
    :steps="steps"
    :is-clickable="true"
    :is-free-jump="true"
  />
</template>
```

## Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| modelValue | number | `0` | Current step index (out-of-range values are clamped to `[0, steps.length - 1]`) |
| steps | StepItem[] | `[]` | Step list |
| direction | `'horizontal' \| 'vertical'` | `'horizontal'` | Direction |
| activeColor | string | `''` | Color when active |
| inactiveColor | string | `''` | Color when inactive |
| isDotStyle | boolean | `false` | Whether to use dot style |
| isClickable | boolean | `false` | Whether clickable |
| isFreeJump | boolean | `false` | Whether to allow free jumping. When `false`, only allows stepping back to completed steps; when `true`, any step can be activated |

## Events

| Event | Parameters | Description |
|-------|-----------|-------------|
| update:modelValue | value | v-model sync (emitted on click) |
| onChange | index, step | Step switch |
| onFinish | - | Complete all steps (emitted when switching to the last step) |
