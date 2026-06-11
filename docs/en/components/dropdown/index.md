---
layout: doc
outline: deep
title: Dropdown Menu
titleTemplate: SeeYouUI - Dropdown Menu
description: SeeYouUI component library seeDropdown dropdown menu component
---

# Dropdown Menu

A dropdown menu panel. Composed of three parts: the `see-dropdown` container, `see-dropdown-item` menu items, and `see-dropdown-panel` panels — linked by their `name` attribute.

> Usage note: Inside the `#panels` slot, you **must** wrap each panel with `see-dropdown-panel` and bind its `name` to the corresponding `see-dropdown-item`. The component automatically shows the panel matching the currently active item.

## Basic Usage

```vue
<template>
  <see-dropdown>
    <template #menu>
      <see-dropdown-item name="sort" title="Sort" />
      <see-dropdown-item name="filter" title="Filter" />
    </template>
    <template #panels>
      <see-dropdown-panel name="sort">
        <view>Sort panel content</view>
      </see-dropdown-panel>
      <see-dropdown-panel name="filter">
        <view>Filter panel content</view>
      </see-dropdown-panel>
    </template>
  </see-dropdown>
</template>
```

## Disabled Item

```vue
<template>
  <see-dropdown>
    <template #menu>
      <see-dropdown-item name="enabled" title="Enabled" />
      <see-dropdown-item name="disabled" title="Disabled" :is-disabled="true" />
    </template>
    <template #panels>
      <see-dropdown-panel name="enabled">
        <view>Enabled panel content</view>
      </see-dropdown-panel>
    </template>
  </see-dropdown>
</template>
```

## Without Overlay

```vue
<template>
  <see-dropdown :is-overlay="false">
    <template #menu>
      <see-dropdown-item name="sort" title="Sort" />
    </template>
    <template #panels>
      <see-dropdown-panel name="sort">
        <view>Sort panel content</view>
      </see-dropdown-panel>
    </template>
  </see-dropdown>
</template>
```

## Props (Dropdown)

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| modelValue | Record<string, any> | `{}` | Current selected values |
| zIndex | number | `100` | z-index |
| duration | number | `200` | Animation duration (ms) |
| isOverlay | boolean | `true` | Whether to show overlay |
| closeOnClickOverlay | boolean | `true` | Whether to close on overlay click |

## Props (DropdownItem)

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| name | string | - | Unique identifier (required), matches the `name` of a `see-dropdown-panel` |
| title | string | `''` | Display title |
| menuType | `'single' \| 'multiple' \| 'cascade' \| 'date' \| 'custom'` | `'single'` | Menu type |
| options | DropdownOption[] | `[]` | Option list |
| isDisabled | boolean | `false` | Whether disabled |
| placeholder | string | `'Select'` | Placeholder text |

## Props (DropdownPanel)

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| name | string | - | Unique identifier (required), matches the `name` of a `see-dropdown-item` |

## Events (Dropdown)

| Event | Parameters | Description |
|-------|-----------|-------------|
| onChange | value, name | Value change |
| onOpen | name | Panel open |
| onClose | name | Panel close |

## Expose (Dropdown)

| Method | Parameters | Description |
|--------|-----------|-------------|
| open | name | Open specified panel |
| close | name | Close specified panel |
| closeAll | - | Close all panels |
| reset | - | Reset all options |

## Slots

| Component | Slot | Description |
|-----------|------|-------------|
| `see-dropdown` | menu | Menu bar (place `see-dropdown-item`s here) |
| `see-dropdown` | panels | Panels container (place `see-dropdown-panel`s here) |
| `see-dropdown-panel` | default | Content of a single panel |
