---
layout: doc
outline: deep
title: useTeleport
titleTemplate: SeeYouUI - useTeleport
description: SeeYouUI useTeleport Hook
iframeSrc: /pages/index/index
---

# useTeleport

> Cross-platform teleport abstraction hook. Bridges Vue `<Teleport>` (H5) and `position: fixed` (mini-programs/App).

## Usage

```ts
import { useTeleport } from 'see-u-ui'

const { isTeleported, targetSelector, isSupported } = useTeleport()
// H5: isTeleported=true, targetSelector='body'
// MP: isTeleported=false, fallback to fixed positioning
```

## API

### `useTeleport(options?)`

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| options.isEnabled | `MaybeRef<boolean>` | `true` | Enable teleport |
| options.to | `string` | `'body'` | Target selector |

**Returns:**

| Property | Type | Description |
|----------|------|-------------|
| isTeleported | `ComputedRef<boolean>` | Should use teleport |
| targetSelector | `ComputedRef<string>` | Target selector |
| isSupported | `boolean` | Platform supports native Teleport |
