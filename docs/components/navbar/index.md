---
layout: doc
outline: deep
title: Navbar 自定义导航栏
titleTemplate: SeeYouUI - Navbar 自定义导航栏
description: SeeYouUI 组件库 seeNavbar 自定义导航栏组件
---

# Navbar 自定义导航栏

页面顶部自定义导航栏，替代 uni-app 原生导航栏。支持返回按钮、标题居中、搜索栏嵌入、毛玻璃效果、安全区适配。

## 基础用法

```vue
<template>
  <see-navbar title="页面标题" @on-back="onBack" />
</template>
```

## 搜索模式

```vue
<template>
  <see-navbar :is-search="true" search-placeholder="搜索商品" @on-search="onSearch" />
</template>
```

## 毛玻璃效果

```vue
<template>
  <see-navbar title="毛玻璃" :is-frosted="true" />
</template>
```

## 自定义插槽

```vue
<template>
  <see-navbar>
    <template #left>
      <text>返回</text>
    </template>
    <template #center>
      <text>自定义标题</text>
    </template>
    <template #right>
      <text>设置</text>
    </template>
  </see-navbar>
</template>
```

## 自定义颜色

```vue
<template>
  <see-navbar title="蓝色主题" bg-color="#3ca7ff" title-color="#ffffff" />
</template>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| title | string | `''` | 导航栏标题 |
| isFixed | boolean | `true` | 是否固定在顶部 |
| isShowLeft | boolean | `true` | 是否显示左侧区域 |
| isShowRight | boolean | `true` | 是否显示右侧区域 |
| leftText | string | `''` | 左侧文字 |
| leftArrow | boolean | `true` | 左侧是否显示箭头 |
| rightText | string | `''` | 右侧文字 |
| rightIcon | string | `''` | 右侧图标名称 |
| isSearch | boolean | `false` | 是否为搜索模式 |
| searchPlaceholder | string | `'搜索'` | 搜索栏占位文字 |
| isFrosted | boolean | `false` | 是否启用毛玻璃效果 |
| zIndex | number | `990` | 层级 |
| safeAreaInsetTop | boolean | `true` | 是否适配顶部安全区 |
| bgColor | string | `''` | 自定义背景色 |
| titleColor | string | `''` | 自定义标题颜色 |
| border | boolean | `true` | 是否显示底部边框 |
| placeholder | boolean | `true` | fixed 定位时是否生成占位元素 |

## Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| onLeftClick | - | 左侧按钮点击 |
| onRightClick | index: number | 右侧按钮点击 |
| onSearch | query: string | 搜索触发 |
| onBack | - | 返回按钮点击 |

## Slots

| 插槽名 | 说明 |
|--------|------|
| left | 左侧插槽 |
| center | 中间插槽（覆盖 title） |
| right | 右侧插槽 |

## Expose

| 方法名 | 参数 | 说明 |
|--------|------|------|
| setTitle | title: string | 动态设置标题 |
| setRightText | text: string | 动态设置右侧文字 |
| show | - | 显示导航栏 |
| hide | - | 隐藏导航栏 |

## FAQ

### 如何在滚动时改变导航栏透明度？

可以通过监听页面滚动事件，动态修改 `bgColor` 属性来实现滚动透明度渐变效果。

### 毛玻璃效果在哪些平台生效？

毛玻璃效果使用 CSS `backdrop-filter: blur()`，在 H5 和 APP 端生效，小程序端可能不支持。
