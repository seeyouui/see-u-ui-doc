---
layout: doc
outline: deep
title: Layout
titleTemplate: SeeYouUI - Layout
description: SeeYouUI component library SeeLayout component
iframeSrc: /pages/seeLayout/index
---

# Layout

> Flexbox-based 24-column grid layout container. Use with see-layout-item child component to build flexible page layouts.

## Platform Compatibility

|  App(vue)  |  App(nvue)  |  H5  |  Mini Program  |
| :-------: | :--------: | :--: | :------------: |
|     ✅    |     ✅     |  ✅  |       ✅       |

## Code Examples

### Equal Split

Split a row into three equal parts.

```html:line-numbers {}
<see-layout>
  <see-layout-item :span="8">
    <view class="grid-item">span=8</view>
  </see-layout-item>
  <see-layout-item :span="8">
    <view class="grid-item">span=8</view>
  </see-layout-item>
  <see-layout-item :span="8">
    <view class="grid-item">span=8</view>
  </see-layout-item>
</see-layout>
```

### 2:1 Ratio

```html:line-numbers {}
<see-layout>
  <see-layout-item :span="16">
    <view class="grid-item">span=16</view>
  </see-layout-item>
  <see-layout-item :span="8">
    <view class="grid-item">span=8</view>
  </see-layout-item>
</see-layout>
```

### Offset

Use the offset property to push a column to the right.

```html:line-numbers {}
<see-layout>
  <see-layout-item :span="8" :offset="8">
    <view class="grid-item">span=8 offset=8</view>
  </see-layout-item>
</see-layout>
```

### Gap

Set grid spacing via the gap property.

```html:line-numbers {}
<see-layout :gap="16">
  <see-layout-item :span="8">
    <view class="grid-item">span=8</view>
  </see-layout-item>
  <see-layout-item :span="8">
    <view class="grid-item">span=8</view>
  </see-layout-item>
  <see-layout-item :span="8">
    <view class="grid-item">span=8</view>
  </see-layout-item>
</see-layout>
```

### Flex Custom Ratio

Use the flex property instead of span for custom ratio distribution.

```html:line-numbers {}
<see-layout>
  <see-layout-item :flex="2">
    <view class="grid-item">flex=2</view>
  </see-layout-item>
  <see-layout-item :flex="1">
    <view class="grid-item">flex=1</view>
  </see-layout-item>
  <see-layout-item :flex="1">
    <view class="grid-item">flex=1</view>
  </see-layout-item>
</see-layout>
```

### Vertical Direction

Set direction to column for vertical layout.

```html:line-numbers {}
<see-layout direction="column" :gap="10">
  <see-layout-item>
    <view class="grid-item">Row 1</view>
  </see-layout-item>
  <see-layout-item>
    <view class="grid-item">Row 2</view>
  </see-layout-item>
  <see-layout-item>
    <view class="grid-item">Row 3</view>
  </see-layout-item>
</see-layout>
```

## API

### Layout Props

| Property | Description | Type | Default | Options |
|----------|-------------|------|---------|---------|
| direction | Flex direction | `string` | `'row'` | row / column |
| wrap | Flex wrap | `string` | `'wrap'` | nowrap / wrap / wrap-reverse |
| justify | Main axis alignment | `string` | `'flex-start'` | flex-start / flex-end / center / space-between / space-around / space-evenly |
| align | Cross axis alignment | `string` | `'flex-start'` | flex-start / flex-end / center / stretch / baseline |
| gap | Grid spacing | `number \| string` | `0` | - |

### Layout Slots

| Name | Description |
|------|-------------|
| default | Default slot for see-layout-item children |

### LayoutItem Props

| Property | Description | Type | Default | Options |
|----------|-------------|------|---------|---------|
| span | Number of columns to span (0-24, 0 means auto width by content) | `number` | `24` | 0 - 24 |
| offset | Number of columns to offset from the left | `number` | `0` | 0 - 24 |
| flex | Custom flex ratio (overrides span when set) | `number` | - | - |

### LayoutItem Slots

| Name | Description |
|------|-------------|
| default | Default slot for column content |
