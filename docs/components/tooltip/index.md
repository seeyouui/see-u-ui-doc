---
layout: doc
outline: deep
title: Tooltip 文字提示
titleTemplate: SeeYouUI - Tooltip 文字提示
description: SeeYouUI 组件库 seeTooltip 文字提示组件
iframeSrc: /pages/seeTooltip/index
---

# Tooltip 文字提示

> 常用于展示鼠标悬停或长按时的提示信息，支持多种弹出位置、触发方式和显示效果。

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| :--------: | :---------: | :--: | :----: |
|     √      |      √      |  √   |   √    |

## 基本使用

- 通过 `content` 设置提示文字内容。
- 默认通过长按触发显示。

```html:line-numbers {}
<see-tooltip content="这是一段提示文字">
  <see-button title="长按触发" />
</see-tooltip>
```

## 弹出位置

- 通过 `position` 设置弹出位置，支持 12 个方向。

```html:line-numbers {}
<see-tooltip content="顶部提示" position="top">
  <see-button title="上" />
</see-tooltip>

<see-tooltip content="底部提示" position="bottom">
  <see-button title="下" />
</see-tooltip>

<see-tooltip content="左侧提示" position="left">
  <see-button title="左" />
</see-tooltip>

<see-tooltip content="右侧提示" position="right">
  <see-button title="右" />
</see-tooltip>
```

## 触发方式

- 通过 `trigger` 设置触发方式，支持 `hover`、`click`、`longpress`、`manual` 四种模式。

```html:line-numbers {}
<see-tooltip content="鼠标悬停触发" trigger="hover">
  <see-button title="悬停触发" />
</see-tooltip>

<see-tooltip content="点击触发" trigger="click">
  <see-button title="点击触发" />
</see-tooltip>

<see-tooltip content="长按触发" trigger="longpress">
  <see-button title="长按触发" />
</see-tooltip>
```

## 手动控制

- 将 `trigger` 设置为 `manual`，通过 `v-model:show` 手动控制显示与隐藏。

```html:line-numbers {}
<see-tooltip content="手动控制显示" trigger="manual" v-model:show="show">
  <see-button title="手动控制" @click="show = !show" />
</see-tooltip>
```

## 显示效果

- 通过 `effect` 设置显示效果，支持 `dark`（深色）和 `light`（浅色）两种风格，默认为 `dark`。

```html:line-numbers {}
<see-tooltip content="深色效果" effect="dark">
  <see-button title="Dark" />
</see-tooltip>

<see-tooltip content="浅色效果" effect="light">
  <see-button title="Light" />
</see-tooltip>
```

## 自定义内容

- 使用 `content` 插槽可以自定义提示内容。

```html:line-numbers {}
<see-tooltip>
  <see-button title="自定义内容" />
  <template #content>
    <view style="padding: 10rpx;">
      <text style="color: #ff6b6b;">自定义提示内容</text>
    </view>
  </template>
</see-tooltip>
```

## 延迟设置

- 通过 `delay` 设置显示延迟时间。
- 通过 `hideDelay` 设置隐藏延迟时间。

```html:line-numbers {}
<see-tooltip content="延迟 500ms 显示" :delay="500">
  <see-button title="显示延迟" />
</see-tooltip>

<see-tooltip content="延迟 500ms 隐藏" :hide-delay="500">
  <see-button title="隐藏延迟" />
</see-tooltip>
```

## 禁用状态

- 通过设置 `isDisabled` 为 `true` 禁用提示，禁用后不会弹出提示。

```html:line-numbers {}
<see-tooltip content="已禁用" is-disabled>
  <see-button title="禁用状态" />
</see-tooltip>
```

## 隐藏箭头

- 通过设置 `isShowArrow` 为 `false` 隐藏箭头。

```html:line-numbers {}
<see-tooltip content="无箭头提示" :is-show-arrow="false">
  <see-button title="无箭头" />
</see-tooltip>
```

## API

### Props

| 参数名 | 说明 | 类型 | 默认值 | 可选值 |
|--------|------|------|--------|--------|
| content | 提示文字 | `String` | `''` | - |
| position | 弹出位置 | `String` | `'top'` | `'top'` `'top-left'` `'top-right'` `'bottom'` `'bottom-left'` `'bottom-right'` `'left'` `'left-top'` `'left-bottom'` `'right'` `'right-top'` `'right-bottom'` |
| trigger | 触发方式 | `String` | `'longpress'` | `'hover'` `'click'` `'longpress'` `'manual'` |
| show | 手动控制显示（trigger='manual'） | `Boolean` | `false` | - |
| delay | 显示延迟(ms) | `Number` | `200` | - |
| hideDelay | 隐藏延迟(ms) | `Number` | `200` | - |
| maxWidth | 最大宽度 | `String` | `'400rpx'` | - |
| effect | 显示效果 | `String` | `'dark'` | `'dark'` `'light'` |
| offset | 偏移距离(rpx) | `Number` | `8` | - |
| zIndex | z-index 层级 | `Number` | `2000` | - |
| isDisabled | 是否禁用 | `Boolean` | `false` | - |
| isShowArrow | 是否显示箭头 | `Boolean` | `true` | - |
| isAnimated | 是否启用动画 | `Boolean` | `true` | - |
| duration | 动画时长(ms) | `Number` | `200` | - |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| onOpen | 显示时触发 | - |
| onClose | 隐藏时触发 | - |
| update:show | v-model 更新（manual 模式） | `show: Boolean` |

### Slots

| 插槽名 | 说明 |
|--------|------|
| default | 触发元素 |
| content | 自定义提示内容 |
