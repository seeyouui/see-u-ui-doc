---
layout: doc
outline: deep
title: ScrollList 横向滚动列表
titleTemplate: SeeYouUI - ScrollList 横向滚动列表
description: SeeYouUI 组件库 SeeScrollList 横向滚动列表组件
iframeSrc: /pages/seeScrollList/index
---

# ScrollList 横向滚动列表

> 横向滚动列表组件，支持自定义列表项、尾部插槽、加载更多等功能。

## 平台兼容性

|  App(vue)  |  App(nvue)  |  H5  |  小程序  |
| :-------: | :--------: | :--: | :-----: |
|     ✅    |     ✅     |  ✅  |   ✅    |

## 代码示例

### 基础用法

传入 `list` 数据，默认横向滚动。

```html:line-numbers {}
<see-scroll-list :list="['推荐', '热门', '关注', '科技', '财经']">
  <template #item="{ item }">
    <view class="scroll-item">
      <text>{{ item }}</text>
    </view>
  </template>
</see-scroll-list>
```

### 自定义项样式

通过 `item-gap` 设置间距，配合自定义插槽实现个性化样式。

```html:line-numbers {}
<see-scroll-list :list="list" item-gap="24rpx">
  <template #item="{ item }">
    <view class="custom-item" :style="{ backgroundColor: item.color }">
      <text>{{ item.label }}</text>
    </view>
  </template>
</see-scroll-list>
```

### 尾部插槽

使用 `footer` 插槽添加"更多"按钮等尾部内容。

```html:line-numbers {}
<see-scroll-list :list="list">
  <template #item="{ item }">
    <view class="scroll-item">
      <text>{{ item }}</text>
    </view>
  </template>
  <template #footer>
    <view @click="handleMore">
      <text>更多 ></text>
    </view>
  </template>
</see-scroll-list>
```

### 加载更多

监听 `onScrollToLower` 事件实现加载更多功能。

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
  // 加载更多数据
  list.value.push(...newData)
}
```

### 纵向滚动

设置 `scroll-x` 为 `false`、`scroll-y` 为 `true` 可切换为纵向滚动模式。

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

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| list | 数据列表 | `any[]` | `[]` | - |
| scroll-x | 是否允许横向滚动 | `boolean` | `true` | true / false |
| scroll-y | 是否允许纵向滚动 | `boolean` | `false` | true / false |
| show-scrollbar | 是否显示滚动条 | `boolean` | `false` | true / false |
| is-animated | 是否启用滚动动画 | `boolean` | `true` | true / false |
| padding-left | 左侧间距 | `string` | `'30rpx'` | - |
| item-gap | 列表项间距 | `string` | `'20rpx'` | - |
| load-more-threshold | 触发加载更多的距离阈值（px） | `number` | `50` | - |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| onScroll | 滚动时触发 | `event: any` - 滚动事件对象 |
| onScrollToLower | 滚动到底部/右侧时触发 | - |
| onScrollToUpper | 滚动到顶部/左侧时触发 | - |

### Slots

| 插槽名 | 说明 | 插槽参数 |
|--------|------|----------|
| item | 自定义列表项内容 | `{ item: any, index: number }` |
| footer | 尾部内容 | - |
