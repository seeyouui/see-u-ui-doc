---
layout: doc
outline: deep
title: API Introduction
titleTemplate: SeeYouUI - API Introduction
description: SeeYouUI Component Library API Introduction
iframeSrc: /pages/index/index
---

# API Introduction

> While providing components, SeeYouUI also exposes some practical APIs to help you reduce the amount of code you write.

## Usage

> All APIs provided by SeeYouUI (including components and utility functions) are uniformly exported from the package's root entry (index.ts).
>
> > :rocket: You can import on demand and enjoy the extreme performance brought by `Tree-Shaking`.

```vue
<template>{{ formatted }}</template>

<script setup>
import { ref } from "vue";
import { useDateFormat } from "see-u-ui";

const date = ref("2025-01-01");
const formatted = useDateFormat(date, "YYYY/MM/DD");
</script>