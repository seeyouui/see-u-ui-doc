---
layout: doc
outline: deep
title: Textarea
titleTemplate: SeeYouUI - Textarea
description: SeeYouUI Component Library seeTextarea component
iframeSrc: /pages/seeTextarea/index
---

# Textarea

> Textarea component is used for multi-line text input. It supports auto height, word count, clear and other features.

## Platform Compatibility

| App(vue) | App(nvue) | H5 | Mini Program |
| :------: | :-------: | :-: | :----------: |
|    √     |     √     |  √  |      √       |

## Basic Usage

```html:line-numbers {}
<template>
  <seeTextarea v-model="value" placeholder="Please enter content" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>
```

## Set Rows

Set the default display rows of the textarea via the `rows` property.

```html:line-numbers {}
<template>
  <seeTextarea v-model="value" :rows="5" placeholder="Textarea with 5 rows height" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>
```

## Auto Height

Set the `isAutoHeight` property and the textarea height will automatically adjust based on content.

```html:line-numbers {}
<template>
  <seeTextarea
    v-model="value"
    placeholder="Enter content, height will adjust automatically"
    is-auto-height
  />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>
```

## Word Limit

Set the `isShowWordLimit` property to display word count. Must be used together with `maxlength`.

```html:line-numbers {}
<template>
  <seeTextarea
    v-model="value"
    placeholder="Please enter content"
    maxlength="200"
    is-show-word-limit
  />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>
```

## Clearable

Set the `isClearable` property to show a clear button for clearing input content with one click.

```html:line-numbers {}
<template>
  <seeTextarea
    v-model="value"
    placeholder="Clearable textarea"
    is-clearable
  />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('Clearable content')
</script>
```

## Disabled and Readonly

Set disabled and readonly states via `isDisabled` and `isReadonly` properties.

```html:line-numbers {}
<template>
  <seeTextarea v-model="value" is-disabled placeholder="Disabled state" />
  <seeTextarea v-model="value" is-readonly placeholder="Readonly state" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>
```

## Sizes

Set textarea size via `size` property. Supports `small`, `default`, `large`.

```html:line-numbers {}
<template>
  <seeTextarea v-model="value" size="small" placeholder="Small size" />
  <seeTextarea v-model="value" size="default" placeholder="Default size" />
  <seeTextarea v-model="value" size="large" placeholder="Large size" />
</template>
```

## Borderless Mode

Set `isBorder` to `false` to hide the textarea border.

```html:line-numbers {}
<template>
  <seeTextarea v-model="value" :is-border="false" placeholder="Borderless textarea" />
</template>
```

## Keyboard Confirm Key

Set the keyboard confirm button text via the `confirmType` property.

```html:line-numbers {}
<template>
  <seeTextarea v-model="value" confirm-type="done" placeholder="Confirm key is 'Done'" />
</template>
```

## API

### Props

| Parameter | Description | Type | Default | Platform |
| --------- | ----------- | ---- | ------- | -------- |
| modelValue | Bound value | string | '' | - |
| placeholder | Placeholder text | string | '' | - |
| isDisabled | Whether disabled | boolean | false | - |
| isReadonly | Whether readonly | boolean | false | - |
| maxlength | Maximum input length | number | -1 | - |
| isShowWordLimit | Whether to show word count | boolean | false | - |
| rows | Default display rows | number | 3 | - |
| isAutoHeight | Whether to enable auto height | boolean | false | - |
| isBorder | Whether to show border | boolean | true | - |
| isClearable | Whether to show clear button | boolean | false | - |
| size | Size | string | 'default' | - |
| name | Form field name | string | '' | - |
| confirmType | Keyboard confirm key type | string | 'done' | - |

### Events

| Event | Description | Type | Platform |
| ----- | ----------- | ---- | -------- |
| onInput | Triggered on input | (value: string) => void | - |
| onFocus | Triggered on focus | (event: FocusEvent) => void | - |
| onBlur | Triggered on blur | (event: FocusEvent) => void | - |
| onClear | Triggered when clear button is clicked | () => void | - |
| onChange | Triggered when value changes (on blur) | (value: string) => void | - |
| onConfirm | Triggered when confirm button is clicked | (value: string) => void | - |
| onLineChange | Triggered when line count changes | (event: { height: number, heightRpx: number, lineCount: number }) => void | - |
