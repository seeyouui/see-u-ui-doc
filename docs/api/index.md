---
layout: doc
outline: deep
title: API介绍
titleTemplate: SeeYouUI - API介绍
description: SeeYouUI 组件库 API介绍
iframeSrc: /pages/index/index
---

# API 介绍

> SeeYouUI 在提供组件的同时，也顺便暴露了一些实用 API，帮助你减少代码编写量。

## 使用

> SeeYouUI 提供的所有 API（包括组件与工具函数）均已从包的根入口（index.ts）统一导出
>
> > :rocket: 你可以按需引入并享受 `Tree-Shaking` 带来的极致性能。

```vue
<template>{{ formatted }}</template>

<script setup>
import { ref } from "vue";
import { useDateFormat } from "see-u-ui";

const date = ref("2025-01-01");
const formatted = useDateFormat(date, "YYYY/MM/DD");
</script>
```
