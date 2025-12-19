---
layout: doc
outline: deep
title: Quick Start
titleTemplate: SeeYouUI - Quick Start
description: SeeYouUI Component Library Quick Start
iframeSrc: /pages/index/index
---

# Quick Start

## How to Use

After configuring via NPM, you can use the components directly in your pages without having to manually import them.

::: code-group

```vue [Composition]
<template>
  <view class="container">
    <see-button :title="title" />
  </view>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const title = ref("Default Button");
</script>
```

```vue [Options]
<template>
  <view class="container">
    <see-button :title="title" />
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Default Button",
    };
  },
};
</script>
```

:::

> **_:rocket: You have completed the quick start and can now begin using the SeeYouUI component library._**
