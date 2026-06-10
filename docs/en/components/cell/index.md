---
layout: doc
outline: deep
title: SeeCell
titleTemplate: SeeYouUI - SeeCell
description: SeeYouUI component library SeeCell component
iframeSrc: /pages/seeCell/index
---

# SeeCell

A list item component for displaying information, settings, and form fields.

## Platform Support

| Platform | Support |
| --- | --- |
| H5 | ✅ |
| WeChat Mini Program | ✅ |
| Alipay Mini Program | ✅ |
| APP | ✅ |

## Basic Usage

```vue
<template>
  <see-cell title="Title" value="Content" />
  <see-cell title="Title" value="With Arrow" is-link />
</template>
```

## With Icon

Use the `icon` prop to set the left icon, and `iconSize` to customize its size.

```vue
<template>
  <see-cell title="Settings" icon="⚙️" value="Enter" is-link />
  <see-cell title="Messages" icon="🔔" value="99+" />
</template>
```

## With Description

Use the `label` prop to display a description below the title.

```vue
<template>
  <see-cell title="Title" label="This is a description" value="Content" />
  <see-cell title="Title" label="Longer descriptions will wrap automatically" is-link />
</template>
```

## Required Field

Set `isRequired` to display a required asterisk for form fields.

```vue
<template>
  <see-cell title="Username" value="Please enter" is-required />
  <see-cell title="Phone" value="Please enter" is-required is-link />
</template>
```

## Navigation

Set the `to` prop to navigate to a page on click.

```vue
<template>
  <see-cell title="Profile" is-link to="/pages/index/index" />
</template>
```

## Custom Slots

The component provides `icon`, `title`, `value`, and `right` slots for custom content.

```vue
<template>
  <see-cell title="Avatar">
    <template #right>
      <image src="/static/avatar.png" class="avatar" />
    </template>
  </see-cell>

  <see-cell>
    <template #title>
      <text style="color: #07c160; font-weight: bold;">Custom Title</text>
    </template>
    <template #value>
      <text style="color: #ee0a24;">Custom Value</text>
    </template>
  </see-cell>
</template>
```

## No Border

Set `border` to `false` to hide the bottom border.

```vue
<template>
  <see-cell title="No Border" value="Content" :border="false" />
</template>
```

## Center Aligned

Set `isCenter` to center the content.

```vue
<template>
  <see-cell title="Centered" value="Content" is-center />
</template>
```

## Click Effect

Use the `clickEffect` prop to control the click feedback style. Supports `background`, `opacity`, and `none`.

```vue
<template>
  <see-cell title="Background Effect" click-effect="background" />
  <see-cell title="Opacity Effect" click-effect="opacity" />
  <see-cell title="No Effect" click-effect="none" />
</template>
```

## Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title text | `string` | - |
| value | Value / right-side text | `string` | - |
| label | Description / subtitle | `string` | - |
| icon | Left icon name | `string` | - |
| iconSize | Icon size | `string` | `'40rpx'` |
| isLink | Show right arrow | `boolean` | `false` |
| to | Navigation URL (auto-navigate on click) | `string` | - |
| isRequired | Show required asterisk | `boolean` | `false` |
| border | Show bottom border | `boolean` | `true` |
| height | Cell height | `string` | - |
| clickEffect | Click feedback style | `'background' \| 'opacity' \| 'none'` | `'background'` |
| titleWidth | Title width | `string` | `'auto'` |
| isCenter | Center align content | `boolean` | `false` |

## Events

| Event | Description | Parameters |
| --- | --- | --- |
| onClick | Emitted when the cell is clicked | - |

## Slots

| Slot | Description |
| --- | --- |
| icon | Custom left icon |
| title | Custom title content |
| value | Custom value content |
| right | Custom right area |
