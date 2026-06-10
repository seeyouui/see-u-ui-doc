---
layout: doc
outline: deep
title: 倒计时
titleTemplate: SeeYouUI - 倒计时
description: SeeYouUI 组件库 倒计时 Hook
iframeSrc: /pages/index/index
---

# 倒计时（useCountdown）

> `useCountdown` 是一个用于倒计时管理的 Vue 组合式函数，支持精确的挂钟时间校准、毫秒级精度和自定义格式化。
>
> 它能帮助你轻松处理：验证码倒计时、活动倒计时、支付剩余时间、订单超时关闭等场景。
>
> > 此 API 源码：[GitHub](https://github.com/seeyouui/see-u-ui/blob/main/uni_modules/see-u-ui/utils/hooks/useCountdown/index.ts)

## 使用方式

::: code-group

```vue [基础用法]
<template>
  <text>{{ formatted }}</text>
  <button @tap="countdown.start()">开始</button>
  <button @tap="countdown.pause()">暂停</button>
  <button @tap="countdown.reset()">重置</button>
</template>

<script setup>
import { computed } from 'vue'
import { useCountdown, formatCountdown } from 'see-u-ui'

const countdown = useCountdown({
  time: 60000,
  onChange: (timeData) => console.log('变化:', timeData),
  onFinish: () => console.log('倒计时结束')
})

const formatted = computed(() => formatCountdown(countdown.current.value, 'mm:ss'))
</script>
```

```vue [服务端时间同步]
<script setup>
import { useCountdown } from 'see-u-ui'

// 使用服务端时间戳，确保多端一致
const countdown = useCountdown({
  serverTime: 1700000000000,
  endTime: 1700003600000,  // 1小时后结束
  onFinish: () => console.log('活动结束')
})
</script>
```

```vue [毫秒精度]
<script setup>
import { useCountdown } from 'see-u-ui'

const countdown = useCountdown({
  time: 10000,
  millisecond: true,
  onChange: (timeData) => {
    console.log(`${timeData.seconds}.${timeData.milliseconds}`)
  }
})
</script>
```

:::

## 格式化规则

`formatCountdown` 支持以下占位符：

| 占位符 | 说明         | 示例   |
| ------ | ------------ | ------ |
| `DD`   | 天数（补零） | `01`   |
| `D`    | 天数         | `1`    |
| `HH`   | 小时（补零） | `02`   |
| `H`    | 小时         | `2`    |
| `mm`   | 分钟（补零） | `05`   |
| `m`    | 分钟         | `5`    |
| `ss`   | 秒数（补零） | `09`   |
| `s`    | 秒数         | `9`    |
| `SSS`  | 毫秒（补零） | `012`  |
| `S`    | 毫秒         | `12`   |

## API

### `useCountdown(options)`

**倒计时管理 Hook**

| 参数                | 类型                        | 默认值      | 说明                                        |
| ------------------- | --------------------------- | ----------- | ------------------------------------------- |
| options.time        | `number`                    | `0`         | 倒计时时长（毫秒）                          |
| options.interval    | `number`                    | `自动`      | 倒计时间隔（毫秒），毫秒模式 16ms，普通模式 1000ms |
| options.millisecond | `boolean`                   | `false`     | 是否开启毫秒级精度                          |
| options.serverTime  | `number`                    | `undefined` | 服务端当前时间戳（毫秒）                    |
| options.endTime     | `number`                    | `undefined` | 结束时间戳（毫秒），配合 serverTime 使用    |
| options.onChange     | `(timeData) => void`        | `undefined` | 倒计时变化回调                              |
| options.onFinish    | `() => void`                | `undefined` | 倒计时结束回调                              |

**返回值：**

| 属性/方法     | 类型                    | 说明                     |
| ------------- | ----------------------- | ------------------------ |
| current       | `Ref<CountdownTimeData>` | 当前倒计时数据           |
| isRunning     | `Ref<boolean>`          | 是否正在运行             |
| start         | `() => void`            | 开始倒计时               |
| pause         | `() => void`            | 暂停倒计时               |
| reset         | `(time?: number) => void` | 重置倒计时，可指定新时长 |
| finish        | `() => void`            | 立即结束倒计时           |
| cleanup       | `() => void`            | 清理定时器               |

---

### `parseCountdownTime(time)`

**解析倒计时数据**

| 参数 | 类型     | 说明           |
| ---- | -------- | -------------- |
| time | `number` | 剩余时间（毫秒） |

**返回：** `CountdownTimeData`

---

### `formatCountdown(timeData, format?)`

**格式化倒计时显示**

| 参数     | 类型                | 默认值        | 说明           |
| -------- | ------------------- | ------------- | -------------- |
| timeData | `CountdownTimeData` | —             | 倒计时数据     |
| format   | `string`            | `'HH:mm:ss'` | 格式化模板     |

**返回：** `string`

---

### `CountdownTimeData`

```typescript
interface CountdownTimeData {
  days: number        // 天数
  hours: number       // 小时
  minutes: number     // 分钟
  seconds: number     // 秒数
  milliseconds: number // 毫秒
  total: number       // 总剩余毫秒数
}
```
