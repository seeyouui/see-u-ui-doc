---
layout: doc
outline: deep
title: Waterfall
titleTemplate: SeeYouUI - Waterfall
description: SeeYouUI component library SeeWaterfall component
iframeSrc: /pages/seeWaterfall/index
---

# Waterfall

> Waterfall / Masonry layout component with multi-column uneven arrangement, commonly used for image lists, product displays, and more.

## Platform Compatibility

|  App(vue)  |  App(nvue)  |  H5  |  Mini Program  |
| :-------: | :--------: | :--: | :------------: |
|     ✅    |     ✅     |  ✅  |       ✅       |

## Code Examples

### Basic Usage

```html:line-numbers {}
<see-waterfall :list="list" />
```

### 3-Column Waterfall

```html:line-numbers {}
<see-waterfall :list="list" :columns="3" gap="12rpx" />
```

### Custom Item Slot

```html:line-numbers {}
<see-waterfall :list="list">
  <template #item="{ item }">
    <view class="custom-item">
      <image :src="item.image" mode="widthFix" />
      <text>{{ item.title }}</text>
    </view>
  </template>
</see-waterfall>
```

### Load More

```html:line-numbers {}
<see-waterfall :list="list" has-more @on-load-more="onLoadMore" />
```

## API

### Props

| Property | Description | Type | Default | Options |
|----------|-------------|------|---------|---------|
| list | Waterfall data | `WaterfallItem[]` | `[]` | - |
| columns | Number of columns | `number` | `2` | - |
| gap | Column gap | `string` | `'16rpx'` | CSS gap value |
| hasMore | Show load more indicator | `boolean` | `false` | true / false |

### WaterfallItem

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| id | Unique identifier | `string \| number` | - |
| image | Image URL | `string` | - |
| title | Title | `string` | - |
| height | Height (for pre-allocation, in rpx) | `number` | - |

### Events

| Event Name | Description | Callback Parameters |
|------------|-------------|---------------------|
| onLoadMore | Triggered when loading more | - |
| onClick | Triggered when an item is clicked | `(item: WaterfallItem, index: number)` |

### Slots

| Name | Description | Scope |
|------|-------------|-------|
| item | Custom item content | `{ item, index }` |
| footer | Custom footer load area | - |
