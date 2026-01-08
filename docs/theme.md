---
layout: doc
outline: deep
title: 定制主题
titleTemplate: SeeYouUI - 定制主题
description: SeeYouUI 是一个基于 uni-app 的高质量组件库，使用 TypeScript 开发，提供丰富组件与工具函数，帮助你快速构建跨平台应用。SeeYouUI 定制主题
iframeSrc: /pages/config/index
---

# 定制主题

> SeeYouUI 提供了浅色/暗黑主题，或者您可以根据需要[自定义主题](#自定义主题)颜色。

::: tip 提示
当前主题为 <ThemeToggle /> 可通过文档右上角切换。
:::

## 全局暗黑模式

此模式默认 `跟随系统` ，会使页面上的所有 SeeYouUI 组件变为浅色/深色风格。

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

## 手动切换全局主题

SeeYouUI 提供了 [useTheme](./api/theme/useTheme) Hook，你可以在代码中使用 `useTheme` 方法来手动切换全局主题。

::: warning 注意
全局主题的手动切换是 `强制生效` 的，非必要建议优先使用[跟随系统方案](#全局暗黑模式)。
:::

::: danger 警告
如 `微信小程序` 有手动切换全局主题需求，需单独配置：[微信小程序手动切换全局主题](#微信小程序手动切换全局主题)
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

### 微信小程序手动切换全局主题

> 微信小程序每个页面是独立的，所以无法在全局根节点加 class，因此需要使用 `see-config` 组件包裹每个页面。

```vue
<template>
  <see-config>
    <!-- 你的页面内容 -->
  </see-config>
</template>
```

## 自定义主题

todo...
