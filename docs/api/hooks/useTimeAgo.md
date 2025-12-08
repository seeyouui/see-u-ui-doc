---
layout: doc
outline: deep
title: 时间距今
titleTemplate: SeeYouUI - 时间距今
description: SeeYouUI 组件库 时间距今（多久之前）
iframeSrc: /pages/index/index
---

# 时间距今（useTimeAgo）

> `useTimeAgo` 是一个用于显示“多久之前”的 Vue 组合式函数，同时也提供其非响应式方法 `formatTimeAgo`。
>
> 它可以处理：秒前、分钟前、小时前、天前、周前、月前、年前等常见时间差格式。
>
> > 此 API 源码：[GitHub](https://github.com/seeyouui/see-u-ui/blob/main/uni_modules/see-u-ui/utils/hooks/useTimeAgo/index.ts)

## 使用方式

::: code-group

```vue [响应式：useTimeAgo]
<template>
  <p>发布时间：{{ ago }}</p>
</template>

<script setup>
import { ref } from "vue";
import { useTimeAgo } from "see-u-ui";

const publishedAt = ref("2025-01-01 12:00:00");

// 自动每 30 秒刷新一次
const ago = useTimeAgo(publishedAt);
</script>
```

```ts [函数式：formatTimeAgo]
import { formatTimeAgo } from "see-u-ui";

formatTimeAgo("2025-01-01 12:00:00");
// 返回：例如 "3天前"
```

:::

## 输出规则

`formatTimeAgo` 会根据当前时间与目标时间的差值，输出对应中文格式：

| 差值范围        | 输出示例          |
| --------------- | ----------------- |
| < 60 秒         | `10秒前`          |
| < 1 小时        | `5分钟前`         |
| < 24 小时       | `3小时前`         |
| < 7 天          | `2天前`           |
| < 30 天         | `1周前`           |
| < 365 天        | `2月前`           |
| ≥ 365 天        | `1年前`           |
| 未来时间 / 无效 | `刚刚` 或空字符串 |

## API

### `useTimeAgo(date, updateInterval?)`

**响应式版本：会自动刷新计算结果**

| 参数           | 类型                                 | 默认值  | 说明                   |
| -------------- | ------------------------------------ | ------- | ---------------------- |
| date           | `MaybeRef<string \| number \| Date>` | —       | 目标时间（支持响应式） |
| updateInterval | `number`                             | `30000` | 自动刷新间隔（毫秒）   |

**返回：** `ComputedRef<string>`

> 当时间变化、`date` 变化、或达到刷新间隔时自动更新。

---

### `formatTimeAgo(date)`

**非响应式版本**

| 参数 | 类型                       | 默认值 | 说明     |
| ---- | -------------------------- | ------ | -------- |
| date | `string \| number \| Date` | —      | 输入日期 |

**返回：** `string`
