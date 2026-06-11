---
layout: doc
outline: deep
title: Popover 气泡弹出框
titleTemplate: SeeYouUI - Popover 气泡弹出框
description: SeeYouUI 组件库 seePopover 气泡弹出框组件
iframeSrc: /pages/seePopover/index
---

# Popover 气泡弹出框

> 点击或悬停元素后弹出的气泡卡片，常用于展示操作菜单、详细信息等场景。

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| :--------: | :---------: | :--: | :----: |
|     √      |      √      |  √   |   √    |

## 基本使用

- 通过 `v-model:show` 控制弹出框的显示与隐藏。
- 默认通过点击触发。

```html:line-numbers {}
<see-popover v-model:show="show">
  <see-button title="点击弹出" />
  <template #content>
    <view style="padding: 20rpx;">
      <text>弹出框内容</text>
    </view>
  </template>
</see-popover>
```

## 弹出位置

- 通过 `position` 设置弹出位置，支持 12 个方向，默认为 `bottom`。

```html:line-numbers {}
<see-popover v-model:show="showTop" position="top">
  <see-button title="上方弹出" />
  <template #content>
    <view style="padding: 20rpx;"><text>顶部内容</text></view>
  </template>
</see-popover>

<see-popover v-model:show="showBottom" position="bottom">
  <see-button title="下方弹出" />
  <template #content>
    <view style="padding: 20rpx;"><text>底部内容</text></view>
  </template>
</see-popover>

<see-popover v-model:show="showLeft" position="left">
  <see-button title="左侧弹出" />
  <template #content>
    <view style="padding: 20rpx;"><text>左侧内容</text></view>
  </template>
</see-popover>

<see-popover v-model:show="showRight" position="right">
  <see-button title="右侧弹出" />
  <template #content>
    <view style="padding: 20rpx;"><text>右侧内容</text></view>
  </template>
</see-popover>
```

## 触发方式

- 通过 `trigger` 设置触发方式，支持 `click`、`hover`、`manual` 三种模式，默认为 `click`。

```html:line-numbers {}
<see-popover v-model:show="show1" trigger="click">
  <see-button title="点击触发" />
  <template #content>
    <view style="padding: 20rpx;"><text>点击触发内容</text></view>
  </template>
</see-popover>

<see-popover v-model:show="show2" trigger="hover">
  <see-button title="悬停触发" />
  <template #content>
    <view style="padding: 20rpx;"><text>悬停触发内容</text></view>
  </template>
</see-popover>
```

## 带标题

- 通过 `title` 设置弹出框标题。

```html:line-numbers {}
<see-popover v-model:show="show" title="标题">
  <see-button title="带标题" />
  <template #content>
    <view style="padding: 20rpx;">
      <text>这里是弹出框的详细内容。</text>
    </view>
  </template>
</see-popover>
```

## 关闭按钮

- 通过设置 `isShowCloseBtn` 为 `true` 显示关闭按钮。

```html:line-numbers {}
<see-popover v-model:show="show" title="可关闭" is-show-close-btn>
  <see-button title="显示关闭按钮" />
  <template #content>
    <view style="padding: 20rpx;">
      <text>点击关闭按钮可关闭弹出框。</text>
    </view>
  </template>
</see-popover>
```

## 点击行为配置

- 通过 `isCloseOnClickOutside` 控制点击外部是否关闭，默认为 `true`。
- 通过 `isCloseOnClickContent` 控制点击内容是否关闭，默认为 `false`。

```html:line-numbers {}
<see-popover v-model:show="show" :is-close-on-click-outside="false">
  <see-button title="点击外部不关闭" />
  <template #content>
    <view style="padding: 20rpx;">
      <text>点击外部区域不会关闭</text>
    </view>
  </template>
</see-popover>

<see-popover v-model:show="show" is-close-on-click-content>
  <see-button title="点击内容关闭" />
  <template #content>
    <view style="padding: 20rpx;">
      <text>点击内容区域会关闭</text>
    </view>
  </template>
</see-popover>
```

## 禁用状态

- 通过设置 `isDisabled` 为 `true` 禁用弹出框，禁用后不会弹出。

```html:line-numbers {}
<see-popover v-model:show="show" is-disabled>
  <see-button title="禁用状态" />
  <template #content>
    <view style="padding: 20rpx;"><text>不会显示</text></view>
  </template>
</see-popover>
```

## 隐藏箭头

- 通过设置 `isShowArrow` 为 `false` 隐藏箭头。

```html:line-numbers {}
<see-popover v-model:show="show" :is-show-arrow="false">
  <see-button title="无箭头" />
  <template #content>
    <view style="padding: 20rpx;"><text>无箭头弹出框</text></view>
  </template>
</see-popover>
```

## 自定义宽度

- 通过 `width` 设置弹出框宽度，默认为 `auto`。
- 通过 `maxWidth` 设置最大宽度，默认为 `500rpx`。

```html:line-numbers {}
<see-popover v-model:show="show" width="400rpx">
  <see-button title="自定义宽度" />
  <template #content>
    <view style="padding: 20rpx;">
      <text>宽度为 400rpx 的弹出框</text>
    </view>
  </template>
</see-popover>
```

## API

### Props

| 参数名 | 说明 | 类型 | 默认值 | 可选值 |
|--------|------|------|--------|--------|
| show | 是否显示（v-model） | `Boolean` | `false` | - |
| position | 弹出位置 | `String` | `'bottom'` | `'top'` `'top-left'` `'top-right'` `'bottom'` `'bottom-left'` `'bottom-right'` `'left'` `'left-top'` `'left-bottom'` `'right'` `'right-top'` `'right-bottom'` |
| trigger | 触发方式 | `String` | `'click'` | `'click'` `'hover'` `'manual'` |
| title | 标题 | `String` | `''` | - |
| width | 弹出框宽度 | `String` | `'auto'` | - |
| maxWidth | 最大宽度 | `String` | `'500rpx'` | - |
| offset | 偏移距离(rpx) | `Number` | `12` | - |
| zIndex | z-index 层级 | `Number` | `2000` | - |
| isShowArrow | 是否显示箭头 | `Boolean` | `true` | - |
| isShowCloseBtn | 是否显示关闭按钮 | `Boolean` | `false` | - |
| isCloseOnClickOutside | 点击外部是否关闭 | `Boolean` | `true` | - |
| isCloseOnClickContent | 点击内容是否关闭 | `Boolean` | `false` | - |
| isDisabled | 是否禁用 | `Boolean` | `false` | - |
| isAnimated | 是否启用动画 | `Boolean` | `true` | - |
| duration | 动画时长(ms) | `Number` | `250` | - |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| onOpen | 显示时触发 | - |
| onClose | 隐藏时触发 | - |
| update:show | v-model 更新 | `show: Boolean` |

### Slots

| 插槽名 | 说明 |
|--------|------|
| default | 触发元素 |
| content | 弹出框内容 |
