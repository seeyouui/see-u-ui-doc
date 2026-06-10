---
layout: doc
outline: deep
title: Skeleton 骨架屏
titleTemplate: SeeYouUI - Skeleton 骨架屏
description: SeeYouUI 组件库 SeeSkeleton 骨架屏组件
iframeSrc: /pages/seeSkeleton/index
---

# Skeleton 骨架屏

> 在页面加载数据时显示骨架占位，提升用户体验。支持自定义行数、行宽、头像、标题和动画效果。

## 平台兼容性

|  App(vue)  |  App(nvue)  |  H5  |  小程序  |
| :-------: | :--------: | :--: | :-----: |
|     ✅    |     ✅     |  ✅  |   ✅    |

## 代码示例

### 基础用法

默认显示 3 行骨架屏，带加载动画。

```html:line-numbers {}
<see-skeleton :loading="true">
  <text>加载完成的内容</text>
</see-skeleton>
```

### 自定义行数

通过 `rows` 属性控制骨架行数。

```html:line-numbers {}
<see-skeleton :rows="5" />
```

### 自定义行宽度

支持字符串统一宽度或数组每行不同宽度。

```html:line-numbers {}
<!-- 统一宽度 -->
<see-skeleton row-width="80%" />

<!-- 每行不同宽度 -->
<see-skeleton :row-width="['100%', '80%', '60%']" />
```

### 标题模式

开启 `title` 后，第一行会以更高的高度渲染为标题占位。

```html:line-numbers {}
<see-skeleton :title="true" :rows="3" />
```

### 头像 + 标题

支持头像占位，可搭配标题模式使用。

```html:line-numbers {}
<!-- 圆形头像 -->
<see-skeleton :avatar="true" :title="true" :rows="3" />

<!-- 方形头像 -->
<see-skeleton :avatar="true" avatar-shape="square" :title="true" :rows="3" />
```

### 关闭动画

设置 `isAnimate` 为 `false` 可关闭骨架屏的闪烁动画。

```html:line-numbers {}
<see-skeleton :is-animate="false" />
```

### 加载完成

将 `loading` 设为 `false` 即可显示实际内容插槽。

```html:line-numbers {}
<see-skeleton :loading="isLoading">
  <view>
    <text>实际内容</text>
  </view>
</see-skeleton>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| loading | 是否显示骨架屏（加载中） | `boolean` | `true` | true / false |
| rows | 骨架屏行数 | `number` | `3` | 正整数 |
| row-width | 每行的宽度 | `string \| string[]` | - | CSS 宽度值 |
| row-height | 行高 | `string` | `'32rpx'` | CSS 高度值 |
| row-gap | 行间距 | `string` | `'20rpx'` | CSS 间距值 |
| avatar | 是否显示头像占位 | `boolean` | `false` | true / false |
| avatar-size | 头像大小 | `string` | `'80rpx'` | CSS 尺寸值 |
| avatar-shape | 头像形状 | `'circle' \| 'square'` | `'circle'` | circle / square |
| title | 是否显示标题占位 | `boolean` | `false` | true / false |
| is-animate | 是否启用骨架动画 | `boolean` | `true` | true / false |
| skeleton-bg-color | 骨架背景色 | `string` | `'var(--see-info)'` | CSS 颜色值 |
| highlight-color | 动画高亮色 | `string` | `'var(--see-bg-color)'` | CSS 颜色值 |

### Slots

| 名称 | 说明 |
|------|------|
| default | `loading` 为 `false` 时显示的实际内容 |
