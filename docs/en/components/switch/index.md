---
layout: doc
outline: deep
title: Switch
titleTemplate: SeeYouUI - Switch
description: SeeYouUI Component Library seeSwitch component
iframeSrc: /pages/seeSwitch/index
---

# Switch

> This component is used to toggle between two states, commonly used for settings like on/off operations.
>
> - Supports custom active/inactive background colors
> - Supports custom active/inactive values
> - Supports text descriptions for active/inactive states
> - Provides `small`, `default`, and `large` sizes

::: warning Notice
This component may have slight differences in appearance across platforms. Please refer to the actual effect.
:::

## Platform Differences

| App (vue) | App (nvue) | H5  | Mini Program |
| --------- | ---------- | --- | ------------ |
| √         | √          | √   | √            |

## Basic Usage

- Bind the switch value via `v-model`, default value is `false`.

```html:line-numbers {}
<see-switch v-model="value" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(false);
</script>
```

## Custom Colors

- Set the active background color via `activeColor`.
- Set the inactive background color via `inactiveColor`.

```html:line-numbers {}
<see-switch v-model="value" activeColor="#07c160" inactiveColor="#ee0a24" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(true);
</script>
```

## Custom Values

- Set the active value via `activeValue`.
- Set the inactive value via `inactiveValue`.

```html:line-numbers {}
<see-switch v-model="value" activeValue="yes" inactiveValue="no" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref('yes');
</script>
```

## Text Description

- Set the text description for active state via `activeText`.
- Set the text description for inactive state via `inactiveText`.

```html:line-numbers {}
<see-switch v-model="value" activeText="ON" inactiveText="OFF" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(true);
</script>
```

## Disabled State

- Set `isDisabled` to `true` to disable the switch.
- In disabled state, click events will not trigger, and the style will turn gray or reduce in transparency.

```html:line-numbers {}
<see-switch v-model="value" isDisabled />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(true);
</script>
```

## Readonly State

- Set `isReadonly` to `true` to set the switch to readonly state.
- In readonly state, click events will not trigger, but the style remains unchanged.

```html:line-numbers {}
<see-switch v-model="value" isReadonly />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(true);
</script>
```

## Different Sizes

- Set the switch size via the `size` parameter. Available values are `small`, `default`, and `large`.

```html:line-numbers {}
<see-switch v-model="value" size="small" />
<see-switch v-model="value" size="default" />
<see-switch v-model="value" size="large" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(true);
</script>
```

## API

### Props

| Parameter | Description | Type | Default | Optional Values | Platform Notes |
| --- | --- | --- | --- | --- | --- |
| modelValue | Binding value | `boolean \| string \| number` | `false` | - | - |
| isDisabled | Whether disabled | `boolean` | `false` | `true`, `false` | - |
| isReadonly | Whether readonly | `boolean` | `false` | `true`, `false` | - |
| size | Size | `"small" \| "default" \| "large"` | `'default'` | `small`, `default`, `large` | - |
| activeColor | Active background color | `string` | - | Any CSS color value | - |
| inactiveColor | Inactive background color | `string` | - | Any CSS color value | - |
| activeValue | Active value | `boolean \| string \| number` | `true` | - | - |
| inactiveValue | Inactive value | `boolean \| string \| number` | `false` | - | - |
| activeText | Active text description | `string` | `''` | - | - |
| inactiveText | Inactive text description | `string` | `''` | - | - |
| name | Form field name | `string` | `''` | - | - |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onChange | Triggered when switch state changes | value: Current binding value |
| onClick | Triggered when switch is clicked (before onChange) | event: Click event object |

### Slots

| Slot Name | Description | Parameters |
| --- | --- | --- |
| active | Custom content for active state | - |
| inactive | Custom content for inactive state | - |
