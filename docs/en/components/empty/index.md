---
layout: doc
outline: deep
title: Empty State
titleTemplate: SeeYouUI - Empty State
description: SeeYouUI component library seeEmpty state component
iframeSrc: /pages/seeEmpty/index
---

# Empty State

Unified empty state visual language component. Supports 5 built-in types + custom mode.

## Built-in Types

| Type | Default Title | Default Description | Scene |
|------|--------------|-------------------|-------|
| default | No data | - | General empty data |
| search | No results found | Try modifying search conditions | Search no results |
| network | Network error | Check network connection | Offline |
| error | Page error | Please try again later | System error |
| 404 | Page not found | The page you visited does not exist | 404 |

## Basic Usage

```vue
<template>
  <see-empty type="default" />
</template>
```

## Search No Results

```vue
<template>
  <see-empty type="search" />
</template>
```

## With Action Button

```vue
<template>
  <see-empty type="network" :is-show-action="true" action-text="Retry" @on-action="onRetry" />
</template>
```

## Custom Title and Description

```vue
<template>
  <see-empty title="Cart is empty" description="Go pick your favorite items" />
</template>
```

## Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| type | `'default' \| 'search' \| 'network' \| 'error' \| '404' \| 'custom'` | `'default'` | Empty state type |
| image | string | `''` | Custom image |
| title | string | `''` | Title text |
| description | string | `''` | Description text |
| actionText | string | `''` | Action button text |
| isShowAction | boolean | `false` | Whether to show action button |
| imageSize | string | `'320rpx'` | Image size |

## Events

| Event | Parameters | Description |
|-------|-----------|-------------|
| onAction | - | Action button click |

## Slots

| Slot Name | Description |
|-----------|-------------|
| image | Custom image |
| action | Custom action button |
