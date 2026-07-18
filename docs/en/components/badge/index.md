---
layout: doc
outline: deep
title: Badge
titleTemplate: SeeYouUI - Badge
description: SeeYouUI component library seeBadge component
iframeSrc: /pages/seeBadge/index
---

# Badge

> A badge component for displaying unread message counts, notifications, and other indicators. Supports dot and text modes with multiple display formats and rich customization options.

## Platform Compatibility

| App (vue) | App (nvue) | H5  | Mini Program |
| ---------- | ----------- | --- | ------------ |
| √          | √           | √   | √            |

## Basic Usage

- Use `value` to set the badge content, which can be a number or text.

```html:line-numbers {}
<see-badge value="5">
  <view class="box">Messages</view>
</see-badge>

<see-badge value="new">
  <view class="box">Notifications</view>
</see-badge>
```

## Theme Types

- Use `type` to set the badge theme type. Default is `error`.

```html:line-numbers {}
<see-badge value="5" type="primary">
  <view class="box">Primary</view>
</see-badge>
<see-badge value="5" type="success">
  <view class="box">Success</view>
</see-badge>
<see-badge value="5" type="warning">
  <view class="box">Warning</view>
</see-badge>
<see-badge value="5" type="info">
  <view class="box">Info</view>
</see-badge>
<see-badge value="5" type="error">
  <view class="box">Error</view>
</see-badge>
```

## Dot Badge

- Set `isDot` to `true` to display only a dot without the number.

```html:line-numbers {}
<see-badge is-dot type="primary">
  <view class="box">Messages</view>
</see-badge>
<see-badge is-dot type="success">
  <view class="box">Notifications</view>
</see-badge>
```

## Max Value

- Use `max` to set the maximum value. When exceeded, it displays `{max}+`. Default is `99`.

```html:line-numbers {}
<see-badge :value="100" :max="99">
  <view class="box">Messages</view>
</see-badge>
<see-badge :value="50" :max="99">
  <view class="box">Messages</view>
</see-badge>
```

## Number Display Mode

- Use `numberType` to set how numbers are displayed.
- `overflow`: Shows `{max}+` when exceeding max (default).
- `ellipsis`: Shows `{max}...` when exceeding max.
- `limit`: Formats numbers as `1.5k`, `2.3w`, etc.

```html:line-numbers {}
<see-badge :value="1500" number-type="overflow">
  <view class="box">overflow</view>
</see-badge>
<see-badge :value="1500" number-type="ellipsis">
  <view class="box">ellipsis</view>
</see-badge>
<see-badge :value="1500" number-type="limit">
  <view class="box">limit</view>
</see-badge>
```

## Badge Shape

- Use `shape` to set the badge shape. Supports `circle` (rounded) and `horn` (square bottom-left corner).

```html:line-numbers {}
<see-badge value="5" shape="circle">
  <view class="box">Circle</view>
</see-badge>
<see-badge value="5" shape="horn">
  <view class="box">Horn</view>
</see-badge>
```

## Show & Hide

- Use `show` to control badge visibility.
- Use `showZero` to set whether to display when value is `0`. Default is `false`.

```html:line-numbers {}
<see-badge value="5" :show="true">
  <view class="box">Show</view>
</see-badge>
<see-badge value="5" :show="false">
  <view class="box">Hide</view>
</see-badge>
<see-badge :value="0" :show-zero="true">
  <view class="box">Show Zero</view>
</see-badge>
```

## Position Offset

- Use `offset` to set badge position offset in `[top, right]` format, unit is rpx.
- Must be used with `absolute`.

```html:line-numbers {}
<see-badge value="5" absolute :offset="[-10, -10]">
  <view class="box">Offset</view>
</see-badge>
```

## Inverted Style

- Set `inverted` to `true` to swap the badge's background and text colors.

```html:line-numbers {}
<see-badge value="5" type="primary">
  <view class="box">Default</view>
</see-badge>
<see-badge value="5" type="primary" inverted>
  <view class="box">Inverted</view>
</see-badge>
```

## Custom Colors

- Use `color` to customize text color.
- Use `bgColor` to customize background color.

```html:line-numbers {}
<see-badge value="5" color="#fff" bg-color="#7232dd">
  <view class="box">Custom</view>
</see-badge>
```

::: warning Notice
Custom colors are hardcoded values and will not adapt to dark/light theme changes.
:::

## Custom Size

- Use `size` to set font size in px.
- Use `dotSize` to set dot size in rpx.

```html:line-numbers {}
<see-badge value="5" :size="10">
  <view class="box">Small</view>
</see-badge>
<see-badge value="5" :size="14">
  <view class="box">Large</view>
</see-badge>
<see-badge is-dot :dot-size="24">
  <view class="box">Large Dot</view>
</see-badge>
```

## Props

| Property | Description | Type | Default | Options |
|----------|-------------|------|---------|---------|
| value | Display number or text content | String \| Number | `''` | - |
| type | Badge theme type | String | `'error'` | `'info'` `'primary'` `'error'` `'warning'` `'success'` |
| color | Custom text color | String | `''` | - |
| bgColor | Custom background color | String | `''` | - |
| max | Maximum value, displays `{max}+` when exceeded | String \| Number | `99` | - |
| isDot | Whether to show dot only | Boolean | `false` | - |
| show | Whether to show badge | Boolean | `true` | - |
| showZero | Whether to show when value is 0 | Boolean | `false` | - |
| shape | Badge shape | String | `'circle'` | `'circle'` `'horn'` |
| numberType | Number display mode | String | `'overflow'` | `'overflow'` `'ellipsis'` `'limit'` |
| offset | Badge position offset [top, right] in rpx | Array | `[0, 0]` | - |
| absolute | Whether to use absolute positioning | Boolean | `false` | - |
| inverted | Whether to swap background and text colors | Boolean | `false` | - |
| size | Font size in px | Number | `8` | - |
| dotSize | Dot size in rpx | Number | `18` | - |

## Events

| Event | Description | Parameters |
|-------|-------------|------------|
| onClick | Fires when badge is clicked | - |

## Slots

| Slot | Description |
|------|-------------|
| default | Content wrapped by the badge |

## Methods

| Method | Description | Parameters |
|--------|-------------|------------|
| getValue | Get the original badge value | - |
| getDisplayValue | Get the formatted display value | - |
