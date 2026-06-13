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

> Create your own color scheme! The custom theme color feature allows you to set custom colors for 4 semantic tokens (`primary` / `success` / `warning` / `error`). The system automatically derives a complete palette and applies it globally.

::: tip
This feature works with the [useThemeColor](./api/theme/useThemeColor) Hook. No component source code changes are needed.
:::

### Using the Config Page

On the config page ([`pages/config/index.vue`](https://github.com/seeyouui/see-u-ui/blob/main/pages/config/index.vue)), you can customize colors visually:

1. **Select token type**: Click the tab for Primary / Success / Warning / Error
2. **Pick a color**: Click the "Pick Color" area to open the native color picker
3. **Reset**: Click "Reset" to restore a single token, or "Reset All" to restore everything

### Using Programmatically

You can control theme colors in any Vue component using the `useThemeColor` Hook:

```vue
<script lang="ts" setup>
import { useThemeColor } from "see-u-ui";

const { customColors, setColor, setColors, resetColor, resetAll, isCustomized } = useThemeColor();

// Set primary to purple
setColor("primary", "#9b6dff");

// Batch set
setColors({ primary: "#ff5500", success: "#00cc88" });

// Reset
resetColor("warning");
resetAll();
</script>

<template>
  <view>
    <text>Current primary: {{ customColors.primary || "Default" }}</text>
    <button @click="resetAll()">Reset All</button>
  </view>
</template>
```

### Color Derivation Rules

Each base color automatically derives a complete 4-level palette:

**Light mode derivation:**

| Level | Adjustment |
|-------|------------|
| `base` | Original color |
| `dark` | HSL: s+5, l-10 |
| `disabled` | HSL: s-20, l+25 |
| `light` | HSL: s-10, l+42 |

**Dark mode derivation:**

| Level | Adjustment |
|-------|------------|
| `base` | Original color (unchanged) |
| `dark` | HSL: s-5, l-15 |
| `disabled` | HSL: s-15, l-30 |
| `light` | rgba of base, 0.15 opacity |

### How It Works Globally

Custom theme colors work by **dynamically injecting a `<style>` tag** to override the default CSS variables in `theme.scss`. No component code needs to be modified.

```
Component → var(--see-primary) → theme.scss defaults
                               ↘ Custom <style> overrides
```

**H5 / App-Plus**: Injects `<style id="see-theme-color-runtime">` in `document.head`, with selectors matching `theme.scss` exactly.

**Mini Program**: Uses the `<see-config>` component's `:style` binding to inject CSS variables into the root view.

### API Reference

See [useThemeColor](./api/theme/useThemeColor) for the full API documentation.

#### `useThemeColor()` Return Value

| Method/Property | Description |
|----------------|-------------|
| `customColors` | Reactive current custom color state |
| `isCustomized` | Whether any color has been customized |
| `setColor(token, color)` | Set a color (`null` to reset) |
| `setColors(colors)` | Batch set multiple colors |
| `resetColor(token)` | Reset a single token |
| `resetAll()` | Reset all tokens |

#### Startup Restoration

Call in `App.vue` `onLaunch` as early as possible to prevent color flash:

```ts
import { applyThemeColorOnLaunch } from "see-u-ui";

onLaunch(() => {
  applyThemeColorOnLaunch();
  // ... other initialization
});
```

### Available Color Tokens

| Token | Default | Purpose |
|-------|---------|---------|
| `primary` | `#3ca7ff` | Primary theme color |
| `success` | `#37d497` | Success state |
| `warning` | `#ffb645` | Warning state |
| `error` | `#ff6b6b` | Error/danger state |

### Mini Program Notes

Each page in Mini Programs needs to be wrapped with `<see-config>` to receive theme color CSS variables:

```vue
<template>
  <see-config>
    <view class="your-page">
      <!-- Page content -->
    </view>
  </see-config>
</template>
```

::: tip
The config page already has a complete custom theme color UI. If you're running the demo project, you can try it directly on the config page.
:::
