---
layout: doc
outline: deep
title: 虚拟窗口
titleTemplate: SeeYouUI - 虚拟窗口
description: SeeYouUI 组件库 虚拟窗口 Hook
iframeSrc: /pages/index/index
---

# 虚拟窗口（useVirtualWindow）

> `useVirtualWindow` 是一个用于虚拟滚动窗口计算的 Vue 组合式函数，用于虚拟列表和虚拟表格的可见范围计算。
>
> 它能帮助你轻松处理：大数据列表渲染、表格虚拟滚动、解决节点过多导致的卡顿问题。
>
> > 此 API 源码：[GitHub](https://github.com/seeyouui/see-u-ui/blob/main/uni_modules/see-u-ui/utils/hooks/useVirtualWindow/index.ts)

## 使用方式

::: code-group

```vue [固定高度模式]
<script setup>
import { ref, computed } from 'vue'
import { useVirtualWindow } from 'see-u-ui'

const list = ref(Array.from({ length: 10000 }, (_, i) => `Item ${i}`))
const scrollTop = ref(0)

const virtual = useVirtualWindow({
  total: computed(() => list.value.length),
  itemSize: 50,           // 每项高度 50px
  viewportSize: 400,      // 视口高度 400px
  buffer: 5               // 上下缓冲 5 项
})

// 渲染范围
const startIndex = virtual.startIndex
const endIndex = virtual.endIndex
const translateOffset = virtual.translateOffset
</script>
```

```vue [动态高度模式]
<script setup>
import { ref, computed } from 'vue'
import { useVirtualWindow } from 'see-u-ui'

const list = ref([...])

const virtual = useVirtualWindow({
  total: computed(() => list.value.length),
  itemSize: 50,
  viewportSize: 400,
  dynamic: true,                    // 开启动态高度
  estimatedItemHeight: 80,          // 预估高度
  scrollOffset: currentScrollTop
})
</script>
```

:::

## 计算规则

### 固定高度模式

```
visibleStart = Math.floor(scrollOffset / itemSize)
visibleEnd = visibleStart + visibleCount + buffer * 2
translateOffset = visibleStart * itemSize
totalSize = total * itemSize
```

### 动态高度模式

以 `estimatedItemSize` 替代 `itemSize` 计算，`totalSize = total * estimatedItemSize`

## API

### `useVirtualWindow(options)`

**虚拟窗口计算 Hook**

| 参数                      | 类型                   | 默认值      | 说明                       |
| ------------------------- | ---------------------- | ----------- | -------------------------- |
| options.total             | `Ref<number> \| number` | —           | 列表总长度                 |
| options.itemSize          | `Ref<number> \| number` | —           | 单项尺寸（px），固定高度主路径 |
| options.viewportSize      | `Ref<number> \| number` | —           | 视口尺寸（px）             |
| options.buffer            | `number`               | `5`         | 缓冲项目数                 |
| options.estimatedItemSize | `Ref<number> \| number` | `undefined` | 预估单项尺寸（px），动态高度模式使用 |
| options.dynamic           | `Ref<boolean> \| boolean` | `false`   | 是否启用动态高度           |
| options.scrollOffset      | `Ref<number> \| number` | `undefined` | 滚动偏移量（px）           |

**返回值：**

| 属性/方法       | 类型                    | 说明                           |
| --------------- | ----------------------- | ------------------------------ |
| visibleStart    | `ComputedRef<number>`   | 可见范围起始索引（不含 buffer）|
| visibleEnd      | `ComputedRef<number>`   | 可见范围结束索引（不含 buffer）|
| visibleCount    | `ComputedRef<number>`   | 视口内可见项目数               |
| translateOffset | `ComputedRef<number>`   | 占位偏移量（px）               |
| totalSize       | `ComputedRef<number>`   | 内容总尺寸（px）               |
| startIndex      | `ComputedRef<number>`   | 实际渲染起始索引（含 buffer）  |
| endIndex        | `ComputedRef<number>`   | 实际渲染结束索引（含 buffer）  |
| range           | `ComputedRef<VirtualWindowRange>` | 可见范围对象           |
| scrollOffset    | `ComputedRef<number>`   | 当前滚动偏移                   |
| setScrollOffset | `(offset: number) => void` | 更新滚动偏移                |
| visibleIndices  | `ComputedRef<number[]>` | 可见范围内的索引数组           |

---

### `VirtualWindowRange`

```typescript
interface VirtualWindowRange {
  visibleStart: number    // 可见范围起始索引
  visibleEnd: number      // 可见范围结束索引
  translateOffset: number // 占位偏移量（px）
  totalSize: number       // 内容总尺寸（px）
}
```
