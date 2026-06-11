---
layout: doc
outline: deep
title: NavbarMini 迷你导航栏
titleTemplate: SeeYouUI - NavbarMini 迷你导航栏
description: SeeYouUI 组件库 seeNavbarMini 迷你导航栏组件
---

# NavbarMini 迷你导航栏

子页面/弹窗内的简化导航栏，仅返回 + 标题 + 右侧操作区。比 Navbar 更矮（默认 64rpx）。

## 基础用法

```vue
<template>
  <see-navbar-mini title="子页面标题" @on-back="onBack" />
</template>
```

## 无返回按钮

```vue
<template>
  <see-navbar-mini title="弹窗标题" :is-show-back="false" />
</template>
```

## 右侧插槽

```vue
<template>
  <see-navbar-mini title="详情">
    <template #right>
      <text>保存</text>
    </template>
  </see-navbar-mini>
</template>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| title | string | `''` | 导航栏标题 |
| isShowBack | boolean | `true` | 是否显示返回按钮 |
| height | string | `''` | 自定义高度 |
| bgColor | string | `''` | 自定义背景色 |

## Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| onBack | - | 返回按钮点击 |

## Slots

| 插槽名 | 说明 |
|--------|------|
| left | 左侧插槽 |
| center | 中间插槽（覆盖 title） |
| right | 右侧插槽 |
