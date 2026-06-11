---
layout: doc
outline: deep
title: 弹出层管理
titleTemplate: SeeYouUI - 弹出层管理
description: SeeYouUI 组件库 弹出层管理 Hook
iframeSrc: /pages/index/index
---

# 弹出层管理（usePopup）

> `usePopup` 是一个弹出层生命周期管理 Hook，管理打开/关闭状态和动画时序，支持异步 `beforeClose` 守卫。
>
> > 此 API 源码：[GitHub](https://github.com/seeyouui/see-u-ui/blob/main/uni_modules/see-u-ui/utils/hooks/usePopup/index.ts)

## 使用方式

```vue
<script setup>
import { ref } from 'vue'
import { usePopup } from 'see-u-ui'

const show = ref(false)
const beforeClose = ref(null)

const { isVisible, open, close, toggle } = usePopup({
  show,
  beforeClose,
  duration: 300,
  onOpen: () => console.log('打开'),
  onOpened: () => console.log('打开动画完成'),
  onClose: () => console.log('关闭'),
  onClosed: () => console.log('关闭动画完成'),
  onUpdateShow: (val) => { show.value = val }
})

// 支持 async/await
await open()
await close()
</script>
```

## API

### `usePopup(options)`

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| options.show | `Ref<boolean>` | — | 外部控制显示的响应式状态 |
| options.beforeClose | `Ref<(() => boolean \| Promise<boolean>) \| null>` | `undefined` | 关闭前守卫，返回 `false` 阻止关闭 |
| options.duration | `number` | `300` | 动画时长(ms) |
| options.onOpen | `() => void` | `undefined` | 打开时回调 |
| options.onOpened | `() => void` | `undefined` | 打开动画完成后回调 |
| options.onClose | `() => void` | `undefined` | 关闭时回调 |
| options.onClosed | `() => void` | `undefined` | 关闭动画完成后回调 |
| options.onUpdateShow | `(value: boolean) => void` | `undefined` | v-model 双向同步回调 |

**返回值：**

| 属性/方法 | 类型 | 说明 |
|-----------|------|------|
| isVisible | `Ref<boolean>` | 内部可见状态 |
| isAnimating | `Ref<boolean>` | 是否正在动画中 |
| open | `() => Promise<void>` | 打开弹出层 |
| close | `() => Promise<void>` | 关闭弹出层（受 beforeClose 守卫） |
| toggle | `() => Promise<void>` | 切换状态 |
| cleanup | `() => void` | 清理定时器 |
