---
layout: doc
outline: deep
title: Keyboard 键盘
titleTemplate: SeeYouUI - Keyboard 键盘
description: SeeYouUI 组件库 seeKeyboard 组件
iframeSrc: /pages/seeKeyboard/index
---

# Keyboard 键盘

> 自定义键盘组件，支持数字键盘、身份证键盘、完整键盘等多种类型，常配合验证码输入框、密码输入框等使用。
>
> - 支持数字、身份证、完整键盘等多种类型
> - 支持安全键盘（随机数字排列）
> - 支持自定义工具栏
> - 支持遮罩层点击关闭
> - 支持底部安全区域

::: warning 注意
该组件在不同平台上的表现可能存在细微差异，请以实际效果为准。
:::

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基本使用

- 通过 `v-model` 控制键盘的显示/隐藏。
- 默认为数字键盘类型。

```html:line-numbers {}
<template>
  <see-button @click="show = true">弹出键盘</see-button>
  <see-keyboard v-model="show" @on-input="handleInput" @on-delete="handleDelete" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const show = ref(false);

const handleInput = (value) => {
  console.log('输入', value);
};

const handleDelete = () => {
  console.log('删除');
};
</script>
```

## 身份证键盘

- 将 `type` 设置为 `idcard` 可弹出身份证键盘，包含 X 键。

```html:line-numbers {}
<template>
  <see-button @click="show = true">身份证键盘</see-button>
  <see-keyboard v-model="show" type="idcard" @on-input="handleInput" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const show = ref(false);

const handleInput = (value) => {
  console.log('输入', value);
};
</script>
```

## 完整键盘

- 将 `type` 设置为 `keyboard` 可弹出完整键盘，包含字母和符号。

```html:line-numbers {}
<template>
  <see-button @click="show = true">完整键盘</see-button>
  <see-keyboard v-model="show" type="keyboard" @on-input="handleInput" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const show = ref(false);

const handleInput = (value) => {
  console.log('输入', value);
};
</script>
```

## 安全键盘

- 通过设置 `isRandom` 为 `true` 启用安全键盘，数字随机排列。
- 适用于密码输入等安全场景。

```html:line-numbers {}
<template>
  <see-button @click="show = true">安全键盘</see-button>
  <see-keyboard v-model="show" isRandom @on-input="handleInput" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const show = ref(false);

const handleInput = (value) => {
  console.log('输入', value);
};
</script>
```

## 配合 Code 使用

- 键盘组件通常与验证码输入框配合使用。

```html:line-numbers {}
<template>
  <see-code v-model="code" :isFocus="false" @on-focus="showKeyboard = true" />
  <see-keyboard v-model="showKeyboard" @on-input="handleInput" @on-delete="handleDelete" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const code = ref('');
const showKeyboard = ref(false);

const handleInput = (value) => {
  if (code.value.length < 6) {
    code.value += value;
  }
};

const handleDelete = () => {
  code.value = code.value.slice(0, -1);
};
</script>
```

## 自定义工具栏

- 通过 `isShowToolbar` 控制是否显示工具栏。
- 通过 `title` 设置工具栏标题。
- 通过 `confirmText` 设置确认按钮文字。
- 通过 `toolbar` 插槽自定义工具栏内容。

```html:line-numbers {}
<template>
  <see-button @click="show = true">自定义工具栏</see-button>
  <see-keyboard
    v-model="show"
    title="安全键盘"
    confirm-text="确认"
    @on-confirm="handleConfirm"
    @on-close="show = false"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const show = ref(false);

const handleConfirm = () => {
  show.value = false;
  console.log('确认');
};
</script>
```

## API

### Props

| 参数名 | 说明 | 类型 | 默认值 | 可选值 |
| ------ | ---- | ---- | ------ | ------ |
| modelValue | 是否显示键盘 | `boolean` | `false` | - |
| type | 键盘类型 | `'number' \| 'idcard' \| 'keyboard'` | `'number'` | - |
| isShowToolbar | 是否显示工具栏 | `boolean` | `true` | - |
| confirmText | 确认按钮文字 | `string` | `'完成'` | - |
| isShowConfirm | 是否显示确认按钮 | `boolean` | `true` | - |
| isShowDelete | 是否显示删除按钮 | `boolean` | `true` | - |
| isRandom | 是否随机数字排列（安全键盘） | `boolean` | `false` | - |
| isOverlay | 是否显示遮罩层 | `boolean` | `true` | - |
| isCloseOnClickOverlay | 点击遮罩是否关闭 | `boolean` | `true` | - |
| isSafeArea | 是否适配底部安全区域 | `boolean` | `true` | - |
| title | 工具栏标题 | `string` | `''` | - |

### Events

| 事件名 | 说明 | 回调参数 |
| ------ | ---- | -------- |
| onInput | 按键输入时触发 | `value: string` |
| onDelete | 点击删除键时触发 | - |
| onConfirm | 点击确认按钮时触发 | - |
| onClose | 键盘关闭时触发 | - |
| onOpen | 键盘打开时触发 | - |

### Slots

| 插槽名 | 说明 |
| ------ | ---- |
| toolbar | 自定义工具栏内容 |
