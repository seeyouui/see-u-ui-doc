---
layout: doc
outline: deep
title: Line
titleTemplate: SeeYouUI - Line Component
description: SeeYouUI component library SeeLine component
iframeSrc: /pages/seeLine/index
---

# Line

> A divider line component that supports horizontal and vertical directions, with options for solid or dashed styles, custom color, and thickness.

## Platform Compatibility

|  App(vue)  |  App(nvue)  |  H5  |  Mini Program  |
| :-------: | :--------: | :--: | :-----------: |
|     ✅    |     ✅     |  ✅  |      ✅       |

## Code Examples

### Basic Usage

Renders a horizontal divider line by default.

```html:line-numbers {}
<see-line />
```

### Custom Color and Thickness

```html:line-numbers {}
<see-line color="#007aff" size="4rpx" />
```

### Dashed Style

```html:line-numbers {}
<see-line :is-dashed="true" />
```

### Vertical Divider

```html:line-numbers {}
<view style="display: flex; align-items: center;">
  <text>Left</text>
  <see-line direction="vertical" length="60rpx" margin="0 20rpx" />
  <text>Right</text>
</view>
```

## API

### Props

| Property | Description | Type | Default | Options |
|----------|-------------|------|---------|---------|
| direction | Direction | `'horizontal' \| 'vertical'` | `'horizontal'` | horizontal / vertical |
| color | Color | `string` | `var(--see-border-color)` | Any CSS color value |
| size | Thickness | `string` | `'1px'` | Any CSS width value |
| margin | Outer margin | `string` | `'0'` | Any CSS margin value |
| is-dashed | Whether dashed | `boolean` | `false` | true / false |
| length | Length | `string` | `'100%'` | Any CSS width value |
