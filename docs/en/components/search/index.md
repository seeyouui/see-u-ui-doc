---
layout: doc
outline: deep
title: Search
titleTemplate: SeeYouUI - Search
description: SeeYouUI Component Library seeSearch component
iframeSrc: /pages/seeSearch/index
---

# Search

> This component is used for search scenarios, providing a combination of input box and search button, commonly used for search bars at the top of pages.
>
> - Supports round and square shapes
> - Supports displaying right action button (e.g., "Cancel")
> - Supports custom left and right slots
> - Supports one-click clearing of input content

::: warning Notice
This component may have slight differences in appearance across platforms. Please refer to the actual effect.
:::

## Platform Differences

| App (vue) | App (nvue) | H5  | Mini Program |
| --------- | ---------- | --- | ------------ |
| √         | √          | √   | √            |

## Basic Usage

- Bind the search box value via `v-model`.
- Set the placeholder text via `placeholder`, default is `'Search'`.

```html:line-numbers {}
<see-search v-model="value" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref('');
</script>
```

## Round/Square

- Set the search box shape via `shape`. Available values are `round` (rounded corners) and `square` (square corners), default is `round`.

```html:line-numbers {}
<see-search v-model="value" shape="round" />
<see-search v-model="value" shape="square" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref('');
</script>
```

## Action Button

- Set `isShowAction` to `true` to display the right action button.
- Set the action button text via `actionText`, default is `'Cancel'`.

```html:line-numbers {}
<see-search v-model="value" isShowAction />
<see-search v-model="value" isShowAction actionText="Search" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref('');
</script>
```

## Auto Focus

- Set `isFocus` to `true` to make the search box automatically gain focus.

```html:line-numbers {}
<see-search v-model="value" isFocus />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref('');
</script>
```

## Clear Button

- Set `isClearable` to `true` to display the clear button after input content, default is `true`.
- Clicking the clear button will clear the input content and trigger the `onClear` event.

```html:line-numbers {}
<see-search v-model="value" :isClearable="false" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref('');
</script>
```

## Custom Colors

- Set the search box background color via `bgColor`.
- Set `isBorder` to `true` to display the border.

```html:line-numbers {}
<see-search v-model="value" bgColor="#f5f5f5" />
<see-search v-model="value" isBorder />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref('');
</script>
```

## Custom Slots

- Customize the left content of the search box via the `left` slot.
- Customize the right content of the search box via the `right` slot.

```html:line-numbers {}
<see-search v-model="value">
  <template #left>
    <text style="margin-right: 8px;">Category</text>
  </template>
  <template #right>
    <text style="margin-left: 8px;">Filter</text>
  </template>
</see-search>

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref('');
</script>
```

## Disabled State

- Set `isDisabled` to `true` to disable the search box.
- In disabled state, input events will not trigger.

```html:line-numbers {}
<see-search v-model="value" isDisabled />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref('');
</script>
```

## Readonly State

- Set `isReadonly` to `true` to set the search box to readonly state.
- In readonly state, content cannot be input, but click events can be triggered.

```html:line-numbers {}
<see-search v-model="value" isReadonly />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref('');
</script>
```

## Different Sizes

- Set the search box size via the `size` parameter. Available values are `small`, `default`, and `large`.

```html:line-numbers {}
<see-search v-model="value" size="small" />
<see-search v-model="value" size="default" />
<see-search v-model="value" size="large" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref('');
</script>
```

## API

### Props

| Parameter | Description | Type | Default | Optional Values | Platform Notes |
| --- | --- | --- | --- | --- | --- |
| modelValue | Binding value | `string` | - | - | - |
| placeholder | Placeholder text | `string` | `'Search'` | - | - |
| isDisabled | Whether disabled | `boolean` | `false` | `true`, `false` | - |
| isReadonly | Whether readonly | `boolean` | `false` | `true`, `false` | - |
| isClearable | Whether to show clear button | `boolean` | `true` | `true`, `false` | - |
| isShowAction | Whether to show right action button | `boolean` | `false` | `true`, `false` | - |
| actionText | Action button text | `string` | `'Cancel'` | - | - |
| isFocus | Whether to auto focus | `boolean` | `false` | `true`, `false` | - |
| shape | Search box shape | `"round" \| "square"` | `'round'` | `round`, `square` | - |
| size | Size | `"small" \| "default" \| "large"` | `'default'` | `small`, `default`, `large` | - |
| isBorder | Whether to show border | `boolean` | `false` | `true`, `false` | - |
| bgColor | Search box background color | `string` | - | Any CSS color value | - |
| name | Form field name | `string` | `''` | - | - |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onInput | Triggered when content is input | value: Current input value |
| onChange | Triggered when input content changes and is confirmed | value: Current value |
| onFocus | Triggered when input gains focus | event: Focus event object |
| onBlur | Triggered when input loses focus | event: Focus event object |
| onClear | Triggered when clear button is clicked | - |
| onSearch | Triggered when keyboard confirms search | value: Current input value |
| onCancel | Triggered when action button is clicked | - |

### Slots

| Slot Name | Description | Parameters |
| --- | --- | --- |
| left | Custom content on the left side of search box | - |
| right | Custom content on the right side of search box | - |
