---
layout: doc
outline: deep
title: 自定义主题色
titleTemplate: SeeYouUI - 自定义主题色
description: SeeYouUI 组件库 自定义主题色
iframeSrc: /pages/config/index
---

# 自定义主题色（useThemeColor）

> `useThemeColor` 是一个用于自定义主题色的 Vue 组合式函数，支持为主题库中的四个语义色（`primary` / `success` / `warning` / `error`）分别设置自定义颜色，**自动派生 4 阶色板**并全局生效。
>
> 它与 [useTheme](./useTheme) 配合使用——`useTheme` 控制亮/暗模式切换，`useThemeColor` 控制自定义颜色的注入与派生。
>
> > 此 API 源码：[GitHub](https://github.com/seeyouui/see-u-ui/blob/main/uni_modules/see-u-ui/utils/hooks/useThemeColor/index.ts)

## 特性

- **按 token 独立设置**：4 个语义色可分别单独设置或重置
- **自动派生 4 阶色板**：每个基色自动派生 `base` / `dark` / `disabled` / `light` 四阶，并覆盖到亮色和暗色两种模式
- **模块级单例**：全应用共享同一份状态，任意组件调用 `useThemeColor()` 获取的都是同一引用
- **持久化**：自动保存到 `uni.setStorageSync('see-theme-color')`，应用启动时自动恢复
- **跨平台兼容**：H5 和 App-Plus 通过动态 `<style>` 注入；小程序通过 `see-config` 的 `:style` 绑定实现

## 基础用法

```vue
<script lang="ts" setup>
import { useThemeColor } from "see-u-ui";

const { customColors, setColor, resetColor, resetAll } = useThemeColor();
</script>

<template>
  <view>
    <button @click="setColor('primary', '#ff5500')">切换主色为橙色</button>
    <button @click="resetColor('primary')">重置主色</button>
    <button @click="resetAll()">全部重置</button>
  </view>
</template>
```

## 颜色派生公式

用户只需输入一个 hex 基色，系统会在 **HSL 空间**自动派生 4 阶色板：

### 浅色模式

| 阶       | HSL 调整                          | 用途           |
| -------- | --------------------------------- | -------------- |
| `base`   | 原色不变                          | 主色 / 默认    |
| `dark`   | `h:0, s:+5, l:-10`               | 悬浮 / 按压态  |
| `disabled` | `h:0, s:-20, l:+25`            | 禁用态实色     |
| `light`  | `h:0, s:-10, l:+42`              | 浅色背景       |

### 暗色模式

| 阶       | HSL 调整                          | 用途              |
| -------- | --------------------------------- | ----------------- |
| `base`   | 原色不变                          | 主色 / 默认       |
| `dark`   | `h:0, s:-5, l:-15`               | 悬浮 / 按压态     |
| `disabled` | `h:0, s:-15, l:-30`            | 禁用态深色        |
| `light`  | `rgba(R, G, B, 0.15)`            | 半透明浅色背景    |

> 暗色模式的 `light` 阶采用 `rgba` 半透明，与 SeeYouUI 现有设计约定一致。

## 跨平台原理

| 平台       | 实现方式                                                                                     |
| ---------- | -------------------------------------------------------------------------------------------- |
| **H5**     | 在 `<head>` 中动态注入 `<style id="see-theme-color-runtime">`，选择器完全对齐 `theme.scss`，确保同特异性下覆盖默认值 |
| **APP**    | 同上（H5 渲染引擎）                                                                          |
| **小程序** | 通过 `uni.$emit('see-css-vars-change')` 事件广播到 `see-config` 组件，在根 view 的 `:style` 上绑定 CSS 变量  |

::: tip 为什么不能用 inline style？
因为 `theme.scss` 中的 CSS 变量在 `:root`、`page`、`.see-theme-dark page`、`.see-theme-dark uni-page-body` 等多处定义。子节点的设置会覆盖从父节点继承来的 inline style（CSS 变量遵循就近原则）。只有**同选择器、同特异性、后定义的 `<style>` 标签**才能稳定覆盖。详见下方"技术方案"。
:::

## API

### `useThemeColor()`

**自定义主题色组合式函数**

**返回：** `UseThemeColorReturn`

---

### 类型定义

```ts
type ThemeColorToken = 'primary' | 'success' | 'warning' | 'error'

interface ThemeColorState {
  primary: string | null
  success: string | null
  warning: string | null
  error: string | null
}

interface ThemeColorPreset {
  name: string   // i18n key，如 'themeColor.preset.blue'
  color: string  // hex 颜色值
}
```

---

### 返回值 `UseThemeColorReturn`

| 属性/方法           | 类型                                                    | 说明                            |
| ------------------- | ------------------------------------------------------- | ------------------------------- |
| `customColors`      | `Ref<ThemeColorState>`                                  | 当前自定义颜色状态              |
| `isCustomized`      | `ComputedRef<boolean>`                                  | 是否有任意 token 被自定义       |
| `presets`           | `ThemeColorPreset[]`                                    | 预设颜色列表（8 种预设）        |
| `setColor`          | `(token: ThemeColorToken, color: string \| null) => void` | 设置指定 token 的颜色           |
| `setColors`         | `(colors: Partial<ThemeColorState>) => void`            | 批量设置多个 token              |
| `resetColor`        | `(token: ThemeColorToken) => void`                      | 重置指定 token 到默认颜色       |
| `resetAll`          | `() => void`                                            | 重置所有 token 到默认颜色       |

---

### `setColor(token, color)`

设置指定语义色的自定义颜色。

```ts
setColor('primary', '#ff5500')    // 主色改为橙色
setColor('success', null)          // 等价于 resetColor('success')
```

**行为：**
- 更新 `customColors` 状态
- 持久化到 `uni.setStorageSync('see-theme-color')`
- 自动派生亮色和暗色两套 4 阶色板
- H5/APP：注入 `<style>` 标签覆盖默认 CSS 变量
- MP：通过 `uni.$emit` 通知 `see-config` 更新

---

### `setColors(colors)`

批量设置多个 token 的颜色。

```ts
setColors({
  primary: '#9b6dff',
  warning: '#ffb645'
})
```

---

### `resetColor(token)`

将指定 token 恢复为默认颜色（来自 `theme.scss` 的默认值）。

```ts
resetColor('primary')  // 回到蓝色 #3ca7ff
```

---

### `resetAll()`

将所有 token 恢复为默认颜色。

---

### 常量

#### `DEFAULT_COLORS`

默认颜色值，与 `theme.scss` 一致：

```ts
const DEFAULT_COLORS: Record<ThemeColorToken, string> = {
  primary: '#3ca7ff',
  success: '#37d497',
  warning: '#ffb645',
  error: '#ff6b6b'
}
```

#### `PRIMARY_PRESETS`

预设颜色列表（8 种），可直接用于 UI 展示：

```ts
const PRIMARY_PRESETS: ThemeColorPreset[] = [
  { name: 'themeColor.preset.blue',   color: '#3ca7ff' },
  { name: 'themeColor.preset.green',  color: '#37d497' },
  { name: 'themeColor.preset.orange', color: '#ff8c42' },
  { name: 'themeColor.preset.purple', color: '#9b6dff' },
  { name: 'themeColor.preset.red',    color: '#ff6b6b' },
  { name: 'themeColor.preset.pink',   color: '#ff7eb8' },
  { name: 'themeColor.preset.yellow', color: '#ffb645' },
  { name: 'themeColor.preset.cyan',   color: '#3ccfcf' }
]
```

---

### `applyThemeColorOnLaunch()**

应用启动时从 storage 恢复自定义主题色。在 `App.vue` 的 `onLaunch` 中最早期调用，避免颜色闪烁：

```ts
import { applyThemeColorOnLaunch } from 'see-u-ui'

onLaunch(() => {
  applyThemeColorOnLaunch()  // 在最早的时机恢复
  // ... 其他初始化
})
```

## 颜色工具

### `colorDerive.ts`

底层颜色算法工具，导出以下纯函数：

```ts
// hex (#rgb / #rrggbb) → [r, g, b]
hexToRgb(hex: string): [number, number, number]

// [r, g, b] → #rrggbb（小写）
rgbToHex(r: number, g: number, b: number): string

// [r, g, b] → [h, s, l]（h: 0-360, s/l: 0-100）
rgbToHsl(r: number, g: number, b: number): [number, number, number]

// [h, s, l] → [r, g, b]
hslToRgb(h: number, s: number, l: number): [number, number, number]

// 调整 HSL 三通道，自动 clamp 到合法区间
adjustHsl(hex: string, dh: number, ds: number, dl: number): string

// 校验合法 hex 颜色值
isValidHex(hex: string): boolean

// 主入口：派生 4 阶色板
derivePalette(baseHex: string, mode: 'light' | 'dark'): ColorPalette
```

> `isValidHex` 已被 `useThemeColor` 导出，可在任意页面直接使用 `import { isValidHex } from 'see-u-ui'`。

## 小程序使用注意

小程序端由于无法在全局根节点设置 inline style，需要：

1. **每个页面用 `<see-config>` 包裹**（如果尚未使用）
2. `<see-config>` 会自动监听 `see-css-vars-change` 事件，将 CSS 变量绑定到根 view 的 `:style`

```vue
<template>
  <see-config>
    <view class="your-page">
      <!-- 你的页面内容 -->
    </view>
  </see-config>
</template>
```

::: warning
小程序端如果有多个嵌套的 `<see-config>`，外层会被内层覆盖。建议只在最外层使用一次。
:::

## 与 useTheme 的协作

`useThemeColor` 在调用 `applyThemeColor` 时**一次性注入亮色和暗色两套 CSS 变量**。这意味着：

- H5/APP 端：`<style>` 标签中包含 `@media (prefers-color-scheme: dark)` 和 `.see-theme-dark` 选择器，CSS 自己根据当前模式选择正确的值
- MP 端：依赖 `see-config` 的 `themeClass` 来动态切换 `:style` 中绑定的变量组

因此 `useThemeColor` **不需要监听** `useTheme` 的模式变化来重新派生颜色——两套值都已经就绪了。

## 技术方案

核心策略是**用动态注入 `<style>` 标签的方式覆盖 `theme.scss` 的默认值**，而非 `documentElement.style.setProperty`。

### 为什么不能用 `setProperty`？

因为 `theme.scss` 在多个选择器上定义了同名变量，CSS 变量遵循就近原则，子节点上的值会覆盖从父节点继承来的值：

| 选择器                                                 | 优先级（从高到低） |
| ------------------------------------------------------ | ------------------ |
| `html` 上的 `style="--see-primary: #ff5500"` (inline)  | ③ 父节点           |
| `:root` 中定义的默认值                                  | ② 父节点           |
| `.see-theme-dark page` / `page` 中重定义的值           | ① **子节点（赢）** |

只有**同一选择器、同特异性、后注入的 `<style>`** 才能稳定覆盖。动态 `<style>` 标签中包含的 CSS 选择器与 `theme.scss` 完全对齐：

```css
:root, page, uni-page-body,
.see-theme-light, .see-theme-light page, .see-theme-light uni-page-body {
  --see-primary: #ff5500;
  /* ... */
}
.see-theme-dark, .see-theme-dark page, .see-theme-dark uni-page-body {
  --see-primary: #ff5500;
  /* ... */
}
@media (prefers-color-scheme: dark) {
  :root:not(.see-theme-light),
  :root:not(.see-theme-light) page,
  :root:not(.see-theme-light) uni-page-body {
    --see-primary: #ff5500;
    /* ... */
  }
}
```

## 注意事项

1. **启动时序**：`applyThemeColorOnLaunch` 必须在 `onLaunch` 中最早调用，确保在组件第一次渲染前颜色已经就绪
2. **存储格式兼容**：storage 数据损坏时自动静默回退到全 `null`，不抛异常
3. **不修改组件源码**：所有组件已在使用 `var(--see-primary)` 等 CSS 变量，无需修改
4. **不修改 `theme.scss`**：默认值保持不变，自定义值通过动态注入覆盖
