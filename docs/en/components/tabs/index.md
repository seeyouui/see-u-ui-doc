---
layout: doc
outline: deep
title: Tabs Tab Panel
titleTemplate: SeeYouUI - Tabs Tab Panel
description: SeeYouUI component library seeTabs tab panel component
---

# Tabs Tab Panel

An in-page multi-view switching system. Supports swipe switching, lazy loading, KeepAlive cache, Sticky positioning, and dynamic tab add/remove.

## Basic Usage

```vue
<template>
  <see-tabs v-model="activeTab">
    <see-tab-pane name="tab1" title="Tab One">Content One</see-tab-pane>
    <see-tab-pane name="tab2" title="Tab Two">Content Two</see-tab-pane>
  </see-tabs>
</template>

<script setup>
import { ref } from 'vue'
const activeTab = ref('tab1')
</script>
```

## Card Style

```vue
<template>
  <see-tabs v-model="activeTab" type="card">
    <see-tab-pane name="tab1" title="Option 1">Content One</see-tab-pane>
    <see-tab-pane name="tab2" title="Option 2">Content Two</see-tab-pane>
  </see-tabs>
</template>
```

## Badge/Dot

```vue
<template>
  <see-tabs v-model="activeTab">
    <see-tab-pane name="tab1" title="Messages" :badge="99">Message List</see-tab-pane>
    <see-tab-pane name="tab2" title="Notifications" :dot="true">Notification List</see-tab-pane>
  </see-tabs>
</template>
```

## Closable Tabs

```vue
<template>
  <see-tabs v-model="activeTab" @on-close="onClose">
    <see-tab-pane name="tab1" title="Tab One" :closable="true">Content One</see-tab-pane>
    <see-tab-pane name="tab2" title="Tab Two" :closable="true">Content Two</see-tab-pane>
  </see-tabs>
</template>
```

## Props (Tabs)

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| modelValue | string \| number | `''` | Currently active tab name |
| type | `'line' \| 'card' \| 'button'` | `'line'` | Tab style type |
| isSwipeable | boolean | `false` | Whether swipe switching is enabled |
| isSticky | boolean | `false` | Whether to use sticky positioning |
| stickyOffsetTop | number | `0` | Sticky offset top |
| duration | number | `300` | Switch animation duration (ms) |
| isScrollable | boolean | `false` | Whether tab bar is scrollable |
| lineWidth | number | `40` | Indicator width (px) |
| lineHeight | number | `4` | Indicator height (px) |
| activeColor | string | `''` | Color when active |
| inactiveColor | string | `''` | Color when inactive |
| bgColor | string | `''` | Custom background color |
| isLazy | boolean | `false` | Whether to enable lazy loading. When on, a pane's content is mounted only the first time it becomes active |
| isCache | boolean | `false` | Whether to enable cache (KeepAlive-like). When on, a pane stays mounted after first activation and uses `v-show` to toggle visibility, preserving its state across switches |

## Props (TabPane)

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| name | string \| number | - | Unique identifier (required) |
| title | string | `''` | Tab title |
| isDisabled | boolean | `false` | Whether disabled |
| badge | string \| number | - | Badge content |
| dot | boolean | `false` | Whether to show red dot |
| icon | string | `''` | Icon name |
| closable | boolean | `false` | Whether closable |

## Events (Tabs)

| Event | Parameters | Description |
|-------|-----------|-------------|
| onChange | name, title | Tab switch |
| onClick | name, title | Tab click (before switch) |
| onClose | name | Tab close |
| update:modelValue | value | v-model update |

## Expose (Tabs)

| Method | Parameters | Description |
|--------|-----------|-------------|
| switchTo | name | Switch to specified tab |
| addTab | tab | Add tab |
| removeTab | name | Remove tab |
| scrollToTab | name | Scroll to specified tab |

## Slots (TabPane)

| Slot Name | Description |
|-----------|-------------|
| default | Tab content |
