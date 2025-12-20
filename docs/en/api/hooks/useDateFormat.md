---
layout: doc
outline: deep
title: Date Formatting
titleTemplate: SeeYouUI - Date Formatting
description: SeeYouUI Component Library Date Formatting
iframeSrc: /pages/index/index
---

# Date Formatting (useDateFormat)

> `useDateFormat` is a Vue composable function for date formatting, and it also provides a non-reactive method `formatDate`.
>
> It helps you easily handle common date formatting needs such as: timestamp parsing, cross-platform compatibility (e.g., iOS date parsing), formatting templates, and weekday display.
>
> > API Source Code: [GitHub](https://github.com/seeyouui/see-u-ui/blob/main/uni_modules/see-u-ui/utils/hooks/useDateFormat/index.ts)

## Usage

::: code-group

```vue [Reactive: useDateFormat]
<template>
  <p>Current Time: {{ formatted }}</p>
  <button @click="date = '2025-12-31 23:59:59'">Modify Date</button>
</template>

<script setup>
import { ref } from "vue";
import { useDateFormat } from "see-u-ui";

const date = ref("2025-01-01 12:30:00");

// Reactive formatting (updates automatically when date changes)
const formatted = useDateFormat(date, "YYYY/MM/DD HH:mm:ss");
</script>

```

```ts [Functional: formatDate]
import { formatDate } from "see-u-ui";

formatDate("2025-01-01 12:00:00", "YYYY-MM-DD");
// Returns: 2025-01-01

```

:::

## Formatting Rules

| Syntax | Meaning | Example |
| --- | --- | --- |
| `YYYY` | 4-digit year | 2025 |
| `YY` | 2-digit year | 25 |
| `MM` | Month (zero-padded) | 01–12 |
| `M` | Month (not zero-padded) | 1–12 |
| `DD` | Day (zero-padded) | 01–31 |
| `D` | Day (not zero-padded) | 1–31 |
| `HH` | Hour (24h) | 00–23 |
| `hh` | Hour (12h) | 01–12 |
| `mm` | Minute | 00–59 |
| `ss` | Second | 00–59 |
| `S`/`SSS` | Millisecond (auto zero-padded) | 0–999 → 000 |
| `W` | Week (short) | Mon, Tue... |
| `WW` | Week (prefix) | Mon, Tue... |
| `WWW` | Week (full name) | Monday... |

## API

### `useDateFormat(date, formatStr?, options?)`

**Reactive Date Formatting**

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| date | `MaybeRef<string | number | Date>` | — | Input date (supports reactivity) |
| formatStr | `MaybeRef<string>` | `"YYYY-MM-DD HH:mm:ss"` | Formatting template |
| options | `DateFormatOptions` | `{ placeholder: '' }` | Other configuration options |
| options.placeholder | string | `''` | Content to display when date is invalid |

**Returns:** `ComputedRef<string>`

---

### `formatDate(date, formatStr?, options?)`

**Non-reactive Formatting Utility Function**

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| date | `string | number | Date` | — | Input date |
| formatStr | `string` | `"YYYY-MM-DD HH:mm:ss"` | Formatting template |
| options | `DateFormatOptions` | `{ placeholder: '' }` | Invalid date handling |

**Returns:** `string`