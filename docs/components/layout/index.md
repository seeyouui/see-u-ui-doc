---
layout: doc
outline: deep
title: Layout 布局
titleTemplate: SeeYouUI - Layout 布局
description: SeeYouUI 组件库 SeeLayout 布局组件
iframeSrc: /pages/seeLayout/index
---

# Layout 布局

> 基于 Flexbox 的 24 列栅格布局容器，通过搭配 see-layout-item 子组件实现灵活的页面布局。

## 平台兼容性

|  App(vue)  |  App(nvue)  |  H5  |  小程序  |
| :-------: | :--------: | :--: | :-----: |
|     ✅    |     ✅     |  ✅  |   ✅    |

## 代码示例

### 等分布局

将一行分为三等分。

```html:line-numbers {}
<see-layout>
  <see-layout-item :span="8">
    <view class="grid-item">span=8</view>
  </see-layout-item>
  <see-layout-item :span="8">
    <view class="grid-item">span=8</view>
  </see-layout-item>
  <see-layout-item :span="8">
    <view class="grid-item">span=8</view>
  </see-layout-item>
</see-layout>
```

### 2:1 比例

```html:line-numbers {}
<see-layout>
  <see-layout-item :span="16">
    <view class="grid-item">span=16</view>
  </see-layout-item>
  <see-layout-item :span="8">
    <view class="grid-item">span=8</view>
  </see-layout-item>
</see-layout>
```

### 偏移

通过 offset 属性可以将列向右偏移。

```html:line-numbers {}
<see-layout>
  <see-layout-item :span="8" :offset="8">
    <view class="grid-item">span=8 offset=8</view>
  </see-layout-item>
</see-layout>
```

### 带间距

通过 gap 属性设置栅格间距。

```html:line-numbers {}
<see-layout :gap="16">
  <see-layout-item :span="8">
    <view class="grid-item">span=8</view>
  </see-layout-item>
  <see-layout-item :span="8">
    <view class="grid-item">span=8</view>
  </see-layout-item>
  <see-layout-item :span="8">
    <view class="grid-item">span=8</view>
  </see-layout-item>
</see-layout>
```

### Flex 自定义比例

使用 flex 属性替代 span 进行自定义比例分配。

```html:line-numbers {}
<see-layout>
  <see-layout-item :flex="2">
    <view class="grid-item">flex=2</view>
  </see-layout-item>
  <see-layout-item :flex="1">
    <view class="grid-item">flex=1</view>
  </see-layout-item>
  <see-layout-item :flex="1">
    <view class="grid-item">flex=1</view>
  </see-layout-item>
</see-layout>
```

### 垂直方向

设置 direction 为 column 实现纵向布局。

```html:line-numbers {}
<see-layout direction="column" :gap="10">
  <see-layout-item>
    <view class="grid-item">第一行</view>
  </see-layout-item>
  <see-layout-item>
    <view class="grid-item">第二行</view>
  </see-layout-item>
  <see-layout-item>
    <view class="grid-item">第三行</view>
  </see-layout-item>
</see-layout>
```

## API

### Layout Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| direction | Flex 方向 | `string` | `'row'` | row / column |
| wrap | Flex 换行 | `string` | `'wrap'` | nowrap / wrap / wrap-reverse |
| justify | 主轴对齐方式 | `string` | `'flex-start'` | flex-start / flex-end / center / space-between / space-around / space-evenly |
| align | 交叉轴对齐方式 | `string` | `'flex-start'` | flex-start / flex-end / center / stretch / baseline |
| gap | 栅格间距 | `number \| string` | `0` | - |

### Layout Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，放置 see-layout-item 子组件 |

### LayoutItem Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| span | 占据的列数（0-24，0 表示不固定宽度由内容撑开） | `number` | `24` | 0 - 24 |
| offset | 左侧偏移列数 | `number` | `0` | 0 - 24 |
| flex | 自定义 flex 比例（设置后 span 失效） | `number` | - | - |

### LayoutItem Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，放置列内容 |
