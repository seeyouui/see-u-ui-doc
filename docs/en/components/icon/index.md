---
layout: doc
outline: deep
title: Icon
titleTemplate: SeeYouUI - Icon
description: SeeYouUI component library seeIcon component
iframeSrc: /pages/seeIcon/index
---

# Icon

> Icon component supporting Unicode characters, image paths, custom icon fonts, and more.

## Platform Compatibility

| App (vue) | App (nvue) | H5  | Mini Program |
| ---------- | ----------- | --- | ------------ |
| √          | √           | √   | √            |

## Basic Usage

- Use `name` to set the icon name, supporting Unicode characters.

```html:line-numbers {}
<see-icon name="✓" />
<see-icon name="★" />
<see-icon name="♥" />
```

## Icon Size

- Use `size` to set the icon size. Supports numbers (unit: px) and strings (e.g., `48rpx`).

```html:line-numbers {}
<see-icon name="✓" :size="16" />
<see-icon name="✓" :size="24" />
<see-icon name="✓" :size="32" />
<see-icon name="✓" size="48rpx" />
```

## Icon Color

- Use `color` to set the icon color.

```html:line-numbers {}
<see-icon name="✓" color="#3ca7ff" />
<see-icon name="✓" color="#ff6b6b" />
<see-icon name="✓" color="#37d497" />
```

## Image Icon

- Pass an image path to `name`. Supports local and network paths.

```html:line-numbers {}
<see-icon name="/static/logo.png" :size="32" />
<see-icon name="https://example.com/icon.png" :size="32" />
```

::: tip Notice
Image paths must start with `/`, `http`, `data:`, or contain an image extension (.png, .jpg, .gif, etc.).
:::

## Custom Icon Font

- Use `customPrefix` to set custom icon class prefix.
- Use `customFont` to set custom icon font name.

```html:line-numbers {}
<see-icon name="home" custom-prefix="my-icon" />
<see-icon name="home" custom-prefix="my-icon" custom-font="MyIconFont" />
```

## Image Icon Alt

- Use `alt` to set alternative text for image icons, useful for accessibility.

```html:line-numbers {}
<see-icon name="/static/logo.png" alt="Logo" />
```

## Custom Content

- Use the default slot to customize icon content.

```html:line-numbers {}
<see-icon>
  <text class="custom-icon">Custom Icon</text>
</see-icon>
```

## Click Event

- Listen to icon click events via `onClick`.

```html:line-numbers {}
<see-icon name="✓" @on-click="handleClick" />
```

## Props

| Property | Description | Type | Default | Options |
|----------|-------------|------|---------|---------|
| name | Icon name or image path | String | `''` | - |
| size | Icon size | String \| Number | - | - |
| color | Icon color | String | `''` | - |
| customPrefix | Custom icon class prefix | String | `''` | - |
| customFont | Custom icon font name | String | `''` | - |
| alt | Image icon alt text | String | `''` | - |

## Events

| Event | Description | Parameters |
|-------|-------------|------------|
| onClick | Fires when icon is clicked | - |

## Slots

| Slot | Description |
|------|-------------|
| default | Custom icon content |

## Methods

| Method | Description | Parameters |
|--------|-------------|------------|
| getName | Get icon name | - |
| isImage | Check if it's an image icon | - |
