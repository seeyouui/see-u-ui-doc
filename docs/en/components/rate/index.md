---
layout: doc
outline: deep
title: Rate
titleTemplate: SeeYouUI - Rate
description: SeeYouUI Component Library seeRate component
iframeSrc: /pages/seeRate/index
---

# Rate

> This component is used for rating operations, such as product ratings, service reviews, and similar scenarios.
>
> - Supports half-star rating
> - Supports custom icons and colors
> - Supports clearing selected rating
> - Customizable star count and spacing

::: warning Notice
This component may have slight differences in appearance across platforms. Please refer to the actual effect.
:::

## Platform Differences

| App (vue) | App (nvue) | H5  | Mini Program |
| --------- | ---------- | --- | ------------ |
| √         | √          | √   | √            |

## Basic Usage

- Bind the rating value via `v-model`, default value is `0`.
- Set the total number of stars via `count`, default is `5`.

```html:line-numbers {}
<see-rate v-model="value" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(3);
</script>
```

## Half Star Rating

- Set `allowHalf` to `true` to enable half-star rating.

```html:line-numbers {}
<see-rate v-model="value" allowHalf />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(3.5);
</script>
```

## Custom Icons

- Set the active icon via `icon`.
- Set the inactive icon via `voidIcon`.

```html:line-numbers {}
<see-rate v-model="value" icon="♥" voidIcon="♡" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(3);
</script>
```

## Custom Colors

- Set the active color via `color`.
- Set the inactive color via `voidColor`.

```html:line-numbers {}
<see-rate v-model="value" color="#ff6b00" voidColor="#ddd" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(4);
</script>
```

## Clearable

- Set `isClearable` to `true` to allow clicking the same rating again to clear it (value resets to `0`).

```html:line-numbers {}
<see-rate v-model="value" isClearable />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(3);
</script>
```

## Disabled State

- Set `isDisabled` to `true` to disable the rate component.
- In disabled state, click events will not trigger, and the style will turn gray or reduce in transparency.

```html:line-numbers {}
<see-rate v-model="value" isDisabled />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(3);
</script>
```

## Readonly State

- Set `isReadonly` to `true` to set the rate component to readonly state.
- In readonly state, click events will not trigger, but the style remains unchanged. Suitable for displaying existing ratings.

```html:line-numbers {}
<see-rate v-model="value" isReadonly />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(4.5);
</script>
```

## API

### Props

| Parameter | Description | Type | Default | Optional Values | Platform Notes |
| --- | --- | --- | --- | --- | --- |
| modelValue | Binding value | `number` | `0` | - | - |
| count | Total number of stars | `number` | `5` | Any positive integer | - |
| size | Star size (px) | `number` | `24` | Any positive number | - |
| isDisabled | Whether disabled | `boolean` | `false` | `true`, `false` | - |
| isReadonly | Whether readonly | `boolean` | `false` | `true`, `false` | - |
| allowHalf | Whether to allow half star | `boolean` | `false` | `true`, `false` | - |
| isClearable | Whether to allow clearing | `boolean` | `false` | `true`, `false` | - |
| color | Active color | `string` | - | Any CSS color value | - |
| voidColor | Inactive color | `string` | - | Any CSS color value | - |
| icon | Active icon | `string` | `'★'` | Any character or icon | - |
| voidIcon | Inactive icon | `string` | `'☆'` | Any character or icon | - |
| gap | Star spacing (px) | `number` | `4` | Any positive number | - |
| name | Form field name | `string` | `''` | - | - |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onChange | Triggered when rating value changes | value: Current rating value |
