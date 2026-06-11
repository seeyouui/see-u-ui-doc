---
layout: doc
outline: deep
title: SwipeAction 滑动操作
titleTemplate: SeeYouUI - SwipeAction 滑动操作
description: SeeYouUI 组件库 see-swipe-action 滑动操作组件
iframeSrc: /pages/seeSwipeAction/index
---

# SwipeAction 滑动操作

通过左右滑动来展示操作按钮，常用于列表项的快捷操作。

## 基本使用

```vue
<script setup lang="ts">
const leftActions = [
  { text: '收藏', background: '#1890ff', width: 70 },
]
const rightActions = [
  { text: '删除', background: '#ee0a24', width: 70 },
  { text: '编辑', background: '#1890ff', width: 70 },
]

const onClick = (action, index, side) => {
  console.log('点击:', action, index, side)
}
</script>

<template>
  <see-swipe-action
    :left-actions="leftActions"
    :right-actions="rightActions"
    @click="onClick"
  >
    <view class="cell-content">
      向左或向右滑动查看操作按钮
    </view>
  </see-swipe-action>
</template>
```

## API

### Props

| 参数名 | 说明 | 类型 | 默认值 |
|--------|------|------|--------|
| leftActions | 左侧操作按钮 | `SwipeActionItem[]` | `[]` |
| rightActions | 右侧操作按钮 | `SwipeActionItem[]` | `[]` |
| isDisabled | 是否禁用滑动 | `Boolean` | `false` |
| threshold | 触发阈值（按钮宽度比例） | `Number` | `0.3` |
| swipeWidth | 滑动宽度（0=自动计算） | `Number` | `0` |
| isCloseOnClick | 点击操作按钮后是否自动关闭 | `Boolean` | `true` |
| isCloseOnTouchOutside | 触摸外部是否关闭 | `Boolean` | `true` |
| name | 标识符（用于分组互斥） | `String \| Number` | `''` |
| isAnimated | 是否启用回弹动画 | `Boolean` | `true` |

### SwipeActionItem

| 参数名 | 说明 | 类型 | 默认值 |
|--------|------|------|--------|
| text | 按钮文字 | `String` | - |
| style | 按钮样式 | `Object` | - |
| background | 按钮背景色 | `String` | - |
| color | 按钮文字颜色 | `String` | - |
| width | 按钮宽度 | `Number` | - |
| icon | 按钮图标 | `String` | - |
| isDisabled | 是否禁用该按钮 | `Boolean` | `false` |

### Events

| 属性名 | 说明 | 回调参数 |
|--------|------|----------|
| onClick | 点击操作按钮时触发 | `(action: SwipeActionItem, index: number, side: 'left' \| 'right')` |
| onOpen | 滑动打开时触发 | `(side: 'left' \| 'right')` |
| onClose | 关闭时触发 | - |

### 平台差异

| 属性 | 微信小程序 | H5 | App |
|------|-----------|-----|-----|
| leftActions | 支持 | 支持 | 支持 |
| rightActions | 支持 | 支持 | 支持 |
| threshold | 支持 | 支持 | 支持 |
| isAnimated | 支持 | 支持 | 支持 |
| name（分组互斥） | 支持 | 支持 | 支持 |
