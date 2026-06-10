---
layout: doc
outline: deep
title: VirtualList 虚拟列表
titleTemplate: SeeYouUI - VirtualList 虚拟列表
description: SeeYouUI 组件库 seeVirtualList 虚拟列表组件
iframeSrc: /pages/seeVirtualList/index
---

# VirtualList 虚拟列表

> 用于大数据列表渲染，解决节点过多、滚动卡顿问题。固定高度是主路径，动态高度是增强模式。

::: tip 说明
该组件基于 `useVirtualWindow` Hook 实现，仅渲染可视区域内的列表项，大幅提升大数据列表的渲染性能。
:::

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基本使用

- 通过 `list` 传入数据列表。
- 通过 `itemHeight` 设置列表项高度（px）。
- 通过 `height` 设置可视区域高度。

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

## 动态高度

- 设置 `dynamic` 为 `true` 开启动态高度模式。
- 通过 `estimatedItemHeight` 设置预估高度。

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

## 水平滚动

- 设置 `horizontal` 为 `true` 开启水平滚动模式。

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

## 列表项间距

- 通过 `itemGap` 设置列表项间距（px）。

```html:line-numbers {}
<see-virtual-list :list="list" :itemHeight="50" :itemGap="8" height="400px">
  <template #item="{ item }">
    <view style="padding: 12rpx 24rpx; background: #f5f5f5; border-radius: 8rpx;">{{ item }}</view>
  </template>
</see-virtual-list>
```

## 缓冲区

- 通过 `buffer` 设置上下缓冲项目数，默认为 `5`。
- 缓冲区越大，滚动时白屏概率越小，但渲染节点越多。

```html:line-numbers {}
<see-virtual-list :list="list" :itemHeight="50" :buffer="10" height="400px">
  <template #item="{ item }">
    <view style="padding: 12rpx 24rpx;">{{ item }}</view>
  </template>
</see-virtual-list>
```

## 滚动到指定位置

- 通过 `scrollIntoIndex` 滚动到指定索引。
- 通过组件实例调用 `scrollToIndex()` 或 `scrollToOffset()` 方法。

::: code-group

```vue [组合式]:line-numbers {}
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
<button @tap="listRef?.scrollToIndex(100)">跳转到第100项</button>
<button @tap="listRef?.scrollToOffset(5000)">跳转到偏移量5000</button>

<script lang="ts" setup>
import { ref } from 'vue'
const listRef = ref()
const scrollToIdx = ref(0)
</script>
```

```vue [选项式]:line-numbers {}
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
<button @tap="$refs.listRef.scrollToIndex(100)">跳转到第100项</button>
<button @tap="$refs.listRef.scrollToOffset(5000)">跳转到偏移量5000</button>

<script>
export default {
  data() {
    return {}
  }
}
</script>
```

:::

## 加载更多

- 通过 `lowerThreshold` 设置触发加载更多的距离阈值（px），默认为 `50`。
- 滚动到底部触发 `onScrollToLower` 事件。

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

## 插槽用法

- `header`：列表头部插槽。
- `footer`：列表尾部插槽。
- `item`：列表项插槽，暴露 `item`、`index`、`activeIndex`。
- `empty`：自定义空状态。

```html:line-numbers {}
<see-virtual-list :list="list" :itemHeight="50" height="400px">
  <template #header>
    <view style="padding: 20rpx; font-weight: bold;">虚拟列表</view>
  </template>
  <template #item="{ item, index }">
    <view style="padding: 12rpx 24rpx;">{{ index }}. {{ item }}</view>
  </template>
  <template #footer>
    <view style="padding: 20rpx; text-align: center;">— 到底了 —</view>
  </template>
</see-virtual-list>
```

## 自定义滚动条

- 通过 `showScrollbar` 设置是否显示滚动条，默认为 `true`。

```html:line-numbers {}
<see-virtual-list :list="list" :itemHeight="50" :showScrollbar="false" height="400px">
  <template #item="{ item }">
    <view style="padding: 12rpx 24rpx;">{{ item }}</view>
  </template>
</see-virtual-list>
```

## API

### Props

| 参数名             | 说明                          | 类型               | 默认值      | 可选值               | 平台差异 |
| ------------------ | ----------------------------- | ------------------ | ----------- | -------------------- | -------- |
| list               | 数据列表                      | Array              | `[]`        | 任意数组             | -        |
| itemHeight         | 列表项高度（px），固定高度模式必填 | Number         | `44`        | 任意正数             | -        |
| height             | 可视区域高度                  | Number / String    | `'100%'`    | px 数值或 CSS 值     | -        |
| keyField           | 唯一标识字段名                | String             | `''`        | 任意字符串           | -        |
| buffer             | 上下缓冲项目数                | Number             | `5`         | 任意正数             | -        |
| scrollTop          | 初始滚动偏移量（px），暂未生效，建议使用 `scrollIntoIndex` | Number | `0` | 任意非负数  | -        |
| scrollIntoIndex    | 跳转到指定索引                | Number             | `undefined` | 任意非负整数         | -        |
| horizontal         | 是否横向滚动                  | Boolean            | `false`     | `true`、`false`      | -        |
| itemGap            | 列表项间距（px）              | Number             | `0`         | 任意非负数           | -        |
| estimatedItemHeight | 预估列表项高度（px），动态高度模式使用 | Number    | `undefined` | 任意正数             | -        |
| dynamic            | 是否启用动态高度              | Boolean            | `false`     | `true`、`false`      | -        |
| lowerThreshold     | 触发加载更多的距离阈值（px）  | Number             | `50`        | 任意正数             | -        |
| upperThreshold     | 触发加载更少的距离阈值（px）  | Number             | `50`        | 任意正数             | -        |
| showScrollbar      | 是否显示滚动条                | Boolean            | `true`      | `true`、`false`      | -        |

### Events

| 事件名          | 说明                           | 回调参数                                      | 平台差异 |
| --------------- | ------------------------------ | --------------------------------------------- | -------- |
| onScroll        | 滚动时触发                     | `{ scrollLeft, scrollTop, deltaX, deltaY }`   | -        |
| onRangeChange   | 可视范围变更时触发             | `{ start, end, visibleStart, visibleEnd }`    | -        |
| onScrollToLower | 滚动到底部触发                 | 无                                            | -        |
| onScrollToUpper | 滚动到顶部触发                 | 无                                            | -        |
| onItemClick     | 点击列表项触发                 | `item: unknown, index: number`                | -        |

### Slots

| 插槽名 | 说明           | 作用域数据                           |
| ------ | -------------- | ------------------------------------ |
| header | 列表头部       | 无                                   |
| footer | 列表尾部       | 无                                   |
| item   | 列表项内容     | `{ item, index, activeIndex }`（activeIndex 为可视区域起始索引） |
| empty  | 自定义空状态   | 无                                   |

### Methods

通过 `ref` 获取组件实例后调用。

| 方法名       | 说明                   | 参数                                  |
| ------------ | ---------------------- | ------------------------------------- |
| scrollToIndex | 滚动到指定索引        | `index: number, animated?: boolean`   |
| scrollToOffset | 滚动到指定偏移量      | `offset: number, animated?: boolean`  |
| reset        | 重置滚动位置           | 无                                    |
