---
layout: doc
outline: deep
title: 传送门
titleTemplate: SeeYouUI - 传送门
description: SeeYouUI 组件库 传送门 Hook
iframeSrc: /pages/index/index
---

# 传送门（useTeleport）

> `useTeleport` 是一个跨平台传送门抽象 Hook，弥合 H5 端 Vue `<Teleport>` 与小程序/App 端 `position: fixed` 方案之间的差异。
>
> > 此 API 源码：[GitHub](https://github.com/seeyouui/see-u-ui/blob/main/uni_modules/see-u-ui/utils/hooks/useTeleport/index.ts)

## 使用方式

```vue
<script setup>
import { useTeleport } from 'see-u-ui'

const { isTeleported, targetSelector, isSupported } = useTeleport()

// H5 端：isTeleported = true, targetSelector = 'body'
// 小程序端：isTeleported = false, 使用 position: fixed 兜底
</script>
```

## API

### `useTeleport(options?)`

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| options.isEnabled | `MaybeRef<boolean>` | `true` | 是否启用传送门 |
| options.to | `string` | `'body'` | 目标选择器 |

**返回值：**

| 属性/方法 | 类型 | 说明 |
|-----------|------|------|
| isTeleported | `ComputedRef<boolean>` | 是否应使用传送门 |
| targetSelector | `ComputedRef<string>` | 传送目标选择器 |
| isSupported | `boolean` | 当前平台是否支持原生 Teleport（仅 H5 为 true） |
