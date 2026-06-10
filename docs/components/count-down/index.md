---
layout: doc
outline: deep
title: CountDown 倒计时
titleTemplate: SeeYouUI - CountDown 倒计时
description: SeeYouUI 组件库 seeCountDown 倒计时组件
iframeSrc: /pages/seeCountDown/index
---

# CountDown 倒计时

> 用于验证码倒计时、活动倒计时、支付剩余时间和订单超时关闭等场景。

::: tip 说明
该组件基于 `useCountdown` Hook 实现，支持精确的挂钟时间校准、毫秒级精度和自定义格式化。
:::

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基本使用

- 通过 `time` 设置倒计时时长（毫秒）。
- 默认自动开始倒计时。

```html:line-numbers {}
<see-count-down :time="60000" />
```

## 自定义格式

- 通过 `format` 自定义显示格式。
- 支持的占位符：`DD`（天）、`HH`/`hh`（时）、`mm`（分）、`ss`（秒）、`SSS`（毫秒）。

```html:line-numbers {}
<!-- 仅显示分秒 -->
<see-count-down :time="120000" format="mm:ss" />

<!-- 显示天数 -->
<see-count-down :time="86400000" format="DD天HH时mm分ss秒" />
```

## 分隔符

- 通过 `separator` 自定义分隔符，默认为 `:`。
- 仅在未设置 `format` 时生效。

```html:line-numbers {}
<see-count-down :time="60000" separator="-" />
<see-count-down :time="60000" separator=" " />
```

## 显示天数

- 通过 `showDays` 设置是否显示天数，默认为 `false`。

```html:line-numbers {}
<see-count-down :time="172800000" showDays />
```

## 毫秒级精度

- 通过 `millisecond` 开启毫秒级精度显示。

```html:line-numbers {}
<see-count-down :time="10000" millisecond />
```

## 手动控制

- 设置 `autoStart` 为 `false` 关闭自动开始。
- 通过组件实例调用 `start()`、`pause()`、`reset()` 方法手动控制。

::: code-group

```vue [组合式]:line-numbers {}
<see-count-down ref="countdownRef" :time="60000" :autoStart="false" />
<button @tap="countdownRef?.start()">开始</button>
<button @tap="countdownRef?.pause()">暂停</button>
<button @tap="countdownRef?.reset()">重置</button>

<script lang="ts" setup>
import { ref } from 'vue'
const countdownRef = ref()
</script>
```

```vue [选项式]:line-numbers {}
<see-count-down ref="countdownRef" :time="60000" :autoStart="false" />
<button @tap="$refs.countdownRef.start()">开始</button>
<button @tap="$refs.countdownRef.pause()">暂停</button>
<button @tap="$refs.countdownRef.reset()">重置</button>

<script>
export default {
  data() {
    return {}
  }
}
</script>
```

:::

## 服务端时间

- 通过 `serverTime` 传入服务端当前时间戳，配合 `endTime` 使用，可实现跨客户端的精确倒计时。

```html:line-numbers {}
<see-count-down :serverTime="1700000000000" :endTime="1700003600000" />
```

## 插槽用法

- 默认插槽暴露当前时间数据，可用于自定义渲染。

```html:line-numbers {}
<see-count-down :time="60000">
  <template #default="{ minutes, seconds }">
    <text>{{ minutes }}分{{ seconds }}秒</text>
  </template>
</see-count-down>
```

## 自定义样式

- 通过 `textColor` 设置文字颜色。
- 通过 `fontSize` 设置字体大小。
- 通过 `block` 设置是否为块级显示。

```html:line-numbers {}
<see-count-down :time="60000" textColor="#ff0000" fontSize="32rpx" />
<see-count-down :time="60000" block />
```

## API

### Props

| 参数名      | 说明                         | 类型      | 默认值                                      | 可选值                  | 平台差异 |
| ----------- | ---------------------------- | --------- | ------------------------------------------- | ---------------------- | -------- |
| time        | 倒计时时长（毫秒）           | Number    | `0`                                         | 任意非负整数           | -        |
| format      | 自定义显示格式               | String    | `''`（自动：`HH:mm:ss` 或 `DD:HH:mm:ss`）  | 含 `DD/HH/mm/ss/SSS` 的字符串 | -        |
| autoStart   | 是否自动开始倒计时           | Boolean   | `true`                                      | `true`、`false`        | -        |
| millisecond | 是否开启毫秒级精度           | Boolean   | `false`                                     | `true`、`false`        | -        |
| interval    | 倒计时间隔（毫秒）           | Number    | `0`（自动：毫秒模式 16ms，普通模式 1000ms） | 任意正整数             | -        |
| serverTime  | 服务端当前时间戳（毫秒）     | Number    | `undefined`                                 | 任意时间戳             | -        |
| endTime     | 结束时间戳（毫秒）           | Number    | `undefined`                                 | 任意时间戳             | -        |
| separator   | 分隔符                       | String    | `':'`                                       | 任意字符串             | -        |
| showDays    | 是否显示天数                 | Boolean   | `false`                                     | `true`、`false`        | -        |
| zeroPad     | 是否补零                     | Boolean   | `true`                                      | `true`、`false`        | -        |
| textColor   | 文字颜色                     | String    | `'var(--see-text-color, #303133)'`          | 任意 CSS 颜色值        | -        |
| fontSize    | 字体大小                     | String    | `'28rpx'`                                   | 任意 CSS 字体大小值    | -        |
| block       | 是否为块级显示               | Boolean   | `false`                                     | `true`、`false`        | -        |

### Events

| 事件名    | 说明                         | 回调参数                                  | 平台差异 |
| --------- | ---------------------------- | ----------------------------------------- | -------- |
| onChange   | 倒计时每次变化时触发         | `timeData: { days, hours, minutes, seconds, milliseconds, total }` | -        |
| onFinish  | 倒计时结束时触发             | 无                                        | -        |
| onStart   | 倒计时开始时触发             | 无                                        | -        |
| onPause   | 倒计时暂停时触发             | 无                                        | -        |
| onReset   | 倒计时重置时触发             | 无                                        | -        |

### Slots

| 插槽名  | 说明         | 作用域数据                                |
| ------- | ------------ | ----------------------------------------- |
| default | 自定义显示内容 | `{ days, hours, minutes, seconds, milliseconds, total, formatted }` |

### Methods

通过 `ref` 获取组件实例后调用。

| 方法名 | 说明                   | 参数               |
| ------ | ---------------------- | ------------------ |
| start  | 开始倒计时             | 无                 |
| pause  | 暂停倒计时             | 无                 |
| reset  | 重置倒计时             | `time?: number` 可选，重置到指定时长 |
| finish | 立即结束倒计时         | 无                 |
