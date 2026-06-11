---
layout: doc
outline: deep
title: Steps 步骤条
titleTemplate: SeeYouUI - Steps 步骤条
description: SeeYouUI 组件库 seeSteps 步骤条组件
---

# Steps 步骤条

多步骤流程引导组件。支持水平/垂直两种方向，四种状态（wait/process/finish/error），圆点样式，可点击切换。

## 基础用法

```vue
<template>
  <see-steps v-model="current" :steps="steps" />
</template>

<script setup>
import { ref } from 'vue'
const current = ref(1)
const steps = [
  { title: '步骤一', description: '描述一' },
  { title: '步骤二', description: '描述二' },
  { title: '步骤三', description: '描述三' }
]
</script>
```

## 垂直方向

```vue
<template>
  <see-steps v-model="current" :steps="steps" direction="vertical" />
</template>
```

## 圆点样式

```vue
<template>
  <see-steps v-model="current" :steps="steps" :is-dot-style="true" />
</template>
```

## StepItem

| 属性 | 类型 | 说明 |
|------|------|------|
| title | string | 步骤标题 |
| description | string | 步骤描述 |
| icon | string | 步骤图标 |
| status | `'wait' \| 'process' \| 'finish' \| 'error'` | 步骤状态 |

## 自由跳转

默认 `isClickable=true` 时只允许回退到已完成的步骤；如果希望允许任意步骤之间自由跳转，开启 `isFreeJump`：

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

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| modelValue | number | `0` | 当前步骤索引（越界值会自动 clamp 到 `[0, steps.length - 1]`） |
| steps | StepItem[] | `[]` | 步骤列表 |
| direction | `'horizontal' \| 'vertical'` | `'horizontal'` | 方向 |
| activeColor | string | `''` | 激活时颜色 |
| inactiveColor | string | `''` | 未激活时颜色 |
| isDotStyle | boolean | `false` | 是否使用圆点样式 |
| isClickable | boolean | `false` | 是否可点击切换 |
| isFreeJump | boolean | `false` | 是否允许自由跳转。默认 `false` 时只能回退到已完成步骤，`true` 时可任意跳转 |

## Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| update:modelValue | value | v-model 同步（点击切换时触发） |
| onChange | index, step | 步骤切换 |
| onFinish | - | 完成所有步骤（切换到最后一步时触发） |
