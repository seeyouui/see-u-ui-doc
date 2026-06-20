---
layout: doc
outline: deep
title: SkeletonGlobal 全局骨架屏
titleTemplate: SeeYouUI - SkeletonGlobal 全局骨架屏
description: SeeYouUI 组件库 全局骨架屏 useSkeletonGlobal / SeeSkeletonGlobal
iframeSrc: /pages/seeSkeleton/index
---

# SkeletonGlobal 全局骨架屏

> 全局骨架屏用于在整页数据加载时，覆盖当前页面显示骨架占位，加载完成后一键关闭。与 [Skeleton 骨架屏](/components/skeleton/index.md) 不同，全局骨架屏不需要在每个内容节点上手动包裹组件，而是通过 `useSkeletonGlobal` Hook 命令式控制整页占位。

## 平台兼容性

|  App(vue)  |  App(nvue)  |  H5  |  小程序  |
| :-------: | :--------: | :--: | :-----: |
|     ✅    |     ✅     |  ✅  |   ✅    |

## 工作原理

全局骨架屏在不同平台采用不同策略，但对外的 API 完全一致：

- **H5 / App**：调用 `show()` 时遍历页面容器内的所有**叶子节点**（实际内容元素），为其添加 `see-skeleton-loading` class，把文字、边框变透明并涂成骨架灰、叠加流光动画；`hide()` 时移除 class 还原。
- **小程序**：通过 `uni.$emit` 事件通知页面根部的 `see-config` 组件，由其渲染一层全屏骨架遮罩。

::: tip 零跳动原则
H5 / App 端的骨架样式**只改纯视觉属性**（背景色、文字透明、边框透明），绝不改变 `display` / `width` / `height` 等盒模型属性。因此元素尺寸天然守恒，开关骨架时页面**不会发生高度跳动或重排**，无需任何尺寸测量。
:::

::: warning 小程序端前置条件
小程序端依赖 `see-config` 渲染遮罩，请确保页面根节点已使用 `<see-config>` 包裹（这也是组件库主题/暗黑模式的统一要求）。
:::

## 代码示例

### 基础用法

通过 `useSkeletonGlobal` 拿到 `show` / `hide`，在请求开始时显示、结束时隐藏。

```vue
<template>
  <see-config>
    <!-- 你的页面内容 -->
    <view class="content">...</view>
  </see-config>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app'
import { useSkeletonGlobal } from '@/uni_modules/see-u-ui'

const { show, hide } = useSkeletonGlobal()

onLoad(async () => {
  show()
  try {
    await fetchData()
  } finally {
    hide()
  }
})
</script>
```

### 定时自动隐藏

模拟固定加载时长的场景，`show()` 后用 `setTimeout` 自动 `hide()`。

```js
const { show, hide } = useSkeletonGlobal()

const load = () => {
  show()
  setTimeout(() => hide(), 3000)
}
```

### Key 标识（多来源）

当一个页面有多个数据源并发加载时，可为每个来源传入唯一 `key`。相同 `key` 的 `show()` 不会重复累加，`hide()` 时需传入对应的 `key`。只有所有来源都 `hide()` 后骨架屏才真正关闭。

```js
const { show, hide } = useSkeletonGlobal()

// 列表与详情两个数据源
show('list')
show('detail')

// 各自加载完成后分别关闭
fetchList().finally(() => hide('list'))
fetchDetail().finally(() => hide('detail'))
```

### 多次 show 累加计数

不带 `key` 的 `show()` 会让内部计数器 `count` 累加；必须调用相同次数的 `hide()` 才会关闭。`visible` 和 `count` 是只读响应式值，可用于调试或界面提示。

```js
const { show, hide, visible, count } = useSkeletonGlobal()

show() // count = 1
show() // count = 2
hide() // count = 1，仍然可见
hide() // count = 0，关闭
```

### 强制关闭

异常场景下（如请求超时、来源计数错乱）可用 `forceHide()` 重置计数器并清空所有 `key`，无论之前 `show` 了几次都会立即关闭。

```js
const { forceHide } = useSkeletonGlobal()

forceHide()
```

### 使用预制骨架组件（SeeSkeletonGlobal）

如果你想要一套开箱即用的全屏骨架视觉（状态栏 + 导航栏 + 卡片列表），可直接放置 `<see-skeleton-global>` 组件。它内部消费同一个 `useSkeletonGlobal` 的 `visible` 状态，因此同样由 `show()` / `hide()` 控制显隐。

```vue
<template>
  <see-config>
    <!-- 预制全屏骨架，由 useSkeletonGlobal 的 show/hide 控制 -->
    <see-skeleton-global />

    <view class="content">...</view>
  </see-config>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app'
import { useSkeletonGlobal } from '@/uni_modules/see-u-ui'

const { show, hide } = useSkeletonGlobal()

onLoad(() => {
  show()
  setTimeout(() => hide(), 2000)
})
</script>
```

也可以通过默认插槽自定义骨架内容：

```html
<see-skeleton-global>
  <view class="my-skeleton">自定义骨架布局</view>
</see-skeleton-global>
```

::: tip 两种用法如何选择
- **`useSkeletonGlobal` Hook（推荐，自适应）**：无需预先设计骨架结构，自动根据页面真实 DOM 生成占位，最贴合实际布局。
- **`SeeSkeletonGlobal` 组件**：提供固定的全屏卡片骨架视觉，适合需要统一、可预期占位样式的场景，或在小程序端作为遮罩内容。
:::

## API

### useSkeletonGlobal()

`useSkeletonGlobal()` 不接收参数，返回全局共享的骨架屏控制对象。多处调用拿到的是同一份全局状态。

**返回值：**

| 属性/方法 | 类型 | 说明 |
|-----------|------|------|
| show | `(key?: string) => void` | 显示全局骨架屏。传入 `key` 时相同来源不会重复累加 |
| hide | `(key?: string) => void` | 隐藏全局骨架屏。传入 `key` 时需与 `show` 对应；所有计数归零后才真正关闭 |
| forceHide | `() => void` | 强制关闭：重置计数器为 0 并清空所有 `key`，立即隐藏 |
| visible | `ComputedRef<boolean>` | 骨架屏是否可见（只读） |
| count | `ComputedRef<number>` | 当前活跃的骨架屏数量（只读） |

### SeeSkeletonGlobal Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| rows | 骨架屏行数 | `number` | `5` | 正整数 |
| animate | 是否启用骨架动画 | `boolean` | `true` | true / false |
| bg-color | 骨架背景色 | `string` | `'var(--see-skeleton-bg, #f0f0f0)'` | CSS 颜色值 |
| highlight-color | 动画高亮色 | `string` | `'var(--see-skeleton-highlight, #e0e0e0)'` | CSS 颜色值 |

### SeeSkeletonGlobal Slots

| 名称 | 说明 |
|------|------|
| default | 自定义骨架内容；不传时渲染内置的状态栏 + 导航栏 + 卡片列表骨架 |

### see-config Slots（小程序端）

| 名称 | 说明 |
|------|------|
| skeleton | 小程序端全局骨架屏遮罩内容；不传时渲染默认全屏占位块 |
