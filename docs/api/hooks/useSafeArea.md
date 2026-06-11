---
layout: doc
outline: deep
title: useSafeArea 安全区
titleTemplate: SeeYouUI - useSafeArea 安全区
description: SeeYouUI 组件库 useSafeArea 安全区 Hook
iframeSrc: /pages/index/index
---

# 安全区（useSafeArea）

获取设备安全区内边距信息，结果缓存在模块级别（单例模式）。

## 基础用法

```typescript
import { useSafeArea } from '@/uni_modules/see-u-ui/utils/hooks/useSafeArea'

const { top, bottom, left, right } = useSafeArea()
```

## API

### 返回值

| 属性 | 类型 | 说明 |
|------|------|------|
| top | Ref&lt;number&gt; | 顶部安全区距离（px） |
| bottom | Ref&lt;number&gt; | 底部安全区距离（px） |
| left | Ref&lt;number&gt; | 左侧安全区距离（px） |
| right | Ref&lt;number&gt; | 右侧安全区距离（px） |

## 示例

### 适配顶部安全区

```vue
<template>
  <view :style="{ paddingTop: top + 'px' }">
    <text>内容区域</text>
  </view>
</template>

<script setup>
import { useSafeArea } from '@/uni_modules/see-u-ui/utils/hooks/useSafeArea'
const { top } = useSafeArea()
</script>
```

### 适配底部安全区

```vue
<template>
  <view class="tabbar" :style="{ paddingBottom: bottom + 'px' }">
    <text>底部导航栏</text>
  </view>
</template>

<script setup>
import { useSafeArea } from '@/uni_modules/see-u-ui/utils/hooks/useSafeArea'
const { bottom } = useSafeArea()
</script>
```

### 同时适配多个方向

```vue
<template>
  <view :style="{ paddingTop: top + 'px', paddingBottom: bottom + 'px' }">
    <text>安全区域内容</text>
  </view>
</template>

<script setup>
import { useSafeArea } from '@/uni_modules/see-u-ui/utils/hooks/useSafeArea'
const { top, bottom, left, right } = useSafeArea()
</script>
```

## 注意事项

- 结果缓存在模块级别，多次调用返回同一实例
- 内部调用 `uni.getSystemInfoSync()` 获取安全区信息
- 获取失败时返回默认值 0
