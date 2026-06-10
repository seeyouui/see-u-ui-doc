---
layout: doc
outline: deep
title: 数字滚动
titleTemplate: SeeYouUI - 数字滚动
description: SeeYouUI 组件库 数字滚动 Hook
iframeSrc: /pages/index/index
---

# 数字滚动（useCountTo）

> `useCountTo` 是一个用于数字滚动动画的 Vue 组合式函数，支持缓动函数、千分位分隔和自定义格式化。
>
> 它能帮助你轻松处理：统计卡片、金额变化、数据大屏、指标增长动画等场景。
>
> > 此 API 源码：[GitHub](https://github.com/seeyouui/see-u-ui/blob/main/uni_modules/see-u-ui/utils/hooks/useCountTo/index.ts)

## 使用方式

::: code-group

```vue [基础用法]
<template>
  <text>{{ counter.displayValue.value }}</text>
  <button @tap="counter.start()">开始</button>
  <button @tap="counter.pause()">暂停</button>
  <button @tap="counter.resume()">继续</button>
  <button @tap="counter.reset()">重置</button>
</template>

<script setup>
import { useCountTo } from 'see-u-ui'

const counter = useCountTo({
  startVal: 0,
  endVal: 10000,
  duration: 2000,
  onStart: () => console.log('开始'),
  onChange: (value) => console.log('变化:', value),
  onFinish: () => console.log('完成')
})
</script>
```

```vue [带格式化]
<script setup>
import { useCountTo } from 'see-u-ui'

const counter = useCountTo({
  startVal: 0,
  endVal: 999999.99,
  duration: 3000,
  decimals: 2,
  decimal: '.',
  separator: ',',
  prefix: '¥',
  suffix: ''
})
// 显示: ¥999,999.99
</script>
```

```vue [动态更新目标值]
<script setup>
import { useCountTo } from 'see-u-ui'

const counter = useCountTo({
  startVal: 0,
  endVal: 1000,
  duration: 2000
})

// 动态更新到新目标值
function updateTarget(newValue) {
  counter.update(newValue)
}
</script>
```

:::

## 缓动函数

默认使用 `easeOutExpo` 缓动函数，产生先快后慢的效果。可通过 `easingFn` 自定义。

```typescript
// 缓动函数签名
type EasingFunction = (t: number, b: number, c: number, d: number) => number

// t: 当前时间
// b: 起始值
// c: 变化量（endVal - startVal）
// d: 总时长
```

## API

### `useCountTo(options)`

**数字滚动管理 Hook**

| 参数            | 类型                                | 默认值          | 说明                    |
| --------------- | ----------------------------------- | --------------- | ----------------------- |
| options.startVal | `number`                           | `0`             | 起始值                  |
| options.endVal   | `number`                           | `0`             | 目标值                  |
| options.duration | `number`                           | `2000`          | 动画时长（毫秒）        |
| options.decimals | `number`                           | `0`             | 小数位数                |
| options.decimal  | `string`                           | `'.'`           | 小数点符号              |
| options.separator | `string`                          | `','`           | 千分位分隔符            |
| options.prefix   | `string`                           | `''`            | 前缀文本                |
| options.suffix   | `string`                           | `''`            | 后缀文本                |
| options.useEasing | `boolean`                         | `true`          | 是否使用缓动函数        |
| options.easingFn | `(t, b, c, d) => number`           | `easeOutExpo`   | 自定义缓动函数          |
| options.onStart  | `() => void`                       | `undefined`     | 动画开始回调            |
| options.onChange  | `(value: number) => void`          | `undefined`     | 数值变化回调            |
| options.onFinish | `() => void`                       | `undefined`     | 动画结束回调            |
| options.onReset  | `() => void`                       | `undefined`     | 重置回调                |

**返回值：**

| 属性/方法      | 类型                    | 说明                     |
| -------------- | ----------------------- | ------------------------ |
| currentValue   | `Ref<number>`           | 当前数值                 |
| displayValue   | `ComputedRef<string>`   | 格式化后的显示值         |
| isRunning      | `Ref<boolean>`          | 是否正在运行             |
| start          | `() => void`            | 开始动画                 |
| pause          | `() => void`            | 暂停动画                 |
| resume         | `() => void`            | 继续动画                 |
| reset          | `() => void`            | 重置到起始值             |
| update         | `(value: number) => void` | 更新目标值并重新动画   |
| cleanup        | `() => void`            | 清理动画                 |

---

### `formatCountToValue(value, options?)`

**格式化数字显示**

| 参数             | 类型     | 默认值  | 说明           |
| ---------------- | -------- | ------- | -------------- |
| value            | `number` | —       | 输入数值       |
| options          | `object` | `{}`    | 格式化配置     |
| options.decimals | `number` | `0`     | 小数位数       |
| options.decimal  | `string` | `'.'`   | 小数点符号     |
| options.separator | `string` | `','`  | 千分位分隔符   |
| options.prefix   | `string` | `''`    | 前缀           |
| options.suffix   | `string` | `''`    | 后缀           |

**返回：** `string`

---

### `easeOutExpo(t, b, c, d)`

**内置缓动函数（指数衰减）**

| 参数 | 类型     | 说明         |
| ---- | -------- | ------------ |
| t    | `number` | 当前时间     |
| b    | `number` | 起始值       |
| c    | `number` | 变化量       |
| d    | `number` | 总时长       |

**返回：** `number`
