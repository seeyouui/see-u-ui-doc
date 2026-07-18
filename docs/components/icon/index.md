---
layout: doc
outline: deep
title: Icon 图标
titleTemplate: SeeYouUI - Icon 图标
description: SeeYouUI 组件库 seeIcon 图标组件
iframeSrc: /pages/seeIcon/index
---

# Icon 图标

> 图标组件，支持 Unicode 字符、图片路径、自定义图标字体等多种方式。

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基本使用

- 通过 `name` 设置图标名称，支持 Unicode 字符。

```html:line-numbers {}
<see-icon name="✓" />
<see-icon name="★" />
<see-icon name="♥" />
```

## 图标大小

- 通过 `size` 设置图标大小，支持数字（单位 px）和字符串（如 `48rpx`）。

```html:line-numbers {}
<see-icon name="✓" :size="16" />
<see-icon name="✓" :size="24" />
<see-icon name="✓" :size="32" />
<see-icon name="✓" size="48rpx" />
```

## 图标颜色

- 通过 `color` 设置图标颜色。

```html:line-numbers {}
<see-icon name="✓" color="#3ca7ff" />
<see-icon name="✓" color="#ff6b6b" />
<see-icon name="✓" color="#37d497" />
```

## 图片图标

- 通过 `name` 传入图片路径，支持本地路径和网络路径。

```html:line-numbers {}
<see-icon name="/static/logo.png" :size="32" />
<see-icon name="https://example.com/icon.png" :size="32" />
```

::: tip 提示
图片路径需要以 `/`、`http`、`data:` 开头，或包含图片扩展名（.png、.jpg、.gif 等）。
:::

## 自定义图标字体

- 通过 `customPrefix` 设置自定义图标类名前缀。
- 通过 `customFont` 设置自定义图标字体名称。

```html:line-numbers {}
<see-icon name="home" custom-prefix="my-icon" />
<see-icon name="home" custom-prefix="my-icon" custom-font="MyIconFont" />
```

## 图片图标 Alt

- 通过 `alt` 设置图片图标的替代文本，用于无障碍访问。

```html:line-numbers {}
<see-icon name="/static/logo.png" alt="Logo" />
```

## 自定义内容

- 通过默认插槽自定义图标内容。

```html:line-numbers {}
<see-icon>
  <text class="custom-icon">自定义图标</text>
</see-icon>
```

## 点击事件

- 通过 `onClick` 监听图标点击事件。

```html:line-numbers {}
<see-icon name="✓" @on-click="handleClick" />
```

## Props

| 属性 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| name | 图标名称或图片路径 | String | `''` | - |
| size | 图标大小 | String \| Number | - | - |
| color | 图标颜色 | String | `''` | - |
| customPrefix | 自定义图标类名前缀 | String | `''` | - |
| customFont | 自定义图标字体名称 | String | `''` | - |
| alt | 图片图标 alt 文本 | String | `''` | - |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| onClick | 点击图标时触发 | - |

## Slots

| 插槽名 | 说明 |
|--------|------|
| default | 自定义图标内容 |

## Methods

| 方法名 | 说明 | 参数 |
|--------|------|------|
| getName | 获取图标名称 | - |
| isImage | 判断是否为图片图标 | - |
