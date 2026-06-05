---
layout: doc
outline: deep
title: Picker
titleTemplate: SeeYouUI - Picker
description: SeeYouUI Component Library seePicker component
iframeSrc: /pages/seePicker/index
---

# Picker

> A bottom-sheet wheel picker component that supports single-column, multi-column, and cascade modes. Options are selected via touch scrolling with inertia and snap effects. Commonly used in forms for option selection scenarios.

## Platform Differences

| App (vue) | App (nvue) | H5  | Mini Program |
| --------- | ---------- | --- | ------------ |
| √         | √          | √   | √            |

## Basic Usage

- In single-column mode, pass a one-dimensional array to `columns`. Bind the selected value using `v-model`.

```html:line-numbers {}
<see-picker v-model="value" :columns="columns" />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const columns = [
  { text: 'Hangzhou', value: 'hangzhou' },
  { text: 'Ningbo', value: 'ningbo' },
  { text: 'Wenzhou', value: 'wenzhou' },
  { text: 'Jiaxing', value: 'jiaxing' }
]
</script>
```

## Multiple Columns

- In multi-column mode, pass a two-dimensional array to `columns`. Each column scrolls independently.

```html:line-numbers {}
<see-picker v-model="value" :columns="columns" />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref<string[]>(['2024', '06'])
const columns = [
  [
    { text: '2023', value: '2023' },
    { text: '2024', value: '2024' },
    { text: '2025', value: '2025' }
  ],
  [
    { text: '01', value: '01' },
    { text: '02', value: '02' },
    { text: '03', value: '03' },
    { text: '04', value: '04' },
    { text: '05', value: '05' },
    { text: '06', value: '06' }
  ]
]
</script>
```

## Cascade Selection

- Set `isCascade` to `true` to enable cascade mode. Define child data through the `children` field.
- When a column is selected, the column to its right automatically updates with the corresponding child options.

```html:line-numbers {}
<see-picker v-model="value" :columns="columns" isCascade />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref<string[]>([])
const columns = [
  {
    text: 'Zhejiang',
    value: 'zhejiang',
    children: [
      {
        text: 'Hangzhou',
        value: 'hangzhou',
        children: [
          { text: 'Xihu District', value: 'xihu' },
          { text: 'Yuhang District', value: 'yuhang' }
        ]
      },
      {
        text: 'Ningbo',
        value: 'ningbo',
        children: [
          { text: 'Haishu District', value: 'haishu' },
          { text: 'Yinzhou District', value: 'yinzhou' }
        ]
      }
    ]
  },
  {
    text: 'Jiangsu',
    value: 'jiangsu',
    children: [
      {
        text: 'Nanjing',
        value: 'nanjing',
        children: [
          { text: 'Xuanwu District', value: 'xuanwu' },
          { text: 'Gulou District', value: 'gulou' }
        ]
      }
    ]
  }
]
</script>
```

## Custom Configuration

- Set the title via `toolbarTitle`.
- Customize button text via `confirmText` and `cancelText`.
- Control the number of visible options via `visibleItemCount`.

```html:line-numbers {}
<see-picker
  v-model="value"
  :columns="columns"
  toolbarTitle="Select City"
  confirmText="Confirm"
  cancelText="Close"
  :visibleItemCount="7"
/>
```

## Disabled Options

- Set `disabled` to `true` in the option data to disable a single option.
- Set `isDisabled` on the component to disable the entire picker.

```html:line-numbers {}
<see-picker v-model="value" :columns="columns" />
<see-picker v-model="value" :columns="columns" isDisabled />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const columns = [
  { text: 'Option One', value: '1' },
  { text: 'Option Two (Disabled)', value: '2', disabled: true },
  { text: 'Option Three', value: '3' }
]
</script>
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| modelValue | Bound value (v-model) | `string \| number \| (string\|number)[]` | `''` |
| columns | Option data | `PickerColumn[]` | `[]` |
| placeholder | Placeholder text | `string` | `'Please select'` |
| isDisabled | Whether disabled | `boolean` | `false` |
| isReadonly | Whether readonly | `boolean` | `false` |
| isShowToolbar | Whether to show the top toolbar | `boolean` | `true` |
| toolbarTitle | Toolbar title | `string` | `''` |
| confirmText | Confirm button text | `string` | `'Confirm'` |
| cancelText | Cancel button text | `string` | `'Cancel'` |
| isCascade | Whether cascade mode is enabled | `boolean` | `false` |
| valueKey | Key name for value | `string` | `'value'` |
| labelKey | Key name for label | `string` | `'text'` |
| childrenKey | Key name for children | `string` | `'children'` |
| size | Size | `'small' \| 'default' \| 'large'` | `'default'` |
| isBorder | Whether to show border | `boolean` | `true` |
| name | Form field name | `string` | `''` |
| visibleItemCount | Number of visible options | `number` | `5` |
| isAsync | Whether async loading is enabled | `boolean` | `false` |

**PickerOption Type Definition:**

| Field | Description | Type | Required |
| --- | --- | --- | --- |
| text | Display text | `string` | Yes |
| value | Option value | `string \| number` | Yes |
| disabled | Whether disabled | `boolean` | No |
| children | Sub-options (for cascade mode) | `PickerOption[]` | No |

### Events

| Event | Description | Callback Parameters |
| --- | --- | --- |
| onChange | Triggered when the selected value changes | `value: string \| number \| (string\|number)[], index: number` |
| onConfirm | Triggered when the confirm button is clicked | `value: string \| number \| (string\|number)[]` |
| onCancel | Triggered when the cancel button or overlay is clicked | - |
| onColumnChange | Triggered when a column changes (in cascade mode when switching columns) | `index: number` |

### Expose

| Method | Description | Parameters |
| --- | --- | --- |
| open | Open the picker | - |
| close | Close the picker | - |
| getValue | Get the current selected value | - |
