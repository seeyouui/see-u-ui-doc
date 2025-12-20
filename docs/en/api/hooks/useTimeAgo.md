---
layout: doc
outline: deep
title: Time Ago
titleTemplate: SeeYouUI - Time Ago
description: SeeYouUI Component Library Time Ago (How long ago)
iframeSrc: /pages/index/index
---

# Time Ago (useTimeAgo)

> `useTimeAgo` is a Vue composable function used to display "how long ago", while also providing its non-reactive method `formatTimeAgo`.
>
> It can handle common time difference formats such as: seconds ago, minutes ago, hours ago, days ago, weeks ago, months ago, and years ago.
>
> > API Source Code: [GitHub](https://github.com/seeyouui/see-u-ui/blob/main/uni_modules/see-u-ui/utils/hooks/useTimeAgo/index.ts)

## Usage

::: code-group

```vue [Reactive: useTimeAgo]
<template>
  <p>Published at: {{ ago }}</p>
</template>

<script setup>
import { ref } from "vue";
import { useTimeAgo } from "see-u-ui";

const publishedAt = ref("2025-01-01 12:00:00");

// Refreshes automatically every 30 seconds
const ago = useTimeAgo(publishedAt);
</script>

```

```ts [Functional: formatTimeAgo]
import { formatTimeAgo } from "see-u-ui";

formatTimeAgo("2025-01-01 12:00:00");
// Returns: e.g., "3 days ago"

```

:::

## Output Rules

`formatTimeAgo` outputs the corresponding format based on the difference between the current time and the target time:

| Difference Range | Output Example |
| --- | --- |
| < 60 seconds | `10 seconds ago` |
| < 1 hour | `5 minutes ago` |
| < 24 hours | `3 hours ago` |
| < 7 days | `2 days ago` |
| < 30 days | `1 week ago` |
| < 365 days | `2 months ago` |
| ≥ 365 days | `1 year ago` |
| Future / Invalid | `Just now` or empty str |

## API

### `useTimeAgo(date, updateInterval?)`

**Reactive version: Automatically refreshes the calculation results**

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| date | `MaybeRef<string | number | Date>` | — | Target time (supports reactivity) |
| updateInterval | `number` | `30000` | Auto-refresh interval (milliseconds) |

**Returns:** `ComputedRef<string>`

> Updates automatically when the time changes, the `date` changes, or the refresh interval is reached.

---

### `formatTimeAgo(date)`

**Non-reactive version**

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| date | `string | number | Date` | — | Input date |

**Returns:** `string`