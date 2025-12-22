---
layout: doc
outline: deep
title: Image
titleTemplate: SeeYouUI - Image
description: SeeYouUI is a high-quality component library based on uni-app, developed using TypeScript, providing rich components and utility functions to help you quickly build cross-platform applications. SeeImage component.
iframeSrc: /pages/seeImage/index
---

# Image

> This component is based on the uni-app [`image`](https://uniapp.dcloud.net.cn/component/image.html) component with secondary encapsulation, enhancing image display capabilities. Key features include:
>
> - Supports **Lazy Load** and **Fade-in Animation**
> - Supports **Custom Border Radius** and **Mask Layer**
> - Supports **Image Preview** mode
> - Supports placeholders for **Load Failed** and **Loading**
> - Supports **Default Slot** for custom overlay content

## Platform Differences

| App（vue） | App（nvue） | H5  | Mini Program |
| ---------- | ----------- | --- | ------------ |
| √          | √           | √   | √            |

## Basic Usage

- Set the image resource URL via `src`.
- Set width and height via `width` and `height` (supports CSS units like px, %).

```html:line-numbers {}
<see-image src="https://www.seeuui.cn/logo.png" width="80px" height="80px" />
```

## Border Radius

- Set the image border radius via the `radius` property, in `px`.

```html:line-numbers {}
<see-image
  src="https://www.seeuui.cn/logo.png"
  width="80px"
  height="80px"
  :radius="40"
/>
```

## Mask Layer

- Set `showMask` to `true` to enable the mask layer.
- `maskColor`: Custom mask color.
- `maskOpacity`: Custom mask opacity (0-1).
- Commonly used for image selection states or darkening background images.

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

## Image Preview

- When `previewMode` is enabled, clicking the image triggers a preview (usually for viewing the large image).
- Can be combined with `preview-tip` to set hint text (used in some scenarios).

```html:line-numbers {}
<see-image
  src="https://www.seeuui.cn/logo.png"
  width="200px"
  height="200px"
  previewMode
  preview-tip="Click to view large image"
/>
```

## Animation and Lazy Load

- `lazyLoad`: Enable image lazy loading (loads only when scrolled into the viewport).
- `fadeInDuration`: Set the fade-in animation duration (ms) after the image loads successfully. Default is `300ms`.
- `loading-text`: Set placeholder text during loading.

```html:line-numbers {}
<see-image src="..." :fadeInDuration="100" />

<see-image src="..." :lazyLoad="true" loading-text="Loading..." />
```

## Custom Content (Slot)

- The component provides a default `slot`, and child elements will be overlaid on top of the image.
- Combined with `showMask`, it is easy to achieve a "Image + Text Title" card effect.

```html:line-numbers {}
<see-image src="..." width="200px" height="200px" showMask :maskOpacity="0.4">
  <view class="custom-content" style="color: #fff; text-align: center;">
    <text>Custom Title</text>
  </view>
</see-image>
```

## Error Handling

- Listen to the `onError` event to capture load failures, usually used to replace the default image or log statistics.

```html:line-numbers {}
<see-image src="https://invalid-url.com/err.jpg" @onError="handleImageError"
/>
```

## API

### Props

| Parameter      | Description                                    | Type            | Default         | Options                                                                                                                 | Platform Diff |
| -------------- | ---------------------------------------------- | --------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------- |
| src            | Image resource URL                             | String          | `''`            | -                                                                                                                       | -             |
| width          | Image width                                    | String / Number | `'100%'`        | Any CSS unit                                                                                                            | -             |
| height         | Image height                                   | String / Number | `'auto'`        | Any CSS unit                                                                                                            | -             |
| mode           | Image cropping/scaling mode                    | String          | `'scaleToFill'` | Refer to [uni-app image mode](https://www.google.com/search?q=https://uniapp.dcloud.net.cn/component/image.html%23mode) | -             |
| radius         | Border radius size (px)                        | Number          | `0`             | -                                                                                                                       | -             |
| showMask       | Whether to show the mask layer                 | Boolean         | `false`         | `true`, `false`                                                                                                         | -             |
| maskColor      | Mask layer color                               | String          | `'#000'`        | Any CSS color                                                                                                           | -             |
| maskOpacity    | Mask layer opacity                             | Number          | `0.5`           | 0 ~ 1                                                                                                                   | -             |
| lazyLoad       | Whether to enable lazy loading                 | Boolean         | `false`         | `true`, `false`                                                                                                         | -             |
| loadingText    | Text displayed during loading                  | String          | `''`            | -                                                                                                                       | -             |
| fadeInDuration | Fade-in duration after image load success (ms) | Number          | `300`           | -                                                                                                                       | -             |
| previewMode    | Whether to enable click-to-preview mode        | Boolean         | `false`         | `true`, `false`                                                                                                         | -             |
| previewTip     | Hint text in preview mode                      | String          | `''`            | -                                                                                                                       | -             |

### Events

| Event Name  | Description                           | Callback Params | Platform Diff |
| ----------- | ------------------------------------- | --------------- | ------------- |
| onClick     | Triggered when image is clicked       | -               | -             |
| onLongpress | Triggered when image is long-pressed  | -               | -             |
| onLoad      | Triggered when image load is complete | event           | -             |
| onError     | Triggered when image load fails       | event           | -             |

### Slots

| Slot Name | Description                                                                    |
| --------- | ------------------------------------------------------------------------------ |
| default   | Custom content above the image (e.g., text, icons), often used with mask layer |
