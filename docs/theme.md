---
layout: doc
outline: deep
title: 定制主题
titleTemplate: SeeYouUI - 定制主题
description: SeeYouUI 是一个基于 uni-app 的高质量组件库，使用 TypeScript 开发，提供丰富组件与工具函数，帮助你快速构建跨平台应用。SeeYouUI 定制主题
iframeSrc: /pages/config/index
---

# 定制主题

> SeeYouUI 提供了主题配置功能，您可以根据需要[自定义主题](#自定义主题)颜色。

::: tip 提示
当前主题为 <ThemeToggle /> 可通过文档右上角切换。
:::

## 全局暗黑模式

暗黑模式默认全局生效，使页面上的所有 SeeYouUI 组件变为深色风格。

:balloon: 你只需要在 [manifest.json](https://uniapp.dcloud.net.cn/collocation/manifest.html) 加两行代码即可：

::: code-group

```json[H5]:line-numbers {}
"h5" : {
    "darkmode" : true,
    "themeLocation" : "theme.json",
},
```

```json[App]:line-numbers {}
"app-plus" : {
    "darkmode" : true,
    "themeLocation" : "theme.json",
},
```

```json[小程序]:line-numbers {}
"mp-weixin" : {
    "darkmode" : true,
    "themeLocation" : "theme.json",
},
```

:::

好的！重启项目，试着切换手机的 **浅色/暗黑** 模式，看看效果吧！

## 手动切换

SeeYouUI 提供了 [useTheme](./api/theme/useTheme) Hook，你可以在代码中使用 `useTheme` 方法来切换主题。

::: warning 注意
因微信小程序限制，手动切换需要在页面中使用 `see-config` 包裹元素，详见[微信小程序手动切换主题]()
:::

```vue
<template>
  <text>当前主题：{{ themeMode }}</text>
  <button @click="setLightMode">浅色</button>
  <button @click="setDarkMode">暗黑</button>
  <button @click="setFollowSystem">跟随系统</button>
</template>

<script lang="ts" setup>
import { useTheme } from "@/uni_modules/see-u-ui";
const { themeMode, setLightMode, setDarkMode, setFollowSystem } = useTheme();
</script>
```

## 微信小程序手动切换主题

todo...

## 自定义主题

todo...
