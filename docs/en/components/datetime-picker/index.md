---
layout: doc
outline: deep
title: DatetimePicker
titleTemplate: SeeYouUI - DatetimePicker
description: SeeYouUI Component Library seeDatetimePicker component
iframeSrc: /pages/seeDatetimePicker/index
---

# DatetimePicker

> A date and time picker component with a bottom-sheet wheel panel. Supports various selection types including date, time, datetime, year-month, and month-day. Features range limits, custom formatting, and filtering. Automatically corrects date validity when year or month changes.

## Platform Differences

| App (vue) | App (nvue) | H5  | Mini Program |
| --------- | ---------- | --- | ------------ |
| √         | √          | √   | √            |

## Date Selection

- Set `type` to `'date'` to display only the year, month, and day columns.

```html:line-numbers {}
<see-datetime-picker v-model="value" type="date" />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(new Date())
</script>
```

## Time Selection

- Set `type` to `'time'` to display only the hour and minute columns.
- Set `isShowSeconds` to `true` to additionally display the seconds column.

```html:line-numbers {}
<see-datetime-picker v-model="value" type="time" />
<see-datetime-picker v-model="value" type="time" isShowSeconds />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(new Date())
</script>
```

## Datetime Selection

- Set `type` to `'datetime'` (default) to display both date and time columns.
- Set `isShowSeconds` to `true` to additionally display the seconds column.

```html:line-numbers {}
<see-datetime-picker v-model="value" type="datetime" />
<see-datetime-picker v-model="value" type="datetime" isShowSeconds />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(new Date())
</script>
```

## Year-Month Selection

- Set `type` to `'year-month'` to display only the year and month columns.

```html:line-numbers {}
<see-datetime-picker v-model="value" type="year-month" />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(new Date())
</script>
```

## Month-Day Selection

- Set `type` to `'month-day'` to display only the month and day columns.

```html:line-numbers {}
<see-datetime-picker v-model="value" type="month-day" />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(new Date())
</script>
```

## Range Limits

- Limit the selectable date range via `minDate` and `maxDate`.
- Limit the selectable time range via `minHour`, `maxHour`, `minMinute`, and `maxMinute`.
- Options for year, month, and day columns are automatically trimmed based on the range to ensure date validity.

```html:line-numbers {}
<see-datetime-picker
  v-model="value"
  type="date"
  :minDate="minDate"
  :maxDate="maxDate"
/>

<see-datetime-picker
  v-model="value"
  type="time"
  :minHour="8"
  :maxHour="18"
  :minMinute="0"
  :maxMinute="59"
/>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(new Date())
const minDate = new Date(2020, 0, 1)
const maxDate = new Date(2030, 11, 31)
</script>
```

## Custom Formatting

- Customize the display format of options via the `formatter` function. The function receives the column type and the raw value.

```html:line-numbers {}
<see-datetime-picker
  v-model="value"
  type="datetime"
  :formatter="formatter"
/>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(new Date())

function formatter(type: string, value: string) {
  if (type === 'year') return `${value}`
  if (type === 'month') return `${value}`
  if (type === 'day') return `${value}`
  if (type === 'hour') return `${value}h`
  if (type === 'minute') return `${value}m`
  return value
}
</script>
```

## Custom Filtering

- Filter available options via the `filter` function. The function receives the column type and the array of available values, and returns the filtered array.

```html:line-numbers {}
<see-datetime-picker
  v-model="value"
  type="time"
  :filter="filter"
/>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(new Date())

function filter(type: string, values: string[]) {
  // Only allow selecting on the hour and half hour
  if (type === 'minute') {
    return values.filter((v) => Number(v) % 30 === 0)
  }
  return values
}
</script>
```

## Custom Configuration

- Set the title via `toolbarTitle`.
- Customize button text via `confirmText` and `cancelText`.
- Customize placeholder text via `placeholder`.

```html:line-numbers {}
<see-datetime-picker
  v-model="value"
  type="date"
  toolbarTitle="Select Date"
  confirmText="Confirm"
  cancelText="Close"
  placeholder="Please select a date"
/>
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| modelValue | Bound value (v-model) | `Date \| string \| number` | `''` |
| type | Picker type | `'date' \| 'time' \| 'datetime' \| 'year-month' \| 'month-day'` | `'datetime'` |
| placeholder | Placeholder text | `string` | `'Please select'` |
| isDisabled | Whether disabled | `boolean` | `false` |
| isReadonly | Whether readonly | `boolean` | `false` |
| isShowToolbar | Whether to show the top toolbar | `boolean` | `true` |
| toolbarTitle | Toolbar title | `string` | `''` |
| confirmText | Confirm button text | `string` | `'Confirm'` |
| cancelText | Cancel button text | `string` | `'Cancel'` |
| minDate | Minimum date | `Date \| string \| number` | `''` |
| maxDate | Maximum date | `Date \| string \| number` | `''` |
| minHour | Minimum hour | `number` | `0` |
| maxHour | Maximum hour | `number` | `23` |
| minMinute | Minimum minute | `number` | `0` |
| maxMinute | Maximum minute | `number` | `59` |
| isShowSeconds | Whether to show the seconds column | `boolean` | `false` |
| formatter | Custom formatting function | `(type: string, value: string) => string` | - |
| filter | Custom filter function | `(type: string, values: string[]) => string[]` | - |
| size | Size | `'small' \| 'default' \| 'large'` | `'default'` |
| isBorder | Whether to show border | `boolean` | `true` |
| name | Form field name | `string` | `''` |

### Events

| Event | Description | Callback Parameters |
| --- | --- | --- |
| onChange | Triggered when the selected value changes | `value: Date` |
| onConfirm | Triggered when the confirm button is clicked | `value: Date` |
| onCancel | Triggered when the cancel button or overlay is clicked | - |

### Expose

| Method | Description | Parameters |
| --- | --- | --- |
| open | Open the picker | - |
| close | Close the picker | - |
| isVisible | Get whether the picker is currently expanded | - |
