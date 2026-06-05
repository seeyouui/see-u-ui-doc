---
layout: doc
outline: deep
title: NumberBox 步进器
titleTemplate: SeeYouUI - NumberBox 步进器
description: SeeYouUI 组件库 seeNumberBox 步进器组件
iframeSrc: /pages/seeNumberBox/index
---

# NumberBox 步进器

> 该组件用于通过加减按钮来控制数值的增减，常用于购物车商品数量选择、数量调节等场景。
>
> - 支持设置最小值和最大值限制
> - 支持设置步长和小数位数
> - 支持禁用输入框直接编辑
> - 支持单独禁用加减按钮
> - 提供方法调用能力（getValue、plus、minus）

::: warning 注意
该组件在不同平台上的表现可能存在细微差异，请以实际效果为准。
:::

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基本使用

- 通过 `v-model` 绑定数值，默认值为 `0`。
- 通过 `min` 和 `max` 设置取值范围。

```html:line-numbers {}
<see-number-box v-model="value" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(1);
</script>
```

## 步长设置

- 通过 `step` 设置每次点击加减按钮时的变化量，默认为 `1`。

```html:line-numbers {}
<see-number-box v-model="value" :step="5" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(10);
</script>
```

## 小数位数

- 通过 `decimalLength` 设置数值保留的小数位数。

```html:line-numbers {}
<see-number-box v-model="value" :step="0.1" :decimalLength="1" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(1.0);
</script>
```

## 限制范围

- 通过 `min` 设置最小值，默认为 `0`。
- 通过 `max` 设置最大值，默认为 `Infinity`。

```html:line-numbers {}
<see-number-box v-model="value" :min="1" :max="10" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(5);
</script>
```

## 禁用输入

- 通过设置 `isDisabledInput` 为 `true` 来禁止直接编辑输入框，只能通过加减按钮操作。

```html:line-numbers {}
<see-number-box v-model="value" isDisabledInput />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(1);
</script>
```

## 禁用加减按钮

- 通过设置 `isDisabledPlus` 为 `true` 来禁用加号按钮。
- 通过设置 `isDisabledMinus` 为 `true` 来禁用减号按钮。

```html:line-numbers {}
<see-number-box v-model="value" isDisabledPlus />
<see-number-box v-model="value" isDisabledMinus />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(1);
</script>
```

## 禁用状态

- 通过设置 `isDisabled` 为 `true` 来禁用整个步进器。
- 禁用状态下，所有操作均不可用。

```html:line-numbers {}
<see-number-box v-model="value" isDisabled />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(1);
</script>
```

## 只读状态

- 通过设置 `isReadonly` 为 `true` 来设置步进器为只读状态。
- 只读状态下，操作不会触发，但样式保持不变。

```html:line-numbers {}
<see-number-box v-model="value" isReadonly />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(1);
</script>
```

## 不同尺寸

- 通过 `size` 参数设置步进器大小，可选值为 `small`、`default`、`large`。

```html:line-numbers {}
<see-number-box v-model="value" size="small" />
<see-number-box v-model="value" size="default" />
<see-number-box v-model="value" size="large" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(1);
</script>
```

## 异步变更

- 通过设置 `isAsync` 为 `true` 来启用异步变更模式。
- 异步模式下，值不会自动更新，需手动通过 `v-model` 更新，适用于需要在 onChange 中做异步校验的场景。

```html:line-numbers {}
<see-number-box v-model="value" isAsync @onChange="onChange" />

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(1);

const onChange = (val: number) => {
  // 异步校验通过后手动更新
  value.value = val;
};
</script>
```

## API

### Props

| 参数名            | 说明                   | 类型                           | 默认值      | 可选值                         | 平台差异 |
| ----------------- | ---------------------- | ------------------------------ | ----------- | ------------------------------ | -------- |
| modelValue        | 绑定值                 | `number`                       | `0`         | -                              | -        |
| min               | 最小值                 | `number`                       | `0`         | -                              | -        |
| max               | 最大值                 | `number`                       | `Infinity`  | -                              | -        |
| step              | 步长                   | `number`                       | `1`         | 任意正数                       | -        |
| isDisabled        | 是否禁用               | `boolean`                      | `false`     | `true`、`false`                | -        |
| isReadonly        | 是否只读               | `boolean`                      | `false`     | `true`、`false`                | -        |
| isDisabledInput   | 是否禁用输入框         | `boolean`                      | `false`     | `true`、`false`                | -        |
| isDisabledPlus    | 是否禁用加号按钮       | `boolean`                      | `false`     | `true`、`false`                | -        |
| isDisabledMinus   | 是否禁用减号按钮       | `boolean`                      | `false`     | `true`、`false`                | -        |
| decimalLength     | 小数位数               | `number`                       | -           | 任意非负整数                   | -        |
| size              | 尺寸                   | `"small" \| "default" \| "large"` | `'default'` | `small`、`default`、`large` | -        |
| inputWidth        | 输入框宽度（px）       | `number`                       | `60`        | 任意正数                       | -        |
| isAsync           | 是否为异步变更模式     | `boolean`                      | `false`     | `true`、`false`                | -        |
| name              | 表单字段名             | `string`                       | `''`        | -                              | -        |

### Events

| 事件名      | 说明                       | 回调参数                |
| ----------- | -------------------------- | ----------------------- |
| onChange    | 值变化时触发               | value: 当前值           |
| onOverlimit | 数值超出范围限制时触发     | value: 当前值           |
| onPlus      | 点击加号按钮时触发         | value: 当前值           |
| onMinus     | 点击减号按钮时触发         | value: 当前值           |
| onFocus     | 输入框获得焦点时触发       | event: 焦点事件对象     |
| onBlur      | 输入框失去焦点时触发       | event: 焦点事件对象     |

### Methods

通过 `ref` 获取组件实例后调用。

| 方法名   | 说明           | 参数 | 返回值       |
| -------- | -------------- | ---- | ------------ |
| getValue | 获取当前值     | -    | `number`     |
| plus     | 执行加操作     | -    | -            |
| minus    | 执行减操作     | -    | -            |
