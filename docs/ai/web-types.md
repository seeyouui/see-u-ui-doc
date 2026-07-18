---
layout: doc
outline: deep
title: IDE 补全
titleTemplate: SeeYouUI - IDE 补全
description: SeeYouUI 内置 web-types.json，支持 JetBrains 系 IDE 自动补全
iframeSrc: /pages/index/index
---

# IDE 补全

> 安装 SeeYouUI 后，[JetBrains](https://www.jetbrains.com/) 系 IDE（[WebStorm](https://www.jetbrains.com/webstorm/) / [IntelliJ](https://www.jetbrains.com/idea/) 等）自动补全组件标签、属性、事件，无需配置。

## 什么是 web-types

[`web-types.json`](https://github.com/JetBrains/web-types) 是 [JetBrains](https://www.jetbrains.com/) 为 Vue / Web 组件定义的自动补全规范。一个 npm 包只要在 `package.json` 里声明 `"web-types"` 字段指向这个文件，装到项目里后，IDE 就能自动识别组件并提供补全。

SeeYouUI 已经内置了这个能力，npm 包通过 `"web-types": "./web-types.json"` 注册。

## 覆盖范围

`web-types.json` 由生成器从 SSOT `registry.json` 自动产出，覆盖：

- **84 个组件标签**（`<see-button>` 等）
- **959 个属性**（含类型、默认值、是否必填）
- **149 个事件**
- **124 个插槽**

## 怎么用

1. 在项目里安装 SeeYouUI（参见 [安装](/install)）
2. 用 [WebStorm](https://www.jetbrains.com/webstorm/) / [IntelliJ](https://www.jetbrains.com/idea/) 打开项目
3. 在模板里输入 `<see-`，IDE 自动提示全部组件
4. 选中组件后输入属性，IDE 提示该组件的合法属性和取值

无需任何额外配置，装包即生效。

::: tip 联合类型也能补全
像 `type` 这种属性，合法取值是 `'info' | 'primary' | 'error' | 'warning' | 'success'`，web-types 里已结构化暴露，IDE 会直接提示这些枚举值，不用翻文档。
:::
