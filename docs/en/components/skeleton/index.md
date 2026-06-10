---
layout: doc
outline: deep
title: Skeleton
titleTemplate: SeeYouUI - Skeleton Component
description: SeeYouUI component library SeeSkeleton component
iframeSrc: /pages/seeSkeleton/index
---

# Skeleton

> Displays a skeleton placeholder while page data is loading, improving user experience. Supports custom rows, row widths, avatar, title, and animation effects.

## Platform Compatibility

|  App(vue)  |  App(nvue)  |  H5  |  Mini Program  |
| :-------: | :--------: | :--: | :-----------: |
|     ✅    |     ✅     |  ✅  |      ✅       |

## Code Examples

### Basic Usage

Displays 3 skeleton rows with loading animation by default.

```html:line-numbers {}
<see-skeleton :loading="true">
  <text>Loaded content</text>
</see-skeleton>
```

### Custom Rows

Control the number of skeleton rows via the `rows` prop.

```html:line-numbers {}
<see-skeleton :rows="5" />
```

### Custom Row Width

Supports a string for uniform width or an array for different widths per row.

```html:line-numbers {}
<!-- Uniform width -->
<see-skeleton row-width="80%" />

<!-- Different width per row -->
<see-skeleton :row-width="['100%', '80%', '60%']" />
```

### Title Mode

When `title` is enabled, the first row renders with a taller height as a title placeholder.

```html:line-numbers {}
<see-skeleton :title="true" :rows="3" />
```

### Avatar + Title

Supports avatar placeholders that can be combined with title mode.

```html:line-numbers {}
<!-- Circle avatar -->
<see-skeleton :avatar="true" :title="true" :rows="3" />

<!-- Square avatar -->
<see-skeleton :avatar="true" avatar-shape="square" :title="true" :rows="3" />
```

### Disable Animation

Set `isAnimate` to `false` to disable the skeleton shimmer animation.

```html:line-numbers {}
<see-skeleton :is-animate="false" />
```

### Loading Complete

Set `loading` to `false` to display the actual content slot.

```html:line-numbers {}
<see-skeleton :loading="isLoading">
  <view>
    <text>Actual content</text>
  </view>
</see-skeleton>
```

## API

### Props

| Prop | Description | Type | Default | Options |
|------|-------------|------|---------|---------|
| loading | Whether to show skeleton (loading state) | `boolean` | `true` | true / false |
| rows | Number of skeleton rows | `number` | `3` | Positive integer |
| row-width | Width of each row | `string \| string[]` | - | CSS width value |
| row-height | Row height | `string` | `'32rpx'` | CSS height value |
| row-gap | Gap between rows | `string` | `'20rpx'` | CSS spacing value |
| avatar | Whether to show avatar placeholder | `boolean` | `false` | true / false |
| avatar-size | Avatar size | `string` | `'80rpx'` | CSS size value |
| avatar-shape | Avatar shape | `'circle' \| 'square'` | `'circle'` | circle / square |
| title | Whether to show title placeholder | `boolean` | `false` | true / false |
| is-animate | Whether to enable skeleton animation | `boolean` | `true` | true / false |
| skeleton-bg-color | Skeleton background color | `string` | `'var(--see-info)'` | CSS color value |
| highlight-color | Animation highlight color | `string` | `'var(--see-bg-color)'` | CSS color value |

### Slots

| Name | Description |
|------|-------------|
| default | Actual content displayed when `loading` is `false` |
