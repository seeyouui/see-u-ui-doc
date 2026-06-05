---
layout: doc
outline: deep
title: Slider 滑动选择器
titleTemplate: SeeYouUI - Slider 滑动选择器
description: SeeYouUI 组件库 seeSlider 滑动选择器组件
iframeSrc: /pages/seeSlider/index
---

# Slider 滑动选择器

> 该组件用于在给定范围内选择一个或多个值，常用于音量调节、亮度调节、价格区间筛选等场景。
>
> - 支持单值选择和范围选择
> - 支持设置步长和刻度显示
> - 支持垂直模式
> - 可自定义滑轨颜色

::: warning 注意
该组件在不同平台上的表现可能存在细微差异，请以实际效果为准。
:::

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基本使用

- 通过 `v-model` 绑定滑动选择器的值，默认值为 `0`。
- 通过 `min` 和 `max` 设置取值范围，默认为 `0` ~ `100`。

```html:line-numbers {}
<see-slider v-model="value" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(30);
</script>
```

## 范围选择

- 通过设置 `isRange` 为 `true` 来启用范围选择模式。
- 此时 `v-model` 绑定值应为一个数组，如 `[20, 80]`。

```html:line-numbers {}
<see-slider v-model="value" isRange />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref([20, 80]);
</script>
```

## 步长和刻度

- 通过 `step` 设置步长。
- 通过设置 `isShowStep` 为 `true` 来显示刻度标记。

```html:line-numbers {}
<see-slider v-model="value" :step="10" isShowStep />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(40);
</script>
```

## 显示当前值

- 通过设置 `isShowValue` 为 `true` 来在滑块旁显示当前值。

```html:line-numbers {}
<see-slider v-model="value" isShowValue />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(50);
</script>
```

## 垂直模式

- 通过设置 `isVertical` 为 `true` 来切换为垂直模式。

```html:line-numbers {}
<see-slider v-model="value" isVertical style="height: 200px;" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(30);
</script>
```

## 自定义颜色

- 通过 `activeColor` 设置已选中部分的滑轨颜色。
- 通过 `inactiveColor` 设置未选中部分的滑轨颜色。

```html:line-numbers {}
<see-slider v-model="value" activeColor="#07c160" inactiveColor="#eee" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(60);
</script>
```

## 禁用状态

- 通过设置 `isDisabled` 为 `true` 来禁用滑动选择器。
- 禁用状态下，拖动事件不会触发，且样式会变灰或降低透明度。

```html:line-numbers {}
<see-slider v-model="value" isDisabled />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(50);
</script>
```

## 只读状态

- 通过设置 `isReadonly` 为 `true` 来设置滑动选择器为只读状态。
- 只读状态下，拖动事件不会触发，但样式保持不变。

```html:line-numbers {}
<see-slider v-model="value" isReadonly />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(50);
</script>
```

## API

### Props

| 参数名        | 说明                   | 类型                           | 默认值    | 可选值                         | 平台差异 |
| ------------- | ---------------------- | ------------------------------ | --------- | ------------------------------ | -------- |
| modelValue    | 绑定值                 | `number \| number[]`           | `0`       | -                              | -        |
| min           | 最小值                 | `number`                       | `0`       | -                              | -        |
| max           | 最大值                 | `number`                       | `100`     | -                              | -        |
| step          | 步长                   | `number`                       | `1`       | 任意正数                       | -        |
| isDisabled    | 是否禁用               | `boolean`                      | `false`   | `true`、`false`                | -        |
| isReadonly    | 是否只读               | `boolean`                      | `false`   | `true`、`false`                | -        |
| isRange       | 是否为范围选择         | `boolean`                      | `false`   | `true`、`false`                | -        |
| isVertical    | 是否为垂直模式         | `boolean`                      | `false`   | `true`、`false`                | -        |
| barHeight     | 滑轨高度（px）         | `number`                       | `4`       | 任意正数                       | -        |
| activeColor   | 已选中部分的滑轨颜色   | `string`                       | -         | 任意 CSS 颜色值                | -        |
| inactiveColor | 未选中部分的滑轨颜色   | `string`                       | -         | 任意 CSS 颜色值                | -        |
| isShowValue   | 是否显示当前值         | `boolean`                      | `false`   | `true`、`false`                | -        |
| isShowStep    | 是否显示刻度标记       | `boolean`                      | `false`   | `true`、`false`                | -        |
| size          | 尺寸                   | `"small" \| "default" \| "large"` | `'default'` | `small`、`default`、`large` | -        |
| name          | 表单字段名             | `string`                       | `''`      | -                              | -        |

### Events

| 事件名      | 说明                 | 回调参数                |
| ----------- | -------------------- | ----------------------- |
| onChange    | 值变化时触发         | value: 当前值           |
| onDragStart | 开始拖动滑块时触发   | value: 当前值           |
| onDragEnd   | 结束拖动滑块时触发   | value: 当前值           |
