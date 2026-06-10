---
layout: doc
outline: deep
title: Card 卡片
titleTemplate: SeeYouUI - Card 卡片
description: SeeYouUI 组件库 SeeCard 卡片组件
iframeSrc: /pages/seeCard/index
---

# Card 卡片

> 卡片容器组件，提供标题、副标题、阴影、圆角等功能。

## 平台兼容性

|  App(vue)  |  App(nvue)  |  H5  |  小程序  |
| :-------: | :--------: | :--: | :-----: |
|     ✅    |     ✅     |  ✅  |   ✅    |

## 代码示例

### 基础用法

```html:line-numbers {}
<see-card title="卡片标题">
  <text>这是卡片的内容区域</text>
</see-card>
```

### 带副标题

```html:line-numbers {}
<see-card title="卡片标题" sub-title="这是副标题描述">
  <text>内容</text>
</see-card>
```

### 自定义 Header

```html:line-numbers {}
<see-card>
  <template #header>
    <text>自定义标题</text>
  </template>
  <text>内容</text>
</see-card>
```

### 带 Footer

```html:line-numbers {}
<see-card title="卡片标题">
  <text>内容</text>
  <template #footer>
    <text>底部操作区</text>
  </template>
</see-card>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| title | 卡片标题 | `string` | - | - |
| sub-title | 副标题 | `string` | - | - |
| shadow | 阴影 | `'never' \| 'always' \| 'hover'` | `'always'` | never / always / hover |
| padding | 内边距 | `string` | `'30rpx'` | CSS padding 值 |
| radius | 圆角 | `string` | `'16rpx'` | CSS 圆角值 |
| margin | 外边距 | `string` | `'30rpx'` | CSS margin 值 |
| border | 是否显示边框 | `boolean` | `true` | true / false |
| width | 宽度 | `string` | `'100%'` | CSS 宽度值 |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| onClick | 点击卡片时触发 | - |
| onHeaderClick | 点击头部时触发 | - |

### Slots

| 名称 | 说明 |
|------|------|
| default | 卡片内容 |
| header | 自定义头部 |
| footer | 自定义底部 |
