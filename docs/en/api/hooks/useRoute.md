---
layout: doc
outline: deep
title: useRoute
titleTemplate: SeeYouUI - useRoute
description: SeeYouUI component library useRoute Hook
iframeSrc: /pages/index/index
---

# Route Management（useRoute）

Cross-platform routing unified wrapper with automatic params encoding.

## Basic Usage

```typescript
import { useRoute } from '@/uni_modules/see-u-ui/utils/hooks/useRoute'

const {
  navigateTo,
  redirectTo,
  switchTab,
  reLaunch,
  navigateBack,
  currentRoute,
  getQuery
} = useRoute()
```

## API

### Returns

| Property/Method | Type | Description |
|-----------------|------|-------------|
| navigateTo | (options: RouteOptions) => Promise&lt;void&gt; | Navigate to new page (push) |
| redirectTo | (options: RouteOptions) => Promise&lt;void&gt; | Redirect to new page (replace) |
| switchTab | (options: RouteOptions) => Promise&lt;void&gt; | Switch tab page |
| reLaunch | (options: RouteOptions) => Promise&lt;void&gt; | Close all pages and open new page |
| navigateBack | (delta?: number) => Promise&lt;void&gt; | Go back, default delta=1 |
| currentRoute | Ref&lt;{ path: string; params: Record&lt;string, any&gt; }&gt; | Current route info |
| getQuery | &lt;T = Record&lt;string, string&gt;&gt;() =&gt; T | Get current page params |

### RouteOptions

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| url | string | Yes | Target page path |
| params | Record&lt;string, any&gt; | No | Route params, auto encoded |
| events | Record&lt;string, Function&gt; | No | Page communication events |
| animationType | string | No | Page animation type (APP only) |

### animationType Values

| Value | Description |
|-------|-------------|
| auto | Auto select animation |
| none | No animation |
| slide-in-right | Slide in from right |
| slide-in-left | Slide in from left |
| fade-in | Fade in |
| zoom-out | Zoom out |
| zoom-fade-out | Zoom fade out |
| pop-out | Pop out |

## Examples

### Basic Navigation

```typescript
const { navigateTo } = useRoute()

await navigateTo({ url: '/pages/detail/index' })
```

### Navigate with Params

```typescript
const { navigateTo } = useRoute()

// Params are automatically encodeURIComponent(JSON.stringify(params))
await navigateTo({
  url: '/pages/detail/index',
  params: { id: '123', name: 'test' }
})

// Get params in target page
const { getQuery } = useRoute()
const params = getQuery<{ id: string; name: string }>()
console.log(params.id) // '123'
```

### Go Back

```typescript
const { navigateBack } = useRoute()

// Go back 1 page
await navigateBack()

// Go back 2 pages
await navigateBack(2)
```

### Watch Current Route

```typescript
const { currentRoute } = useRoute()

console.log(currentRoute.value.path)
console.log(currentRoute.value.params)
```

## Platform Differences

| Platform | Implementation |
|----------|----------------|
| H5 | vue-router (conditional compilation) |
| Mini Program | uni.navigateTo / uni.redirectTo etc. |
| APP | uni.navigateTo / uni.redirectTo etc. |
