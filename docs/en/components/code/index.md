---
layout: doc
outline: deep
title: Code
titleTemplate: SeeYouUI - Code
description: SeeYouUI Component Library seeCode component
iframeSrc: /pages/seeCode/index
---

# Code

> A verification code input component that supports custom length, type, mask mode, cursor animation, and more.
>
> - Supports custom verification code length
> - Supports box, line, middleLine, and bottomLine styles
> - Supports password mask mode
> - Supports cursor blinking animation
> - Supports custom keyboard type

::: warning Notice
This component may have slight behavioral differences across platforms. Please refer to the actual rendered result.
:::

## Platform Differences

| App (vue) | App (nvue) | H5  | Mini Program |
| --------- | ---------- | --- | ------------ |
| √         | √          | √   | √            |

## Basic Usage

- Bind the input value via `v-model`.
- Defaults to 4-digit verification code with auto-focus enabled.

```html:line-numbers {}
<see-code v-model="code" @on-complete="handleComplete" />

<script lang="ts" setup>
import { ref } from 'vue';
const code = ref('');

const handleComplete = (value) => {
  console.log('Verification code completed', value);
};
</script>
```

## 6-Digit Code

- Set the verification code length via `length`, which defaults to `4`.

```html:line-numbers {}
<see-code v-model="code" :length="6" @on-complete="handleComplete" />

<script lang="ts" setup>
import { ref } from 'vue';
const code = ref('');

const handleComplete = (value) => {
  console.log('Verification code completed', value);
};
</script>
```

## Different Types

- Set the input style via `type`, supporting `box` (box), `line` (baseline), `middleLine` (middle line), and `bottomLine` (underline).

```html:line-numbers {}
<see-code v-model="code1" type="box" />
<see-code v-model="code2" type="line" />
<see-code v-model="code3" type="middleLine" />
<see-code v-model="code4" type="bottomLine" />

<script lang="ts" setup>
import { ref } from 'vue';
const code1 = ref('');
const code2 = ref('');
const code3 = ref('');
const code4 = ref('');
</script>
```

## Mask Mode

- Enable password mask mode by setting `isMask` to `true`. Input characters are displayed as dots.
- Suitable for scenarios where the verification code needs to be hidden.

```html:line-numbers {}
<see-code v-model="code" isMask />

<script lang="ts" setup>
import { ref } from 'vue';
const code = ref('');
</script>
```

## Cursor Animation

- Enable cursor blinking animation by setting `isCursor` to `true`, which is enabled by default.

```html:line-numbers {}
<see-code v-model="code" isCursor />

<script lang="ts" setup>
import { ref } from 'vue';
const code = ref('');
</script>
```

## Custom Gap

- Set the gap between input fields via `gap` in px, which defaults to `10`.

```html:line-numbers {}
<see-code v-model="code" :gap="20" />

<script lang="ts" setup>
import { ref } from 'vue';
const code = ref('');
</script>
```

## API

### Props

| Parameter | Description | Type | Default | Optional Values |
| --- | --- | --- | --- | --- |
| modelValue | Input value | `string` | `''` | - |
| length | Verification code length | `number` | `4` | - |
| isFocus | Whether to auto-focus | `boolean` | `true` | - |
| isDisabled | Whether disabled | `boolean` | `false` | - |
| isReadonly | Whether readonly | `boolean` | `false` | - |
| size | Size | `'small' \| 'default' \| 'large'` | `'default'` | - |
| type | Input style type | `'box' \| 'line' \| 'middleLine' \| 'bottomLine'` | `'box'` | - |
| isMask | Whether to enable mask mode | `boolean` | `false` | - |
| gap | Gap between input fields (px) | `number` | `10` | - |
| name | Form field name | `string` | `''` | - |
| keyboard | Keyboard type | `'number' \| 'text'` | `'number'` | - |
| isCursor | Whether to show cursor | `boolean` | `true` | - |

### Events

| Event | Description | Callback Parameters |
| --- | --- | --- |
| onChange | Triggered when the input value changes | `value: string` |
| onComplete | Triggered when the verification code input is complete | `value: string` |
| onFocus | Triggered when the input field gains focus | `event: Event` |
| onBlur | Triggered when the input field loses focus | `event: Event` |

### Expose

| Method | Description | Parameters | Return Value |
| --- | --- | --- | --- |
| focus | Focus the input field | - | `void` |
| getValue | Get the current input value | - | `string` |
