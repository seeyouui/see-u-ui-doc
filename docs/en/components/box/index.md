---
layout: doc
outline: deep
title: Box
titleTemplate: SeeYouUI - Box
description: SeeYouUI Box component
iframeSrc: /pages/seeBox/index
---

# Box

> A basic layout container component that provides convenient configuration for styles like padding, margin, background color, border radius, and shadow, with Flex layout support.

## Platform Compatibility

|  App(vue)  |  App(nvue)  |  H5  |  Mini Programs  |
| :-------: | :--------: | :--: | :------------: |
|     ✅    |     ✅     |  ✅  |       ✅       |

## Code Examples

### Basic Usage

`padding` controls inner spacing, `bg-color` controls background color.

```html:line-numbers {}
<see-box padding="20rpx" bg-color="#f5f5f5">
  <text>This is a box with padding and background color</text>
</see-box>
```

### Flex Layout

Use `direction`, `justify`, `align` and other props to quickly implement Flex layout.

```html:line-numbers {}
<see-box direction="row" justify="space-between" align="center">
  <text>Left</text>
  <text>Center</text>
  <text>Right</text>
</see-box>
```

### Shadow Effect

The `shadow` prop supports three shadow sizes: small / medium / large.

```html:line-numbers {}
<see-box padding="30rpx" radius="12rpx" shadow="medium">
  <text>Card with shadow</text>
</see-box>
```

## API

### Props

| Prop | Description | Type | Default | Accepted Values |
|------|-------------|------|---------|-----------------|
| padding | Inner padding | `string` | `'0'` | CSS padding value |
| margin | Outer margin | `string` | `'0'` | CSS margin value |
| bg-color | Background color | `string` | - | CSS color value |
| width | Width | `string` | `'100%'` | CSS width value |
| height | Height | `string` | - | CSS height value |
| radius | Border radius | `string` | `'0'` | CSS radius value |
| shadow | Shadow | `'small' \| 'medium' \| 'large'` | - | small / medium / large |
| border | Border width | `string` | `'0'` | CSS width value |
| border-color | Border color | `string` | `var(--see-border-color)` | CSS color value |
| direction | Flex direction | `'row' \| 'column'` | `'row'` | row / column |
| wrap | Flex wrap | `string` | `'nowrap'` | nowrap / wrap / wrap-reverse |
| justify | Main axis alignment | `string` | `'flex-start'` | flex-start / center / space-between, etc. |
| align | Cross axis alignment | `string` | `'stretch'` | flex-start / center / stretch, etc. |
| gap | Spacing between flex items | `string` | `'0'` | CSS gap value |

### Slots

| Name | Description |
|------|-------------|
| default | Box content |
