---
layout: doc
outline: deep
title: LineProgress
titleTemplate: SeeYouUI - LineProgress
description: SeeYouUI Component Library seeLineProgress component
iframeSrc: /pages/seeLineProgress/index
---

# LineProgress

> Used for task progress, upload progress, step completion, and dashboard progress display.

## Platform Differences

| App (vue) | App (nvue) | H5  | Mini Program |
| --------- | ---------- | --- | ------------ |
| √         | √          | √   | √            |

## Basic Usage

- Set the progress percentage (0–100) via `percentage`.

```html:line-numbers {}
<see-line-progress :percentage="50" />
```

## Progress Status

- Set the progress bar status via `status`, supporting `normal`, `success`, `warning`, `error`.

```html:line-numbers {}
<see-line-progress :percentage="50" status="normal" />
<see-line-progress :percentage="100" status="success" />
<see-line-progress :percentage="80" status="warning" />
<see-line-progress :percentage="30" status="error" />
```

## Custom Color

- Customize the active bar color via `activeColor`, supporting solid and gradient colors.

```html:line-numbers {}
<!-- Solid color -->
<see-line-progress :percentage="60" activeColor="#ff6b6b" />

<!-- Gradient color -->
<see-line-progress :percentage="80" :activeColor="['#43e97b', '#38f9d7']" />
```

## Stripes and Animation

- Show stripe effect via `striped`.
- Enable stripe animation via `animated`.

```html:line-numbers {}
<see-line-progress :percentage="60" striped />
<see-line-progress :percentage="80" striped animated />
```

## Progress Bar Size

- Set the progress bar height via `strokeWidth`.

```html:line-numbers {}
<see-line-progress :percentage="50" strokeWidth="8rpx" />
<see-line-progress :percentage="50" strokeWidth="24rpx" />
```

## Text Position

- By default, text displays to the right of the progress bar.
- Set `textInside` to `true` to display text inside the progress bar.
- Set `showText` to `false` to hide text.

```html:line-numbers {}
<!-- Outside text (default) -->
<see-line-progress :percentage="50" />

<!-- Inside text -->
<see-line-progress :percentage="60" textInside strokeWidth="32rpx" />

<!-- Hidden text -->
<see-line-progress :percentage="70" :showText="false" />
```

## Custom Text

- Customize the displayed text via the `format` function.

```html:line-numbers {}
<see-line-progress :percentage="50" :format="formatText" />

<script lang="ts" setup>
const formatText = (percentage: number) => {
  return percentage === 100 ? 'Done' : `${percentage}%`
}
</script>
```

## Round Corners and Disabled

- Set `round` to `false` to disable round corners, defaults to `true`.
- Set `inactive` to `true` for disabled state.

```html:line-numbers {}
<see-line-progress :percentage="50" :round="false" />
<see-line-progress :percentage="50" inactive />
```

## Custom Track Color

- Customize the track background color via `trackColor`.

```html:line-numbers {}
<see-line-progress :percentage="50" trackColor="#e8e8e8" />
```

## Maximum Value

- Set the maximum value via `max`, defaults to `100`.
- `percentage` is automatically converted to a percentage based on `max`.

```html:line-numbers {}
<!-- Total 200, current 150, displays 75% -->
<see-line-progress :percentage="150" :max="200" />
```

## API

### Props

| Parameter    | Description                          | Type                              | Default                                   | Optional Values                    | Platform Notes |
| ------------ | ------------------------------------ | --------------------------------- | ----------------------------------------- | ---------------------------------- | -------------- |
| percentage   | Progress value                       | Number                            | `0`                                       | Any number                         | -              |
| max          | Maximum value                        | Number                            | `100`                                     | Any positive number                | -              |
| strokeWidth  | Progress bar height                  | String                            | `'16rpx'`                                 | Any CSS length value               | -              |
| trackColor   | Track background color               | String                            | `'var(--see-fill-color-light, #f2f3f5)'`  | Any CSS color value                | -              |
| activeColor  | Active bar color                     | String / Array                    | `''` (uses status color)                  | CSS color value or color array     | -              |
| status       | Progress bar status                  | `'normal' \| 'success' \| 'warning' \| 'error'` | `'normal'`                                | `normal`, `success`, `warning`, `error` | -              |
| striped      | Whether to show stripes              | Boolean                           | `false`                                   | `true`, `false`                    | -              |
| animated     | Whether to enable stripe animation   | Boolean                           | `false`                                   | `true`, `false`                    | -              |
| showText     | Whether to show text                 | Boolean                           | `true`                                    | `true`, `false`                    | -              |
| textInside   | Whether text is inside the bar       | Boolean                           | `false`                                   | `true`, `false`                    | -              |
| format       | Custom text format function          | `(percentage: number) => string`  | `undefined`                               | Any format function                | -              |
| round        | Whether to use round corners         | Boolean                           | `true`                                    | `true`, `false`                    | -              |
| inactive     | Whether in disabled state            | Boolean                           | `false`                                   | `true`, `false`                    | -              |
| duration     | Transition duration (ms)             | Number                            | `300`                                     | Any positive integer               | -              |

### Events

| Event      | Description                           | Callback Parameters   | Platform Notes |
| ---------- | ------------------------------------- | --------------------- | -------------- |
| onChange    | Triggered on progress change          | `percentage: number`  | -              |
| onComplete | Triggered when progress reaches 100%  | None                  | -              |

### Slots

| Slot Name | Description              | Scope Data        |
| --------- | ------------------------ | ----------------- |
| text      | Custom text content      | `{ percentage }`  |
