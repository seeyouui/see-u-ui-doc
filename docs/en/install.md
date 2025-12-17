---
layout: doc
outline: deep
title: Installation
titleTemplate: SeeYouUI - Installation
description: SeeYouUI Component Library Installation
iframeSrc: /pages/index/index
---

# Installation

> Want the easiest way to get started? Simply clone the [see-u-ui-project](https://github.com/seeyouui/see-u-ui-project) repository and start using it right away.
>
> > :rocket: Our [development workflow](contributing.md#our-development-workflow) automatically [pulls](https://github.com/seeyouui/see-u-ui-project/actions) the latest [npm package](https://www.npmjs.com/package/see-u-ui) of the component library every hour.

<!-- > >
> > Due to [GitHub free account limitations](https://docs.github.com/get-started/learning-about-github/githubs-plans), we can only guarantee updates every half hour -->

## Install via Dcloud Plugin (Recommended)

1. Create a new uni-app (Vue 3) project in HBuilder X.
2. Go to the [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?id=26088), download the plugin, and import it into HBuilder X.
3. [Configure the SeeYouUI component library](./config.md)

## Install via NPM

Run the following command in your project root directory:

::: code-group

```sh [npm]{4}
// If there is no package.json file in your root directory, run:
// npm init -y

npm i see-u-ui

// Update
// npm update see-u-ui
```

```sh [cnpm]{4}
// If there is no package.json file in your root directory, run:
// cnpm init -y

cnpm i see-u-ui

// Update
// cnpm update see-u-ui
```

```sh [yarn]{4}
// If there is no package.json file in your root directory, run:
// yarn init -y

yarn add see-u-ui

// Update
// yarn update see-u-ui
```

```sh [pnpm]{4}
// If there is no package.json file in your root directory, run:
// pnpm init -y

pnpm add see-u-ui

// Update
// pnpm update see-u-ui
```

:::

### Install SCSS

SeeYouUI depends on [SCSS](https://www.sass.hk/docs/). You must install it, otherwise the library will not work properly.

- If your project was created with HBuilder X, install the SCSS plugin directly from the [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?id=2046).
- If your project was created with vue-cli, install sass (scss) support using the following commands. Skip this step if it is already installed.

::: warning Note
When installing `sass-loader`, make sure to use version 10. Otherwise, compatibility issues between Vue and Sass may cause errors.
:::

::: code-group

```sh [npm]
npm i sass@1.63.2 -D
npm i sass-loader@10.4.1 -D
```

```sh [cnpm]
cnpm i sass@1.63.2 -D
cnpm i sass-loader@10.4.1 -D
```

```sh [yarn]
yarn add sass@1.63.2 -D
yarn add sass-loader@10.4.1 -D
```

```sh [pnpm]
pnpm add sass@1.63.2 -D
pnpm add sass-loader@10.4.1 -D
```

:::

> 🔧 The component library has been installed successfully — you're halfway there!
>
> > Next, complete the final step: [Configuration](#configuration), and then you can start using the components.

## Configuration

> This section covers the minimum required configuration. For more details, see [Configuration](/config).

### Import SeeYouUI in `main.js`

```js
// main.js
import SeeYouUI from "see-u-ui"; // [!code focus]

// #ifdef VUE3
import { createSSRApp } from "vue";
export function createApp() {
  const app = createSSRApp(App);
  app.use(SeeYouUI); // [!code focus]
  return {
    app,
  };
}
// #endif
```

### Import the global SCSS theme in `uni.scss`

```scss
/* uni.scss */
@import "see-u-ui/src/theme.scss"; // [!code focus]
```

### Configure easycom for automatic component imports in `pages.json`

::: tip Tip
After enabling easycom auto-import, you can use SeeYouUI components directly in your project without manual imports.

**_If you prefer manual imports, see [Configuration – Without easycom](/config#without-easycom)_**
:::

```json
// pages.json
{
  // [!code focus:6]
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

> :tada: All set! You have successfully configured the SeeYouUI component library.
>
> > Next, check out [Quick Start](/quick-start) or try creating a [Button component](/components/button/index).
