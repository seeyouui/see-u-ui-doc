---
layout: doc
outline: deep
title: Tabbar 底部导航栏
titleTemplate: SeeYouUI - Tabbar 底部导航栏
description: SeeYouUI 组件库 seeTabbar 底部导航栏组件
---

# Tabbar 底部导航栏

底部主导航栏。支持 2-5 标签切换、中央凸起按钮、Badge/Dot 徽标、路由模式、安全区适配。

## 基础用法

```vue
<template>
  <see-tabbar v-model="activeTab" :tabs="tabs" />
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('home')
const tabs = [
  { name: 'home', text: '首页', icon: '🏠' },
  { name: 'category', text: '分类', icon: '📂' },
  { name: 'cart', text: '购物车', icon: '🛒' },
  { name: 'mine', text: '我的', icon: '👤' }
]
</script>
```

## Badge/Dot 徽标

```vue
<template>
  <see-tabbar v-model="activeTab" :tabs="tabs" />
</template>

<script setup>
const tabs = [
  { name: 'home', text: '首页', icon: '🏠' },
  { name: 'msg', text: '消息', icon: '💬', badge: 99 },
  { name: 'cart', text: '购物车', icon: '🛒', dot: true }
]
</script>
```

## 中央凸起按钮

```vue
<template>
  <see-tabbar v-model="activeTab" :tabs="tabs" @on-center-click="onCenterClick" />
</template>

<script setup>
const tabs = [
  { name: 'home', text: '首页', icon: '🏠' },
  { name: 'publish', text: '发布', icon: '➕', isCenter: true, centerIcon: '✚' },
  { name: 'mine', text: '我的', icon: '👤' }
]

const onCenterClick = () => {
  uni.navigateTo({ url: '/pages/publish/index' })
}
</script>
```

## TabbarItem

| 属性 | 类型 | 说明 |
|------|------|------|
| name | string \| number | 唯一标识 |
| text | string | 显示文字 |
| icon | string | 图标名称 |
| activeIcon | string | 选中时图标名称 |
| badge | string \| number | 徽标内容 |
| dot | boolean | 是否显示红点 |
| isDisabled | boolean | 是否禁用 |
| url | string | 路由模式下的页面路径 |
| isCenter | boolean | 是否为中央凸起按钮 |
| centerIcon | string | 中央按钮图标 |

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| modelValue | string \| number | `''` | 当前选中的 tab name |
| tabs | TabbarItem[] | `[]` | tab 列表 |
| isFixed | boolean | `true` | 是否固定在底部 |
| isFrosted | boolean | `false` | 是否启用毛玻璃效果 |
| zIndex | number | `990` | 层级 |
| safeAreaInsetBottom | boolean | `true` | 是否适配底部安全区 |
| activeColor | string | `''` | 选中时颜色 |
| inactiveColor | string | `''` | 未选中时颜色 |
| bgColor | string | `''` | 自定义背景色 |
| border | boolean | `true` | 是否显示顶部边框 |
| route | boolean | `false` | 是否为路由模式 |
| placeholder | boolean | `true` | fixed 定位时是否生成占位元素 |

## Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| onChange | name, index | tab 切换 |
| onClick | name, index | tab 点击（切换前触发） |
| onCenterClick | - | 中央按钮点击 |
| update:modelValue | value | v-model 更新 |

## Expose

| 方法名 | 参数 | 说明 |
|--------|------|------|
| switchTab | name | 切换 tab |
| setBadge | name, badge | 设置徽标 |
| clearBadge | name | 清除徽标 |
