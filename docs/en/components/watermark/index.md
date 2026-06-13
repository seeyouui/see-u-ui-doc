---
layout: doc
outline: deep
title: Watermark
titleTemplate: SeeYouUI - Watermark
description: SeeYouUI Component Library seeWatermark component
iframeSrc: /pages/seeWatermark/index
---

# Watermark

> A full-screen or local watermark component that overlays repeated text watermarks on content for copyright protection, anti-screenshot, branding, and more. Supports custom text, colors, rotation angles, spacing, and full-screen mode.

## Platform Differences

| App (vue) | App (nvue) | H5  | Mini Program |
| --------- | ---------- | --- | ------------ |
| √         | √          | √   | √            |

## Basic Usage

- Put content inside the default slot and set watermark text via `content`.

```html:line-numbers {}
<see-watermark content="SeeYouUI">
  <view class="your-content">Sensitive Area</view>
</see-watermark>
```

## Multi-line Watermark

- Pass a string array to `content` for multiple lines.

```html:line-numbers {}
<see-watermark :content="['SeeYouUI', 'Confidential']" :gap="[120, 60]" rotate="-30" />
```

## Full-screen Watermark

- Set `fullScreen` to `true` for a fixed-position full-screen overlay.

```html:line-numbers {}
<see-watermark content="INTERNAL USE ONLY" font-size="36" full-screen />
```

## Custom Styling

- Control visual appearance with `fontColor`, `fontSize`, `fontWeight`, `gap`, and `rotate`.

```html:line-numbers {}
<see-watermark
  content="COPYRIGHT"
  font-size="40"
  font-color="rgba(255, 182, 69, 0.18)"
  :gap="[100, 100]"
  rotate="-15"
/>
```

## Empty Content

- When `content` is an empty string, only the child content is rendered without the watermark layer.

```html:line-numbers {}
<see-watermark content="">
  <view>No watermark</view>
</see-watermark>
```

## API

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| content | Watermark text, array for multi-line | `string \| string[]` | `''` |
| gap | Spacing between cells [x, y] (rpx) | `[number, number]` | `[80, 80]` |
| offset | Starting offset [x, y] (rpx) | `[number, number]` | `[0, 0]` |
| rotate | Rotation angle (deg) | `number` | `-22` |
| fontSize | Font size (number = rpx, string = as-is) | `number \| string` | `28` |
| fontColor | Font color | `string` | `'rgba(0,0,0,0.15)'` |
| fontWeight | Font weight | `string \| number` | `'normal'` |
| fontFamily | Font family | `string` | `'inherit'` |
| zIndex | Watermark layer z-index | `number` | `9` |
| fullScreen | Full-screen fixed overlay | `boolean` | `false` |
| width | Container width (number = rpx) | `number \| string` | `''` |
| height | Container height (number = rpx) | `number \| string` | `''` |

### Slots

| Name | Description |
| --- | --- |
| default | Content to be watermarked |
