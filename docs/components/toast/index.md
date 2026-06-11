---
layout: doc
outline: deep
title: Toast 轻提示
titleTemplate: SeeYouUI - Toast 轻提示
description: SeeYouUI 组件库 see-toast 轻提示组件
iframeSrc: /pages/seeToast/index
---

# Toast 轻提示

轻量级的消息提示组件，用于展示简短的操作反馈信息，支持多种提示类型和自定义配置。

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基本使用

- 通过 `v-model:show` 控制 Toast 的显示与隐藏。
- 通过 `message` 设置提示文字。

```vue
<template>
  <see-toast v-model:show="show" message="这是一条提示消息" />
  <button @click="show = true">显示 Toast</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const show = ref(false)
</script>
```

## 提示类型

- 通过 `type` 参数设置提示类型，默认为 `default`。

```vue
<template>
  <see-toast v-model:show="showDefault" message="默认提示" type="default" />
  <see-toast v-model:show="showSuccess" message="操作成功" type="success" />
  <see-toast v-model:show="showError" message="操作失败" type="error" />
  <see-toast v-model:show="showWarning" message="警告信息" type="warning" />
  <see-toast v-model:show="showInfo" message="提示信息" type="info" />
  <see-toast v-model:show="showLoading" message="加载中..." type="loading" />
</template>
```

## 显示位置

- 通过 `position` 参数设置显示位置，支持 `center`、`top`、`bottom` 三种位置。

```vue
<template>
  <see-toast v-model:show="show1" message="居中显示" position="center" />
  <see-toast v-model:show="show2" message="顶部显示" position="top" />
  <see-toast v-model:show="show3" message="底部显示" position="bottom" />
</template>
```

## 自定义图标

- 通过 `icon` 参数设置自定义图标。

```vue
<see-toast v-model:show="show" message="自定义图标" icon="star" />
```

## 显示时长

- 通过 `duration` 参数设置显示时长（毫秒），设置为 `0` 表示不自动关闭。

```vue
<see-toast v-model:show="show" message="显示 3 秒" :duration="3000" />
```

## 遮罩层

- 通过 `isOverlay` 设置是否显示遮罩层。
- 通过 `isCloseOnClickOverlay` 设置点击遮罩是否关闭。

```vue
<see-toast
  v-model:show="show"
  message="带遮罩的提示"
  :isOverlay="true"
  :isCloseOnClickOverlay="true"
/>
```

## 命令式调用

Toast 支持命令式调用，无需在模板中声明组件。

```ts
import { toast } from 'see-u-ui'

// 成功提示
toast.success('保存成功')

// 错误提示
toast.error('操作失败')

// 警告提示
toast.warning('请注意')

// 信息提示
toast.info('提示信息')

// 加载中
toast.loading('加载中...')

// 自定义配置
toast({
  message: '自定义提示',
  type: 'info',
  duration: 3000
})
```

## API

### Props

| 参数名 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| show | 是否显示（v-model） | `boolean` | `false` | `true`、`false` |
| message | 提示文字 | `string` | `''` | 任意字符串 |
| type | 提示类型 | `'success' \| 'error' \| 'warning' \| 'info' \| 'loading' \| 'default'` | `'default'` | - |
| icon | 自定义图标 | `string` | `''` | 图标名称 |
| duration | 显示时长（ms），0 表示不自动关闭 | `number` | `2000` | 任意数字 |
| position | 显示位置 | `'center' \| 'top' \| 'bottom'` | `'center'` | - |
| isOverlay | 是否显示遮罩 | `boolean` | `false` | `true`、`false` |
| zIndex | z-index 层级 | `number` | `2000` | 任意数字 |
| isCloseOnClickOverlay | 点击遮罩是否关闭 | `boolean` | `false` | `true`、`false` |

### Events

| 属性名 | 说明 |
| --- | --- |
| onClose | 关闭时触发 |
| update:show | v-model 更新时触发 |
