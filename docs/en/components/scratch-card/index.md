---
layout: doc
outline: deep
title: ScratchCard
titleTemplate: SeeYouUI - ScratchCard
description: SeeYouUI Component Library seeScratchCard component
iframeSrc: /pages/seeScratchCard/index
---

# ScratchCard

> A canvas-based scratch card component. Users scratch off a top coating layer to reveal the prize content underneath. Supports custom coating colors/text, brush size, and auto-reveal on threshold. Ideal for marketing campaigns, lotteries, red packets, and other interactive scenarios.

## Platform Differences

| App (vue) | App (nvue) | H5  | Mini Program |
| --------- | ---------- | --- | ------------ |
| √         | √          | √   | √            |

## Basic Usage

- Place the prize content in the default slot. Set `coverText` for hint text on the coating.
- The component automatically handles touch-scratch trails and reveals when the `threshold` (default 60%) is reached.

```html:line-numbers {}
<see-scratch-card :width="300" :height="160" cover-text="Scratch here">
  <view class="prize">🎉 You won a ¥10 red packet!</view>
</see-scratch-card>
```

## Custom Coating Color

- Use `coverColor` for the coating background and `coverTextColor` for the text color.

```html:line-numbers {}
<see-scratch-card :width="300" :height="160" cover-color="#ff6b6b" cover-text="Scratch & win" cover-text-color="#fff">
  <view>🎁 50 Points</view>
</see-scratch-card>
```

## Gold Coating + Custom Threshold

- Set `brushSize` for scratch brush radius and `threshold` for the auto-reveal percentage.

```html:line-numbers {}
<see-scratch-card
  :width="300"
  :height="160"
  cover-color="#e8b830"
  cover-text="Scratch here"
  :brush-size="30"
  :threshold="40"
>
  <view>🏆 Free Order Coupon x1</view>
</see-scratch-card>
```

## Disabled Mode

- Set `isDisabled` to `true` to prevent scratching.

```html:line-numbers {}
<see-scratch-card :width="300" :height="160" is-disabled cover-text="Scratch here">
  <view>Expired</view>
</see-scratch-card>
```

## Events

- `onStart` — fires on the first scratch (once per session).
- `onProgress` — fires as scratch progress changes (percentage).
- `onComplete` — fires when threshold is reached and `autoReveal` is `true`.

```html:line-numbers {}
<see-scratch-card
  @on-start="onStart"
  @on-progress="onProgress"
  @on-complete="onComplete"
>
  <view>Prize content</view>
</see-scratch-card>

<script lang="ts" setup>
const onStart = () => console.log('Scratch started')
const onProgress = (percent: number) => console.log('Progress', percent, '%')
const onComplete = (percent: number) => console.log('Revealed', percent, '%')
</script>
```

## API

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| width | Width (number = rpx) | `number \| string` | `600` |
| height | Height (number = rpx) | `number \| string` | `300` |
| coverColor | Coating solid color | `string` | `'#c0c0c0'` |
| coverImage | Coating image URL (overrides coverColor) | `string` | `''` |
| coverText | Coating text | `string` | `'Scratch here'` |
| coverTextColor | Coating text color | `string` | `'#ffffff'` |
| coverTextSize | Coating text font size (rpx) | `number` | `40` |
| brushSize | Scratch brush radius (rpx) | `number` | `40` |
| threshold | Reveal threshold percentage (0-100) | `number` | `60` |
| isDisabled | Disabled | `boolean` | `false` |
| autoReveal | Auto-reveal on threshold | `boolean` | `true` |
| canvasId | Canvas ID (unique when multiple instances) | `string` | auto-generated |

### Events

| Event | Description | Payload |
| --- | --- | --- |
| onStart | First scratch started | - |
| onProgress | Scratch progress changed | `percent: number` |
| onComplete | Threshold reached | `percent: number` |

### Expose

| Method | Description | Params |
| --- | --- | --- |
| reveal | Manually reveal (clear all coating) | - |
| reset | Reset coating (start over) | - |
| getProgress | Get current scratch percentage | - |

### Slots

| Name | Description |
| --- | --- |
| default | Prize content (hidden under the coating) |
