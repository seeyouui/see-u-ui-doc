---
layout: doc
outline: deep
title: Line 线条
titleTemplate: SeeYouUI - Line 线条
description: SeeYouUI 组件库 SeeLine 线条组件
iframeSrc: /pages/seeLine/index
---

# Line 线条

> 水平或垂直方向的分割线组件，支持实线、虚线、自定义颜色和粗细。

## 平台兼容性

|  App(vue)  |  App(nvue)  |  H5  |  小程序  |
| :-------: | :--------: | :--: | :-----: |
|     ✅    |     ✅     |  ✅  |   ✅    |

## 代码示例

### 基础用法

默认渲染一条水平分割线。

```html:line-numbers {}
<see-line />
```

### 自定义颜色和粗细

```html:line-numbers {}
<see-line color="#007aff" size="4rpx" />
```

### 虚线样式

```html:line-numbers {}
<see-line :is-dashed="true" />
```

### 垂直分割线

```html:line-numbers {}
<view style="display: flex; align-items: center;">
  <text>左</text>
  <see-line direction="vertical" length="60rpx" margin="0 20rpx" />
  <text>右</text>
</view>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| direction | 方向 | `'horizontal' \| 'vertical'` | `'horizontal'` | horizontal / vertical |
| color | 颜色 | `string` | `var(--see-border-color)` | CSS 颜色值 |
| size | 粗细 | `string` | `'1px'` | CSS 宽度值 |
| margin | 外边距 | `string` | `'0'` | CSS margin 值 |
| is-dashed | 是否虚线 | `boolean` | `false` | true / false |
| length | 长度 | `string` | `'100%'` | CSS 宽度值 |
