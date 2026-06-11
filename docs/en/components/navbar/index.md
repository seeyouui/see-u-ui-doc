---
layout: doc
outline: deep
title: Navbar Custom Navigation Bar
titleTemplate: SeeYouUI - Navbar Custom Navigation Bar
description: SeeYouUI component library seeNavbar custom navigation bar component
---

# Navbar Custom Navigation Bar

A custom navigation bar at the top of the page, replacing the uni-app native navigation bar. Supports back button, centered title, search bar embedding, frosted glass effect, and safe area adaptation.

## Basic Usage

```vue
<template>
  <see-navbar title="Page Title" @on-back="onBack" />
</template>
```

## Search Mode

```vue
<template>
  <see-navbar :is-search="true" search-placeholder="Search products" @on-search="onSearch" />
</template>
```

## Frosted Glass Effect

```vue
<template>
  <see-navbar title="Frosted" :is-frosted="true" />
</template>
```

## Custom Slots

```vue
<template>
  <see-navbar>
    <template #left>
      <text>Back</text>
    </template>
    <template #center>
      <text>Custom Title</text>
    </template>
    <template #right>
      <text>Settings</text>
    </template>
  </see-navbar>
</template>
```

## Custom Colors

```vue
<template>
  <see-navbar title="Blue Theme" bg-color="#3ca7ff" title-color="#ffffff" />
</template>
```

## Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| title | string | `''` | Navigation bar title |
| isFixed | boolean | `true` | Whether to fix at the top |
| isShowLeft | boolean | `true` | Whether to show left area |
| isShowRight | boolean | `true` | Whether to show right area |
| leftText | string | `''` | Left side text |
| leftArrow | boolean | `true` | Whether to show arrow on the left |
| rightText | string | `''` | Right side text |
| rightIcon | string | `''` | Right icon name |
| isSearch | boolean | `false` | Whether in search mode |
| searchPlaceholder | string | `'Search'` | Search bar placeholder text |
| isFrosted | boolean | `false` | Whether to enable frosted glass effect |
| zIndex | number | `990` | z-index |
| safeAreaInsetTop | boolean | `true` | Whether to adapt to top safe area |
| bgColor | string | `''` | Custom background color |
| titleColor | string | `''` | Custom title color |
| border | boolean | `true` | Whether to show bottom border |
| placeholder | boolean | `true` | Whether to generate placeholder element when fixed |

## Events

| Event | Parameters | Description |
|-------|-----------|-------------|
| onLeftClick | - | Left button click |
| onRightClick | index: number | Right button click |
| onSearch | query: string | Search trigger |
| onBack | - | Back button click |

## Slots

| Slot Name | Description |
|-----------|-------------|
| left | Left side slot |
| center | Center slot (overrides title) |
| right | Right side slot |

## Expose

| Method | Parameters | Description |
|--------|-----------|-------------|
| setTitle | title: string | Dynamically set title |
| setRightText | text: string | Dynamically set right text |
| show | - | Show navigation bar |
| hide | - | Hide navigation bar |

## FAQ

### How to change navigation bar opacity on scroll?

You can listen to page scroll events and dynamically modify the `bgColor` property to achieve a scroll opacity gradient effect.

### On which platforms does the frosted glass effect work?

The frosted glass effect uses CSS `backdrop-filter: blur()`, which works on H5 and APP platforms, but may not be supported on mini-program platforms.
