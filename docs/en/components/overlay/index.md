---
layout: doc
outline: deep
title: Overlay
titleTemplate: SeeYouUI - Overlay
description: SeeYouUI component library SeeOverlay component
iframeSrc: /pages/seeOverlay/index
---

# Overlay

> Creates a full-screen semi-transparent overlay, commonly used as a background for modals, drawers, and other components.

## Platform Compatibility

|  App(vue)  |  App(nvue)  |  H5  |  Mini Program  |
| :-------: | :--------: | :--: | :------------: |
|     ✅    |     ✅     |  ✅  |       ✅       |

## Code Examples

### Basic Usage

Use `v-model:show` to control the visibility of the overlay.

```html:line-numbers {}
<see-button title="Show Overlay" @click="show = true" />
<see-overlay v-model:show="show" />
```

### Custom Background Color

```html:line-numbers {}
<see-overlay v-model:show="show" background="rgba(255, 0, 0, 0.3)" />
```

### Non-clickable Close

Set `clickable` to `false` to prevent the overlay from closing when clicked.

```html:line-numbers {}
<see-overlay v-model:show="show" :clickable="false" />
```

### Overlay with Content

```html:line-numbers {}
<see-overlay v-model:show="show">
  <view style="display: flex; align-items: center; justify-content: center; height: 100%;">
    <text style="color: #fff;">Custom Content</text>
  </view>
</see-overlay>
```

## API

### Props

| Property | Description | Type | Default | Options |
|----------|-------------|------|---------|---------|
| show | Whether to show (v-model) | `boolean` | `false` | true / false |
| z-index | z-index level | `number` | `1000` | - |
| background | Background color | `string` | `rgba(0, 0, 0, 0.6)` | CSS color value |
| opacity | Opacity | `number` | `1` | 0-1 |
| clickable | Whether clicking closes the overlay | `boolean` | `true` | true / false |
| is-animated | Whether to enable animation | `boolean` | `true` | true / false |
| duration | Animation duration (ms) | `number` | `300` | - |

### Events

| Event | Description | Callback Parameters |
|-------|-------------|---------------------|
| onClick | Triggered when the overlay is clicked | - |
| onClose | Triggered when the overlay is closed | - |
| onOpen | Triggered when the overlay is opened | - |

### Slots

| Name | Description |
|------|-------------|
| default | Overlay content |
