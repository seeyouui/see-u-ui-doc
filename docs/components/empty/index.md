---
layout: doc
outline: deep
title: Empty 空状态
titleTemplate: SeeYouUI - Empty 空状态
description: SeeYouUI 组件库 seeEmpty 空状态组件
---

# Empty 空状态

统一的空状态视觉语言组件。支持 5 种内置类型 + 自定义模式。

## 内置类型

| 类型 | 默认标题 | 默认描述 | 场景 |
|------|---------|---------|------|
| default | 暂无数据 | - | 通用空数据 |
| search | 未找到相关内容 | 请尝试修改搜索条件 | 搜索无结果 |
| network | 网络异常 | 请检查网络连接后重试 | 断网 |
| error | 页面出错 | 请稍后重试 | 系统错误 |
| 404 | 页面不存在 | 您访问的页面不存在 | 404 |

## 基础用法

```vue
<template>
  <see-empty type="default" />
</template>
```

## 搜索无结果

```vue
<template>
  <see-empty type="search" />
</template>
```

## 带操作按钮

```vue
<template>
  <see-empty type="network" :is-show-action="true" action-text="重试" @on-action="onRetry" />
</template>
```

## 自定义标题和描述

```vue
<template>
  <see-empty title="购物车是空的" description="快去挑选心仪的商品吧" />
</template>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| type | `'default' \| 'search' \| 'network' \| 'error' \| '404' \| 'custom'` | `'default'` | 空状态类型 |
| image | string | `''` | 自定义图片 |
| title | string | `''` | 标题文字 |
| description | string | `''` | 描述文字 |
| actionText | string | `''` | 操作按钮文字 |
| isShowAction | boolean | `false` | 是否显示操作按钮 |
| imageSize | string | `'320rpx'` | 图片尺寸 |

## Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| onAction | - | 操作按钮点击 |

## Slots

| 插槽名 | 说明 |
|--------|------|
| image | 自定义图片 |
| action | 自定义操作按钮 |
