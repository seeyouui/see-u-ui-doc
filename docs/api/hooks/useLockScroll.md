---
layout: doc
outline: deep
title: 滚动锁定
titleTemplate: SeeYouUI - 滚动锁定
description: SeeYouUI 组件库 滚动锁定 Hook
iframeSrc: /pages/index/index
---

# 滚动锁定（useLockScroll）

> `useLockScroll` 是一个背景滚动锁定管理 Hook，基于全局引用计数实现多弹出层独立锁定/解锁，互不冲突。
>
> > 此 API 源码：[GitHub](https://github.com/seeyouui/see-u-ui/blob/main/uni_modules/see-u-ui/utils/hooks/useLockScroll/index.ts)

## 使用方式

```vue
<script setup>
import { ref } from 'vue'
import { useLockScroll } from 'see-u-ui'

const isShow = ref(false)
const { locked, lock, unlock } = useLockScroll(isShow)

// 自动跟随 isShow 变化锁定/解锁
// 也可手动调用 lock() / unlock()
</script>
```

## API

### `useLockScroll(isLocked)`

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| isLocked | `Ref<boolean>` | — | 是否锁定的响应式状态 |

**返回值：**

| 属性/方法 | 类型 | 说明 |
|-----------|------|------|
| locked | `Ref<boolean>` | 当前锁定状态 |
| lock | `() => void` | 手动锁定 |
| unlock | `() => void` | 手动解锁 |

### `resetLockScroll()`

强制重置全局锁定状态（引用计数归零、恢复 body 样式）。适用于页面导航或 keep-alive 场景。

```ts
import { resetLockScroll } from 'see-u-ui'

// 页面 onUnload 时调用
resetLockScroll()
```

::: tip 注意
多个组件同时锁定时，引用计数确保只有全部解锁后才会恢复 body 滚动。组件卸载时自动解锁。
:::
