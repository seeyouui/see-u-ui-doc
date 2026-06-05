---
layout: doc
outline: deep
title: NumberBox
titleTemplate: SeeYouUI - NumberBox
description: SeeYouUI Component Library seeNumberBox component
iframeSrc: /pages/seeNumberBox/index
---

# NumberBox

> This component is used to control numerical increments and decrements through plus and minus buttons, commonly used for shopping cart quantity selection, quantity adjustment, and similar scenarios.
>
> - Supports setting minimum and maximum value limits
> - Supports setting step size and decimal places
> - Supports disabling direct input editing
> - Supports individually disabling plus and minus buttons
> - Provides method invocation capabilities (getValue, plus, minus)

::: warning Notice
This component may have slight differences in appearance across platforms. Please refer to the actual effect.
:::

## Platform Differences

| App (vue) | App (nvue) | H5  | Mini Program |
| --------- | ---------- | --- | ------------ |
| √         | √          | √   | √            |

## Basic Usage

- Bind the value via `v-model`, default value is `0`.
- Set the value range via `min` and `max`.

```html:line-numbers {}
<see-number-box v-model="value" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(1);
</script>
```

## Step Size

- Set the change amount for each click of the plus or minus button via `step`, default is `1`.

```html:line-numbers {}
<see-number-box v-model="value" :step="5" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(10);
</script>
```

## Decimal Places

- Set the number of decimal places to retain via `decimalLength`.

```html:line-numbers {}
<see-number-box v-model="value" :step="0.1" :decimalLength="1" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(1.0);
</script>
```

## Range Limits

- Set the minimum value via `min`, default is `0`.
- Set the maximum value via `max`, default is `Infinity`.

```html:line-numbers {}
<see-number-box v-model="value" :min="1" :max="10" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(5);
</script>
```

## Disabled Input

- Set `isDisabledInput` to `true` to prohibit direct editing of the input box, only allowing operation through plus and minus buttons.

```html:line-numbers {}
<see-number-box v-model="value" isDisabledInput />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(1);
</script>
```

## Disabled Plus/Minus Buttons

- Set `isDisabledPlus` to `true` to disable the plus button.
- Set `isDisabledMinus` to `true` to disable the minus button.

```html:line-numbers {}
<see-number-box v-model="value" isDisabledPlus />
<see-number-box v-model="value" isDisabledMinus />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(1);
</script>
```

## Disabled State

- Set `isDisabled` to `true` to disable the entire number box.
- In disabled state, all operations are unavailable.

```html:line-numbers {}
<see-number-box v-model="value" isDisabled />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(1);
</script>
```

## Readonly State

- Set `isReadonly` to `true` to set the number box to readonly state.
- In readonly state, operations will not trigger, but the style remains unchanged.

```html:line-numbers {}
<see-number-box v-model="value" isReadonly />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(1);
</script>
```

## Different Sizes

- Set the number box size via the `size` parameter. Available values are `small`, `default`, and `large`.

```html:line-numbers {}
<see-number-box v-model="value" size="small" />
<see-number-box v-model="value" size="default" />
<see-number-box v-model="value" size="large" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(1);
</script>
```

## Async Change

- Set `isAsync` to `true` to enable async change mode.
- In async mode, the value will not update automatically and needs to be manually updated via `v-model`. This is suitable for scenarios requiring async validation in onChange.

```html:line-numbers {}
<see-number-box v-model="value" isAsync @onChange="onChange" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(1);

const onChange = (val: number) => {
  // Manually update after async validation passes
  value.value = val;
};
</script>
```

## API

### Props

| Parameter | Description | Type | Default | Optional Values | Platform Notes |
| --- | --- | --- | --- | --- | --- |
| modelValue | Binding value | `number` | `0` | - | - |
| min | Minimum value | `number` | `0` | - | - |
| max | Maximum value | `number` | `Infinity` | - | - |
| step | Step size | `number` | `1` | Any positive number | - |
| isDisabled | Whether disabled | `boolean` | `false` | `true`, `false` | - |
| isReadonly | Whether readonly | `boolean` | `false` | `true`, `false` | - |
| isDisabledInput | Whether to disable input | `boolean` | `false` | `true`, `false` | - |
| isDisabledPlus | Whether to disable plus button | `boolean` | `false` | `true`, `false` | - |
| isDisabledMinus | Whether to disable minus button | `boolean` | `false` | `true`, `false` | - |
| decimalLength | Decimal places | `number` | - | Any non-negative integer | - |
| size | Size | `"small" \| "default" \| "large"` | `'default'` | `small`, `default`, `large` | - |
| inputWidth | Input width (px) | `number` | `60` | Any positive number | - |
| isAsync | Whether it is async change mode | `boolean` | `false` | `true`, `false` | - |
| name | Form field name | `string` | `''` | - | - |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onChange | Triggered when value changes | value: Current value |
| onOverlimit | Triggered when value exceeds range limits | value: Current value |
| onPlus | Triggered when plus button is clicked | value: Current value |
| onMinus | Triggered when minus button is clicked | value: Current value |
| onFocus | Triggered when input gains focus | event: Focus event object |
| onBlur | Triggered when input loses focus | event: Focus event object |

### Methods

Call after obtaining the component instance via `ref`.

| Method Name | Description | Parameters | Return Value |
| --- | --- | --- | --- |
| getValue | Get current value | - | `number` |
| plus | Execute plus operation | - | - |
| minus | Execute minus operation | - | - |
