---
layout: doc
outline: deep
title: 层级管理
titleTemplate: SeeYouUI - 层级管理
description: SeeYouUI 组件库 层级管理 Hook
iframeSrc: /pages/index/index
---

# 层级管理（useZIndex）

> `useZIndex` 是一个全局 z-index 管理 Hook，维护一个单调递增的全局计数器（起始 1000），用于协调多个弹出类组件的层叠顺序。
>
> > 此 API 源码：[GitHub](https://github.com/seeyouui/see-u-ui/blob/main/uni_modules/see-u-ui/utils/hooks/useZIndex/index.ts)

## 使用方式

```vue
<script setup>
import { useZIndex } from 'see-u-ui'

const { currentZIndex, nextZIndex, releaseZIndex } = useZIndex()

// 获取下一个 z-index
const zIndex = nextZIndex() // 1001

// 指定基础层级
const { nextZIndex: next } = useZIndex(2000)
const z = next() // 2000
</script>
```

## API

### `useZIndex(baseZIndex?)`

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| baseZIndex | `number` | `undefined` | 可选的基础层级，确保全局计数器不低于此值 |

**返回值：**

| 属性/方法 | 类型 | 说明 |
|-----------|------|------|
| currentZIndex | `Ref<number>` | 当前 z-index 值 |
| nextZIndex | `() => number` | 获取下一个递增的 z-index |
| releaseZIndex | `() => void` | 释放当前实例（不减少全局计数器） |
| getCurrentZIndex | `() => number` | 获取当前 z-index 值 |

::: tip 注意
全局计数器单调递增，`releaseZIndex` 不会回退计数器，避免新旧实例的 z-index 冲突。
:::
