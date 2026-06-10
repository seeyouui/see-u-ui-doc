---
layout: doc
outline: deep
title: Grid Layout
titleTemplate: SeeYouUI - Grid Layout
description: SeeYouUI component library SeeGrid layout component
iframeSrc: /pages/seeGrid/index
---

# Grid Layout

> Grid layout container, used with see-grid-item, supports custom columns, gap, border, etc.

## Platform Compatibility

|  App(vue)  |  App(nvue)  |  H5  |  Mini Program  |
| :-------: | :--------: | :--: | :------------: |
|     ✅    |     ✅     |  ✅  |       ✅       |

## Code Examples

### Basic Usage

Default 4-column grid.

```html:line-numbers {}
<see-grid>
  <see-grid-item text="Grid 1" icon="📱" />
  <see-grid-item text="Grid 2" icon="⭐" />
  <see-grid-item text="Grid 3" icon="📌" />
  <see-grid-item text="Grid 4" icon="🎨" />
</see-grid>
```

### Custom Columns

```html:line-numbers {}
<see-grid :columns="3">
  <see-grid-item text="Grid 1" icon="📱" />
  <see-grid-item text="Grid 2" icon="⭐" />
  <see-grid-item text="Grid 3" icon="📌" />
</see-grid>
```

### With Border and Gap

```html:line-numbers {}
<see-grid :columns="3" border gap="16rpx">
  <see-grid-item text="Grid 1" icon="📱" />
  <see-grid-item text="Grid 2" icon="⭐" />
  <see-grid-item text="Grid 3" icon="📌" />
</see-grid>
```

## API

### Grid Props

| Property | Description | Type | Default | Options |
|----------|-------------|------|---------|---------|
| columns | Number of columns | `number` | `4` | - |
| gap | Gap between items | `number \| string` | `0` | - |
| border | Whether to show border | `boolean` | `false` | true / false |
| border-color | Border color | `string` | `var(--see-border-color)` | CSS color value |
| is-square | Whether to display as square | `boolean` | `false` | true / false |
| is-clickable | Whether to enable click feedback | `boolean` | `false` | true / false |

### GridItem Props

| Property | Description | Type | Default | Options |
|----------|-------------|------|---------|---------|
| text | Text content | `string` | - | - |
| icon | Icon | `string` | - | - |
| icon-size | Icon size | `string` | `'48rpx'` | - |
| to | Navigation path | `string` | - | - |
| index | Custom index | `number` | `0` | - |

### GridItem Events

| Event | Description | Callback |
|-------|-------------|----------|
| onClick | Triggered on click | `index: number` |

### GridItem Slots

| Name | Description |
|------|-------------|
| default | Custom content |
| icon | Custom icon |
| text | Custom text |
