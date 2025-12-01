---
layout: doc
outline: deep
title: 配置
titleTemplate: SeeYouUI - 配置
description: SeeYouUI 组件库 配置
iframeSrc: /pages/index/index
---

# 配置

::: danger 警告
在配置 SeeYouUI 组件库前，请确保您已经 [安装](install.md) 了 SeeYouUI 组件库。
:::

### 在 main.js 中引入 SeeYouUI

```js
// main.js
import SeeYouUI from "see-u-ui";

// #ifdef VUE3
import { createSSRApp } from "vue";
export function createApp() {
  const app = createSSRApp(App);
  app.use(SeeYouUI);
  return {
    app,
  };
}
// #endif
```

### 在 uni.scss 中引入 SeeYouUI 的全局 SCSS 主题文件

```scss
/* uni.scss */
@import "see-u-ui/theme.scss";
```

### 在 pages.json 中配置 easycom 组件自动引入

::: tip 提示
配置 easycom 组件自动引入后，您可以在项目中直接使用 SeeYouUI 组件，无需手动引入。
:::

```json
// pages.json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^see-(.*)": "see-u-ui/components/see-$1/index.vue"
    }
  },
  "pages": [
    // ...
  ]
}
```

> :tada: 接下来，您可以查看 [快速上手](/quick-start) 或尝试写一个 [Button 按钮](/components/button)。

## 不使用 easycom

如果您不希望使用 easycom 组件自动引入，您可以在需要使用 SeeYouUI 组件的页面中手动引入组件。

::: danger 警告
我们强烈建议您使用 [easycom](#在-pages-json-中配置-easycom-组件自动引入) 组件自动引入，以避免手动引入组件的繁琐过程。
:::

::: warning 注意
不使用 easycom 组件自动引入时，无代码提示。
:::

```vue{3,8}
<template>
  <view class="container">
    <SeeButton title="主要按钮" type="primary" />
  </view>
</template>

<script lang="ts" setup>
import { SeeButton } from "see-u-ui";
</script>
```
