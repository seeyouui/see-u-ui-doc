---
layout: doc
outline: deep
title: List 列表
titleTemplate: SeeYouUI - List 列表
description: SeeYouUI 组件库 seeList 列表组件
iframeSrc: /pages/seeList/index
---

# List 列表

> 基础数据容器，统一处理普通列表、加载状态、空状态、错误状态、完成状态、分组和列表项插槽。大量数据场景请使用 [SeeVirtualList](/components/virtual-list/)。

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基本使用

- 通过 `list` 传入数据列表。
- 通过 `item` 插槽自定义列表项内容。

```html:line-numbers {}
<see-list :list="['苹果', '香蕉', '橙子']">
  <template #item="{ item }">
    <view style="padding: 20rpx;">{{ item }}</view>
  </template>
</see-list>
```

## 加载状态

- 设置 `loading` 为 `true` 显示加载中状态。
- 通过 `loadingText` 自定义加载提示文字。

```html:line-numbers {}
<see-list :list="[]" loading />
<see-list :list="[]" loading loadingText="拼命加载中..." />
```

## 空状态

- 当 `list` 为空且非加载、非错误状态时，自动显示空状态。
- 通过 `emptyText` 自定义空状态提示文字。

```html:line-numbers {}
<see-list :list="[]" emptyText="暂无订单" />
```

## 错误状态

- 设置 `error` 为 `true` 显示错误状态。
- 通过 `errorText` 自定义错误提示文字。
- 点击错误状态会触发 `onRetry` 事件。

```html:line-numbers {}
<see-list :list="[]" error errorText="网络异常，点击重试" />
```

## 加载更多

- 设置 `finished` 为 `true` 显示"没有更多了"提示。
- 通过 `finishedText` 自定义完成提示文字。
- 列表滚动到底部自动触发 `onLoadMore` 事件。

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

## 分割线与边框

- 设置 `divided` 为 `true` 显示分割线。
- 设置 `border` 为 `true` 显示边框。

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

## 水平滚动

- 设置 `direction` 为 `horizontal` 可实现水平列表。

```html:line-numbers {}
<see-list :list="list" direction="horizontal" itemGap="16rpx">
  <template #item="{ item }">
    <view style="width: 200rpx; padding: 20rpx; background: #f5f5f5;">{{ item }}</view>
  </template>
</see-list>
```

## 分组列表

- 通过 `groupBy` 设置分组字段名或分组函数。

```html:line-numbers {}
<!-- 按字段分组 -->
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

<!-- 自定义分组函数 -->
<see-list :list="list" :groupBy="(item) => item.age > 18 ? '成年' : '未成年'">
  <template #group="{ group }">
    <view style="padding: 16rpx 24rpx; background: #f5f5f5;">{{ group }}</view>
  </template>
  <template #item="{ item }">
    <view style="padding: 20rpx;">{{ item.name }}</view>
  </template>
</see-list>
```

## 插槽用法

- `header`：列表头部插槽。
- `footer`：列表尾部插槽。
- `item`：列表项插槽，暴露 `item` 和 `index`。
- `loading`：自定义加载状态。
- `empty`：自定义空状态。
- `error`：自定义错误状态。
- `finished`：自定义完成状态。

```html:line-numbers {}
<see-list :list="list">
  <template #header>
    <view style="padding: 20rpx; font-weight: bold;">列表标题</view>
  </template>
  <template #item="{ item, index }">
    <view style="padding: 20rpx;">{{ index }}. {{ item }}</view>
  </template>
  <template #footer>
    <view style="padding: 20rpx; text-align: center;">— 到底了 —</view>
  </template>
</see-list>
```

## 自定义样式

- 通过 `itemGap` 设置列表项间距。
- 通过 `padding` 设置内边距。

```html:line-numbers {}
<see-list :list="list" itemGap="16rpx" padding="24rpx">
  <template #item="{ item }">
    <view style="padding: 20rpx; background: #f5f5f5; border-radius: 8rpx;">{{ item }}</view>
  </template>
</see-list>
```

## API

### Props

| 参数名        | 说明                                    | 类型                                | 默认值    | 可选值                     | 平台差异 |
| ------------- | --------------------------------------- | ----------------------------------- | --------- | -------------------------- | -------- |
| list          | 数据列表                                | Array                               | `[]`      | 任意数组                   | -        |
| keyField      | 唯一标识字段名                          | String                              | `''`      | 任意字符串                 | -        |
| loading       | 是否加载中                              | Boolean                             | `false`   | `true`、`false`            | -        |
| finished      | 是否全部加载完成                        | Boolean                             | `false`   | `true`、`false`            | -        |
| error         | 是否加载出错                            | Boolean                             | `false`   | `true`、`false`            | -        |
| emptyText     | 空状态文字                              | String                              | `''`      | 任意字符串                 | -        |
| errorText     | 错误状态文字                            | String                              | `''`      | 任意字符串                 | -        |
| loadingText   | 加载中文字                              | String                              | `''`      | 任意字符串                 | -        |
| finishedText  | 加载完成文字                            | String                              | `''`      | 任意字符串                 | -        |
| immediateCheck | 是否立即检查加载更多（内容不足一屏时自动触发） | Boolean                             | `true`    | `true`、`false`            | -        |
| offset        | 触发加载更多的距离阈值（px）            | Number                              | `50`      | 任意正数                   | -        |
| direction     | 列表方向                                | `'vertical' \| 'horizontal'`        | `'vertical'` | `vertical`、`horizontal`   | -        |
| border        | 是否显示边框                            | Boolean                             | `false`   | `true`、`false`            | -        |
| divided       | 是否显示分割线                          | Boolean                             | `false`   | `true`、`false`            | -        |
| itemGap       | 列表项间距                              | String                              | `''`      | 任意 CSS 长度值            | -        |
| padding       | 内边距                                  | String                              | `''`      | 任意 CSS 长度值            | -        |
| groupBy       | 分组字段名或函数                        | String / Function                   | `undefined` | 字符串或 `(item, index) => string` | -        |

### Events

| 事件名      | 说明                     | 回调参数                       | 平台差异 |
| ----------- | ------------------------ | ------------------------------ | -------- |
| onLoadMore  | 滚动到底部触发加载更多   | 无                             | -        |
| onRefresh   | 滚动到顶部触发刷新       | 无                             | -        |
| onRetry     | 点击错误状态触发重试     | 无                             | -        |
| onClickItem | 点击列表项触发           | `item: unknown, index: number` | -        |

### Slots

| 插槽名  | 说明           | 作用域数据                       |
| ------- | -------------- | -------------------------------- |
| header  | 列表头部       | 无                               |
| footer  | 列表尾部       | 无                               |
| item    | 列表项内容     | `{ item, index }` 或 `{ item, index, group }`（分组时） |
| group   | 分组标题       | `{ group, count }`               |
| loading | 自定义加载状态 | 无                               |
| empty   | 自定义空状态   | 无                               |
| error   | 自定义错误状态 | 无                               |
| finished | 自定义完成状态 | 无                               |
