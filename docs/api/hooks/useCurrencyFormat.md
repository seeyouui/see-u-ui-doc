---
layout: doc
outline: deep
title: 余额格式化
titleTemplate: SeeYouUI - 余额格式化
description: SeeYouUI 组件库 余额格式化
iframeSrc: /pages/index/index
---

# 余额格式化（useCurrencyFormat）

> `useCurrencyFormat` 是一个用于金额格式化的 Vue 组合式函数，同时也提供其非响应式版本 `formatCurrency`。
>
> 它能帮助你轻松处理：金额展示、小数位截断、千分位符号、货币符号等常见场景。
>
> > 此 API 源码：[GitHub](https://github.com/seeyouui/see-u-ui/blob/main/uni_modules/see-u-ui/utils/hooks/useCurrencyFormat/index.ts)

## 使用方式

::: code-group

```vue [响应式：useCurrencyFormat]
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

```vue [函数式：formatCurrency]
<script setup>
import { formatCurrency } from "see-u-ui";

formatCurrency(1234.567, {
  decimals: 2,
  symbol: "¥",
});
</script>
```

:::

## 格式化规则

| 功能           | 说明                                    |
| -------------- | --------------------------------------- |
| **截断小数**   | 非四舍五入，例如 `12.349 → 12.34`       |
| **自动补零**   | 指定 decimals=2 时，会补齐两位小数      |
| **千分位**     | 例如：`1,234,567.89`                    |
| **符号前缀**   | 支持 `¥`、`$`、`€` 或任意自定义字符串   |
| **占位符处理** | 当值为 `null / undefined / ''` 显示 `-` |

## API

### `useCurrencyFormat(amount, options?)`

**响应式金额格式化**

| 参数                | 类型                                 | 默认值 | 说明                   |
| ------------------- | ------------------------------------ | ------ | ---------------------- |
| amount              | `MaybeRefOrGetter<number \| string>` | —      | 输入金额（支持响应式） |
| options             | `CurrencyOptions`                    | `{}`   | 配置项                 |
| options.decimals    | `number`                             | `2`    | 保留小数位（截断）     |
| options.symbol      | `string`                             | `''`   | 金额符号               |
| options.placeholder | `string`                             | `'-'`  | 无效金额时显示内容     |
| options.useGrouping | `boolean`                            | `true` | 是否启用千分位         |

**返回：** `ComputedRef<string>`

---

### `formatCurrency(value, options?)`

**非响应式金额格式化工具函数**

| 参数    | 类型               | 默认值 | 说明       |
| ------- | ------------------ | ------ | ---------- |
| value   | `number \| string` | —      | 输入金额   |
| options | `CurrencyOptions`  | `{}`   | 格式化配置 |

**返回：** `string`
