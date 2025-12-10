---
layout: doc
outline: deep
title: Text 文本
titleTemplate: SeeYouUI - Text 文本
description: SeeYouUI 组件库 seeText 文本组件
iframeSrc: /pages/seeText/index
---

# Text 文本

> 文本组件，此组件集成了文本类在项目中的常用功能，包括设置主题，拨打电话，格式化日期，显示金额，超链接...等功能。 您大可不必在使用特殊文本时自己定义，text 组件几乎涵盖您能使用的大部分场景。

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基本使用

- 通过 `text` 参数设置文本内容。

```html:line-numbers {}
<see-text text="我的愿望是世界上没有加班"></see-text>
```

## 设置主题

- 通过 `type` 参数设置文本主题，我们提供了五类属性。
- `primary` `error` `success` `warning` `info`

```html:line-numbers {}
<see-text text="默认" />
<see-text text="主色" type="primary" />
<see-text text="失败" type="error" />
<see-text text="警告" type="warning" />
<see-text text="成功" type="success" />
<see-text text="自定义颜色" color="#52f7bd" />
```

## 链接

::: warning 注意

如需更完整功能,请查看 [Link 链接](../link/index.md) 组件

:::

- 通过 `mode` 参数设置 `link` 模式
- `link` 模式下，文本会被渲染为链接，点击后会跳转到指定的 URL。
- 通过 `href` 参数设置链接的目标 URL。

```html:line-numbers {}
<see-text text="这是SeeYouUI的官方文档" type="primary" mode="link" href="https://www.baidu.com" />
<see-text text="如需更完整功能,请查看Link链接组件" type="warning" mode="link" href="https://www.baidu.com" />
```

## 拨打电话

1