---
layout: doc
outline: deep
title: BackTop 返回顶部
titleTemplate: SeeYouUI - BackTop 返回顶部
description: SeeYouUI 组件库 seeBackTop 返回顶部组件
---

# BackTop 返回顶部

长页面的浮动"回到顶部"按钮。滚动超过阈值自动显示，点击平滑滚动到顶部。

> 跨端支持：H5 监听 `window` 的 scroll 事件；小程序 / App 端使用 `uni.onPageScroll` 页面级生命周期。两端均使用 `requestAnimationFrame` 节流，避免高频触发。

## 基础用法

```vue
<template>
  <see-backtop />
</template>
```

## 自定义位置

```vue
<template>
  <see-backtop :right="50" :bottom="100" />
</template>
```

## 自定义图标

```vue
<template>
  <see-backtop>
    <view class="custom-btn">
      <text>TOP</text>
    </view>
  </see-backtop>
</template>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| visibilityHeight | number | `200` | 显示阈值（px），滚动超过此值显示按钮 |
| right | number | `20` | 距离右边的距离（px） |
| bottom | number | `80` | 距离底部的距离（px） |
| zIndex | number | `999` | 层级 |
| duration | number | `300` | 滚动动画时长（ms） |
| target | string | `''` | 指定滚动容器选择器（保留字段，当前实现以页面/window 滚动为准） |
| isCustom | boolean | `false` | 是否使用自定义插槽 |

## Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| onClick | - | 点击事件 |

## Slots

| 插槽名 | 说明 |
|--------|------|
| default | 自定义按钮内容 |
