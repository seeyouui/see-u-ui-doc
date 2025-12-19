---
layout: doc
outline: deep
title: Configuration
titleTemplate: SeeYouUI - Configuration
description: SeeYouUI Component Library Configuration
iframeSrc: /pages/index/index
---

# Configuration

::: danger Warning
Before configuring the SeeYouUI component library, please ensure you have [installed](install.md) it.
:::

## Import SeeYouUI in main.js

```js{2,8}
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

## Import SeeYouUI's global SCSS theme file in uni.scss

::: code-group

```scss [Install via Dcloud]{2}
/* uni.scss */
@import "@/uni_modules/see-u-ui/theme.scss";
```

```scss [Install via NPM]{2}
/* uni.scss */
@import "see-u-ui/src/theme.scss";
```

:::

## Configure easycom component auto-import in pages.json

::: tip Tip
After configuring easycom auto-import, you can use SeeYouUI components directly in your project without manual imports.
:::

::: code-group

```json [Install via Dcloud]{3-8}
// pages.json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^see-(.*)": "@/uni_modules/see-u-ui/components/see-$1/index.vue"
    }
  },
  "pages": [
    // ...
  ]
}
```

```json [Install via NPM]{3-8}
// pages.json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^see-(.*)": "see-u-ui/src/components/see-$1/index.vue"
    }
  },
  "pages": [
    // ...
  ]
}
```

:::

> :tada: Next, you can check out [Quick Start](https://www.google.com/search?q=/quick-start) or try writing a [Button component](https://www.google.com/search?q=/components/button/index).

## Without using easycom

If you do not wish to use easycom auto-import, you can manually import components in the pages where you need them.

::: danger Warning
We strongly recommend using [easycom](https://www.google.com/search?q=%23configure-easycom-component-auto-import-in-pages-json) auto-import to avoid the tedious process of manual imports.
:::

::: warning Notice
When not using easycom auto-import, there will be no code intelligence/hints.
:::

```vue{3,8}
<template>
  <view class="container">
    <SeeButton title="Primary Button" type="primary" />
  </view>
</template>

<script lang="ts" setup>
import { SeeButton } from "see-u-ui";
</script>

```
