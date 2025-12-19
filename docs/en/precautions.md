---
layout: doc
outline: deep
title: Precautions
titleTemplate: SeeYouUI - Precautions
description: SeeYouUI Component Library Precautions
iframeSrc: /pages/index/index
---

# Precautions

## Sass Warnings

In versions `sass 1.8.0` and above, a warning occurs: _Deprecation Warning: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0._ Because the `@use` syntax in newer Sass versions is quite aggressive, upgrading to `@use` would be a breaking change. Therefore, it is recommended to pin `sass` to the following versions to resolve the warnings.

```json
"sass": "1.63.2",
"sass-loader": "10.4.1",

```

## WeChat Mini Program

::: tip Tip
The WeChat Mini Program base library needs to be set to version 2.19.2 or higher; otherwise, an error will occur.
:::

## Alipay Mini Program

::: tip Tip
SeeYouUI supports the Alipay Mini Program only when component2 mode is enabled.
:::

- Alipay upgraded to component2 mode a long time ago. This mode supports more features and characteristics. In uni-app, many features such as provide/inject, $slots, etc., require this mode to be enabled. This mode is disabled by default in new uni-app projects. Therefore, you need to enable it in the `manifest.json` at the project root. If the `mp-alipay` attribute node does not exist, simply add it:

```json
"mp-alipay" : {
    "component2": true
},

```

## Pros and Cons of uni.scss

`uni.scss` is a project file that comes with new uni-app projects. The preprocessor used is `sass/scss`. As a result, uni-app officially recommends `scss`. Similarly, SeeYouUI is a staunch advocate of `scss`, and we do not recommend using `less`, `stylus`, etc., in `uni-app`.

uni.scss has the following characteristics:

- No need to import; uni-app will automatically include this file during compilation.
- Scss variables defined here can be used globally, allowing for the definition of colors, themes, sizes, and other variables.
- uni.scss will be compiled into every scss file (please pay close attention to this sentence).

> In summary, we can see that `uni.scss` primarily utilizes `scss` features to define global variables for use by any style tag that declares `lang=scss`. However, this introduces a problem:
>
> > Everything written in uni.scss will be injected into every file that declares scss. This means if your uni.scss has several hundred lines and is about 10k in size, that 10k will be injected into all other scss files (pages). If your application has 50 pages, this could potentially increase the overall package size by 50 \* 10 = 500k. This might result in the Mini Program package being too large to preview or publish. Therefore, we suggest you only place scss variable-related content in uni.scss.
