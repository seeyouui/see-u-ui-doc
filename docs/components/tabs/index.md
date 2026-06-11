---
layout: doc
outline: deep
title: Tabs 标签页
titleTemplate: SeeYouUI - Tabs 标签页
description: SeeYouUI 组件库 seeTabs 标签页组件
iframeSrc: /pages/seeTabs/index
---

# Tabs 标签页

页面内多视图切换系统。支持滑动切换、懒加载、KeepAlive 缓存、Sticky 吸顶、动态增删标签。

## 基础用法

```vue
<template>
  <see-tabs v-model="activeTab">
    <see-tab-pane name="tab1" title="标签一">内容一</see-tab-pane>
    <see-tab-pane name="tab2" title="标签二">内容二</see-tab-pane>
  </see-tabs>
</template>

<script setup>
import { ref } from 'vue'
const activeTab = ref('tab1')
</script>
```

## Card 样式

```vue
<template>
  <see-tabs v-model="activeTab" type="card">
    <see-tab-pane name="tab1" title="选项一">内容一</see-tab-pane>
    <see-tab-pane name="tab2" title="选项二">内容二</see-tab-pane>
  </see-tabs>
</template>
```

## Badge/Dot 徽标

```vue
<template>
  <see-tabs v-model="activeTab">
    <see-tab-pane name="tab1" title="消息" :badge="99">消息列表</see-tab-pane>
    <see-tab-pane name="tab2" title="通知" :dot="true">通知列表</see-tab-pane>
  </see-tabs>
</template>
```

## 可关闭标签

```vue
<template>
  <see-tabs v-model="activeTab" @on-close="onClose">
    <see-tab-pane name="tab1" title="标签一" :closable="true">内容一</see-tab-pane>
    <see-tab-pane name="tab2" title="标签二" :closable="true">内容二</see-tab-pane>
  </see-tabs>
</template>
```

## Props (Tabs)

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| modelValue | string \| number | `''` | 当前选中的 tab name |
| type | `'line' \| 'card' \| 'button'` | `'line'` | 标签样式类型 |
| isSwipeable | boolean | `false` | 是否可滑动切换 |
| isSticky | boolean | `false` | 是否使用粘性布局 |
| stickyOffsetTop | number | `0` | 粘性布局偏移量 |
| duration | number | `300` | 切换动画时长（ms） |
| isScrollable | boolean | `false` | 标签栏是否可滚动 |
| lineWidth | number | `40` | 指示器宽度（px） |
| lineHeight | number | `4` | 指示器高度（px） |
| activeColor | string | `''` | 选中时颜色 |
| inactiveColor | string | `''` | 未选中时颜色 |
| bgColor | string | `''` | 自定义背景色 |
| isLazy | boolean | `false` | 是否启用懒加载。开启后，标签内容仅在首次激活时挂载 |
| isCache | boolean | `false` | 是否启用缓存（类 KeepAlive）。开启后，标签首次激活后保持挂载，切换时用 `v-show` 控制显示，再次切回不会丢失状态 |

## Props (TabPane)

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| name | string \| number | - | 唯一标识（必填） |
| title | string | `''` | 标签标题 |
| isDisabled | boolean | `false` | 是否禁用 |
| badge | string \| number | - | 徽标内容 |
| dot | boolean | `false` | 是否显示红点 |
| icon | string | `''` | 图标名称 |
| closable | boolean | `false` | 是否可关闭 |

## Events (Tabs)

| 事件名 | 参数 | 说明 |
|--------|------|------|
| onChange | name, title | tab 切换 |
| onClick | name, title | tab 点击（切换前触发） |
| onClose | name | 标签关闭 |
| update:modelValue | value | v-model 更新 |

## Expose (Tabs)

| 方法名 | 参数 | 说明 |
|--------|------|------|
| switchTo | name | 切换到指定 tab |
| addTab | tab | 添加标签 |
| removeTab | name | 移除标签 |
| scrollToTab | name | 滚动到指定标签 |

## Slots (TabPane)

| 插槽名 | 说明 |
|--------|------|
| default | 标签内容 |
