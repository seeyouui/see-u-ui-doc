---
layout: doc
outline: deep
title: 安装
titleTemplate: SeeYouUI - 安装
description: SeeYouUI 组件库 安装
iframeSrc: /pages/index/index
---

# 安装

## 以 Dcloud 插件方式安装

暂不支持

## 以 NPM 方式安装

在项目根目录执行如下命令即可：

::: code-group

```sh [npm]{4}
// 如果您的根目录没有package.json文件的话，请先执行如下命令：
// npm init -y

npm i see-u-ui

// 更新
// npm update see-u-ui
```

```sh [cnpm]{4}
// 如果您的根目录没有package.json文件的话，请先执行如下命令：
// cnpm init -y

cnpm i see-u-ui

// 更新
// cnpm update see-u-ui
```

```sh [yarn]{4}
// 如果您的根目录没有package.json文件的话，请先执行如下命令：
// yarn init -y

yarn add see-u-ui

// 更新
// yarn update see-u-ui
```

```sh [pnpm]{4}
// 如果您的根目录没有package.json文件的话，请先执行如下命令：
// pnpm init -y

pnpm add see-u-ui

// 更新
// pnpm update see-u-ui
```

:::

### 安装 SCSS

SeeYouUI 依赖 [SCSS](https://www.sass.hk/docs/)，您必须要安装此插件，否则无法正常运行。

- 如果您的项目是由 HBuilder X 创建的，请直接在 [插件市场](https://ext.dcloud.net.cn/plugin?id=2046) 安装 SCSS 插件。
- 如果您的项目是由 vue-cli 创建的，请通过以下命令安装对 sass(scss)的支持，如果已安装，请略过。

::: warning 注意
安装 sass-loader，注意需要版本 10，否则可能会导致 vue 与 sass 的兼容问题而报错
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

> 🔧 组件库已安装成功，进度过半！
>
> > 接下来，请完成最后一步：进行 [配置](#配置)，即可开始使用组件。

## 配置

> 此章节为最小配置，详细配置请参看 [配置](/config)

### 在 main.js 中引入 SeeYouUI

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

### 在 uni.scss 中引入 SeeYouUI 的全局 SCSS 主题文件

```scss
/* uni.scss */
@import "see-u-ui/theme.scss"; // [!code focus]
```

### 在 pages.json 中配置 easycom 组件自动引入

::: tip 提示
配置 easycom 组件自动引入后，您可以在项目中直接使用 SeeYouUI 组件，无需手动引入。

**_如需要手动引入，请参考 [配置 - 不使用 easycom](/config#不使用-easycom)_**
:::

```json
// pages.json
{
  // [!code focus:6]
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

> :tada: 大功告成，你已经成功配置好 SeeYouUI 组件库。
>
> > 接下来，您可以查看 [快速上手](/quick-start) 或尝试写一个 [Button 按钮](/components/button)。
