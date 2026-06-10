---
layout: doc
outline: deep
title: Overlay 遮罩层
titleTemplate: SeeYouUI - Overlay 遮罩层
description: SeeYouUI 组件库 SeeOverlay 遮罩层组件
iframeSrc: /pages/seeOverlay/index
---

# Overlay 遮罩层

> 创建一个全屏半透明遮罩层，通常用于弹窗、抽屉等组件的背景。

## 平台兼容性

|  App(vue)  |  App(nvue)  |  H5  |  小程序  |
| :-------: | :--------: | :--: | :-----: |
|     ✅    |     ✅     |  ✅  |   ✅    |

## 代码示例

### 基础用法

通过 `v-model:show` 控制遮罩层的显示和隐藏。

```html:line-numbers {}
<see-button title="显示遮罩层" @click="show = true" />
<see-overlay v-model:show="show" />
```

### 自定义背景色

```html:line-numbers {}
<see-overlay v-model:show="show" background="rgba(255, 0, 0, 0.3)" />
```

### 不可点击关闭

设置 `clickable` 为 `false`，点击遮罩层不会自动关闭。

```html:line-numbers {}
<see-overlay v-model:show="show" :clickable="false" />
```

### 带内容的遮罩

```html:line-numbers {}
<see-overlay v-model:show="show">
  <view style="display: flex; align-items: center; justify-content: center; height: 100%;">
    <text style="color: #fff;">自定义内容</text>
  </view>
</see-overlay>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| show | 是否显示（v-model） | `boolean` | `false` | true / false |
| z-index | 层级 | `number` | `1000` | - |
| background | 背景色 | `string` | `rgba(0, 0, 0, 0.6)` | CSS 颜色值 |
| opacity | 透明度 | `number` | `1` | 0-1 |
| clickable | 是否可点击关闭 | `boolean` | `true` | true / false |
| is-animated | 是否启用动画 | `boolean` | `true` | true / false |
| duration | 动画持续时间(ms) | `number` | `300` | - |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| onClick | 点击遮罩层时触发 | - |
| onClose | 遮罩层关闭时触发 | - |
| onOpen | 遮罩层打开时触发 | - |

### Slots

| 名称 | 说明 |
|------|------|
| default | 遮罩层内容 |
