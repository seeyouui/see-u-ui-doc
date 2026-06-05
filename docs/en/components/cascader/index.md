---
layout: doc
outline: deep
title: Cascader
titleTemplate: SeeYouUI - Cascader
description: SeeYouUI Component Library seeCascader component
iframeSrc: /pages/seeCascader/index
---

# Cascader

> A tab-switching hierarchical selector component that supports unlimited levels of cascading and lazy loading. Features a bottom-sheet popup panel with tab navigation for switching between levels. Ideal for scenarios like region selection and organizational structure selection.

## Platform Differences

| App (vue) | App (nvue) | H5  | Mini Program |
| --------- | ---------- | --- | ------------ |
| √         | √          | √   | √            |

## Basic Usage

- Pass tree-structured data via `options`, and bind the selected value path array using `v-model`.
- The panel automatically confirms and closes after selecting a leaf node.

```html:line-numbers {}
<see-cascader v-model="value" :options="options" />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref<(string | number)[]>([])
const options = [
  {
    value: 'zhejiang',
    text: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        text: 'Hangzhou',
        children: [
          { value: 'xihu', text: 'Xihu District' },
          { value: 'yuhang', text: 'Yuhang District' }
        ]
      },
      {
        value: 'ningbo',
        text: 'Ningbo',
        children: [
          { value: 'haishu', text: 'Haishu District' },
          { value: 'yinzhou', text: 'Yinzhou District' }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    text: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        text: 'Nanjing',
        children: [
          { value: 'xuanwu', text: 'Xuanwu District' },
          { value: 'gulou', text: 'Gulou District' }
        ]
      }
    ]
  }
]
</script>
```

## Lazy Loading

- Set `isLazy` to `true` to enable lazy loading mode.
- Pass an async loading function via `lazyLoad`. The function receives the current node and returns an array of child options.
- The `isLeaf` field in the option data indicates whether a node is a leaf node.

```html:line-numbers {}
<see-cascader
  v-model="value"
  :options="options"
  isLazy
  :lazyLoad="loadChildren"
/>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref<(string | number)[]>([])
const options = [
  { value: 'zhejiang', text: 'Zhejiang', isLeaf: false },
  { value: 'jiangsu', text: 'Jiangsu', isLeaf: false }
]

async function loadChildren(node: any) {
  // Simulate async request
  return new Promise((resolve) => {
    setTimeout(() => {
      if (node.value === 'zhejiang') {
        resolve([
          { value: 'hangzhou', text: 'Hangzhou', isLeaf: false },
          { value: 'ningbo', text: 'Ningbo' }
        ])
      } else {
        resolve([
          { value: 'nanjing', text: 'Nanjing' },
          { value: 'suzhou', text: 'Suzhou' }
        ])
      }
    }, 500)
  })
}
</script>
```

## Custom Configuration

- Set the title via `toolbarTitle`.
- Customize button text via `confirmText` and `cancelText`.
- Set `isShowTab` to `false` to hide the level tab navigation.
- Customize field mapping via `valueKey`, `labelKey`, and `childrenKey`.

```html:line-numbers {}
<see-cascader
  v-model="value"
  :options="options"
  toolbarTitle="Select Region"
  confirmText="Confirm"
  cancelText="Close"
  :isShowTab="false"
/>
```

## Disabled Options

- Set `disabled` to `true` in the option data to disable a single option.
- Set `isDisabled` on the component to disable the entire selector.

```html:line-numbers {}
<see-cascader v-model="value" :options="options" />
<see-cascader v-model="value" :options="options" isDisabled />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref<(string | number)[]>([])
const options = [
  {
    value: 'zhejiang',
    text: 'Zhejiang',
    children: [
      { value: 'hangzhou', text: 'Hangzhou' },
      { value: 'ningbo', text: 'Ningbo', disabled: true }
    ]
  }
]
</script>
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| modelValue | Selected value path array (v-model) | `(string \| number)[]` | `[]` |
| options | Option data (tree structure) | `CascaderOption[]` | `[]` |
| placeholder | Placeholder text | `string` | `'Please select'` |
| isDisabled | Whether disabled | `boolean` | `false` |
| isReadonly | Whether readonly | `boolean` | `false` |
| isShowToolbar | Whether to show the top toolbar | `boolean` | `true` |
| toolbarTitle | Toolbar title | `string` | `''` |
| confirmText | Confirm button text | `string` | `'Confirm'` |
| cancelText | Cancel button text | `string` | `'Cancel'` |
| valueKey | Key name for value | `string` | `'value'` |
| labelKey | Key name for label | `string` | `'text'` |
| childrenKey | Key name for children | `string` | `'children'` |
| isLazy | Whether to lazy-load child options | `boolean` | `false` |
| lazyLoad | Lazy loading function | `(node: CascaderOption) => Promise<CascaderOption[]>` | - |
| size | Size | `'small' \| 'default' \| 'large'` | `'default'` |
| isBorder | Whether to show border | `boolean` | `true` |
| name | Form field name | `string` | `''` |
| isShowTab | Whether to show level tab navigation | `boolean` | `true` |

**CascaderOption Type Definition:**

| Field | Description | Type | Required |
| --- | --- | --- | --- |
| value | Option value | `string \| number` | Yes |
| text | Option text | `string` | Yes |
| disabled | Whether disabled | `boolean` | No |
| isLeaf | Whether it is a leaf node (used in lazy loading mode) | `boolean` | No |
| children | List of child options | `CascaderOption[]` | No |

### Events

| Event | Description | Callback Parameters |
| --- | --- | --- |
| onChange | Triggered when the value changes | `value: (string \| number)[]` |
| onConfirm | Triggered when the confirm button is clicked | `value: (string \| number)[]` |
| onCancel | Triggered when the cancel button or overlay is clicked | - |
| onTabChange | Triggered when switching level tabs | `index: number` |
