---
layout: doc
outline: deep
title: Select
titleTemplate: SeeYouUI - Select
description: SeeYouUI Component Library seeSelect component
iframeSrc: /pages/seeSelect/index
---

# Select

> A dropdown selector component that supports single selection, multiple selection, search filtering, remote search, and grouped options. Built on a popup dropdown panel, options support both flat list and tree-grouped structures.

## Platform Differences

| App (vue) | App (nvue) | H5  | Mini Program |
| --------- | ---------- | --- | ------------ |
| √         | √          | √   | √            |

## Basic Usage

- Set the option list via `options`, and bind the selected value using `v-model`.

```html:line-numbers {}
<see-select v-model="value" :options="options" />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  { label: 'Option One', value: '1' },
  { label: 'Option Two', value: '2' },
  { label: 'Option Three', value: '3' }
]
</script>
```

## Multiple Selection

- Set `isMultiple` to `true` to enable multiple selection mode. `modelValue` should be bound to an array type.
- Control the maximum number of displayed tags via `maxTagCount`; overflow will be shown as `+N`.

```html:line-numbers {}
<see-select v-model="value" :options="options" isMultiple />
<see-select v-model="value" :options="options" isMultiple :maxTagCount="2" />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref<string[]>([])
const options = [
  { label: 'Option One', value: '1' },
  { label: 'Option Two', value: '2' },
  { label: 'Option Three', value: '3' }
]
</script>
```

## Search Filter

- Set `isFilterable` to `true` to enable local search filtering.
- You can customize the filtering logic via `filterMethod`.

```html:line-numbers {}
<see-select v-model="value" :options="options" isFilterable />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  { label: 'Beijing', value: 'beijing' },
  { label: 'Shanghai', value: 'shanghai' },
  { label: 'Guangzhou', value: 'guangzhou' },
  { label: 'Shenzhen', value: 'shenzhen' }
]
</script>
```

## Remote Search

- Set `isRemote` to `true` to enable remote search, and pass a search callback via `remoteMethod`.
- The search input includes a built-in 300ms debounce.
- Set `loading` to `true` to display a loading state.

```html:line-numbers {}
<see-select
  v-model="value"
  :options="options"
  isFilterable
  isRemote
  :remoteMethod="onSearch"
  :loading="loading"
/>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const options = ref([])
const loading = ref(false)

function onSearch(query: string) {
  loading.value = true
  // Simulate remote request
  setTimeout(() => {
    options.value = [
      { label: `${query}-Result One`, value: `${query}-1` },
      { label: `${query}-Result Two`, value: `${query}-2` }
    ]
    loading.value = false
  }, 500)
}
</script>
```

## Grouped Options

- Use the `children` field in `options` to nest sub-options for grouped display.

```html:line-numbers {}
<see-select v-model="value" :options="options" />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  {
    label: 'East China',
    value: 'east',
    children: [
      { label: 'Shanghai', value: 'shanghai' },
      { label: 'Hangzhou', value: 'hangzhou' }
    ]
  },
  {
    label: 'South China',
    value: 'south',
    children: [
      { label: 'Guangzhou', value: 'guangzhou' },
      { label: 'Shenzhen', value: 'shenzhen' }
    ]
  }
]
</script>
```

## Disabled Options

- Set `isDisabled` to `true` in the option data to disable a single option.
- Set `isDisabled` on the component to disable the entire selector.

```html:line-numbers {}
<see-select v-model="value" :options="options" />
<see-select v-model="value" :options="options" isDisabled />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  { label: 'Option One', value: '1' },
  { label: 'Option Two (Disabled)', value: '2', isDisabled: true },
  { label: 'Option Three', value: '3' }
]
</script>
```

## Clearable

- Set `isClearable` to `true`. After a value is selected, a clear button will appear on hover.

```html:line-numbers {}
<see-select v-model="value" :options="options" isClearable />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('1')
const options = [
  { label: 'Option One', value: '1' },
  { label: 'Option Two', value: '2' },
  { label: 'Option Three', value: '3' }
]
</script>
```

## Sizes

- Set the selector size via `size`. Supports `small`, `default`, and `large`.

```html:line-numbers {}
<see-select v-model="value" :options="options" size="small" />
<see-select v-model="value" :options="options" />
<see-select v-model="value" :options="options" size="large" />
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| modelValue | Bound value (v-model) | `string \| number \| (string\|number)[]` | `[]` |
| options | Option list | `SelectOption[]` | `[]` |
| placeholder | Placeholder text | `string` | `'Please select'` |
| isDisabled | Whether disabled | `boolean` | `false` |
| isReadonly | Whether readonly | `boolean` | `false` |
| isClearable | Whether clearable | `boolean` | `false` |
| isMultiple | Whether multiple selection is enabled | `boolean` | `false` |
| isFilterable | Whether searchable | `boolean` | `false` |
| filterMethod | Custom filter method | `(query: string, option: SelectOption) => boolean` | - |
| isRemote | Whether remote search is enabled | `boolean` | `false` |
| remoteMethod | Remote search method | `(query: string) => void` | - |
| loading | Whether loading | `boolean` | `false` |
| size | Size | `'small' \| 'default' \| 'large'` | `'default'` |
| maxTagCount | Maximum number of tags displayed in multiple mode | `number` | - |
| isBorder | Whether to show border | `boolean` | `true` |
| name | Form field name | `string` | `''` |
| valueKey | Key name for option value | `string` | `'value'` |
| labelKey | Key name for option label | `string` | `'label'` |

**SelectOption Type Definition:**

| Field | Description | Type | Required |
| --- | --- | --- | --- |
| label | Display text | `string` | Yes |
| value | Option value | `string \| number` | Yes |
| isDisabled | Whether disabled | `boolean` | No |
| children | Sub-options (for grouping) | `SelectOption[]` | No |

### Events

| Event | Description | Callback Parameters |
| --- | --- | --- |
| onChange | Triggered when the value changes | `value: string \| number \| (string\|number)[]` |
| onVisibleChange | Triggered when the dropdown visibility changes | `visible: boolean` |
| onRemoveTag | Triggered when a tag is removed in multiple mode | `value: string \| number` |
| onClear | Triggered when cleared | - |
| onSearch | Triggered on search input | `query: string` |

### Slots

| Slot Name | Description | Scoped Parameters |
| --- | --- | --- |
| default | Custom option content (scoped slot) | `{ option: SelectOption }` |
| prefix | Prefix content in the trigger area | - |
| empty | Content displayed when the option list is empty | - |

### Expose

| Method | Description | Parameters |
| --- | --- | --- |
| open | Open the dropdown | - |
| close | Close the dropdown | - |
| clear | Clear the selected value | - |
