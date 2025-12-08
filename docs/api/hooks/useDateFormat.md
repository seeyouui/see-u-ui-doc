---
layout: doc
outline: deep
title: 日期格式化
titleTemplate: SeeYouUI - 日期格式化
description: SeeYouUI 组件库 日期格式化
iframeSrc: /pages/index/index
---

# 日期格式化（useDateFormat）

> `useDateFormat` 是一个用于日期格式化的 Vue 组合式函数，同时也提供非响应式方法 `formatDate`。
>
> 它帮助你轻松处理：时间戳解析、跨端兼容（如 iOS 日期解析）、格式化模板、星期显示等常见日期格式化需求。
>
> > 此 API 源码：[GitHub](https://github.com/seeyouui/see-u-ui/blob/main/uni_modules/see-u-ui/utils/hooks/useDateFormat/index.ts)

## 使用方式

::: code-group

```vue [响应式：useDateFormat]
<template>
  <p>当前时间：{{ formatted }}</p>
  <button @click="date = '2025-12-31 23:59:59'">修改日期</button>
</template>

<script setup>
import { ref } from "vue";
import { useDateFormat } from "see-u-ui";

const date = ref("2025-01-01 12:30:00");

// 响应式格式化（date 改变 → 自动更新）
const formatted = useDateFormat(date, "YYYY/MM/DD HH:mm:ss");
</script>
```

```ts [函数式：formatDate]
import { formatDate } from "see-u-ui";

formatDate("2025-01-01 12:00:00", "YYYY-MM-DD");
// 返回：2025-01-01
```

:::

## 格式化规则

| 语法      | 含义             | 示例        |
| --------- | ---------------- | ----------- |
| `YYYY`    | 四位年份         | 2025        |
| `YY`      | 两位年份         | 25          |
| `MM`      | 月（补零）       | 01–12       |
| `M`       | 月（不补零）     | 1–12        |
| `DD`      | 日（补零）       | 01–31       |
| `D`       | 日（不补零）     | 1–31        |
| `HH`      | 小时（24h）      | 00–23       |
| `hh`      | 小时（12h）      | 01–12       |
| `mm`      | 分钟             | 00–59       |
| `ss`      | 秒               | 00–59       |
| `S`/`SSS` | 毫秒（自动补零） | 0–999 → 000 |
| `W`       | 周（简写）       | 一、二...   |
| `WW`      | 周（周一）       | 周一、周二… |
| `WWW`     | 周（星期一）     | 星期一…     |

## API

### `useDateFormat(date, formatStr?, options?)`

**响应式日期格式化**

| 参数                | 类型                                 | 默认值                  | 说明                   |
| ------------------- | ------------------------------------ | ----------------------- | ---------------------- |
| date                | `MaybeRef<string \| number \| Date>` | —                       | 输入日期（支持响应式） |
| formatStr           | `MaybeRef<string>`                   | `"YYYY-MM-DD HH:mm:ss"` | 格式化模板             |
| options             | `DateFormatOptions`                  | `{ placeholder: '' }`   | 其他配置项             |
| options.placeholder | string                               | `''`                    | 日期无效时显示内容     |

**返回：** `ComputedRef<string>`

---

### `formatDate(date, formatStr?, options?)`

**非响应式格式化工具函数**

| 参数      | 类型                       | 默认值                  | 说明         |
| --------- | -------------------------- | ----------------------- | ------------ |
| date      | `string \| number \| Date` | —                       | 输入日期     |
| formatStr | `string`                   | `"YYYY-MM-DD HH:mm:ss"` | 格式化模板   |
| options   | `DateFormatOptions`        | `{ placeholder: '' }`   | 无效日期处理 |

**返回：** `string`
