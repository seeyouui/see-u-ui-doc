---
layout: doc
outline: deep
title: DatetimePicker 日期时间选择器
titleTemplate: SeeYouUI - DatetimePicker 日期时间选择器
description: SeeYouUI 组件库 seeDatetimePicker 日期时间选择器组件
iframeSrc: /pages/seeDatetimePicker/index
---

# DatetimePicker 日期时间选择器

> 日期时间选择器组件，底部弹出滚轮面板，支持日期、时间、日期时间、年月、月日等多种选择类型。支持范围限制、自定义格式化和过滤，年月变化时自动修正日期有效性。

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 日期选择

- 设置 `type` 为 `'date'`，仅显示年、月、日三列。

```html:line-numbers {}
<see-datetime-picker v-model="value" type="date" />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(new Date())
</script>
```

## 时间选择

- 设置 `type` 为 `'time'`，仅显示时、分两列。
- 设置 `isShowSeconds` 为 `true` 可额外显示秒列。

```html:line-numbers {}
<see-datetime-picker v-model="value" type="time" />
<see-datetime-picker v-model="value" type="time" isShowSeconds />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(new Date())
</script>
```

## 日期时间选择

- 设置 `type` 为 `'datetime'`（默认），同时显示年月日和时分。
- 设置 `isShowSeconds` 为 `true` 可额外显示秒列。

```html:line-numbers {}
<see-datetime-picker v-model="value" type="datetime" />
<see-datetime-picker v-model="value" type="datetime" isShowSeconds />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(new Date())
</script>
```

## 年月选择

- 设置 `type` 为 `'year-month'`，仅显示年和月两列。

```html:line-numbers {}
<see-datetime-picker v-model="value" type="year-month" />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(new Date())
</script>
```

## 月日选择

- 设置 `type` 为 `'month-day'`，仅显示月和日两列。

```html:line-numbers {}
<see-datetime-picker v-model="value" type="month-day" />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(new Date())
</script>
```

## 范围限制

- 通过 `minDate` 和 `maxDate` 限制可选日期范围。
- 通过 `minHour`、`maxHour`、`minMinute`、`maxMinute` 限制可选时间范围。
- 年、月、日各列的选项会根据范围自动裁剪，确保日期有效性。

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

## 自定义格式化

- 通过 `formatter` 函数自定义选项的显示格式，函数接收列类型和原始值。

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
  if (type === 'year') return `${value}年`
  if (type === 'month') return `${value}月`
  if (type === 'day') return `${value}日`
  if (type === 'hour') return `${value}时`
  if (type === 'minute') return `${value}分`
  return value
}
</script>
```

## 自定义过滤

- 通过 `filter` 函数过滤可选项，函数接收列类型和可选值数组，返回过滤后的值数组。

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
  // 只允许选择整点和半点
  if (type === 'minute') {
    return values.filter((v) => Number(v) % 30 === 0)
  }
  return values
}
</script>
```

## 自定义配置

- 通过 `toolbarTitle` 设置标题。
- 通过 `confirmText`、`cancelText` 自定义按钮文字。
- 通过 `placeholder` 自定义占位文本。

```html:line-numbers {}
<see-datetime-picker
  v-model="value"
  type="date"
  toolbarTitle="选择日期"
  confirmText="确定"
  cancelText="关闭"
  placeholder="请选择日期"
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue | 绑定值（v-model） | `Date \| string \| number` | `''` |
| type | 选择器类型 | `'date' \| 'time' \| 'datetime' \| 'year-month' \| 'month-day'` | `'datetime'` |
| placeholder | 占位符 | `string` | `'请选择'` |
| isDisabled | 是否禁用 | `boolean` | `false` |
| isReadonly | 是否只读 | `boolean` | `false` |
| isShowToolbar | 是否显示顶部工具栏 | `boolean` | `true` |
| toolbarTitle | 工具栏标题 | `string` | `''` |
| confirmText | 确认按钮文字 | `string` | `'确认'` |
| cancelText | 取消按钮文字 | `string` | `'取消'` |
| minDate | 最小日期 | `Date \| string \| number` | `''` |
| maxDate | 最大日期 | `Date \| string \| number` | `''` |
| minHour | 最小小时 | `number` | `0` |
| maxHour | 最大小时 | `number` | `23` |
| minMinute | 最小分钟 | `number` | `0` |
| maxMinute | 最大分钟 | `number` | `59` |
| isShowSeconds | 是否显示秒列 | `boolean` | `false` |
| formatter | 自定义格式化函数 | `(type: string, value: string) => string` | - |
| filter | 自定义过滤函数 | `(type: string, values: string[]) => string[]` | - |
| size | 尺寸 | `'small' \| 'default' \| 'large'` | `'default'` |
| isBorder | 是否显示边框 | `boolean` | `true` |
| name | 表单字段名 | `string` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onChange | 选中值变化时触发 | `value: Date` |
| onConfirm | 点击确认按钮时触发 | `value: Date` |
| onCancel | 点击取消按钮或遮罩时触发 | - |

### Expose

| 方法 | 说明 | 参数 |
| --- | --- | --- |
| open | 打开选择器 | - |
| close | 关闭选择器 | - |
| isVisible | 获取当前是否展开 | - |
