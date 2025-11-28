---
layout: doc
outline: deep
title: 安装
titleTemplate: SeeYouUI - 安装
description: SeeYouUI 组件库 安装
iframeSrc: /pages/index/index
---

# 安装

SeeYouUI 暂时只支持 NPM 方式安装

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

```sh [yarn]{4}
// 如果您的根目录没有package.json文件的话，请先执行如下命令：
// npm init -y

yarn add see-u-ui

// 更新
// yarn update see-u-ui
```

```sh [pnpm]{4}
// 如果您的根目录没有package.json文件的话，请先执行如下命令：
// npm init -y

pnpm add see-u-ui

// 更新
// pnpm update see-u-ui
```

:::

### 安装 SCSS

SeeYouUI 依赖 [SCSS](https://www.sass.hk/docs/)，您必须要安装此插件，否则无法正常运行。

- 如果您的项目是由 HBuilder X 创建的，请直接在[插件市场](https://ext.dcloud.net.cn/plugin?id=2046)安装 SCSS 插件。
- 如果您的项目是由 vue-cli 创建的，请通过以下命令安装对 sass(scss)的支持，如果已安装，请略过。

::: warning 注意
安装 sass-loader，注意需要版本 10，否则可能会导致 vue 与 sass 的兼容问题而报错
:::

::: code-group

```sh [npm]
npm i sass@1.63.2 -D
npm i sass-loader@10.4.1 -D
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
