---
layout: doc
outline: deep
title: Tabbar Bottom Navigation Bar
titleTemplate: SeeYouUI - Tabbar Bottom Navigation Bar
description: SeeYouUI component library seeTabbar bottom navigation bar component
iframeSrc: /pages/seeTabbar/index
---

# Tabbar Bottom Navigation Bar

Bottom main navigation bar. Supports 2-5 tab switching, center raised button, Badge/Dot badges, route mode, and safe area adaptation.

## Basic Usage

```vue
<template>
  <see-tabbar v-model="activeTab" :tabs="tabs" />
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('home')
const tabs = [
  { name: 'home', text: 'Home', icon: '🏠' },
  { name: 'category', text: 'Category', icon: '📂' },
  { name: 'cart', text: 'Cart', icon: '🛒' },
  { name: 'mine', text: 'Profile', icon: '👤' }
]
</script>
```

## Badge/Dot

```vue
<template>
  <see-tabbar v-model="activeTab" :tabs="tabs" />
</template>

<script setup>
const tabs = [
  { name: 'home', text: 'Home', icon: '🏠' },
  { name: 'msg', text: 'Messages', icon: '💬', badge: 99 },
  { name: 'cart', text: 'Cart', icon: '🛒', dot: true }
]
</script>
```

## Center Raised Button

```vue
<template>
  <see-tabbar v-model="activeTab" :tabs="tabs" @on-center-click="onCenterClick" />
</template>

<script setup>
const tabs = [
  { name: 'home', text: 'Home', icon: '🏠' },
  { name: 'publish', text: 'Publish', icon: '➕', isCenter: true, centerIcon: '✚' },
  { name: 'mine', text: 'Profile', icon: '👤' }
]

const onCenterClick = () => {
  uni.navigateTo({ url: '/pages/publish/index' })
}
</script>
```

## TabbarItem

| Property | Type | Description |
|----------|------|-------------|
| name | string \| number | Unique identifier |
| text | string | Display text |
| icon | string | Icon name |
| activeIcon | string | Icon name when active |
| badge | string \| number | Badge content |
| dot | boolean | Whether to show red dot |
| isDisabled | boolean | Whether disabled |
| url | string | Page path in route mode |
| isCenter | boolean | Whether it's a center raised button |
| centerIcon | string | Center button icon |

## Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| modelValue | string \| number | `''` | Currently active tab name |
| tabs | TabbarItem[] | `[]` | Tab list |
| isFixed | boolean | `true` | Whether fixed at bottom |
| isFrosted | boolean | `false` | Whether to enable frosted glass effect |
| zIndex | number | `990` | z-index |
| safeAreaInsetBottom | boolean | `true` | Whether to adapt to bottom safe area |
| activeColor | string | `''` | Color when active |
| inactiveColor | string | `''` | Color when inactive |
| bgColor | string | `''` | Custom background color |
| border | boolean | `true` | Whether to show top border |
| route | boolean | `false` | Whether in route mode |
| placeholder | boolean | `true` | Whether to generate placeholder when fixed |

## Events

| Event | Parameters | Description |
|-------|-----------|-------------|
| onChange | name, index | Tab switch |
| onClick | name, index | Tab click (before switch) |
| onCenterClick | - | Center button click |
| update:modelValue | value | v-model update |

## Expose

| Method | Parameters | Description |
|--------|-----------|-------------|
| switchTab | name | Switch tab |
| setBadge | name, badge | Set badge |
| clearBadge | name | Clear badge |
