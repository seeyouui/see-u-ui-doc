---
layout: doc
outline: deep
title: Switch 开关
titleTemplate: SeeYouUI - Switch 开关
description: SeeYouUI 组件库 seeSwitch 开关组件
iframeSrc: /pages/seeSwitch/index
---

# Switch 开关

> 该组件用于在两种状态之间进行切换选择，常用于设置项的开启/关闭操作。
>
> - 支持自定义选中/未选中时的背景颜色
> - 支持自定义选中/未选中时的值
> - 支持选中/未选中时的文字描述
> - 提供 `small`、`default`、`large` 三种尺寸

::: warning 注意
该组件在不同平台上的表现可能存在细微差异，请以实际效果为准。
:::

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基本使用

- 通过 `v-model` 绑定开关的值，默认值为 `false`。

```html:line-numbers {}
<see-switch v-model="value" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(false);
</script>
```

## 自定义颜色

- 通过 `activeColor` 设置选中时的背景色。
- 通过 `inactiveColor` 设置未选中时的背景色。

```html:line-numbers {}
<see-switch v-model="value" activeColor="#07c160" inactiveColor="#ee0a24" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(true);
</script>
```

## 自定义值

- 通过 `activeValue` 设置选中时的值。
- 通过 `inactiveValue` 设置未选中时的值。

```html:line-numbers {}
<see-switch v-model="value" activeValue="yes" inactiveValue="no" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref('yes');
</script>
```

## 文字描述

- 通过 `activeText` 设置选中时的文字描述。
- 通过 `inactiveText` 设置未选中时的文字描述。

```html:line-numbers {}
<see-switch v-model="value" activeText="开" inactiveText="关" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(true);
</script>
```

## 禁用状态

- 通过设置 `isDisabled` 为 `true` 来禁用开关。
- 禁用状态下，点击事件不会触发，且样式会变灰或降低透明度。

```html:line-numbers {}
<see-switch v-model="value" isDisabled />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(true);
</script>
```

## 只读状态

- 通过设置 `isReadonly` 为 `true` 来设置开关为只读状态。
- 只读状态下，点击事件不会触发，但样式保持不变。

```html:line-numbers {}
<see-switch v-model="value" isReadonly />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(true);
</script>
```

## 不同尺寸

- 通过 `size` 参数设置开关大小，可选值为 `small`、`default`、`large`。

```html:line-numbers {}
<see-switch v-model="value" size="small" />
<see-switch v-model="value" size="default" />
<see-switch v-model="value" size="large" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(true);
</script>
```

## API

### Props

| 参数名         | 说明                 | 类型                              | 默认值    | 可选值                         | 平台差异 |
| -------------- | -------------------- | --------------------------------- | --------- | ------------------------------ | -------- |
| modelValue     | 绑定值               | `boolean \| string \| number`     | `false`   | -                              | -        |
| isDisabled     | 是否禁用             | `boolean`                         | `false`   | `true`、`false`                | -        |
| isReadonly     | 是否只读             | `boolean`                         | `false`   | `true`、`false`                | -        |
| size           | 尺寸                 | `"small" \| "default" \| "large"` | `'default'` | `small`、`default`、`large` | -        |
| activeColor    | 选中时背景色         | `string`                          | -         | 任意 CSS 颜色值                | -        |
| inactiveColor  | 未选中时背景色       | `string`                          | -         | 任意 CSS 颜色值                | -        |
| activeValue    | 选中时的值           | `boolean \| string \| number`     | `true`    | -                              | -        |
| inactiveValue  | 未选中时的值         | `boolean \| string \| number`     | `false`   | -                              | -        |
| activeText     | 选中时的文字描述     | `string`                          | `''`      | -                              | -        |
| inactiveText   | 未选中时的文字描述   | `string`                          | `''`      | -                              | -        |
| name           | 表单字段名           | `string`                          | `''`      | -                              | -        |

### Events

| 事件名   | 说明                         | 回调参数              |
| -------- | ---------------------------- | --------------------- |
| onChange | 开关状态变化时触发           | value: 当前绑定的值   |
| onClick  | 点击开关时触发（在 onChange 之前） | event: 点击事件对象 |

### Slots

| 插槽名   | 说明                 | 参数 |
| -------- | -------------------- | ---- |
| active   | 选中时的自定义内容   | -    |
| inactive | 未选中时的自定义内容 | -    |
