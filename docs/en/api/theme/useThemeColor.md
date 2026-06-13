---
layout: doc
outline: deep
title: useThemeColor
titleTemplate: SeeYouUI - useThemeColor
description: SeeYouUI component library - Custom Theme Color
iframeSrc: /pages/config/index
---

# useThemeColor

> `useThemeColor` is a Vue composable for customizing theme colors. It allows you to set custom colors for four semantic tokens (`primary` / `success` / `warning` / `error`), **automatically derives a 4-level palette** and applies it globally.
>
> It works alongside [useTheme](./useTheme) — `useTheme` controls light/dark mode switching, while `useThemeColor` handles custom color injection and derivation.
>
> > Source code: [GitHub](https://github.com/seeyouui/see-u-ui/blob/main/uni_modules/see-u-ui/utils/hooks/useThemeColor/index.ts)

## Features

- **Independent token control**: Set or reset each of the 4 semantic colors independently
- **Automatic 4-level palette derivation**: Each base color derives `base` / `dark` / `disabled` / `light` levels for both light and dark modes
- **Module-level singleton**: All components share the same state via a single module-level instance
- **Persistence**: Automatically saved to `uni.setStorageSync('see-theme-color')`, restored on app launch
- **Cross-platform**: H5 and App-Plus use dynamic `<style>` injection; Mini Programs use `see-config` `:style` binding

## Basic Usage

```vue
<script lang="ts" setup>
import { useThemeColor } from "see-u-ui";

const { customColors, setColor, resetColor, resetAll } = useThemeColor();
</script>

<template>
  <view>
    <button @click="setColor('primary', '#ff5500')">Set primary to orange</button>
    <button @click="resetColor('primary')">Reset primary</button>
    <button @click="resetAll()">Reset all</button>
  </view>
</template>
```

## Color Derivation Formula

Given a base hex color, the system derives a 4-level palette in **HSL space**:

### Light Mode

| Level      | HSL Adjustment                   | Purpose               |
| ---------- | -------------------------------- | --------------------- |
| `base`     | Original color unchanged         | Main color / Default  |
| `dark`     | `h:0, s:+5, l:-10`              | Hover / Active state  |
| `disabled` | `h:0, s:-20, l:+25`             | Disabled solid color  |
| `light`    | `h:0, s:-10, l:+42`             | Light background      |

### Dark Mode

| Level      | HSL Adjustment                   | Purpose                  |
| ---------- | -------------------------------- | ------------------------ |
| `base`     | Original color unchanged         | Main color / Default     |
| `dark`     | `h:0, s:-5, l:-15`              | Hover / Active state     |
| `disabled` | `h:0, s:-15, l:-30`             | Disabled dark color      |
| `light`    | `rgba(R, G, B, 0.15)`           | Semi-transparent background |

> The `light` level in dark mode uses `rgba` for semi-transparency, consistent with SeeYouUI's existing design convention.

## Cross-Platform Implementation

| Platform      | Implementation                                                                              |
| ------------- | ------------------------------------------------------------------------------------------- |
| **H5**        | Dynamically injects `<style id="see-theme-color-runtime">` in `<head>`, with selectors matching `theme.scss` to ensure override specificity |
| **APP**       | Same as H5 (uses WebView rendering engine)                                                  |
| **Mini Program** | Broadcasts via `uni.$emit('see-css-vars-change')` to `see-config` component, which binds CSS variables to the root view's `:style` |

## API

### `useThemeColor()`

**Custom theme color composable**

**Returns:** `UseThemeColorReturn`

---

### Type Definitions

```ts
type ThemeColorToken = 'primary' | 'success' | 'warning' | 'error'

interface ThemeColorState {
  primary: string | null
  success: string | null
  warning: string | null
  error: string | null
}

interface ThemeColorPreset {
  name: string   // i18n key, e.g. 'themeColor.preset.blue'
  color: string  // hex color value
}
```

---

### Return Value `UseThemeColorReturn`

| Property/Method  | Type                                                   | Description                              |
| ---------------- | ------------------------------------------------------ | ---------------------------------------- |
| `customColors`   | `Ref<ThemeColorState>`                                 | Current custom color state               |
| `isCustomized`   | `ComputedRef<boolean>`                                 | Whether any token has been customized    |
| `presets`        | `ThemeColorPreset[]`                                   | Preset color list (8 defaults)           |
| `setColor`       | `(token: ThemeColorToken, color: string \| null) => void` | Set a token's custom color               |
| `setColors`      | `(colors: Partial<ThemeColorState>) => void`           | Batch set multiple tokens                |
| `resetColor`     | `(token: ThemeColorToken) => void`                     | Reset a token to its default color       |
| `resetAll`       | `() => void`                                           | Reset all tokens to default              |

---

### `setColor(token, color)`

Sets a custom color for the specified semantic token.

```ts
setColor('primary', '#ff5500')    // Change primary to orange
setColor('success', null)          // Equivalent to resetColor('success')
```

**Behavior:**
- Updates `customColors` state
- Persists to `uni.setStorageSync('see-theme-color')`
- Automatically derives light and dark 4-level palettes
- H5/APP: Injects `<style>` tag to override default CSS variables
- MP: Emits `uni.$emit` to notify `see-config`

---

### `setColors(colors)`

Batch-sets multiple token colors at once.

```ts
setColors({
  primary: '#9b6dff',
  warning: '#ffb645'
})
```

---

### `resetColor(token)`

Resets the specified token to its default color (from `theme.scss`).

```ts
resetColor('primary')  // Back to blue #3ca7ff
```

---

### `resetAll()`

Resets all tokens to their default colors.

---

### Constants

#### `DEFAULT_COLORS`

Default color values, matching `theme.scss`:

```ts
const DEFAULT_COLORS: Record<ThemeColorToken, string> = {
  primary: '#3ca7ff',
  success: '#37d497',
  warning: '#ffb645',
  error: '#ff6b6b'
}
```

#### `PRIMARY_PRESETS`

8 preset colors for UI display:

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

### `applyThemeColorOnLaunch()`

Restores custom theme colors from storage at app startup. Should be called early in `onLaunch` to prevent color flash:

```ts
import { applyThemeColorOnLaunch } from 'see-u-ui'

onLaunch(() => {
  applyThemeColorOnLaunch()  // Restore colors as early as possible
  // ... other initialization
})
```

## Color Utilities

### `colorDerive.ts`

Low-level color algorithm utilities:

```ts
hexToRgb(hex: string): [number, number, number]
rgbToHex(r: number, g: number, b: number): string
rgbToHsl(r: number, g: number, b: number): [number, number, number]
hslToRgb(h: number, s: number, l: number): [number, number, number]
adjustHsl(hex: string, dh: number, ds: number, dl: number): string
isValidHex(hex: string): boolean
derivePalette(baseHex: string, mode: 'light' | 'dark'): ColorPalette
```

> `isValidHex` is re-exported via `useThemeColor`, available as `import { isValidHex } from 'see-u-ui'`.

## Mini Program Notes

Mini Programs cannot set inline styles on the global root node, so:

1. **Wrap each page with `<see-config>`** (if not already using it)
2. `<see-config>` automatically listens for the `see-css-vars-change` event and binds CSS variables to the root view's `:style`

```vue
<template>
  <see-config>
    <view class="your-page">
      <!-- Page content -->
    </view>
  </see-config>
</template>
```

::: warning
If multiple nested `<see-config>` components exist, the inner one will override the outer. Use only one at the outermost level.
:::

## Notes

1. **Startup timing**: Call `applyThemeColorOnLaunch` as early as possible in `onLaunch` to prevent color flash
2. **Storage fallback**: Corrupted storage data silently falls back to all `null` values
3. **No component changes needed**: All components already use `var(--see-primary)` CSS variables
4. **`theme.scss` untouched**: Default values remain; overrides are handled by dynamic injection
