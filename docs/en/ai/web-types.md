---
layout: doc
outline: deep
title: IDE Completion
titleTemplate: SeeYouUI - IDE Completion
description: SeeYouUI ships web-types.json for JetBrains IDE autocomplete
iframeSrc: /pages/index/index
---

# IDE Completion

> After installing SeeYouUI, [JetBrains](https://www.jetbrains.com/) IDEs ([WebStorm](https://www.jetbrains.com/webstorm/) / [IntelliJ](https://www.jetbrains.com/idea/) etc.) autocomplete component tags, props, and events - zero config.

## What is web-types

[`web-types.json`](https://github.com/JetBrains/web-types) is an autocomplete spec [JetBrains](https://www.jetbrains.com/) defines for Vue / web components. As long as an npm package declares a `"web-types"` field in `package.json` pointing to this file, the IDE auto-recognizes its components and offers completion once installed.

SeeYouUI ships this capability built-in - the npm package registers it via `"web-types": "./web-types.json"`.

## Coverage

`web-types.json` is auto-generated from the SSOT `registry.json`, covering:

- **84 component tags** (`<see-button>` etc.)
- **959 props** (with type, default, required)
- **149 events**
- **124 slots**

## How to Use

1. Install SeeYouUI in your project (see [Installation](/en/install))
2. Open the project in [WebStorm](https://www.jetbrains.com/webstorm/) / [IntelliJ](https://www.jetbrains.com/idea/)
3. Type `<see-` in a template - IDE suggests all components
4. Select a component and type a prop - IDE suggests that component's legal props and values

No extra config - effective on install.

::: tip Union types autocomplete too
For a prop like `type`, the legal values `'info' | 'primary' | 'error' | 'warning' | 'success'` are structured in web-types, so the IDE suggests these enum values directly - no doc lookup needed.
:::
