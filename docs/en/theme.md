---
layout: doc
outline: deep
title: Customize Theme
titleTemplate: SeeYouUI - Customize Theme
description: SeeYouUI is a high-quality component library based on uni-app, developed using TypeScript, providing rich components and utility functions to help you quickly build cross-platform applications. SeeYouUI Customize Theme
iframeSrc: /pages/config/index
---

# Customize Theme

> SeeYouUI provides theme configuration capabilities, allowing you to [customize theme](#customize-theme-1) colors as needed.

::: tip Tip
The current theme is <ThemeToggle darkText="Dark" lightText="Light" />. You can toggle it via the top right corner of the documentation.
:::

## Global Dark Mode

Dark mode takes effect globally by default, changing all SeeYouUI components on the page to a dark style.

:balloon: You only need to add two lines of code in [manifest.json](https://uniapp.dcloud.net.cn/collocation/manifest.html):

::: code-group

```json[H5]:line-numbers {}
"h5" : {
    "darkmode" : true,
    "themeLocation" : "theme.json",
},

```

```json[app]:line-numbers {}
"app-plus" : {
    "darkmode" : true,
    "themeLocation" : "theme.json",
},

```

```json[mini Program]:line-numbers {}
"mp-weixin" : {
    "darkmode" : true,
    "themeLocation" : "theme.json",
},

```

:::

Okay! Restart the project, try switching your phone's **Light/Dark** mode, and see the effect!

## Dynamic Switching

SeeYouUI provides the [useTheme](https://www.google.com/search?q=../api/theme/useTheme.md) Hook. You can use the `useTheme` method in your code to switch themes.

::: warning Note
Due to [WeChat Mini Program limitations](https://uniapp.dcloud.net.cn/tutorial/darkmode.html#mp-weixin), `useTheme` does not currently support Mini Programs.
:::

```ts
import { useTheme } from "see-u-ui";

const theme = useTheme();
theme.setTheme("dark");
theme.setTheme("light");

```

## Customize Theme

todo...
