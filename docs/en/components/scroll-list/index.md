---
layout: doc
outline: deep
title: ScrollList Horizontal Scroll List
titleTemplate: SeeYouUI - ScrollList Horizontal Scroll List
description: SeeYouUI component library SeeScrollList horizontal scroll list component
iframeSrc: /pages/seeScrollList/index
---

# ScrollList Horizontal Scroll List

> A horizontal scroll list component that supports custom list items, footer slot, load more, and more.

## Platform Compatibility

|  App(vue)  |  App(nvue)  |  H5  |  Mini Programs  |
| :-------: | :--------: | :--: | :-------------: |
|     ✅    |     ✅     |  ✅  |       ✅        |

## Code Examples

### Basic Usage

Pass a `list` array. Horizontal scrolling is enabled by default.

```html:line-numbers {}
<see-scroll-list :list="['Recommend', 'Hot', 'Follow', 'Tech', 'Finance']">
  <template #item="{ item }">
    <view class="scroll-item">
      <text>{{ item }}</text>
    </view>
  </template>
</see-scroll-list>
```

### Custom Item Style

Use `item-gap` to set spacing between items, combined with the custom slot for personalized styling.

```html:line-numbers {}
<see-scroll-list :list="list" item-gap="24rpx">
  <template #item="{ item }">
    <view class="custom-item" :style="{ backgroundColor: item.color }">
      <text>{{ item.label }}</text>
    </view>
  </template>
</see-scroll-list>
```

### Footer Slot

Use the `footer` slot to add trailing content such as a "Show More" button.

```html:line-numbers {}
<see-scroll-list :list="list">
  <template #item="{ item }">
    <view class="scroll-item">
      <text>{{ item }}</text>
    </view>
  </template>
  <template #footer>
    <view @click="handleMore">
      <text>Show More ></text>
    </view>
  </template>
</see-scroll-list>
```

### Load More

Listen to the `onScrollToLower` event to implement load-more functionality.

```html:line-numbers {}
<see-scroll-list :list="list" @on-scroll-to-lower="onLoadMore">
  <template #item="{ item }">
    <view class="scroll-item">
      <text>{{ item.title }}</text>
    </view>
  </template>
</see-scroll-list>
```

```javascript
const onLoadMore = () => {
  // Load more data
  list.value.push(...newData)
}
```

### Vertical Scrolling

Set `scroll-x` to `false` and `scroll-y` to `true` to switch to vertical scrolling mode.

```html:line-numbers {}
<see-scroll-list :list="list" :scroll-x="false" :scroll-y="true" style="height: 300rpx;">
  <template #item="{ item }">
    <view class="scroll-item">
      <text>{{ item }}</text>
    </view>
  </template>
</see-scroll-list>
```

## API

### Props

| Parameter | Description | Type | Default | Options |
|-----------|-------------|------|---------|---------|
| list | Data list | `any[]` | `[]` | - |
| scroll-x | Enable horizontal scrolling | `boolean` | `true` | true / false |
| scroll-y | Enable vertical scrolling | `boolean` | `false` | true / false |
| show-scrollbar | Show scrollbar | `boolean` | `false` | true / false |
| is-animated | Enable scroll animation | `boolean` | `true` | true / false |
| padding-left | Left padding | `string` | `'30rpx'` | - |
| item-gap | Gap between list items | `string` | `'20rpx'` | - |
| load-more-threshold | Distance threshold for triggering load more (px) | `number` | `50` | - |

### Events

| Event Name | Description | Callback Parameters |
|------------|-------------|---------------------|
| onScroll | Emitted when scrolling | `event: any` - Scroll event object |
| onScrollToLower | Emitted when scrolled to the bottom/right | - |
| onScrollToUpper | Emitted when scrolled to the top/left | - |

### Slots

| Slot Name | Description | Slot Parameters |
|-----------|-------------|-----------------|
| item | Custom list item content | `{ item: any, index: number }` |
| footer | Footer content | - |
