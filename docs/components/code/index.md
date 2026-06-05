---
layout: doc
outline: deep
title: Code 验证码输入框
titleTemplate: SeeYouUI - Code 验证码输入框
description: SeeYouUI 组件库 seeCode 组件
iframeSrc: /pages/seeCode/index
---

# Code 验证码输入框

> 用于输入验证码的组件，支持自定义长度、类型、遮罩模式、光标动画等特性。
>
> - 支持自定义验证码长度
> - 支持方框、底线、下划线等多种类型
> - 支持密码遮罩模式
> - 支持光标闪烁动画
> - 支持自定义键盘类型

::: warning 注意
该组件在不同平台上的表现可能存在细微差异，请以实际效果为准。
:::

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基本使用

- 通过 `v-model` 绑定输入值。
- 默认 4 位验证码，自动聚焦。

```html:line-numbers {}
<see-code v-model="code" @on-complete="handleComplete" />

<script lang="ts" setup>
import { ref } from 'vue';
const code = ref('');

const handleComplete = (value) => {
  console.log('验证码输入完成', value);
};
</script>
```

## 6 位验证码

- 通过 `length` 设置验证码长度，默认为 `4`。

```html:line-numbers {}
<see-code v-model="code" :length="6" @on-complete="handleComplete" />

<script lang="ts" setup>
import { ref } from 'vue';
const code = ref('');

const handleComplete = (value) => {
  console.log('验证码输入完成', value);
};
</script>
```

## 不同类型

- 通过 `type` 设置输入框样式类型，支持 `box`（方框）、`line`（底线）、`middleLine`（中线）、`bottomLine`（下划线）。

```html:line-numbers {}
<see-code v-model="code1" type="box" />
<see-code v-model="code2" type="line" />
<see-code v-model="code3" type="middleLine" />
<see-code v-model="code4" type="bottomLine" />

<script lang="ts" setup>
import { ref } from 'vue';
const code1 = ref('');
const code2 = ref('');
const code3 = ref('');
const code4 = ref('');
</script>
```

## 遮罩模式

- 通过设置 `isMask` 为 `true` 启用密码遮罩模式，输入内容以圆点显示。
- 适用于验证码保密场景。

```html:line-numbers {}
<see-code v-model="code" isMask />

<script lang="ts" setup>
import { ref } from 'vue';
const code = ref('');
</script>
```

## 光标动画

- 通过设置 `isCursor` 为 `true` 启用光标闪烁动画，默认为 `true`。

```html:line-numbers {}
<see-code v-model="code" isCursor />

<script lang="ts" setup>
import { ref } from 'vue';
const code = ref('');
</script>
```

## 自定义间距

- 通过 `gap` 设置输入框之间的间距，单位为 px，默认为 `10`。

```html:line-numbers {}
<see-code v-model="code" :gap="20" />

<script lang="ts" setup>
import { ref } from 'vue';
const code = ref('');
</script>
```

## API

### Props

| 参数名 | 说明 | 类型 | 默认值 | 可选值 |
| ------ | ---- | ---- | ------ | ------ |
| modelValue | 输入值 | `string` | `''` | - |
| length | 验证码长度 | `number` | `4` | - |
| isFocus | 是否自动聚焦 | `boolean` | `true` | - |
| isDisabled | 是否禁用 | `boolean` | `false` | - |
| isReadonly | 是否只读 | `boolean` | `false` | - |
| size | 尺寸 | `'small' \| 'default' \| 'large'` | `'default'` | - |
| type | 输入框类型 | `'box' \| 'line' \| 'middleLine' \| 'bottomLine'` | `'box'` | - |
| isMask | 是否遮罩模式 | `boolean` | `false` | - |
| gap | 输入框间距（px） | `number` | `10` | - |
| name | 表单字段名 | `string` | `''` | - |
| keyboard | 键盘类型 | `'number' \| 'text'` | `'number'` | - |
| isCursor | 是否显示光标 | `boolean` | `true` | - |

### Events

| 事件名 | 说明 | 回调参数 |
| ------ | ---- | -------- |
| onChange | 输入值变化时触发 | `value: string` |
| onComplete | 验证码输入完成时触发 | `value: string` |
| onFocus | 输入框聚焦时触发 | `event: Event` |
| onBlur | 输入框失焦时触发 | `event: Event` |

### Expose

| 方法名 | 说明 | 参数 | 返回值 |
| ------ | ---- | ---- | ------ |
| focus | 使输入框聚焦 | - | `void` |
| getValue | 获取当前输入值 | - | `string` |
