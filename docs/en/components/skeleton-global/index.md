---
layout: doc
outline: deep
title: SkeletonGlobal
titleTemplate: SeeYouUI - SkeletonGlobal Component
description: SeeYouUI component library global skeleton useSkeletonGlobal / SeeSkeletonGlobal
iframeSrc: /pages/seeSkeleton/index
---

# SkeletonGlobal

> The global skeleton covers the current page with placeholders while full-page data is loading, and can be dismissed with a single call once loading finishes. Unlike the [Skeleton](/en/components/skeleton/index.md) component, the global skeleton does not require wrapping every content node by hand — instead you control whole-page placeholders imperatively via the `useSkeletonGlobal` Hook.

## Platform Compatibility

|  App(vue)  |  App(nvue)  |  H5  |  Mini Program  |
| :-------: | :--------: | :--: | :-----------: |
|     ✅    |     ✅     |  ✅  |      ✅       |

## How It Works

The global skeleton uses different strategies per platform but exposes an identical API:

- **H5 / App**: On `show()`, it traverses all **leaf nodes** (actual content elements) inside the page container and adds the `see-skeleton-loading` class — turning text and borders transparent, painting them skeleton-gray, and overlaying a shimmer animation. `hide()` removes the class to restore the original content.
- **Mini Program**: It emits a `uni.$emit` event to the root `see-config` component, which renders a full-screen skeleton mask.

::: tip Zero-jitter principle
On H5 / App, the skeleton styles only touch **pure visual properties** (background color, transparent text, transparent border) and never change box-model properties like `display` / `width` / `height`. Element sizes are therefore preserved, so toggling the skeleton causes **no layout jump or reflow** — and no size measurement is needed.
:::

::: warning Mini Program prerequisite
On Mini Program the mask is rendered by `see-config`, so make sure your page root is wrapped with `<see-config>` (which is also required for the library's unified theming / dark mode).
:::

## Code Examples

### Basic Usage

Get `show` / `hide` from `useSkeletonGlobal`, show it when the request starts and hide it when it ends.

```vue
<template>
  <see-config>
    <!-- Your page content -->
    <view class="content">...</view>
  </see-config>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app'
import { useSkeletonGlobal } from '@/uni_modules/see-u-ui'

const { show, hide } = useSkeletonGlobal()

onLoad(async () => {
  show()
  try {
    await fetchData()
  } finally {
    hide()
  }
})
</script>
```

### Auto Hide with Timer

For a fixed loading duration, call `show()` then auto `hide()` with `setTimeout`.

```js
const { show, hide } = useSkeletonGlobal()

const load = () => {
  show()
  setTimeout(() => hide(), 3000)
}
```

### Key Identifier (Multiple Sources)

When a page loads multiple data sources concurrently, pass a unique `key` for each source. A `show()` with the same `key` will not stack again, and `hide()` must be called with the matching `key`. The skeleton is only dismissed once all sources have called `hide()`.

```js
const { show, hide } = useSkeletonGlobal()

// Two data sources: list and detail
show('list')
show('detail')

// Hide each one after its load completes
fetchList().finally(() => hide('list'))
fetchDetail().finally(() => hide('detail'))
```

### Stacked Counting with Multiple show()

A `show()` without a `key` increments the internal `count`; an equal number of `hide()` calls is required to close it. `visible` and `count` are read-only reactive values, useful for debugging or UI hints.

```js
const { show, hide, visible, count } = useSkeletonGlobal()

show() // count = 1
show() // count = 2
hide() // count = 1, still visible
hide() // count = 0, closed
```

### Force Hide

In exceptional cases (request timeout, miscounted sources), use `forceHide()` to reset the counter and clear all keys — it dismisses the skeleton immediately regardless of how many times `show` was called.

```js
const { forceHide } = useSkeletonGlobal()

forceHide()
```

### Using the Prebuilt Skeleton Component (SeeSkeletonGlobal)

If you want an out-of-the-box full-screen skeleton (status bar + navbar + card list), drop in the `<see-skeleton-global>` component. It consumes the same `visible` state from `useSkeletonGlobal`, so it is also controlled by `show()` / `hide()`.

```vue
<template>
  <see-config>
    <!-- Prebuilt full-screen skeleton, controlled by useSkeletonGlobal show/hide -->
    <see-skeleton-global />

    <view class="content">...</view>
  </see-config>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app'
import { useSkeletonGlobal } from '@/uni_modules/see-u-ui'

const { show, hide } = useSkeletonGlobal()

onLoad(() => {
  show()
  setTimeout(() => hide(), 2000)
})
</script>
```

You can also customize the skeleton content via the default slot:

```html
<see-skeleton-global>
  <view class="my-skeleton">Custom skeleton layout</view>
</see-skeleton-global>
```

::: tip Which approach to choose
- **`useSkeletonGlobal` Hook (recommended, adaptive)**: No need to pre-design a skeleton structure — placeholders are generated from the page's real DOM, matching the actual layout closely.
- **`SeeSkeletonGlobal` component**: Provides a fixed full-screen card skeleton, ideal when you want a uniform, predictable placeholder, or as mask content on Mini Program.
:::

## API

### useSkeletonGlobal()

`useSkeletonGlobal()` takes no arguments and returns a globally shared skeleton control object. Calls from different places share the same global state.

**Return value:**

| Property/Method | Type | Description |
|-----------------|------|-------------|
| show | `(key?: string) => void` | Show the global skeleton. With a `key`, the same source won't stack again |
| hide | `(key?: string) => void` | Hide the global skeleton. With a `key`, it must match the `show`; only closes after the count reaches zero |
| forceHide | `() => void` | Force close: reset the counter to 0, clear all keys, and hide immediately |
| visible | `ComputedRef<boolean>` | Whether the skeleton is visible (read-only) |
| count | `ComputedRef<number>` | Number of currently active skeleton sources (read-only) |

### SeeSkeletonGlobal Props

| Prop | Description | Type | Default | Options |
|------|-------------|------|---------|---------|
| rows | Number of skeleton rows | `number` | `5` | Positive integer |
| animate | Whether to enable the skeleton animation | `boolean` | `true` | true / false |
| bg-color | Skeleton background color | `string` | `'var(--see-skeleton-bg, #f0f0f0)'` | CSS color value |
| highlight-color | Animation highlight color | `string` | `'var(--see-skeleton-highlight, #e0e0e0)'` | CSS color value |

### SeeSkeletonGlobal Slots

| Name | Description |
|------|-------------|
| default | Custom skeleton content; when omitted, renders the built-in status bar + navbar + card list skeleton |

### see-config Slots (Mini Program)

| Name | Description |
|------|-------------|
| skeleton | Global skeleton mask content on Mini Program; when omitted, renders a default full-screen placeholder block |
