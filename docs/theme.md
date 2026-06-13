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

> 定制专属的主题配色方案！自定义主题色功能允许你为主题库中的 4 个语义色（`primary` / `success` / `warning` / `error`）分别设置自定义颜色，系统会自动派生完整色板并全局生效。

::: tip 提示
此功能配合 [useThemeColor](./api/theme/useThemeColor) Hook 使用，无需修改组件源码。
:::

### 配置页操作

在配置页（[`pages/config/index.vue`](https://github.com/seeyouui/see-u-ui/blob/main/pages/config/index.vue)）中，你可以直观地进行自定义：

1. **选择颜色类型**：点击「主色 / 成功色 / 警告色 / 错误色」tab 切换
2. **选取颜色**：点击「选择颜色」区域，浏览器会弹出原生取色器
3. **重置**：点击单色右侧的「重置」按钮单独恢复，或点击右上角的「全部重置为默认」一键还原

### 编程方式使用

你可以在任何 Vue 组件中通过 `useThemeColor` Hook 来编程控制：

```vue
<script lang="ts" setup>
import { useThemeColor } from "see-u-ui";

const { customColors, setColor, setColors, resetColor, resetAll, isCustomized } = useThemeColor();

// 设置主色为紫色
setColor("primary", "#9b6dff");

// 批量设置
setColors({ primary: "#ff5500", success: "#00cc88" });

// 重置
resetColor("warning");     // 单独重置
resetAll();                // 全部重置
</script>

<template>
  <view>
    <text>当前主色：{{ customColors.primary || "默认" }}</text>
    <button @click="resetAll()">全部重置</button>
  </view>
</template>
```

### 颜色派生规则

系统会自动为每个基色派生完整的 4 阶色板：

**浅色模式派生公式：**

| 色阶 | 调整 |
|------|------|
| `base` | 原色 |
| `dark` | HSL: s+5, l-10 |
| `disabled` | HSL: s-20, l+25 |
| `light` | HSL: s-10, l+42 |

**暗色模式派生公式：**

| 色阶 | 调整 |
|------|------|
| `base` | 原色（不变） |
| `dark` | HSL: s-5, l-15 |
| `disabled` | HSL: s-15, l-30 |
| `light` | 原色 rgba，0.15 透明度 |

### 全局生效原理

自定义主题色通过**动态注入 `<style>` 标签**覆盖 CSS 变量默认值实现，无需修改任何组件代码。

```
组件 → var(--see-primary) → theme.scss 默认值
                          ↘ 自定义后的 <style> 覆盖值
```

H5 / App-Plus：在 `document.head` 中注入 `<style id="see-theme-color-runtime">`，选择器与 `theme.scss` 完全对齐。

小程序：通过 `<see-config>` 组件的 `:style` 绑定，将 CSS 变量注入到根 view。

### API 参考

详细 API 文档请参考 [useThemeColor](./api/theme/useThemeColor)。

#### `useThemeColor()` 返回值

| 方法/属性 | 说明 |
|-----------|------|
| `customColors` | 当前自定义颜色状态（响应式） |
| `isCustomized` | 是否有任意颜色被自定义 |
| `setColor(token, color)` | 设置颜色（`null` 表示重置） |
| `setColors(colors)` | 批量设置 |
| `resetColor(token)` | 重置单个 |
| `resetAll()` | 全部重置 |

#### 启动复原

在 `App.vue` 的 `onLaunch` 中最早期调用，避免颜色闪烁：

```ts
import { applyThemeColorOnLaunch } from "see-u-ui";

onLaunch(() => {
  applyThemeColorOnLaunch();
  // ... 其他初始化
});
```

### 可用颜色 token

| Token     | 默认色   | 用途           |
| --------- | -------- | -------------- |
| `primary` | `#3ca7ff` | 主色、主题色   |
| `success` | `#37d497` | 成功状态色     |
| `warning` | `#ffb645` | 警告状态色     |
| `error`   | `#ff6b6b` | 错误/危险状态色 |

### 小程序注意事项

小程序端每个页面需要用 `<see-config>` 包裹，以便接收主题色 CSS 变量：

```vue
<template>
  <see-config>
    <view class="your-page">
      <!-- 页面内容 -->
    </view>
  </see-config>
</template>
```

::: tip 提示
配置页已内置了完整的自定义主题色 UI，如果你已经运行了示例项目，可以直接在配置页体验此功能。
:::
