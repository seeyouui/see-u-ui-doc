---
layout: doc
outline: deep
title: Calendar 日历
titleTemplate: SeeYouUI - Calendar 日历
description: SeeYouUI 组件库 seeCalendar 日历组件
iframeSrc: /pages/seeCalendar/index
---

# Calendar 日历

> 平铺式日历组件，支持单选、多选、范围选择，可自定义日期格子、范围限制与最小最大日期。与 `DatetimePicker` 滚轮式互补，适合订单、出行、请假、签到等需要清晰可视化的场景。

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基础用法 · 单选

- 默认 `mode` 为 `'single'`，点击日期选中，再点击底部「确定」按钮触发 `update:modelValue` 与 `onConfirm`。
- 可以通过 `monthsCount` 控制渲染的月份数量（默认 6）。

```html:line-numbers {}
<see-calendar v-model="value" :months-count="1" @on-confirm="onConfirm" />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref<Date | ''>('')
const onConfirm = (val) => {
  console.log('确认日期：', val)
}
</script>
```

## 选中即确认

- 设置 `isShowConfirm` 为 `false`，单选场景下选中日期立即触发 `update:modelValue`，省去确认按钮。

```html:line-numbers {}
<see-calendar v-model="value" mode="single" :is-show-confirm="false" />
```

## 多选模式

- 设置 `mode` 为 `'multiple'`，可累计选中多个日期。
- 再次点击已选中的日期会取消选中。
- 绑定值为 `Date[]` 数组。

```html:line-numbers {}
<see-calendar v-model="value" mode="multiple" :is-show-confirm="false" />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref<Date[]>([])
</script>
```

## 范围选择

- 设置 `mode` 为 `'range'`，第一次点击选定起始日期，第二次点击选定结束日期。
- 若第二次点击日期早于起始日期，会自动反转。
- 中间日期会高亮显示。
- 绑定值为 `[startDate, endDate]` 数组。

```html:line-numbers {}
<see-calendar v-model="value" mode="range" :months-count="2" />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref<Date[]>([])
</script>
```

## 范围模式 · 最大可选天数

- 通过 `maxRange` 限制范围内最大天数；超出时不完成选择，并触发 `onOverRange` 事件。

```html:line-numbers {}
<see-calendar v-model="value" mode="range" :max-range="7" @on-over-range="onOverRange" />

<script lang="ts" setup>
const onOverRange = () => {
  uni.showToast({ title: '最多 7 天', icon: 'none' })
}
</script>
```

## 范围模式 · 允许同一天

- 默认 `allowSameDay` 为 `false`，再次点击起始日不会完成选择。
- 设置为 `true` 后，起止可以是同一天（适用于半日场景）。

```html:line-numbers {}
<see-calendar v-model="value" mode="range" allow-same-day />
```

## 最小最大日期

- 通过 `minDate` 与 `maxDate` 限制可选范围，超出范围的日期会自动禁用。

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

## 一周起始日

- 通过 `firstDayOfWeek` 设置每周第一天（0=周日，1=周一，...）。

```html:line-numbers {}
<see-calendar v-model="value" :first-day-of-week="1" />
```

## 自定义日期格子（formatter）

- 通过 `formatter` 函数可以为每个日期格子注入 `topInfo`、`bottomInfo`、`className`，也可主动 `isDisabled = true` 单独禁用某些日期。
- formatter 接收并需返回 `CalendarDay` 对象，组件会基于返回值渲染。

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
  if (dom === 1) day.topInfo = '初一'
  if (dom === 15) day.topInfo = '十五'
  if (dow === 0 || dow === 6) day.bottomInfo = '休'
  return day
}
</script>
```

## 只读模式

- 设置 `isReadonly` 为 `true`，仅展示，不响应点击。

```html:line-numbers {}
<see-calendar :model-value="value" is-readonly />
```

## 自定义标题与按钮文字

- 通过 `title` / `subtitle` 设置标题区域文字。
- 通过 `confirmText` / `confirmDisabledText` 自定义底部按钮文字（后者在未选完时展示）。

```html:line-numbers {}
<see-calendar
  v-model="value"
  mode="range"
  title="选择请假日期"
  subtitle="请假最少 1 天"
  confirm-text="提交请假"
  confirm-disabled-text="请选择起止日期"
  :months-count="2"
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue | 绑定值（v-model）。单选时为单个日期，多选/范围为数组 | `Date \| string \| number \| Array` | `''` |
| mode | 选择模式 | `'single' \| 'multiple' \| 'range'` | `'single'` |
| minDate | 最小可选日期 | `Date \| string \| number` | - |
| maxDate | 最大可选日期 | `Date \| string \| number` | - |
| defaultDate | 默认展示月份（无 modelValue 时） | `Date \| string \| number` | 今日 |
| firstDayOfWeek | 一周起始日（0=日，1=一，...，6=六） | `0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6` | `0` |
| formatter | 自定义日期格子 | `(day: CalendarDay) => CalendarDay` | - |
| maxRange | 范围模式最大可选天数（0=不限） | `number` | `0` |
| allowSameDay | 范围模式允许起止为同一天 | `boolean` | `false` |
| rowHeight | 日期行高（rpx） | `number \| string` | `128` |
| isShowMark | 是否显示月份水印 | `boolean` | `true` |
| isShowTitle | 是否显示顶部标题 | `boolean` | `true` |
| isShowSubtitle | 是否显示星期标题 | `boolean` | `true` |
| isReadonly | 是否只读 | `boolean` | `false` |
| name | 表单字段名（接入 SeeForm 时使用） | `string` | `''` |
| title | 顶部主标题 | `string` | `'日期选择'` |
| subtitle | 顶部副标题 | `string` | `''` |
| confirmText | 确认按钮文字 | `string` | `'确定'` |
| confirmDisabledText | 范围未选完时按钮文字 | `string` | `'确定'` |
| isShowConfirm | 是否显示底部确认按钮 | `boolean` | `true` |
| monthsCount | 渲染月份数量（向后） | `number` | `6` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | v-model 更新（单/多选 `isShowConfirm=false` 时立即触发，否则点击确认时触发） | `Date \| Date[]` |
| onSelect | 选中变化（每次点击非禁用日期实时触发） | `Date \| Date[]` |
| onConfirm | 点击确认按钮时触发 | `Date \| Date[]` |
| onClickDay | 点击任意日期格子（包括禁用） | `CalendarDay` |
| onOverRange | 范围选择超出 `maxRange` 时触发 | - |
| onMonthShow | 滚动到某月（保留接口） | `{ year: number; month: number }` |

### Slots

| 名称 | 说明 | 作用域参数 |
| --- | --- | --- |
| title | 自定义顶部标题 | - |
| subtitle | 自定义副标题 | - |
| footer | 自定义底部区域（会替换确认按钮） | `{ value }` |

### Expose

| 方法 | 说明 | 参数 |
| --- | --- | --- |
| reset | 清空当前选择 | - |
| getValue | 获取当前选中日期数组 | - |

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
