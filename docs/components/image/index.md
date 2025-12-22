---
layout: doc
outline: deep
title: Image 图片
titleTemplate: SeeYouUI - Image 图片
description: SeeYouUI 是一个基于 uni-app 的高质量组件库，使用 TypeScript 开发，提供丰富组件与工具函数，帮助你快速构建跨平台应用。SeeImage 图片组件
iframeSrc: /pages/seeImage/index
---

# Image 图片

> 该组件基于 uni-app [`image`](https://uniapp.dcloud.net.cn/component/image.html) 组件进行二次封装，增强了图片展示能力，主要功能包括：
>
> - 支持 **懒加载** 与 **淡入动画**
> - 支持 **自定义圆角** 与 **遮罩层**
> - 支持 **图片预览** 模式
> - 支持 **加载失败** 与 **加载中** 占位
> - 支持 **默认插槽** 自定义覆盖内容

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基本使用

- 通过 `src` 设置图片资源地址。
- 通过 `width` 和 `height` 设置宽高（支持 px、% 等 CSS 单位）。

```html:line-numbers {}
<see-image src="https://www.seeuui.cn/logo.png" width="80px" height="80px" />
```

## 圆角设置

- 通过 `radius` 属性设置图片圆角，单位为 `px`。

```html:line-numbers {}
<see-image
  src="https://www.seeuui.cn/logo.png"
  width="80px"
  height="80px"
  :radius="40"
/>
```

## 遮罩层

- 设置 `showMask` 为 `true` 可开启遮罩层。
- `maskColor`: 自定义遮罩颜色。
- `maskOpacity`: 自定义遮罩透明度（0-1）。
- 常用于图片选中状态或背景图变暗处理。

```html:line-numbers {}
<see-image
  src="..."
  showMask
  maskColor="#000"
  :maskOpacity="0.3"
/>

<see-image
  src="..."
  showMask
  maskColor="#3ca7ff"
  :maskOpacity="0.4"
/>
```

## 图片预览

- 开启 `previewMode` 后，点击图片将触发预览（通常是大图查看）。
- 可配合 `preview-tip` 设置提示文字（部分场景下使用）。

```html:line-numbers {}
<see-image
  src="https://www.seeuui.cn/logo.png"
  width="200px"
  height="200px"
  previewMode
  preview-tip="点击图片预览大图"
/>
```

## 动画与懒加载

- `lazyLoad`: 开启图片懒加载（仅在滚动到视口时加载）。
- `fadeInDuration`: 设置图片加载成功后的淡入动画时长（毫秒），默认为 `300ms`。
- `loading-text`: 设置加载过程中的占位文字。

```html:line-numbers {}
<see-image src="..." :fadeInDuration="100" />
<see-image src="..." :lazyLoad="true" loading-text="图片加载中..." />
```

## 自定义内容（插槽）

- 组件提供默认 `slot`，子元素将层叠在图片上方。
- 配合 `showMask` 使用，可轻松实现“图片+文字标题”的卡片效果。

```html:line-numbers {}
<see-image src="..." width="200px" height="200px" showMask :maskOpacity="0.4">
  <view class="custom-content" style="color: #fff; text-align: center;">
    <text>自定义标题</text>
  </view>
</see-image>
```

## 错误处理

- 监听 `onError` 事件可捕获加载失败的情况，通常用于替换默认图或统计日志。

```html:line-numbers {}
<see-image src="https://invalid-url.com/err.jpg" @onError="handleImageError" />
```

## API

### Props

| 参数名         | 说明                         | 类型            | 默认值          | 可选值                                                                                                              | 平台差异 |
| -------------- | ---------------------------- | --------------- | --------------- | ------------------------------------------------------------------------------------------------------------------- | -------- |
| src            | 图片资源地址                 | String          | `''`            | -                                                                                                                   | -        |
| width          | 图片宽度                     | String / Number | `'100%'`        | 任意 CSS 单位                                                                                                       | -        |
| height         | 图片高度                     | String / Number | `'auto'`        | 任意 CSS 单位                                                                                                       | -        |
| mode           | 图片裁剪、缩放的模式         | String          | `'scaleToFill'` | 参考 [uni-app image mode](https://www.google.com/search?q=https://uniapp.dcloud.net.cn/component/image.html%23mode) | -        |
| radius         | 圆角大小 (px)                | Number          | `0`             | -                                                                                                                   | -        |
| showMask       | 是否显示遮罩层               | Boolean         | `false`         | `true`、`false`                                                                                                     | -        |
| maskColor      | 遮罩层颜色                   | String          | `'#000'`        | 任意 CSS 颜色                                                                                                       | -        |
| maskOpacity    | 遮罩层透明度                 | Number          | `0.5`           | 0 ~ 1                                                                                                               | -        |
| lazyLoad       | 是否开启懒加载               | Boolean         | `false`         | `true`、`false`                                                                                                     | -        |
| loadingText    | 加载中显示的文字             | String          | `''`            | -                                                                                                                   | -        |
| fadeInDuration | 图片加载成功后的淡入时间(ms) | Number          | `300`           | -                                                                                                                   | -        |
| previewMode    | 是否开启点击预览模式         | Boolean         | `false`         | `true`、`false`                                                                                                     | -        |
| previewTip     | 预览模式下的提示文字         | String          | `''`            | -                                                                                                                   | -        |

### Events

| 事件名      | 说明               | 回调参数 | 平台差异说明 |
| ----------- | ------------------ | -------- | ------------ |
| onClick     | 点击图片时触发     | -        | -            |
| onLongpress | 长按图片时触发     | -        | -            |
| onLoad      | 图片加载完成时触发 | event    | -            |
| onError     | 图片加载失败时触发 | event    | -            |

### Slots

| 插槽名  | 说明                                                   |
| ------- | ------------------------------------------------------ |
| default | 自定义图片上方的内容（如文字、图标），常配合遮罩层使用 |
