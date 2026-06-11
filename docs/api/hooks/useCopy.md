---
layout: doc
outline: deep
title: 剪贴板复制
titleTemplate: SeeYouUI - 剪贴板复制
description: SeeYouUI 组件库 剪贴板复制 Hook
iframeSrc: /pages/index/index
---

# 剪贴板复制（useCopy）

> `useCopy` 是一个跨平台剪贴板复制 Hook，H5 端优先使用 Clipboard API 并自动降级到 execCommand，小程序端使用 uni API。
>
> > 此 API 源码：[GitHub](https://github.com/seeyouui/see-u-ui/blob/main/uni_modules/see-u-ui/utils/hooks/useCopy/index.ts)

## 使用方式

```vue
<template>
  <button @click="copy('要复制的文字')">复制</button>
  <text v-if="isCopying">复制中...</text>
</template>

<script setup>
import { useCopy } from 'see-u-ui'

const { copy, isCopying, lastResult } = useCopy({
  showToast: true,
  toastMessage: '复制成功'
})

// copy() 返回 Promise<boolean>
const handleCopy = async () => {
  const success = await copy('要复制的文字')
  console.log(success ? '复制成功' : '复制失败')
}
</script>
```

## API

### `useCopy(options?)`

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| options.showToast | `boolean` | `true` | 复制成功后是否显示提示 |
| options.toastMessage | `string` | `'复制成功'` | 成功提示文字 |
| options.toastDuration | `number` | `1500` | 提示显示时长(ms) |

**返回值：**

| 属性/方法 | 类型 | 说明 |
|-----------|------|------|
| copy | `(text: string) => Promise<boolean>` | 复制文字到剪贴板 |
| isCopying | `Ref<boolean>` | 是否正在复制（防抖） |
| lastResult | `Ref<boolean \| null>` | 最近一次复制结果 |

::: tip 平台差异
- **H5**：优先 `navigator.clipboard.writeText()`（需 HTTPS），降级 `document.execCommand('copy')`
- **小程序/App**：使用 `uni.setClipboardData`
:::
