---
layout: doc
outline: deep
title: Currency Formatting
titleTemplate: SeeYouUI - Currency Formatting
description: SeeYouUI Component Library Currency Formatting
iframeSrc: /pages/index/index
---

# Currency Formatting (useCurrencyFormat)

> `useCurrencyFormat` is a Vue composable function used for currency formatting, and it also provides a non-reactive version called `formatCurrency`.
>
> It helps you easily handle common scenarios such as: amount display, decimal truncation, thousand separators, and currency symbols.
>
> > API Source Code: [GitHub](https://github.com/seeyouui/see-u-ui/blob/main/uni_modules/see-u-ui/utils/hooks/useCurrencyFormat/index.ts)

## Usage

::: code-group

```vue [Reactive: useCurrencyFormat]
<template>
  {{ display }}
</template>

<script setup>
import { ref } from "vue";
import { useCurrencyFormat } from "see-u-ui";

const amount = ref(1234.567);

const display = useCurrencyFormat(amount, {
  decimals: 2,
  symbol: "¥",
  useGrouping: true,
});
</script>

```

```vue [Functional: formatCurrency]
<script setup>
import { formatCurrency } from "see-u-ui";

formatCurrency(1234.567, {
  decimals: 2,
  symbol: "¥",
});
</script>

```

:::

## Formatting Rules

| Feature | Description |
| --- | --- |
| **Decimal Truncation** | No rounding, e.g., `12.349 → 12.34` |
| **Auto Zero-padding** | When decimals=2 is specified, it fills two decimal places. |
| **Thousand Separator** | e.g., `1,234,567.89` |
| **Symbol Prefix** | Supports `¥`, `$`, `€`, or any custom string. |
| **Placeholder Handling** | Displays `-` when the value is `null / undefined / ''`. |

## API

### `useCurrencyFormat(amount, options?)`

**Reactive Currency Formatting**

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| amount | `MaybeRefOrGetter<number | string>` | — | Input amount (supports reactivity) |
| options | `CurrencyOptions` | `{}` | Configuration options |
| options.decimals | `number` | `2` | Decimal places to keep (truncation) |
| options.symbol | `string` | `''` | Currency symbol |
| options.placeholder | `string` | `'-'` | Display content for invalid amounts |
| options.useGrouping | `boolean` | `true` | Whether to enable thousand separators |

**Returns:** `ComputedRef<string>`

---

### `formatCurrency(value, options?)`

**Non-reactive Currency Formatting Utility Function**

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| value | `number | string` | — | Input amount |
| options | `CurrencyOptions` | `{}` | Formatting configuration |

**Returns:** `string`