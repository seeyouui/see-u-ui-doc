---
layout: doc
outline: deep
title: Box 盒子
titleTemplate: SeeYouUI - Box 盒子
description: SeeYouUI 组件库 SeeBox 盒子组件
iframeSrc: /pages/seeBox/index
---

# Box 盒子

> 基础的布局容器组件，提供内边距、外边距、背景色、圆角、阴影等样式属性的快捷配置。

## 平台兼容性

|  App(vue)  |  App(nvue)  |  H5  |  小程序  |
| :-------: | :--------: | :--: | :-----: |
|     ✅    |     ✅     |  ✅  |   ✅    |

## 代码示例

### 基础用法

`padding` 控制内边距，`bg-color` 控制背景色。

```html:line-numbers {}
<see-box padding="20rpx" bg-color="#f5f5f5">
  <text>这是一个带内边距和背景色的盒子</text>
</see-box>
```

### Flex 布局

通过 `direction`、`justify`、`align` 等属性快速实现 Flex 布局。

```html:line-numbers {}
<see-box direction="row" justify="space-between" align="center">
  <text>左</text>
  <text>中</text>
  <text>右</text>
</see-box>
```

### 阴影效果

`shadow` 属性支持 small / medium / large 三种阴影大小。

```html:line-numbers {}
<see-box padding="30rpx" radius="12rpx" shadow="medium">
  <text>带阴影的卡片</text>
</see-box>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| padding | 内边距 | `string` | `'0'` | CSS padding 值 |
| margin | 外边距 | `string` | `'0'` | CSS margin 值 |
| bg-color | 背景色 | `string` | - | CSS 颜色值 |
| width | 宽度 | `string` | `'100%'` | CSS 宽度值 |
| height | 高度 | `string` | - | CSS 高度值 |
| radius | 圆角 | `string` | `'0'` | CSS 圆角值 |
| shadow | 阴影 | `'small' \| 'medium' \| 'large'` | - | small / medium / large |
| border | 边框宽度 | `string` | `'0'` | CSS 宽度值 |
| border-color | 边框颜色 | `string` | `var(--see-border-color)` | CSS 颜色值 |
| direction | Flex 方向 | `'row' \| 'column'` | `'row'` | row / column |
| wrap | 换行 | `string` | `'nowrap'` | nowrap / wrap / wrap-reverse |
| justify | 主轴对齐 | `string` | `'flex-start'` | flex-start / center / space-between 等 |
| align | 交叉轴对齐 | `string` | `'stretch'` | flex-start / center / stretch 等 |
| gap | 间距 | `string` | `'0'` | CSS gap 值 |

### Slots

| 名称 | 说明 |
|------|------|
| default | 盒子内容 |
