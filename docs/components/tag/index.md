---
layout: doc
outline: deep
title: Tag 标签
titleTemplate: SeeYouUI - Tag 标签
description: SeeYouUI 组件库 seeTag 标签组件
iframeSrc: /pages/seeTag/index
---

# Tag 标签

> 用于标记和分类的标签组件，支持多种主题类型、效果样式、可关闭等特性。

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基本使用

- 通过 `type` 设置标签类型，默认为 `default`。

```html:line-numbers {}
<see-tag>默认</see-tag>
<see-tag type="primary">主要</see-tag>
<see-tag type="success">成功</see-tag>
<see-tag type="warning">警告</see-tag>
<see-tag type="danger">危险</see-tag>
<see-tag type="info">信息</see-tag>
```

## 主题效果

- 通过 `effect` 设置标签效果，支持 `dark`（填充）、`light`（浅色背景）、`plain`（镂空）三种效果，默认为 `light`。

```html:line-numbers {}
<see-tag type="primary" effect="dark">Dark</see-tag>
<see-tag type="primary" effect="light">Light</see-tag>
<see-tag type="primary" effect="plain">Plain</see-tag>
```

## 尺寸

- 通过 `size` 设置标签大小，支持 `large`、`default`、`small` 三种尺寸。

```html:line-numbers {}
<see-tag type="primary" size="large">大型</see-tag>
<see-tag type="primary">默认</see-tag>
<see-tag type="primary" size="small">小型</see-tag>
```

## 圆角标签

- 通过设置 `round` 为 `true`，标签变为圆角胶囊形状。

```html:line-numbers {}
<see-tag type="primary" round>Round</see-tag>
<see-tag type="success" round effect="dark">Round</see-tag>
<see-tag type="warning" round effect="plain">Round</see-tag>
```

## 可关闭标签

- 通过设置 `closable` 为 `true` 显示关闭按钮。
- 关闭时会触发 `onClose` 事件。

```html:line-numbers {}
<see-tag type="primary" closable @on-close="handleClose">标签</see-tag>
```

## 标记样式

- 通过设置 `mark` 为 `true`，标签左侧为直角、右侧为圆角。

```html:line-numbers {}
<see-tag type="primary" mark>Mark</see-tag>
<see-tag type="success" mark effect="dark">Mark</see-tag>
```

## 描边

- 通过设置 `hit` 为 `true`，显示标签边框。

```html:line-numbers {}
<see-tag type="primary" hit>Hit</see-tag>
<see-tag type="primary" hit effect="dark">Hit</see-tag>
<see-tag type="primary" hit effect="plain">Hit</see-tag>
```

## 禁用状态

- 通过设置 `isDisabled` 为 `true` 禁用标签，禁用后点击事件不会触发。

```html:line-numbers {}
<see-tag type="primary" is-disabled>禁用</see-tag>
<see-tag type="primary" closable is-disabled>禁用可关闭</see-tag>
```

## 自定义颜色

- 通过 `color` 设置自定义颜色（覆盖 type 的颜色）。
- 通过 `bgColor`、`textColor`、`borderColor` 分别设置背景、文字、边框颜色。

```html:line-numbers {}
<see-tag color="#7232dd">自定义</see-tag>
<see-tag color="#7232dd" effect="dark">自定义</see-tag>
<see-tag bg-color="#fdf0ff" text-color="#7232dd" border-color="#e8d0f8">完全自定义</see-tag>
```

::: warning 注意
自定义颜色为硬编码色值，不会随深色/浅色主题自动切换。
:::

## Props

| 属性 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| type | 标签类型 | String | `'default'` | `'default'` `'primary'` `'success'` `'warning'` `'danger'` `'info'` |
| size | 标签大小 | String | `'default'` | `'small'` `'default'` `'large'` |
| effect | 显示效果 | String | `'light'` | `'dark'` `'light'` `'plain'` |
| closable | 是否可关闭 | Boolean | `false` | - |
| round | 是否圆角 | Boolean | `false` | - |
| color | 自定义颜色 | String | `''` | - |
| bgColor | 自定义背景颜色 | String | `''` | - |
| textColor | 自定义文字颜色 | String | `''` | - |
| borderColor | 自定义边框颜色 | String | `''` | - |
| isDisabled | 是否禁用 | Boolean | `false` | - |
| mark | 是否标记样式 | Boolean | `false` | - |
| hit | 是否显示边框 | Boolean | `false` | - |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| onClick | 点击标签时触发 | `event: Event` |
| onClose | 关闭标签时触发 | `event: Event` |

## Slots

| 插槽名 | 说明 |
|--------|------|
| default | 标签内容 |
