---
layout: doc
outline: deep
title: 快速上手
titleTemplate: SeeYouUI - 快速上手
description: SeeYouUI 组件库 快速上手
iframeSrc: /pages/index/index
---

# 快速上手

## 如何使用

通过 NPM 的配置之后，在页面里可以直接使用组件，无需通过 import 引入组件。

::: code-group

```vue [组合式]
<template>
  <view class="container">
    <see-button :title="title" />
  </view>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const title = ref("默认按钮");
</script>
```

```vue [选项式]
<template>
  <view class="container">
    <see-button :title="title" />
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "默认按钮",
    };
  },
};
</script>
```

:::

> **_:rocket: 你已经完成了快速上手，现在可以开始使用 SeeYouUI 组件库了。_**
