---
layout: doc
outline: deep
title: Copy 复制
titleTemplate: SeeYouUI - Copy 复制
description: SeeYouUI 组件库 see-copy 复制组件
iframeSrc: /pages/seeCopy/index
---

# Copy 复制

点击即可复制文字内容到剪贴板，支持自定义触发内容和成功提示。

## 基本使用

```vue
<template>
  <see-copy text="要复制的文字内容">
    <see-button>点击复制</see-button>
  </see-copy>
</template>
```

## 自定义提示

```vue
<template>
  <see-copy
    text="自定义提示内容"
    toast-message="已复制到剪贴板"
    :toast-duration="2000"
  >
    <text>点击复制此文本</text>
  </see-copy>
</template>
```

## 命令式调用

```ts
import { copy } from 'see-u-ui'

// 直接调用复制函数
await copy('要复制的文字')
```

## API

### Props

| 参数名 | 说明 | 类型 | 默认值 |
|--------|------|------|--------|
| text | 要复制的文字 | `String` | `''` |
| isShowToast | 复制成功后是否显示提示 | `Boolean` | `true` |
| toastMessage | 成功提示文字 | `String` | `'复制成功'` |
| toastDuration | 提示显示时长(ms) | `Number` | `1500` |
| isDisabled | 是否禁用复制 | `Boolean` | `false` |
| isHighlight | 点击时是否高亮文字 | `Boolean` | `false` |

### Events

| 属性名 | 说明 | 回调参数 |
|--------|------|----------|
| onSuccess | 复制成功时触发 | `(text: string)` |
| onError | 复制失败时触发 | `(error: Error)` |
| onClick | 点击时触发（复制前） | `(text: string)` |

### Slots

| 插槽名 | 说明 |
|--------|------|
| default | 自定义触发内容 |

### 命令式 API

```ts
import { copy } from 'see-u-ui'

/**
 * 复制文字到剪贴板
 * @param text 要复制的文字
 * @returns Promise<void>
 */
await copy('要复制的文字')
```

### 平台差异

| 属性 | 微信小程序 | H5 | App |
|------|-----------|-----|-----|
| text | 支持 | 支持 | 支持 |
| isShowToast | 支持 | 支持 | 支持 |
| toastMessage | 支持 | 支持 | 支持 |
| isHighlight | 支持 | 支持 | 支持 |
| copy() 命令式 | 支持 | 支持 | 支持 |
