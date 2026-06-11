---
layout: doc
outline: deep
title: useCopy
titleTemplate: SeeYouUI - useCopy
description: SeeYouUI useCopy Hook
---

# useCopy

> Cross-platform clipboard copy hook. H5 uses Clipboard API with execCommand fallback; mini-programs use uni API.

## Usage

```ts
import { useCopy } from 'see-u-ui'

const { copy, isCopying, lastResult } = useCopy({
  showToast: true,
  toastMessage: 'Copied!'
})

const success = await copy('text to copy')
```

## API

### `useCopy(options?)`

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| options.showToast | `boolean` | `true` | Show success toast |
| options.toastMessage | `string` | `'复制成功'` | Toast message |
| options.toastDuration | `number` | `1500` | Toast duration (ms) |

**Returns:**

| Property | Type | Description |
|----------|------|-------------|
| copy | `(text: string) => Promise<boolean>` | Copy text to clipboard |
| isCopying | `Ref<boolean>` | Copying state (debounce) |
| lastResult | `Ref<boolean \| null>` | Last copy result |

::: tip Platform Differences
- **H5**: `navigator.clipboard.writeText()` (HTTPS required), fallback to `document.execCommand('copy')`
- **Mini-programs/App**: `uni.setClipboardData`
:::
