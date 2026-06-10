---
layout: doc
outline: deep
title: Card
titleTemplate: SeeYouUI - Card
description: SeeYouUI component library SeeCard component
iframeSrc: /pages/seeCard/index
---

# Card

> Card container component with title, subtitle, shadow, border radius, and more.

## Platform Compatibility

|  App(vue)  |  App(nvue)  |  H5  |  Mini Program  |
| :-------: | :--------: | :--: | :------------: |
|     ✅    |     ✅     |  ✅  |       ✅       |

## Code Examples

### Basic Usage

```html:line-numbers {}
<see-card title="Card Title">
  <text>This is the card content area</text>
</see-card>
```

### With Subtitle

```html:line-numbers {}
<see-card title="Card Title" sub-title="This is a subtitle description">
  <text>Content</text>
</see-card>
```

### Custom Header

```html:line-numbers {}
<see-card>
  <template #header>
    <text>Custom Title</text>
  </template>
  <text>Content</text>
</see-card>
```

### With Footer

```html:line-numbers {}
<see-card title="Card Title">
  <text>Content</text>
  <template #footer>
    <text>Footer action area</text>
  </template>
</see-card>
```

## API

### Props

| Property | Description | Type | Default | Options |
|----------|-------------|------|---------|---------|
| title | Card title | `string` | - | - |
| sub-title | Subtitle | `string` | - | - |
| shadow | Shadow | `'never' \| 'always' \| 'hover'` | `'always'` | never / always / hover |
| padding | Padding | `string` | `'30rpx'` | CSS padding value |
| radius | Border radius | `string` | `'16rpx'` | CSS border-radius value |
| margin | Margin | `string` | `'30rpx'` | CSS margin value |
| border | Show border | `boolean` | `true` | true / false |
| width | Width | `string` | `'100%'` | CSS width value |

### Events

| Event Name | Description | Callback Parameters |
|------------|-------------|---------------------|
| onClick | Triggered when card is clicked | - |
| onHeaderClick | Triggered when header is clicked | - |

### Slots

| Name | Description |
|------|-------------|
| default | Card content |
| header | Custom header |
| footer | Custom footer |
