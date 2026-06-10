---
layout: doc
outline: deep
title: Grid 宫格布局
titleTemplate: SeeYouUI - Grid 宫格布局
description: SeeYouUI 组件库 SeeGrid 宫格布局组件
iframeSrc: /pages/seeGrid/index
---

# Grid 宫格布局

> 宫格布局容器，搭配 see-grid-item 使用，支持自定义列数、间距、边框等。

## 平台兼容性

|  App(vue)  |  App(nvue)  |  H5  |  小程序  |
| :-------: | :--------: | :--: | :-----: |
|     ✅    |     ✅     |  ✅  |   ✅    |

## 代码示例

### 基础用法

默认 4 列宫格。

```html:line-numbers {}
<see-grid>
  <see-grid-item text="宫格1" icon="📱" />
  <see-grid-item text="宫格2" icon="⭐" />
  <see-grid-item text="宫格3" icon="📌" />
  <see-grid-item text="宫格4" icon="🎨" />
</see-grid>
```

### 自定义列数

```html:line-numbers {}
<see-grid :columns="3">
  <see-grid-item text="宫格1" icon="📱" />
  <see-grid-item text="宫格2" icon="⭐" />
  <see-grid-item text="宫格3" icon="📌" />
</see-grid>
```

### 带边框和间距

```html:line-numbers {}
<see-grid :columns="3" border gap="16rpx">
  <see-grid-item text="宫格1" icon="📱" />
  <see-grid-item text="宫格2" icon="⭐" />
  <see-grid-item text="宫格3" icon="📌" />
</see-grid>
```

## API

### Grid Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| columns | 列数 | `number` | `4` | - |
| gap | 间距 | `number \| string` | `0` | - |
| border | 是否显示边框 | `boolean` | `false` | true / false |
| border-color | 边框颜色 | `string` | `var(--see-border-color)` | CSS 颜色值 |
| is-square | 是否正方形 | `boolean` | `false` | true / false |
| is-clickable | 是否开启点击反馈 | `boolean` | `false` | true / false |

### GridItem Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| text | 文本内容 | `string` | - | - |
| icon | 图标 | `string` | - | - |
| icon-size | 图标大小 | `string` | `'48rpx'` | - |
| to | 跳转路径 | `string` | - | - |
| index | 自定义索引 | `number` | `0` | - |

### GridItem Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| onClick | 点击时触发 | `index: number` |

### GridItem Slots

| 名称 | 说明 |
|------|------|
| default | 自定义内容 |
| icon | 自定义图标 |
| text | 自定义文字 |
