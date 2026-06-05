---
layout: doc
outline: deep
title: Rate 评分
titleTemplate: SeeYouUI - Rate 评分
description: SeeYouUI 组件库 seeRate 评分组件
iframeSrc: /pages/seeRate/index
---

# Rate 评分

> 该组件用于对事物进行评级操作，例如商品评分、服务评价等场景。
>
> - 支持半星评分
> - 支持自定义图标和颜色
> - 支持清除已选评分
> - 可自定义星星数量和间距

::: warning 注意
该组件在不同平台上的表现可能存在细微差异，请以实际效果为准。
:::

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基本使用

- 通过 `v-model` 绑定评分值，默认值为 `0`。
- 通过 `count` 设置星星总数，默认为 `5`。

```html:line-numbers {}
<see-rate v-model="value" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(3);
</script>
```

## 半星评分

- 通过设置 `allowHalf` 为 `true` 来启用半星评分。

```html:line-numbers {}
<see-rate v-model="value" allowHalf />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(3.5);
</script>
```

## 自定义图标

- 通过 `icon` 设置选中时的图标。
- 通过 `voidIcon` 设置未选中时的图标。

```html:line-numbers {}
<see-rate v-model="value" icon="♥" voidIcon="♡" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(3);
</script>
```

## 自定义颜色

- 通过 `color` 设置选中时的颜色。
- 通过 `voidColor` 设置未选中时的颜色。

```html:line-numbers {}
<see-rate v-model="value" color="#ff6b00" voidColor="#ddd" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(4);
</script>
```

## 清除评分

- 通过设置 `isClearable` 为 `true`，允许再次点击相同评分进行清除（值重置为 `0`）。

```html:line-numbers {}
<see-rate v-model="value" isClearable />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(3);
</script>
```

## 禁用状态

- 通过设置 `isDisabled` 为 `true` 来禁用评分组件。
- 禁用状态下，点击事件不会触发，且样式会变灰或降低透明度。

```html:line-numbers {}
<see-rate v-model="value" isDisabled />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(3);
</script>
```

## 只读状态

- 通过设置 `isReadonly` 为 `true` 来设置评分为只读状态。
- 只读状态下，点击事件不会触发，但样式保持不变。适用于展示已有评分的场景。

```html:line-numbers {}
<see-rate v-model="value" isReadonly />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(4.5);
</script>
```

## API

### Props

| 参数名      | 说明             | 类型      | 默认值  | 可选值                  | 平台差异 |
| ----------- | ---------------- | --------- | ------- | ----------------------- | -------- |
| modelValue  | 绑定值           | `number`  | `0`     | -                       | -        |
| count       | 星星总数         | `number`  | `5`     | 任意正整数              | -        |
| size        | 星星大小（px）   | `number`  | `24`    | 任意正数                | -        |
| isDisabled  | 是否禁用         | `boolean` | `false` | `true`、`false`         | -        |
| isReadonly  | 是否只读         | `boolean` | `false` | `true`、`false`         | -        |
| allowHalf   | 是否允许半星     | `boolean` | `false` | `true`、`false`         | -        |
| isClearable | 是否允许清除     | `boolean` | `false` | `true`、`false`         | -        |
| color       | 选中颜色         | `string`  | -       | 任意 CSS 颜色值         | -        |
| voidColor   | 未选中颜色       | `string`  | -       | 任意 CSS 颜色值         | -        |
| icon        | 选中图标         | `string`  | `'★'`  | 任意字符或图标          | -        |
| voidIcon    | 未选中图标       | `string`  | `'☆'`  | 任意字符或图标          | -        |
| gap         | 星星间距（px）   | `number`  | `4`     | 任意正数                | -        |
| name        | 表单字段名       | `string`  | `''`    | -                       | -        |

### Events

| 事件名   | 说明               | 回调参数              |
| -------- | ------------------ | --------------------- |
| onChange | 评分值变化时触发   | value: 当前评分值     |
