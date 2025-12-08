---
layout: doc
outline: deep
title: 注意事项
titleTemplate: SeeYouUI - 注意事项
description: SeeYouUI 组件库 注意事项
iframeSrc: /pages/index/index
---

# 注意事项

## Sass 报警

在 `sass1.8.0` 以上版本报错 _Deprecation Warning: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0._ 因为新版本 Sass 的 `@use` 语法较为激进，如果升级为 `@use` 将会是破坏式更新，所以推荐将 `sass` 固定在以下版本结局报警。

```json
"sass": "1.63.2",
"sass-loader": "10.4.1",
```

## 微信小程序

::: tip 提示
微信小程序基础库需要设置在 2.19.2 及以上版本，否则会报错。
:::

## 支付宝小程序

::: tip 提示
SeeYouUI 需要开启了 component2 模式才支持支付宝小程序
:::

- 支付宝在很早前，已升级为 component2 模式，此模式支持更多的功能和特性，uni-app 上，很多的特性，如 provide/inject、$slots 等，需要开启此模式才能支持， 而此模式在 uni-app 新建项目中默认是关闭的，因而需要在项目根目录的 manifest.json 中开启，如没有 alipay 属性节点，新增即可：

```json
"mp-alipay" : {
	"component2": true
},
```

## uni.scss 的优缺点

`uni.scss`为 uni-app 新建项目自带工程文件，使用的预处理器为`sass/scss`，由此可见，uni-app 官方推荐的是`scss`，同时我们 SeeYouUI 也是`scss`的坚定推崇者，不建议在 `uni-app`中使用`less`、`stylus`等。

uni.scss 具有如下一些特点：

- 无需引入，uni-app 在编译时，会自动引入此文件

- 在此中定义的 scss 变量，可以全局使用，可以在此定义一些颜色，主题，尺寸等变量

- uni.scss 会编译到每个 scss 文件中(请着重理解这一句话)

> 综上所述，我们可以得知，`uni.scss`主要是利用`scss`的特性，定义一些全局变量，供各个写了`lang=scss`的 style 标签引用，但是这引出了一个问题：
>
> > uni.scss 中所写的一切内容，都会注入到每个声明了 scss 的文件中，这意味着，如果您的 uni.scss 如果有几百行，大小 10k 左右，那么这个 10k 都会被注入所有的 其他 scss 文件(页面)中，如果您的应用有 50 个页面，那么有可能因此导致整体的包体积多了 50 \* 10 = 500k 的大小，这可能会导致小程序包太大而无法预览和发布， 所以，我们建议您只将 scss 变量相关的内容放到 uni.scss 中。
