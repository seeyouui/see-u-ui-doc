---
layout: doc
outline: deep
title: Calendar
titleTemplate: SeeYouUI - Calendar
description: SeeYouUI Component Library seeCalendar component
iframeSrc: /pages/seeCalendar/index
---

# Calendar

> A tiled calendar component that supports single, multiple, and range selection. You can customize each day cell, restrict the maximum range, and limit min/max dates. It complements the wheel-based `DatetimePicker` and is ideal for order, travel, leave, and check-in scenarios that benefit from clear visualization.

## Platform Differences

| App (vue) | App (nvue) | H5  | Mini Program |
| --------- | ---------- | --- | ------------ |
| √         | √          | √   | √            |

## Basic Usage · Single Selection

- The default `mode` is `'single'`. Click a date to select it, then tap the bottom Confirm button to fire `update:modelValue` and `onConfirm`.
- Use `monthsCount` to control how many months are rendered (default `6`).

```html:line-numbers {}
<see-calendar v-model="value" :months-count="1" @on-confirm="onConfirm" />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref<Date | ''>('')
const onConfirm = (val) => {
  console.log('Confirmed date:', val)
}
</script>
```

## Confirm on Tap

- Set `isShowConfirm` to `false`. In single-selection mode, tapping a date triggers `update:modelValue` immediately, skipping the confirm button.

```html:line-numbers {}
<see-calendar v-model="value" mode="single" :is-show-confirm="false" />
```

## Multiple Selection

- Set `mode` to `'multiple'` to select multiple dates.
- Tapping an already-selected date removes it.
- The bound value is a `Date[]` array.

```html:line-numbers {}
<see-calendar v-model="value" mode="multiple" :is-show-confirm="false" />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref<Date[]>([])
</script>
```

## Range Selection

- Set `mode` to `'range'`. The first tap picks the start date and the second tap picks the end date.
- If the second tap precedes the start date, the order is automatically reversed.
- Dates between start and end are highlighted.
- The bound value is `[startDate, endDate]`.

```html:line-numbers {}
<see-calendar v-model="value" mode="range" :months-count="2" />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref<Date[]>([])
</script>
```

## Range · Maximum Days

- Use `maxRange` to cap the number of days a range can span. When exceeded, the selection is not completed and `onOverRange` is emitted.

```html:line-numbers {}
<see-calendar v-model="value" mode="range" :max-range="7" @on-over-range="onOverRange" />

<script lang="ts" setup>
const onOverRange = () => {
  uni.showToast({ title: '7 days max', icon: 'none' })
}
</script>
```

## Range · Allow Same Day

- `allowSameDay` defaults to `false`. Tapping the start date again will not complete the selection.
- When set to `true`, the start and end can be the same day (useful for half-day scenarios).

```html:line-numbers {}
<see-calendar v-model="value" mode="range" allow-same-day />
```

## Min and Max Date

- Use `minDate` and `maxDate` to constrain the selectable range. Dates outside the range are automatically disabled.

```html:line-numbers {}
<see-calendar
  v-model="value"
  :min-date="minDate"
  :max-date="maxDate"
/>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref<Date | ''>('')
const minDate = new Date(2026, 5, 1)
const maxDate = new Date(2026, 11, 31)
</script>
```

## First Day of Week

- Use `firstDayOfWeek` to set the first day of each week (0 = Sunday, 1 = Monday, ...).

```html:line-numbers {}
<see-calendar v-model="value" :first-day-of-week="1" />
```

## Custom Day Cells (formatter)

- The `formatter` callback lets you inject `topInfo`, `bottomInfo`, and `className` on each day cell, or disable specific days by setting `isDisabled = true`.
- The formatter receives a `CalendarDay` and must return it; the component renders based on the returned value.

```html:line-numbers {}
<see-calendar v-model="value" :formatter="dayFormatter" />

<script lang="ts" setup>
import { ref } from 'vue'
import type { CalendarDay } from 'see-u-ui'

const value = ref<Date | ''>('')

const dayFormatter = (day: CalendarDay): CalendarDay => {
  if (!day.date) return day
  const dom = day.date.getDate()
  const dow = day.date.getDay()
  if (dom === 1) day.topInfo = '1st'
  if (dom === 15) day.topInfo = '15th'
  if (dow === 0 || dow === 6) day.bottomInfo = 'off'
  return day
}
</script>
```

## Readonly Mode

- Set `isReadonly` to `true` to make the calendar display-only without responding to taps.

```html:line-numbers {}
<see-calendar :model-value="value" is-readonly />
```

## Custom Title and Button Text

- Use `title` / `subtitle` to set the header texts.
- Use `confirmText` / `confirmDisabledText` to customize the bottom button label (the latter is shown when selection is incomplete).

```html:line-numbers {}
<see-calendar
  v-model="value"
  mode="range"
  title="Pick leave dates"
  subtitle="At least 1 day"
  confirm-text="Submit leave"
  confirm-disabled-text="Pick start and end"
  :months-count="2"
/>
```

## API

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| modelValue | v-model value. A single date in single mode; an array in multiple/range mode | `Date \| string \| number \| Array` | `''` |
| mode | Selection mode | `'single' \| 'multiple' \| 'range'` | `'single'` |
| minDate | Minimum selectable date | `Date \| string \| number` | - |
| maxDate | Maximum selectable date | `Date \| string \| number` | - |
| defaultDate | Initial month to display (when modelValue is empty) | `Date \| string \| number` | today |
| firstDayOfWeek | First day of week (0 = Sun, 1 = Mon, ..., 6 = Sat) | `0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6` | `0` |
| formatter | Customize each day cell | `(day: CalendarDay) => CalendarDay` | - |
| maxRange | Max days for range mode (0 = unlimited) | `number` | `0` |
| allowSameDay | Allow same start and end day in range mode | `boolean` | `false` |
| rowHeight | Row height of day cells (rpx) | `number \| string` | `128` |
| isShowMark | Whether to show the month watermark | `boolean` | `true` |
| isShowTitle | Whether to show the header title | `boolean` | `true` |
| isShowSubtitle | Whether to show the weekday header | `boolean` | `true` |
| isReadonly | Readonly mode | `boolean` | `false` |
| name | Form field name (for SeeForm integration) | `string` | `''` |
| title | Header title text | `string` | `'Pick date'` |
| subtitle | Header subtitle text | `string` | `''` |
| confirmText | Confirm button text | `string` | `'Confirm'` |
| confirmDisabledText | Confirm button text when range is incomplete | `string` | `'Confirm'` |
| isShowConfirm | Whether to show the confirm button | `boolean` | `true` |
| monthsCount | Number of months to render forward | `number` | `6` |

### Events

| Event | Description | Callback |
| --- | --- | --- |
| update:modelValue | v-model update (fired immediately for single/multiple when `isShowConfirm=false`, otherwise on Confirm) | `Date \| Date[]` |
| onSelect | Selection changed (fires on every non-disabled day tap) | `Date \| Date[]` |
| onConfirm | Confirm button tapped | `Date \| Date[]` |
| onClickDay | Any day cell tapped (including disabled) | `CalendarDay` |
| onOverRange | Range selection exceeded `maxRange` | - |
| onMonthShow | Scrolled to a specific month (reserved API) | `{ year: number; month: number }` |

### Slots

| Name | Description | Scoped params |
| --- | --- | --- |
| title | Customize the header title | - |
| subtitle | Customize the subtitle | - |
| footer | Customize the footer area (replaces the confirm button) | `{ value }` |

### Expose

| Method | Description | Params |
| --- | --- | --- |
| reset | Clear the current selection | - |
| getValue | Get current selected dates as an array | - |

### TypeScript

```ts
interface CalendarDay {
  date: Date | null
  text: string | number
  topInfo?: string
  bottomInfo?: string
  className?: string
  isDisabled?: boolean
  isToday?: boolean
  type?: '' | 'selected' | 'start' | 'middle' | 'end' | 'disabled' | 'placeholder' | 'start-end'
}

type CalendarMode = 'single' | 'multiple' | 'range'
type FirstDayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6
```
