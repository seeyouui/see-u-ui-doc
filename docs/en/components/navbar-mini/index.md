---
layout: doc
outline: deep
title: NavbarMini Mini Navigation Bar
titleTemplate: SeeYouUI - NavbarMini Mini Navigation Bar
description: SeeYouUI component library seeNavbarMini mini navigation bar component
---

# NavbarMini Mini Navigation Bar

A simplified navigation bar for sub-pages/popups, with only back + title + right action area. Shorter than Navbar (default 64rpx).

## Basic Usage

```vue
<template>
  <see-navbar-mini title="Sub-page Title" @on-back="onBack" />
</template>
```

## No Back Button

```vue
<template>
  <see-navbar-mini title="Popup Title" :is-show-back="false" />
</template>
```

## Right Slot

```vue
<template>
  <see-navbar-mini title="Details">
    <template #right>
      <text>Save</text>
    </template>
  </see-navbar-mini>
</template>
```

## Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| title | string | `''` | Navigation bar title |
| isShowBack | boolean | `true` | Whether to show back button |
| height | string | `''` | Custom height |
| bgColor | string | `''` | Custom background color |

## Events

| Event | Parameters | Description |
|-------|-----------|-------------|
| onBack | - | Back button click |

## Slots

| Slot Name | Description |
|-----------|-------------|
| left | Left side slot |
| center | Center slot (overrides title) |
| right | Right side slot |
