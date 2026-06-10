---
layout: doc
outline: deep
title: CountTo 数字滚动
titleTemplate: SeeYouUI - CountTo 数字滚动
description: SeeYouUI 组件库 seeCountTo 数字滚动组件
iframeSrc: /pages/seeCountTo/index
---

# CountTo 数字滚动

> 用于统计卡片、金额变化、数据大屏和指标增长动画等场景。

::: tip 说明
该组件基于 `useCountTo` Hook 实现，支持缓动函数、千分位分隔和自定义前缀后缀。
:::

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基本使用

- 通过 `startVal` 设置起始值，`endVal` 设置目标值。
- 默认自动开始滚动动画。

```html:line-numbers {}
<see-count-to :startVal="0" :endVal="2024" />
```

## 动画时长

- 通过 `duration` 设置动画时长（毫秒），默认为 `2000`。

```html:line-numbers {}
<see-count-to :endVal="1000" :duration="3000" />
<see-count-to :endVal="1000" :duration="500" />
```

## 小数位数

- 通过 `decimals` 设置小数位数。
- 通过 `decimal` 设置小数点符号，默认为 `.`。

```html:line-numbers {}
<see-count-to :startVal="0" :endVal="99.99" :decimals="2" />
<see-count-to :startVal="0" :endVal="99.99" :decimals="2" decimal="," />
```

## 千分位分隔

- 通过 `separator` 设置千分位分隔符，默认为 `,`。

```html:line-numbers {}
<see-count-to :endVal="1000000" separator="," />
<see-count-to :endVal="1000000" separator="" />
```

## 前缀与后缀

- 通过 `prefix` 设置前缀，`suffix` 设置后缀。

```html:line-numbers {}
<see-count-to :endVal="9999" prefix="¥" />
<see-count-to :endVal="99.9" :decimals="1" suffix="%" />
<see-count-to :endVal="1000" prefix="累计 " suffix=" 件" />
```

## 缓动函数

- 默认使用 `easeOutExpo` 缓动函数，产生先快后慢的效果。
- 设置 `useEasing` 为 `false` 可关闭缓动，使用线性动画。

```html:line-numbers {}
<!-- 缓动动画（默认） -->
<see-count-to :endVal="10000" useEasing />

<!-- 线性动画 -->
<see-count-to :endVal="10000" :useEasing="false" />
```

## 手动控制

- 设置 `autoplay` 为 `false` 关闭自动开始。
- 通过组件实例调用 `start()`、`pause()`、`resume()`、`reset()` 方法。

::: code-group

```vue [组合式]:line-numbers {}
<see-count-to ref="counterRef" :endVal="10000" :autoplay="false" />
<button @tap="counterRef?.start()">开始</button>
<button @tap="counterRef?.pause()">暂停</button>
<button @tap="counterRef?.resume()">继续</button>
<button @tap="counterRef?.reset()">重置</button>

<script lang="ts" setup>
import { ref } from 'vue'
const counterRef = ref()
</script>
```

```vue [选项式]:line-numbers {}
<see-count-to ref="counterRef" :endVal="10000" :autoplay="false" />
<button @tap="$refs.counterRef.start()">开始</button>
<button @tap="$refs.counterRef.pause()">暂停</button>
<button @tap="$refs.counterRef.resume()">继续</button>
<button @tap="$refs.counterRef.reset()">重置</button>

<script>
export default {
  data() {
    return {}
  }
}
</script>
```

:::

## 动态更新

- 通过修改 `endVal` 可触发动态更新动画。

```html:line-numbers {}
<see-count-to :endVal="endVal" />
<button @tap="endVal = Math.floor(Math.random() * 100000)">随机值</button>
```

## 插槽用法

- 默认插槽暴露当前数值。
- `prefix` 和 `suffix` 插槽可自定义前缀后缀。

```html:line-numbers {}
<see-count-to :endVal="9999" prefix="¥" suffix="元">
  <template #default="{ value }">
    <text style="color: red">{{ value.toFixed(0) }}</text>
  </template>
</see-count-to>
```

## 自定义样式

- 通过 `color` 设置文字颜色。
- 通过 `fontSize` 设置字体大小。
- 通过 `fontWeight` 设置字体粗细。

```html:line-numbers {}
<see-count-to :endVal="2024" color="#ff0000" fontSize="48rpx" fontWeight="bold" />
```

## API

### Props

| 参数名     | 说明                           | 类型                                           | 默认值                               | 可选值                  | 平台差异 |
| ---------- | ------------------------------ | ---------------------------------------------- | ------------------------------------ | ---------------------- | -------- |
| startVal   | 起始值                         | Number                                         | `0`                                  | 任意数字               | -        |
| endVal     | 目标值                         | Number                                         | `0`                                  | 任意数字               | -        |
| duration   | 动画时长（毫秒）               | Number                                         | `2000`                               | 任意正整数             | -        |
| autoplay   | 是否自动开始动画               | Boolean                                        | `true`                               | `true`、`false`        | -        |
| decimals   | 小数位数                       | Number                                         | `0`                                  | 0–20                   | -        |
| decimal    | 小数点符号                     | String                                         | `'.'`                                | 任意字符串             | -        |
| separator  | 千分位分隔符                   | String                                         | `','`                                | 任意字符串（可为空）   | -        |
| prefix     | 前缀文本                       | String                                         | `''`                                 | 任意字符串             | -        |
| suffix     | 后缀文本                       | String                                         | `''`                                 | 任意字符串             | -        |
| useEasing  | 是否使用缓动函数               | Boolean                                        | `true`                               | `true`、`false`        | -        |
| easingFn   | 自定义缓动函数                 | `(t, b, c, d) => number`                       | `undefined`（内置 easeOutExpo）      | 任意缓动函数           | -        |
| color      | 文字颜色                       | String                                         | `'var(--see-text-color, #303133)'`   | 任意 CSS 颜色值        | -        |
| fontSize   | 字体大小                       | String                                         | `'32rpx'`                            | 任意 CSS 字体大小值    | -        |
| fontWeight | 字体粗细                       | String / Number                                | `600`                                | 任意 CSS 字体粗细值    | -        |

### Events

| 事件名    | 说明                   | 回调参数            | 平台差异 |
| --------- | ---------------------- | ------------------- | -------- |
| onStart   | 动画开始时触发         | 无                  | -        |
| onChange   | 数值变化时触发         | `value: number`     | -        |
| onFinish  | 动画结束时触发         | 无                  | -        |
| onReset   | 重置时触发             | 无                  | -        |

### Slots

| 插槽名  | 说明         | 作用域数据                              |
| ------- | ------------ | --------------------------------------- |
| default | 自定义数字显示 | `{ value, displayValue }`               |
| prefix  | 自定义前缀   | 无                                      |
| suffix  | 自定义后缀   | 无                                      |

### Methods

通过 `ref` 获取组件实例后调用。

| 方法名 | 说明           | 参数                   |
| ------ | -------------- | ---------------------- |
| start  | 开始动画       | 无                     |
| pause  | 暂停动画       | 无                     |
| resume | 继续动画       | 无                     |
| reset  | 重置到起始值   | 无                     |
| update | 更新目标值并重新动画 | `value: number` 新目标值 |
