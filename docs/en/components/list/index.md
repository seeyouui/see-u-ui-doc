---
layout: doc
outline: deep
title: List
titleTemplate: SeeYouUI - List
description: SeeYouUI Component Library seeList component
iframeSrc: /pages/seeList/index
---

# List

> A basic data container that uniformly handles plain lists, loading states, empty states, error states, completed states, grouping, and list item slots. For large data scenarios, use [SeeVirtualList](/en/components/virtual-list/).

## Platform Differences

| App (vue) | App (nvue) | H5  | Mini Program |
| --------- | ---------- | --- | ------------ |
| √         | √          | √   | √            |

## Basic Usage

- Pass data list via `list`.
- Customize list item content via the `item` slot.

```html:line-numbers {}
<see-list :list="['Apple', 'Banana', 'Orange']">
  <template #item="{ item }">
    <view style="padding: 20rpx;">{{ item }}</view>
  </template>
</see-list>
```

## Loading State

- Set `loading` to `true` to show the loading state.
- Customize loading text via `loadingText`.

```html:line-numbers {}
<see-list :list="[]" loading />
<see-list :list="[]" loading loadingText="Loading..." />
```

## Empty State

- When `list` is empty and not loading or in error state, the empty state is shown automatically.
- Customize empty state text via `emptyText`.

```html:line-numbers {}
<see-list :list="[]" emptyText="No orders" />
```

## Error State

- Set `error` to `true` to show the error state.
- Customize error text via `errorText`.
- Clicking the error state triggers the `onRetry` event.

```html:line-numbers {}
<see-list :list="[]" error errorText="Network error, tap to retry" />
```

## Load More

- Set `finished` to `true` to show "No more data" prompt.
- Customize finished text via `finishedText`.
- Scrolling to the bottom automatically triggers the `onLoadMore` event.

```html:line-numbers {}
<see-list
  :list="list"
  :loading="loading"
  :finished="finished"
  @onLoadMore="loadMore"
>
  <template #item="{ item }">
    <view style="padding: 20rpx;">{{ item }}</view>
  </template>
</see-list>
```

## Dividers and Borders

- Set `divided` to `true` to show dividers.
- Set `border` to `true` to show borders.

```html:line-numbers {}
<see-list :list="list" divided>
  <template #item="{ item }">
    <view style="padding: 20rpx;">{{ item }}</view>
  </template>
</see-list>

<see-list :list="list" border>
  <template #item="{ item }">
    <view style="padding: 20rpx;">{{ item }}</view>
  </template>
</see-list>
```

## Horizontal Scrolling

- Set `direction` to `horizontal` for a horizontal list.

```html:line-numbers {}
<see-list :list="list" direction="horizontal" itemGap="16rpx">
  <template #item="{ item }">
    <view style="width: 200rpx; padding: 20rpx; background: #f5f5f5;">{{ item }}</view>
  </template>
</see-list>
```

## Grouped List

- Set the grouping field name or grouping function via `groupBy`.

```html:line-numbers {}
<!-- Group by field -->
<see-list :list="list" groupBy="category">
  <template #group="{ group, count }">
    <view style="padding: 16rpx 24rpx; background: #f5f5f5;">
      {{ group }} ({{ count }})
    </view>
  </template>
  <template #item="{ item }">
    <view style="padding: 20rpx;">{{ item.name }}</view>
  </template>
</see-list>

<!-- Custom grouping function -->
<see-list :list="list" :groupBy="(item) => item.age > 18 ? 'Adult' : 'Minor'">
  <template #group="{ group }">
    <view style="padding: 16rpx 24rpx; background: #f5f5f5;">{{ group }}</view>
  </template>
  <template #item="{ item }">
    <view style="padding: 20rpx;">{{ item.name }}</view>
  </template>
</see-list>
```

## Slot Usage

- `header`: List header slot.
- `footer`: List footer slot.
- `item`: List item slot, exposes `item` and `index`.
- `loading`: Custom loading state.
- `empty`: Custom empty state.
- `error`: Custom error state.
- `finished`: Custom finished state.

```html:line-numbers {}
<see-list :list="list">
  <template #header>
    <view style="padding: 20rpx; font-weight: bold;">List Title</view>
  </template>
  <template #item="{ item, index }">
    <view style="padding: 20rpx;">{{ index }}. {{ item }}</view>
  </template>
  <template #footer>
    <view style="padding: 20rpx; text-align: center;">— End —</view>
  </template>
</see-list>
```

## Custom Styling

- Set list item gap via `itemGap`.
- Set padding via `padding`.

```html:line-numbers {}
<see-list :list="list" itemGap="16rpx" padding="24rpx">
  <template #item="{ item }">
    <view style="padding: 20rpx; background: #f5f5f5; border-radius: 8rpx;">{{ item }}</view>
  </template>
</see-list>
```

## API

### Props

| Parameter      | Description                                          | Type                                | Default      | Optional Values                  | Platform Notes |
| -------------- | ---------------------------------------------------- | ----------------------------------- | ------------ | -------------------------------- | -------------- |
| list           | Data list                                            | Array                               | `[]`         | Any array                        | -              |
| keyField       | Unique identifier field name                         | String                              | `''`         | Any string                       | -              |
| loading        | Whether loading                                      | Boolean                             | `false`      | `true`, `false`                  | -              |
| finished       | Whether all data is loaded                           | Boolean                             | `false`      | `true`, `false`                  | -              |
| error          | Whether loading error occurred                       | Boolean                             | `false`      | `true`, `false`                  | -              |
| emptyText      | Empty state text                                     | String                              | `''`         | Any string                       | -              |
| errorText      | Error state text                                     | String                              | `''`         | Any string                       | -              |
| loadingText    | Loading text                                         | String                              | `''`         | Any string                       | -              |
| finishedText   | Finished text                                        | String                              | `''`         | Any string                       | -              |
| immediateCheck | Whether to check load more immediately (auto-trigger when content is less than one screen) | Boolean | `true` | `true`, `false` | - |
| offset         | Distance threshold to trigger load more (px)         | Number                              | `50`         | Any positive number              | -              |
| direction      | List direction                                       | `'vertical' \| 'horizontal'`        | `'vertical'` | `vertical`, `horizontal`         | -              |
| border         | Whether to show border                               | Boolean                             | `false`      | `true`, `false`                  | -              |
| divided        | Whether to show dividers                             | Boolean                             | `false`      | `true`, `false`                  | -              |
| itemGap        | List item gap                                        | String                              | `''`         | Any CSS length value             | -              |
| padding        | Padding                                              | String                              | `''`         | Any CSS length value             | -              |
| groupBy        | Grouping field name or function                      | String / Function                   | `undefined`  | String or `(item, index) => string` | -           |

### Events

| Event       | Description                          | Callback Parameters              | Platform Notes |
| ----------- | ------------------------------------ | -------------------------------- | -------------- |
| onLoadMore  | Triggered when scrolling to bottom   | None                             | -              |
| onRefresh   | Triggered when scrolling to top      | None                             | -              |
| onRetry     | Triggered when error state is tapped | None                             | -              |
| onClickItem | Triggered when list item is tapped   | `item: unknown, index: number`   | -              |

### Slots

| Slot Name | Description              | Scope Data                                      |
| --------- | ------------------------ | ----------------------------------------------- |
| header    | List header              | None                                            |
| footer    | List footer              | None                                            |
| item      | List item content        | `{ item, index }` or `{ item, index, group }` (when grouped) |
| group     | Group title              | `{ group, count }`                              |
| loading   | Custom loading state     | None                                            |
| empty     | Custom empty state       | None                                            |
| error     | Custom error state       | None                                            |
| finished  | Custom finished state    | None                                            |
