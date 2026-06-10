---
layout: doc
outline: deep
title: VirtualList
titleTemplate: SeeYouUI - VirtualList
description: SeeYouUI Component Library seeVirtualList component
iframeSrc: /pages/seeVirtualList/index
---

# VirtualList

> Used for large data list rendering, solving issues with too many nodes and scroll lag. Fixed height is the primary path, dynamic height is an enhanced mode.

::: tip Note
This component is implemented based on the `useVirtualWindow` Hook, only rendering list items within the visible area, significantly improving rendering performance for large data lists.
:::

## Platform Differences

| App (vue) | App (nvue) | H5  | Mini Program |
| --------- | ---------- | --- | ------------ |
| √         | √          | √   | √            |

## Basic Usage

- Pass data list via `list`.
- Set item height (in px) via `itemHeight`.
- Set viewport height via `height`.

```html:line-numbers {}
<see-virtual-list :list="list" :itemHeight="50" height="400px">
  <template #item="{ item, index }">
    <view style="padding: 12rpx 24rpx;">{{ index }}. {{ item }}</view>
  </template>
</see-virtual-list>

<script lang="ts" setup>
const list = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`)
</script>
```

## Dynamic Height

- Set `dynamic` to `true` to enable dynamic height mode.
- Set estimated height via `estimatedItemHeight`.

```html:line-numbers {}
<see-virtual-list
  :list="list"
  :itemHeight="50"
  :estimatedItemHeight="80"
  dynamic
  height="400px"
>
  <template #item="{ item }">
    <view style="padding: 16rpx 24rpx;">
      <text style="font-weight: bold;">{{ item.title }}</text>
      <text style="display: block; margin-top: 8rpx;">{{ item.content }}</text>
    </view>
  </template>
</see-virtual-list>
```

## Horizontal Scrolling

- Set `horizontal` to `true` to enable horizontal scrolling mode.

```html:line-numbers {}
<see-virtual-list
  :list="list"
  :itemHeight="200"
  height="240px"
  horizontal
>
  <template #item="{ item }">
    <view style="width: 200rpx; padding: 16rpx;">
      <image :src="item.image" style="width: 100%; height: 160rpx;" />
      <text>{{ item.name }}</text>
    </view>
  </template>
</see-virtual-list>
```

## Item Gap

- Set item gap (in px) via `itemGap`.

```html:line-numbers {}
<see-virtual-list :list="list" :itemHeight="50" :itemGap="8" height="400px">
  <template #item="{ item }">
    <view style="padding: 12rpx 24rpx; background: #f5f5f5; border-radius: 8rpx;">{{ item }}</view>
  </template>
</see-virtual-list>
```

## Buffer

- Set the number of buffer items above and below via `buffer`, defaults to `5`.
- A larger buffer reduces blank screen probability during scrolling but increases rendered nodes.

```html:line-numbers {}
<see-virtual-list :list="list" :itemHeight="50" :buffer="10" height="400px">
  <template #item="{ item }">
    <view style="padding: 12rpx 24rpx;">{{ item }}</view>
  </template>
</see-virtual-list>
```

## Scroll to Position

- Scroll to a specific index via `scrollIntoIndex`.
- Use component instance methods `scrollToIndex()` or `scrollToOffset()`.

::: code-group

```vue [Composition]:line-numbers {}
<see-virtual-list
  ref="listRef"
  :list="list"
  :itemHeight="50"
  :scrollIntoIndex="scrollToIdx"
  height="400px"
>
  <template #item="{ item }">
    <view style="padding: 12rpx 24rpx;">{{ item }}</view>
  </template>
</see-virtual-list>
<button @tap="listRef?.scrollToIndex(100)">Go to #100</button>
<button @tap="listRef?.scrollToOffset(5000)">Go to offset 5000</button>

<script lang="ts" setup>
import { ref } from 'vue'
const listRef = ref()
const scrollToIdx = ref(0)
</script>
```

```vue [Options]:line-numbers {}
<see-virtual-list
  ref="listRef"
  :list="list"
  :itemHeight="50"
  height="400px"
>
  <template #item="{ item }">
    <view style="padding: 12rpx 24rpx;">{{ item }}</view>
  </template>
</see-virtual-list>
<button @tap="$refs.listRef.scrollToIndex(100)">Go to #100</button>
<button @tap="$refs.listRef.scrollToOffset(5000)">Go to offset 5000</button>

<script>
export default {
  data() {
    return {}
  }
}
</script>
```

:::

## Load More

- Set the distance threshold (in px) for triggering load more via `lowerThreshold`, defaults to `50`.
- Scrolling to the bottom triggers the `onScrollToLower` event.

```html:line-numbers {}
<see-virtual-list
  :list="list"
  :itemHeight="50"
  :lowerThreshold="100"
  height="400px"
  @onScrollToLower="loadMore"
>
  <template #item="{ item }">
    <view style="padding: 12rpx 24rpx;">{{ item }}</view>
  </template>
</see-virtual-list>
```

## Slot Usage

- `header`: List header slot.
- `footer`: List footer slot.
- `item`: List item slot, exposes `item`, `index`, `activeIndex`.
- `empty`: Custom empty state.

```html:line-numbers {}
<see-virtual-list :list="list" :itemHeight="50" height="400px">
  <template #header>
    <view style="padding: 20rpx; font-weight: bold;">Virtual List</view>
  </template>
  <template #item="{ item, index }">
    <view style="padding: 12rpx 24rpx;">{{ index }}. {{ item }}</view>
  </template>
  <template #footer>
    <view style="padding: 20rpx; text-align: center;">— End —</view>
  </template>
</see-virtual-list>
```

## Custom Scrollbar

- Set whether to show the scrollbar via `showScrollbar`, defaults to `true`.

```html:line-numbers {}
<see-virtual-list :list="list" :itemHeight="50" :showScrollbar="false" height="400px">
  <template #item="{ item }">
    <view style="padding: 12rpx 24rpx;">{{ item }}</view>
  </template>
</see-virtual-list>
```

## API

### Props

| Parameter           | Description                                       | Type            | Default     | Optional Values       | Platform Notes |
| ------------------- | ------------------------------------------------- | --------------- | ----------- | --------------------- | -------------- |
| list                | Data list                                         | Array           | `[]`        | Any array             | -              |
| itemHeight          | Item height (px), required for fixed height mode  | Number          | `44`        | Any positive number   | -              |
| height              | Viewport height                                   | Number / String | `'100%'`    | px value or CSS value | -              |
| keyField            | Unique identifier field name                      | String          | `''`        | Any string            | -              |
| buffer              | Number of buffer items above and below            | Number          | `5`         | Any positive number   | -              |
| scrollTop           | Initial scroll offset (px), not yet effective, use `scrollIntoIndex` instead | Number | `0` | Any non-negative number | - |
| scrollIntoIndex     | Scroll to specified index                         | Number          | `undefined` | Any non-negative integer | -           |
| horizontal          | Whether to enable horizontal scrolling            | Boolean         | `false`     | `true`, `false`       | -              |
| itemGap             | Item gap (px)                                     | Number          | `0`         | Any non-negative number | -            |
| estimatedItemHeight | Estimated item height (px) for dynamic mode       | Number          | `undefined` | Any positive number   | -              |
| dynamic             | Whether to enable dynamic height                  | Boolean         | `false`     | `true`, `false`       | -              |
| lowerThreshold      | Distance threshold to trigger load more (px)      | Number          | `50`        | Any positive number   | -              |
| upperThreshold      | Distance threshold to trigger scroll to top (px)  | Number          | `50`        | Any positive number   | -              |
| showScrollbar       | Whether to show scrollbar                         | Boolean         | `true`      | `true`, `false`       | -              |

### Events

| Event           | Description                              | Callback Parameters                               | Platform Notes |
| --------------- | ---------------------------------------- | ------------------------------------------------- | -------------- |
| onScroll        | Triggered on scroll                      | `{ scrollLeft, scrollTop, deltaX, deltaY }`       | -              |
| onRangeChange   | Triggered on visible range change        | `{ start, end, visibleStart, visibleEnd }`        | -              |
| onScrollToLower | Triggered when scrolling to bottom       | None                                              | -              |
| onScrollToUpper | Triggered when scrolling to top          | None                                              | -              |
| onItemClick     | Triggered when list item is tapped       | `item: unknown, index: number`                    | -              |

### Slots

| Slot Name | Description              | Scope Data                     |
| --------- | ------------------------ | ------------------------------ |
| header    | List header              | None                           |
| footer    | List footer              | None                           |
| item      | List item content        | `{ item, index, activeIndex }` (activeIndex is the visible area start index) |
| empty     | Custom empty state       | None                           |

### Methods

Call via component instance obtained through `ref`.

| Method         | Description                | Parameters                                |
| -------------- | -------------------------- | ----------------------------------------- |
| scrollToIndex  | Scroll to specified index  | `index: number, animated?: boolean`       |
| scrollToOffset | Scroll to specified offset | `offset: number, animated?: boolean`      |
| reset          | Reset scroll position      | None                                      |
