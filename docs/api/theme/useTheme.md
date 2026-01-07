---
layout: doc
outline: deep
title: 切换主题
titleTemplate: SeeYouUI - 切换主题
description: SeeYouUI 组件库 切换主题
iframeSrc: /pages/config/index
---

# 切换主题（useTheme）

> `useTheme` 是一个用于主题切换的 Vue 组合式函数，支持浅色、暗黑和跟随系统三种模式。
>
> 它帮助你轻松处理：主题切换、系统主题监听、跨端兼容（H5、APP、小程序）等常见主题管理需求。
>
> > 此 API 源码：[GitHub](https://github.com/seeyouui/see-u-ui/blob/main/uni_modules/see-u-ui/utils/hooks/useTheme/index.ts)

## 使用方式

::: code-group

```vue [基础用法]
<template>
  <view class="theme-demo">
    <text
      >当前主题：{{
        themeMode === "light"
          ? "浅色"
          : themeMode === "dark"
          ? "暗黑"
          : "跟随系统"
      }}</text
    >
    <text>是否暗色：{{ isSwitchChecked ? "是" : "否" }}</text>

    <button @click="changeSwitch">切换主题</button>
    <button @click="setLightMode">浅色模式</button>
    <button @click="setDarkMode">暗黑模式</button>
    <button @click="setFollowSystem">跟随系统</button>
  </view>
</template>

<script setup>
import { useTheme } from "see-u-ui";

const {
  isManual,
  isSwitchChecked,
  themeMode,
  changeSwitch,
  setLightMode,
  setDarkMode,
  setFollowSystem,
} = useTheme();
</script>
```

```vue [配合开关组件]
<template>
  <view class="theme-switch">
    <text>暗黑模式</text>
    <switch :checked="isSwitchChecked" @change="changeSwitch" />
  </view>
</template>

<script setup>
import { useTheme } from "see-u-ui";

const { isSwitchChecked, changeSwitch } = useTheme();
</script>
```

:::

## 主题模式

`useTheme` 支持三种主题模式：

| 模式     | 说明             | 行为                             |
| -------- | ---------------- | -------------------------------- |
| `light`  | 浅色模式         | 固定使用浅色主题，不跟随系统变化 |
| `dark`   | 暗黑模式         | 固定使用暗黑主题，不跟随系统变化 |
| `system` | 跟随系统（默认） | 自动跟随系统主题变化             |

## 平台支持

`useTheme` 在不同平台上的实现方式：

| 平台   | 实现方式                                          |
| ------ | ------------------------------------------------- |
| H5     | 通过 `document.documentElement` 的 class 控制主题 |
| APP    | 通过 `plus.nativeUI.setUIStyle` 设置系统 UI 样式  |
| 小程序 | 通过 `uni.$emit` 和 `uni.setStorageSync` 管理主题 |

> 小程序平台会自动保存主题模式到本地存储，下次打开时会恢复上次的设置。

## API

### `useTheme()`

**主题切换组合式函数**

**返回：** `UseThemeReturn`

---

### 返回值类型

#### `UseThemeReturn`

| 属性/方法         | 类型                                 | 说明                               |
| ----------------- | ------------------------------------ | ---------------------------------- |
| `isManual`        | `Ref<boolean>`                       | 是否手动切换主题（非跟随系统模式） |
| `isSwitchChecked` | `Ref<boolean>`                       | 当前是否为暗色主题                 |
| `themeMode`       | `Ref<'light' \| 'dark' \| 'system'>` | 当前主题模式                       |
| `changeSwitch`    | `() => void`                         | 切换主题（在浅色/暗黑之间切换）    |
| `setLightMode`    | `() => void`                         | 设置为浅色模式                     |
| `setDarkMode`     | `() => void`                         | 设置为暗黑模式                     |
| `setFollowSystem` | `() => void`                         | 设置为跟随系统模式                 |

---

### 方法说明

#### `changeSwitch()`

切换主题开关状态。如果当前是浅色模式，则切换到暗黑模式；如果当前是暗黑模式，则切换到浅色模式。

**注意：** 调用此方法会将 `themeMode` 设置为 `'light'` 或 `'dark'`（不再是 `'system'`），并设置 `isManual` 为 `true`。

---

#### `setLightMode()`

强制设置为浅色模式，不再跟随系统主题变化。

**行为：**

- 设置 `themeMode` 为 `'light'`
- 设置 `isSwitchChecked` 为 `false`
- 设置 `isManual` 为 `true`
- 应用浅色主题

---

#### `setDarkMode()`

强制设置为暗黑模式，不再跟随系统主题变化。

**行为：**

- 设置 `themeMode` 为 `'dark'`
- 设置 `isSwitchChecked` 为 `true`
- 设置 `isManual` 为 `true`
- 应用暗黑主题

---

#### `setFollowSystem()`

设置为跟随系统模式，自动响应系统主题变化。

**行为：**

- 设置 `themeMode` 为 `'system'`
- 设置 `isManual` 为 `false`
- 根据当前系统主题设置 `isSwitchChecked`
- 应用当前系统主题
- 监听系统主题变化，自动更新

## 注意事项

1. **初始化时机**：`useTheme` 会在 `onMounted` 时自动应用主题，确保在组件挂载后正确初始化。

2. **系统主题监听**：只有在 `themeMode` 为 `'system'` 时，才会响应系统主题变化。手动设置的主题不会受系统主题影响。

3. **小程序持久化**：小程序平台会自动将主题模式保存到本地存储（`mp-theme-mode`），下次打开应用时会自动恢复。

4. **H5 平台**：H5 平台通过添加/移除 `see-theme-light` 和 `see-theme-dark` class 来控制主题，请确保你的 CSS 样式已正确配置。

5. **APP 平台**：APP 平台使用 `plus.nativeUI.setUIStyle` 来设置系统 UI 样式，需要确保已正确引入 `plus` API。
