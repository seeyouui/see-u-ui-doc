---
layout: doc
outline: deep
title: Slider
titleTemplate: SeeYouUI - Slider
description: SeeYouUI Component Library seeSlider component
iframeSrc: /pages/seeSlider/index
---

# Slider

> This component is used to select one or more values within a given range, commonly used for volume control, brightness adjustment, price range filtering, and similar scenarios.
>
> - Supports single value selection and range selection
> - Supports step size and tick mark display
> - Supports vertical mode
> - Customizable slider track colors

::: warning Notice
This component may have slight differences in appearance across platforms. Please refer to the actual effect.
:::

## Platform Differences

| App (vue) | App (nvue) | H5  | Mini Program |
| --------- | ---------- | --- | ------------ |
| √         | √          | √   | √            |

## Basic Usage

- Bind the slider value via `v-model`, default value is `0`.
- Set the value range via `min` and `max`, default is `0` to `100`.

```html:line-numbers {}
<see-slider v-model="value" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(30);
</script>
```

## Range Selection

- Set `isRange` to `true` to enable range selection mode.
- In this mode, the `v-model` binding value should be an array, such as `[20, 80]`.

```html:line-numbers {}
<see-slider v-model="value" isRange />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref([20, 80]);
</script>
```

## Step and Tick Marks

- Set the step size via `step`.
- Set `isShowStep` to `true` to display tick marks.

```html:line-numbers {}
<see-slider v-model="value" :step="10" isShowStep />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(40);
</script>
```

## Show Current Value

- Set `isShowValue` to `true` to display the current value next to the slider thumb.

```html:line-numbers {}
<see-slider v-model="value" isShowValue />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(50);
</script>
```

## Vertical Mode

- Set `isVertical` to `true` to switch to vertical mode.

```html:line-numbers {}
<see-slider v-model="value" isVertical style="height: 200px;" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(30);
</script>
```

## Custom Colors

- Set the active track color via `activeColor`.
- Set the inactive track color via `inactiveColor`.

```html:line-numbers {}
<see-slider v-model="value" activeColor="#07c160" inactiveColor="#eee" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(60);
</script>
```

## Disabled State

- Set `isDisabled` to `true` to disable the slider.
- In disabled state, drag events will not trigger, and the style will turn gray or reduce in transparency.

```html:line-numbers {}
<see-slider v-model="value" isDisabled />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(50);
</script>
```

## Readonly State

- Set `isReadonly` to `true` to set the slider to readonly state.
- In readonly state, drag events will not trigger, but the style remains unchanged.

```html:line-numbers {}
<see-slider v-model="value" isReadonly />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(50);
</script>
```

## API

### Props

| Parameter | Description | Type | Default | Optional Values | Platform Notes |
| --- | --- | --- | --- | --- | --- |
| modelValue | Binding value | `number \| number[]` | `0` | - | - |
| min | Minimum value | `number` | `0` | - | - |
| max | Maximum value | `number` | `100` | - | - |
| step | Step size | `number` | `1` | Any positive number | - |
| isDisabled | Whether disabled | `boolean` | `false` | `true`, `false` | - |
| isReadonly | Whether readonly | `boolean` | `false` | `true`, `false` | - |
| isRange | Whether it is range selection | `boolean` | `false` | `true`, `false` | - |
| isVertical | Whether it is vertical mode | `boolean` | `false` | `true`, `false` | - |
| barHeight | Track height (px) | `number` | `4` | Any positive number | - |
| activeColor | Active track color | `string` | - | Any CSS color value | - |
| inactiveColor | Inactive track color | `string` | - | Any CSS color value | - |
| isShowValue | Whether to show current value | `boolean` | `false` | `true`, `false` | - |
| isShowStep | Whether to show tick marks | `boolean` | `false` | `true`, `false` | - |
| size | Size | `"small" \| "default" \| "large"` | `'default'` | `small`, `default`, `large` | - |
| name | Form field name | `string` | `''` | - | - |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onChange | Triggered when value changes | value: Current value |
| onDragStart | Triggered when starting to drag the slider thumb | value: Current value |
| onDragEnd | Triggered when ending drag of the slider thumb | value: Current value |
