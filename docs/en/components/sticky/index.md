---
layout: doc
outline: deep
title: Sticky
titleTemplate: SeeYouUI - Sticky
description: SeeYouUI component library SeeSticky component
iframeSrc: /pages/seeSticky/index
---

# Sticky

> Fix an element at a specified position when the page scrolls, commonly used for navigation bars, title bars, etc.

## Platform Compatibility

|  App(vue)  |  App(nvue)  |  H5  |  Mini Programs  |
| :-------: | :--------: | :--: | :-------------: |
|     ✅    |     ✅     |  ✅  |       ✅        |

## Code Examples

### Basic Usage

```html:line-numbers {}
<see-sticky>
  <view>Sticky content</view>
</see-sticky>
```

### Custom Offset Distance

```html:line-numbers {}
<see-sticky :offset-top="50">
  <view>Stick at 50px from top</view>
</see-sticky>
```

## API

### Props

| Property | Description | Type | Default | Options |
|----------|-------------|------|---------|---------|
| offset-top | Distance from top when sticky (px) | `number` | `0` | - |
| z-index | z-index | `number` | `99` | - |
| is-enabled | Whether to enable sticky | `boolean` | `true` | true / false |
| container | Container selector | `string` | - | - |

### Events

| Event Name | Description | Callback Parameters |
|------------|-------------|---------------------|
| onScroll | Triggered on scroll | `{ isFixed: boolean, scrollTop: number }` |

### Slots

| Name | Description |
|------|-------------|
| default | Sticky content |
