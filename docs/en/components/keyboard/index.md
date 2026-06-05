---
layout: doc
outline: deep
title: Keyboard
titleTemplate: SeeYouUI - Keyboard
description: SeeYouUI Component Library seeKeyboard component
iframeSrc: /pages/seeKeyboard/index
---

# Keyboard

> A custom keyboard component that supports number keyboard, ID card keyboard, full keyboard, and more. Commonly used with verification code input, password input, and similar components.
>
> - Supports number, ID card, and full keyboard types
> - Supports security keyboard (random number layout)
> - Supports custom toolbar
> - Supports closing on overlay click
> - Supports bottom safe area

::: warning Notice
This component may have slight behavioral differences across platforms. Please refer to the actual rendered result.
:::

## Platform Differences

| App (vue) | App (nvue) | H5  | Mini Program |
| --------- | ---------- | --- | ------------ |
| √         | √          | √   | √            |

## Basic Usage

- Control the keyboard visibility via `v-model`.
- Defaults to the number keyboard type.

```html:line-numbers {}
<template>
  <see-button @click="show = true">Show Keyboard</see-button>
  <see-keyboard v-model="show" @on-input="handleInput" @on-delete="handleDelete" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const show = ref(false);

const handleInput = (value) => {
  console.log('Input', value);
};

const handleDelete = () => {
  console.log('Delete');
};
</script>
```

## ID Card Keyboard

- Set `type` to `idcard` to show the ID card keyboard, which includes the X key.

```html:line-numbers {}
<template>
  <see-button @click="show = true">ID Card Keyboard</see-button>
  <see-keyboard v-model="show" type="idcard" @on-input="handleInput" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const show = ref(false);

const handleInput = (value) => {
  console.log('Input', value);
};
</script>
```

## Full Keyboard

- Set `type` to `keyboard` to show the full keyboard, which includes letters and symbols.

```html:line-numbers {}
<template>
  <see-button @click="show = true">Full Keyboard</see-button>
  <see-keyboard v-model="show" type="keyboard" @on-input="handleInput" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const show = ref(false);

const handleInput = (value) => {
  console.log('Input', value);
};
</script>
```

## Security Keyboard

- Enable the security keyboard by setting `isRandom` to `true`, which randomly arranges the number keys.
- Suitable for secure scenarios such as password input.

```html:line-numbers {}
<template>
  <see-button @click="show = true">Security Keyboard</see-button>
  <see-keyboard v-model="show" isRandom @on-input="handleInput" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const show = ref(false);

const handleInput = (value) => {
  console.log('Input', value);
};
</script>
```

## With Code Component

- The keyboard component is typically used together with the verification code input component.

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

## Custom Toolbar

- Control toolbar visibility via `isShowToolbar`.
- Set the toolbar title via `title`.
- Set the confirm button text via `confirmText`.
- Customize toolbar content via the `toolbar` slot.

```html:line-numbers {}
<template>
  <see-button @click="show = true">Custom Toolbar</see-button>
  <see-keyboard
    v-model="show"
    title="Security Keyboard"
    confirm-text="Confirm"
    @on-confirm="handleConfirm"
    @on-close="show = false"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const show = ref(false);

const handleConfirm = () => {
  show.value = false;
  console.log('Confirmed');
};
</script>
```

## API

### Props

| Parameter | Description | Type | Default | Optional Values |
| --- | --- | --- | --- | --- |
| modelValue | Whether to show the keyboard | `boolean` | `false` | - |
| type | Keyboard type | `'number' \| 'idcard' \| 'keyboard'` | `'number'` | - |
| isShowToolbar | Whether to show the toolbar | `boolean` | `true` | - |
| confirmText | Confirm button text | `string` | `'Done'` | - |
| isShowConfirm | Whether to show the confirm button | `boolean` | `true` | - |
| isShowDelete | Whether to show the delete button | `boolean` | `true` | - |
| isRandom | Whether to randomly arrange numbers (security keyboard) | `boolean` | `false` | - |
| isOverlay | Whether to show the overlay | `boolean` | `true` | - |
| isCloseOnClickOverlay | Whether to close on overlay click | `boolean` | `true` | - |
| isSafeArea | Whether to adapt to the bottom safe area | `boolean` | `true` | - |
| title | Toolbar title | `string` | `''` | - |

### Events

| Event | Description | Callback Parameters |
| --- | --- | --- |
| onInput | Triggered on key input | `value: string` |
| onDelete | Triggered when the delete key is pressed | - |
| onConfirm | Triggered when the confirm button is pressed | - |
| onClose | Triggered when the keyboard is closed | - |
| onOpen | Triggered when the keyboard is opened | - |

### Slots

| Slot | Description |
| --- | --- |
| toolbar | Custom toolbar content |
