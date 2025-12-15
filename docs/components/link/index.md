---
layout: doc
outline: deep
title: Link 链接
titleTemplate: SeeYouUI - Link 链接
description: SeeYouUI 是一个基于 uni-app 的高质量组件库，使用 TypeScript 开发，提供丰富组件与工具函数，帮助你快速构建跨平台应用。SeeLink 链接组件
iframeSrc: /pages/seeLink/index
---

# Link 链接

> 链接组件，用于展示可点击的文本链接，支持主题色、自定义颜色、下划线样式及跨平台跳转处理。
> 在 App、H5、小程序中均做了平台适配，是文本跳转场景的推荐组件。

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

---

## 基本使用

- 通过 `text` 设置显示内容
- 通过 `href` 设置跳转地址
- 点击后会根据不同平台进行适配处理

```html:line-numbers {}
<see-link text="这是SeeYouUI的官方文档" type="primary" href="https://www.baidu.com" />
<see-link text="自定义文字颜色" color="#52f7bd" href="https://www.baidu.com" />
```

## 设置主题

- 通过 `type` 设置预置主题色
- 内置五种主题：`primary` `error` `success` `warning` `info`

```html:line-numbers {}
<see-link text="《静夜思》" type="" href="https://www.baidu.com" />
<see-link text="床前明月光，" type="primary" href="https://www.baidu.com" />
<see-link text="疑是地上霜。" type="error" href="https://www.baidu.com" />
<see-link text="举头望明月，" type="warning" href="https://www.baidu.com" />
<see-link text="低头思故乡。" type="success" href="https://www.baidu.com" />
```

## 下划线样式

- 通过 `is-line` 控制是否显示下划线
- 默认下划线颜色跟随主题色
- 可通过 `line-color` 自定义下划线颜色（设置后主题色失效）

```html:line-numbers {}
<see-link text="来都来了, 给我点个Star吗？" isLine type="primary" href="https://www.baidu.com" />
<see-link text="自定义下划线颜色" isLine line-color="#52f7bd" type="primary" href="https://www.baidu.com" />
```

## API

### Props

| 参数名    | 说明                                 | 类型                                                       | 默认值   | 可选值 / 说明                    | 平台差异 |
| --------- | ------------------------------------ | ---------------------------------------------------------- | -------- | -------------------------------- | -------- |
| text      | 链接显示文本                         | `String \| Number`                                         | `''`     | 任意字符串 / 数字                | -        |
| type      | 文本主题样式                         | `"info" \| "primary" \| "error" \| "warning" \| "success"` | `'info'` | 主题色                           | -        |
| color     | 自定义文本颜色（设置后 `type` 失效） | `String`                                                   | `''`     | 任意 CSS 颜色值                  | -        |
| href      | 跳转链接地址                         | `String`                                                   | `''`     | 合法 URL                         | -        |
| isLine    | 是否显示下划线                       | `Boolean`                                                  | `false`  | `true` / `false`                 | -        |
| lineColor | 下划线颜色（设置后主题色失效）       | `String`                                                   | `''`     | 任意 CSS 颜色值                  | -        |
| size      | 字体大小                             | `String \| Number`                                         | `16`     | 数字（默认 `px`）或合法 CSS 单位 | -        |

---

### Events

| 事件名  | 说明           | 回调参数 | 返回值 | 平台差异说明 |
| ------- | -------------- | -------- | ------ | ------------ |
| onClick | 点击链接时触发 | 无       | 无     | -            |
