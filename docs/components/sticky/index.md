---
layout: doc
outline: deep
title: Sticky 吸顶
titleTemplate: SeeYouUI - Sticky 吸顶
description: SeeYouUI 组件库 SeeSticky 吸顶组件
iframeSrc: /pages/seeSticky/index
---

# Sticky 吸顶

> 使元素在页面滚动时固定在指定位置，常用于导航栏、标题栏等场景。

## 平台兼容性

|  App(vue)  |  App(nvue)  |  H5  |  小程序  |
| :-------: | :--------: | :--: | :-----: |
|     ✅    |     ✅     |  ✅  |   ✅    |

## 代码示例

### 基础用法

```html:line-numbers {}
<see-sticky>
  <view>吸顶内容</view>
</see-sticky>
```

### 自定义偏移距离

```html:line-numbers {}
<see-sticky :offset-top="50">
  <view>距离顶部 50px 吸顶</view>
</see-sticky>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| offset-top | 吸顶时距离顶部距离(px) | `number` | `0` | - |
| z-index | 层级 | `number` | `99` | - |
| is-enabled | 是否开启吸顶 | `boolean` | `true` | true / false |
| container | 容器选择器 | `string` | - | - |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| onScroll | 滚动时触发 | `{ isFixed: boolean, scrollTop: number }` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 吸顶内容 |
