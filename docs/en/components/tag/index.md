---
layout: doc
outline: deep
title: Tag
titleTemplate: SeeYouUI - Tag
description: SeeYouUI component library seeTag component
iframeSrc: /pages/seeTag/index
---

# Tag

> A tag component for marking and categorizing. Supports multiple theme types, display styles, and closable functionality.

## Platform Compatibility

| App (vue) | App (nvue) | H5  | Mini Program |
| ---------- | ----------- | --- | ------------ |
| √          | √           | √   | √            |

## Basic Usage

- Use `type` to set the tag type. Default is `default`.

```html:line-numbers {}
<see-tag>Default</see-tag>
<see-tag type="primary">Primary</see-tag>
<see-tag type="success">Success</see-tag>
<see-tag type="warning">Warning</see-tag>
<see-tag type="danger">Danger</see-tag>
<see-tag type="info">Info</see-tag>
```

## Theme Effects

- Use `effect` to set the tag style. Supports `dark` (filled), `light` (light background), and `plain` (outlined). Default is `light`.

```html:line-numbers {}
<see-tag type="primary" effect="dark">Dark</see-tag>
<see-tag type="primary" effect="light">Light</see-tag>
<see-tag type="primary" effect="plain">Plain</see-tag>
```

## Sizes

- Use `size` to set the tag size. Supports `large`, `default`, and `small`.

```html:line-numbers {}
<see-tag type="primary" size="large">Large</see-tag>
<see-tag type="primary">Default</see-tag>
<see-tag type="primary" size="small">Small</see-tag>
```

## Round Tags

- Set `round` to `true` for a pill-shaped tag.

```html:line-numbers {}
<see-tag type="primary" round>Round</see-tag>
<see-tag type="success" round effect="dark">Round</see-tag>
```

## Closable Tags

- Set `closable` to `true` to show a close button.
- Triggers `onClose` event when closed.

```html:line-numbers {}
<see-tag type="primary" closable @on-close="handleClose">Tag</see-tag>
```

## Mark Style

- Set `mark` to `true` for a tag with straight left edge and rounded right edge.

```html:line-numbers {}
<see-tag type="primary" mark>Mark</see-tag>
<see-tag type="success" mark effect="dark">Mark</see-tag>
```

## Border (Hit)

- Set `hit` to `true` to display the tag border.

```html:line-numbers {}
<see-tag type="primary" hit>Hit</see-tag>
<see-tag type="primary" hit effect="plain">Hit</see-tag>
```

## Disabled State

- Set `isDisabled` to `true` to disable the tag. Click events will not fire.

```html:line-numbers {}
<see-tag type="primary" is-disabled>Disabled</see-tag>
<see-tag type="primary" closable is-disabled>Disabled Closable</see-tag>
```

## Custom Colors

- Use `color` to set a custom color (overrides type color).
- Use `bgColor`, `textColor`, `borderColor` for fine-grained control.

```html:line-numbers {}
<see-tag color="#7232dd">Custom</see-tag>
<see-tag color="#7232dd" effect="dark">Custom Dark</see-tag>
<see-tag bg-color="#fdf0ff" text-color="#7232dd" border-color="#e8d0f8">Fully Custom</see-tag>
```

::: warning Notice
Custom colors are hardcoded values and will not adapt to dark/light theme changes.
:::

## Props

| Property | Description | Type | Default | Options |
|----------|-------------|------|---------|---------|
| type | Tag type | String | `'default'` | `'default'` `'primary'` `'success'` `'warning'` `'danger'` `'info'` |
| size | Tag size | String | `'default'` | `'small'` `'default'` `'large'` |
| effect | Display effect | String | `'light'` | `'dark'` `'light'` `'plain'` |
| closable | Whether closable | Boolean | `false` | - |
| round | Whether round | Boolean | `false` | - |
| color | Custom color | String | `''` | - |
| bgColor | Custom background color | String | `''` | - |
| textColor | Custom text color | String | `''` | - |
| borderColor | Custom border color | String | `''` | - |
| isDisabled | Whether disabled | Boolean | `false` | - |
| mark | Whether mark style | Boolean | `false` | - |
| hit | Whether show border | Boolean | `false` | - |

## Events

| Event | Description | Parameters |
|-------|-------------|------------|
| onClick | Fires when tag is clicked | `event: Event` |
| onClose | Fires when close button is clicked | `event: Event` |

## Slots

| Slot | Description |
|------|-------------|
| default | Tag content |
