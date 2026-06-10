---
layout: doc
outline: deep
title: Waterfall 瀑布流
titleTemplate: SeeYouUI - Waterfall 瀑布流
description: SeeYouUI 组件库 SeeWaterfall 瀑布流组件
iframeSrc: /pages/seeWaterfall/index
---

# Waterfall 瀑布流

> 瀑布流/砌体布局组件，支持多列不均匀排列，常用于图片列表、商品展示等场景。

## 平台兼容性

|  App(vue)  |  App(nvue)  |  H5  |  小程序  |
| :-------: | :--------: | :--: | :-----: |
|     ✅    |     ✅     |  ✅  |   ✅    |

## 代码示例

### 基础用法

```html:line-numbers {}
<see-waterfall :list="list" />
```

### 3 列瀑布流

```html:line-numbers {}
<see-waterfall :list="list" :columns="3" gap="12rpx" />
```

### 自定义项插槽

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

### 加载更多

```html:line-numbers {}
<see-waterfall :list="list" has-more @on-load-more="onLoadMore" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| list | 瀑布流数据 | `WaterfallItem[]` | `[]` | - |
| columns | 列数 | `number` | `2` | - |
| gap | 列间距 | `string` | `'16rpx'` | CSS 间距值 |
| hasMore | 是否显示加载更多 | `boolean` | `false` | true / false |

### WaterfallItem

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| id | 唯一标识 | `string \| number` | - |
| image | 图片 URL | `string` | - |
| title | 标题 | `string` | - |
| height | 高度（用于预分配空间，单位 rpx） | `number` | - |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| onLoadMore | 加载更多时触发 | - |
| onClick | 点击项时触发 | `(item: WaterfallItem, index: number)` |

### Slots

| 名称 | 说明 | 作用域 |
|------|------|--------|
| item | 自定义每一项 | `{ item, index }` |
| footer | 自定义底部加载区域 | - |
