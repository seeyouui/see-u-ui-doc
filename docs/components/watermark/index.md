---
layout: doc
outline: deep
title: Watermark 水印
titleTemplate: SeeYouUI - Watermark 水印
description: SeeYouUI 组件库 seeWatermark 水印组件
iframeSrc: /pages/seeWatermark/index
---

# Watermark 水印

> 全屏或局部水印组件。在内容上叠加平铺的文字水印，用于版权保护、防截图、品牌标识等场景。支持自定义文字、颜色、旋转角度、间距和全屏模式。

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基础用法

- 将需要加水印的内容放入默认插槽，通过 `content` 设置水印文字。

```html:line-numbers {}
<see-watermark content="SeeYouUI">
  <view class="your-content">敏感信息区域</view>
</see-watermark>
```

## 多行水印

- `content` 支持传入字符串数组，每项单独一行。

```html:line-numbers {}
<see-watermark :content="['SeeYouUI', 'Confidential']" :gap="[120, 60]" rotate="-30" />
```

## 全屏水印

- 设置 `fullScreen` 为 `true`，水印使用 fixed 定位覆盖整个视口。

```html:line-numbers {}
<see-watermark content="INTERNAL USE ONLY" font-size="36" full-screen />
```

## 自定义样式

- 通过 `fontColor`、`fontSize`、`fontWeight`、`gap`、`rotate` 控制水印视觉。

```html:line-numbers {}
<see-watermark
  content="COPYRIGHT"
  font-size="40"
  font-color="rgba(255, 182, 69, 0.18)"
  :gap="[100, 100]"
  rotate="-15"
/>
```

## 空内容

- `content` 为空字符串时，仅渲染子元素，不渲染水印层。

```html:line-numbers {}
<see-watermark content="">
  <view>无水印内容</view>
</see-watermark>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 水印文字，数组为多行 | `string \| string[]` | `''` |
| gap | 水印间距 [x, y]（rpx） | `[number, number]` | `[80, 80]` |
| offset | 起始偏移 [x, y]（rpx） | `[number, number]` | `[0, 0]` |
| rotate | 旋转角度（deg） | `number` | `-22` |
| fontSize | 字号（数值默认 rpx，字符串原样） | `number \| string` | `28` |
| fontColor | 字色 | `string` | `'rgba(0,0,0,0.15)'` |
| fontWeight | 字重 | `string \| number` | `'normal'` |
| fontFamily | 字体 | `string` | `'inherit'` |
| zIndex | 水印层 z-index | `number` | `9` |
| fullScreen | 是否全屏覆盖（fixed 定位） | `boolean` | `false` |
| width | 容器宽度（数值拼 rpx） | `number \| string` | `''` |
| height | 容器高度（数值拼 rpx） | `number \| string` | `''` |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 需要被水印覆盖的子内容 |
