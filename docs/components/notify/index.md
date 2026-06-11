---
layout: doc
outline: deep
title: Notify 消息通知
titleTemplate: SeeYouUI - Notify 消息通知
description: SeeYouUI 组件库 see-notify 消息通知组件
iframeSrc: /pages/seeNotify/index
---

# Notify 消息通知

消息通知组件，用于在页面顶部展示重要通知信息，支持多种通知类型和自定义样式。

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基本使用

- 通过 `v-model:show` 控制 Notify 的显示与隐藏。
- 通过 `message` 设置通知文字。

```vue
<template>
  <see-notify v-model:show="show" message="这是一条通知消息" />
  <button @click="show = true">显示通知</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const show = ref(false)
</script>
```

## 通知类型

- 通过 `type` 参数设置通知类型，默认为 `info`。

```vue
<template>
  <see-notify v-model:show="showSuccess" message="更新成功" type="success" />
  <see-notify v-model:show="showError" message="网络错误" type="error" />
  <see-notify v-model:show="showWarning" message="警告信息" type="warning" />
  <see-notify v-model:show="showInfo" message="新消息" type="info" />
</template>
```

## 自定义样式

- 通过 `color` 自定义文字颜色。
- 通过 `background` 自定义背景色。

```vue
<see-notify
  v-model:show="show"
  message="自定义样式通知"
  color="#FFFFFF"
  background="#7232dd"
/>
```

## 自定义图标

- 通过 `icon` 参数设置自定义图标。

```vue
<see-notify v-model:show="show" message="自定义图标通知" icon="bell" />
```

## 显示时长

- 通过 `duration` 参数设置显示时长（毫秒）。

```vue
<see-notify v-model:show="show" message="显示 5 秒" :duration="5000" />
```

## 可关闭通知

- 通过 `isClosable` 设置是否可手动关闭。

```vue
<see-notify v-model:show="show" message="可关闭的通知" :isClosable="true" />
```

## 安全区适配

- 通过 `isSafeArea` 设置是否适配安全区，默认为 `true`。

```vue
<see-notify v-model:show="show" message="不适配安全区" :isSafeArea="false" />
```

## 命令式调用

Notify 支持命令式调用，无需在模板中声明组件。

```ts
import { notify } from 'see-u-ui'

// 成功通知
notify.success('更新成功')

// 错误通知
notify.error('网络错误')

// 警告通知
notify.warning('警告信息')

// 信息通知
notify.info('新消息')
```

## API

### Props

| 参数名 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| show | 是否显示（v-model） | `boolean` | `false` | `true`、`false` |
| message | 通知文字 | `string` | `''` | 任意字符串 |
| type | 通知类型 | `'success' \| 'error' \| 'warning' \| 'info'` | `'info'` | - |
| duration | 显示时长（ms） | `number` | `3000` | 任意数字 |
| icon | 自定义图标 | `string` | `''` | 图标名称 |
| color | 自定义文字颜色 | `string` | `''` | 任意 CSS 颜色值 |
| background | 自定义背景色 | `string` | `''` | 任意 CSS 颜色值 |
| isClosable | 是否可手动关闭 | `boolean` | `false` | `true`、`false` |
| zIndex | z-index 层级 | `number` | `2000` | 任意数字 |
| isSafeArea | 是否适配安全区 | `boolean` | `true` | `true`、`false` |

### Events

| 属性名 | 说明 |
| --- | --- |
| onClick | 点击通知时触发 |
| onClose | 关闭时触发 |
| update:show | v-model 更新时触发 |
