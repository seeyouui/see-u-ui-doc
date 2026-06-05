---
layout: doc
outline: deep
title: Search 搜索
titleTemplate: SeeYouUI - Search 搜索
description: SeeYouUI 组件库 seeSearch 搜索组件
iframeSrc: /pages/seeSearch/index
---

# Search 搜索

> 该组件用于搜索场景，提供了输入框和搜索按钮的组合，常用于页面顶部的搜索栏。
>
> - 支持圆角和方形两种形状
> - 支持显示右侧操作按钮（如"取消"）
> - 支持自定义左右插槽
> - 支持一键清除输入内容

::: warning 注意
该组件在不同平台上的表现可能存在细微差异，请以实际效果为准。
:::

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基本使用

- 通过 `v-model` 绑定搜索框的值。
- 通过 `placeholder` 设置占位提示文字，默认为 `'搜索'`。

```html:line-numbers {}
<see-search v-model="value" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref('');
</script>
```

## 圆角/方形

- 通过 `shape` 设置搜索框的形状，可选值为 `round`（圆角）和 `square`（方形），默认为 `round`。

```html:line-numbers {}
<see-search v-model="value" shape="round" />
<see-search v-model="value" shape="square" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref('');
</script>
```

## 操作按钮

- 通过设置 `isShowAction` 为 `true` 来显示右侧操作按钮。
- 通过 `actionText` 设置操作按钮的文字，默认为 `'取消'`。

```html:line-numbers {}
<see-search v-model="value" isShowAction />
<see-search v-model="value" isShowAction actionText="搜索" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref('');
</script>
```

## 自动聚焦

- 通过设置 `isFocus` 为 `true` 来让搜索框自动获取焦点。

```html:line-numbers {}
<see-search v-model="value" isFocus />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref('');
</script>
```

## 清除按钮

- 通过设置 `isClearable` 为 `true` 来在输入内容后显示清除按钮，默认为 `true`。
- 点击清除按钮会清空输入内容并触发 `onClear` 事件。

```html:line-numbers {}
<see-search v-model="value" :isClearable="false" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref('');
</script>
```

## 自定义颜色

- 通过 `bgColor` 设置搜索框的背景颜色。
- 通过设置 `isBorder` 为 `true` 来显示边框。

```html:line-numbers {}
<see-search v-model="value" bgColor="#f5f5f5" />
<see-search v-model="value" isBorder />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref('');
</script>
```

## 自定义插槽

- 通过 `left` 插槽自定义搜索框左侧内容。
- 通过 `right` 插槽自定义搜索框右侧内容。

```html:line-numbers {}
<see-search v-model="value">
  <template #left>
    <text style="margin-right: 8px;">分类</text>
  </template>
  <template #right>
    <text style="margin-left: 8px;">筛选</text>
  </template>
</see-search>

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref('');
</script>
```

## 禁用状态

- 通过设置 `isDisabled` 为 `true` 来禁用搜索框。
- 禁用状态下，输入事件不会触发。

```html:line-numbers {}
<see-search v-model="value" isDisabled />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref('');
</script>
```

## 只读状态

- 通过设置 `isReadonly` 为 `true` 来设置搜索框为只读状态。
- 只读状态下，无法输入内容，但可触发点击事件。

```html:line-numbers {}
<see-search v-model="value" isReadonly />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref('');
</script>
```

## 不同尺寸

- 通过 `size` 参数设置搜索框大小，可选值为 `small`、`default`、`large`。

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

| 参数名        | 说明                       | 类型                           | 默认值    | 可选值                         | 平台差异 |
| ------------- | -------------------------- | ------------------------------ | --------- | ------------------------------ | -------- |
| modelValue    | 绑定值                     | `string`                       | -         | -                              | -        |
| placeholder   | 占位提示文字               | `string`                       | `'搜索'`  | -                              | -        |
| isDisabled    | 是否禁用                   | `boolean`                      | `false`   | `true`、`false`                | -        |
| isReadonly    | 是否只读                   | `boolean`                      | `false`   | `true`、`false`                | -        |
| isClearable   | 是否显示清除按钮           | `boolean`                      | `true`    | `true`、`false`                | -        |
| isShowAction  | 是否显示右侧操作按钮       | `boolean`                      | `false`   | `true`、`false`                | -        |
| actionText    | 操作按钮文字               | `string`                       | `'取消'`  | -                              | -        |
| isFocus       | 是否自动聚焦               | `boolean`                      | `false`   | `true`、`false`                | -        |
| shape         | 搜索框形状                 | `"round" \| "square"`          | `'round'` | `round`、`square`              | -        |
| size          | 尺寸                       | `"small" \| "default" \| "large"` | `'default'` | `small`、`default`、`large` | -        |
| isBorder      | 是否显示边框               | `boolean`                      | `false`   | `true`、`false`                | -        |
| bgColor       | 搜索框背景颜色             | `string`                       | -         | 任意 CSS 颜色值                | -        |
| name          | 表单字段名                 | `string`                       | `''`      | -                              | -        |

### Events

| 事件名    | 说明                         | 回调参数                |
| --------- | ---------------------------- | ----------------------- |
| onInput   | 输入内容时触发               | value: 当前输入值       |
| onChange   | 输入内容变化且确认后触发     | value: 当前值           |
| onFocus   | 输入框获得焦点时触发         | event: 焦点事件对象     |
| onBlur    | 输入框失去焦点时触发         | event: 焦点事件对象     |
| onClear   | 点击清除按钮时触发           | -                       |
| onSearch  | 键盘确认搜索时触发           | value: 当前输入值       |
| onCancel  | 点击操作按钮时触发           | -                       |

### Slots

| 插槽名 | 说明                   | 参数 |
| ------ | ---------------------- | ---- |
| left   | 搜索框左侧自定义内容   | -    |
| right  | 搜索框右侧自定义内容   | -    |
