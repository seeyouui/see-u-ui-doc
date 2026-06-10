---
layout: doc
outline: deep
title: Count To
titleTemplate: SeeYouUI - Count To
description: SeeYouUI Component Library Count To Hook
iframeSrc: /pages/index/index
---

# Count To (useCountTo)

> `useCountTo` is a Vue composable for number scrolling animations, supporting easing functions, thousand separators, and custom formatting.
>
> It helps you easily handle: statistics cards, amount changes, data dashboards, metric growth animations, and more.
>
> > Source code: [GitHub](https://github.com/seeyouui/see-u-ui/blob/main/uni_modules/see-u-ui/utils/hooks/useCountTo/index.ts)

## Usage

::: code-group

```vue [Basic Usage]
<template>
  <text>{{ counter.displayValue.value }}</text>
  <button @tap="counter.start()">Start</button>
  <button @tap="counter.pause()">Pause</button>
  <button @tap="counter.resume()">Resume</button>
  <button @tap="counter.reset()">Reset</button>
</template>

<script setup>
import { useCountTo } from 'see-u-ui'

const counter = useCountTo({
  startVal: 0,
  endVal: 10000,
  duration: 2000,
  onStart: () => console.log('Started'),
  onChange: (value) => console.log('Changed:', value),
  onFinish: () => console.log('Finished')
})
</script>
```

```vue [With Formatting]
<script setup>
import { useCountTo } from 'see-u-ui'

const counter = useCountTo({
  startVal: 0,
  endVal: 999999.99,
  duration: 3000,
  decimals: 2,
  decimal: '.',
  separator: ',',
  prefix: '$',
  suffix: ''
})
// Displays: $999,999.99
</script>
```

```vue [Dynamic Target Update]
<script setup>
import { useCountTo } from 'see-u-ui'

const counter = useCountTo({
  startVal: 0,
  endVal: 1000,
  duration: 2000
})

// Dynamically update to new target value
function updateTarget(newValue) {
  counter.update(newValue)
}
</script>
```

:::

## Easing Function

Uses `easeOutExpo` easing function by default, producing a fast-then-slow effect. Customize via `easingFn`.

```typescript
// Easing function signature
type EasingFunction = (t: number, b: number, c: number, d: number) => number

// t: Current time
// b: Start value
// c: Change in value (endVal - startVal)
// d: Total duration
```

## API

### `useCountTo(options)`

**Number scrolling management Hook**

| Parameter        | Type                                | Default         | Description                    |
| ---------------- | ----------------------------------- | --------------- | ------------------------------ |
| options.startVal | `number`                            | `0`             | Start value                    |
| options.endVal   | `number`                            | `0`             | Target value                   |
| options.duration | `number`                            | `2000`          | Animation duration (ms)        |
| options.decimals | `number`                            | `0`             | Decimal places                 |
| options.decimal  | `string`                            | `'.'`           | Decimal point character        |
| options.separator | `string`                           | `','`           | Thousand separator             |
| options.prefix   | `string`                            | `''`            | Prefix text                    |
| options.suffix   | `string`                            | `''`            | Suffix text                    |
| options.useEasing | `boolean`                          | `true`          | Whether to use easing function |
| options.easingFn | `(t, b, c, d) => number`            | `easeOutExpo`   | Custom easing function         |
| options.onStart  | `() => void`                        | `undefined`     | Animation start callback       |
| options.onChange  | `(value: number) => void`           | `undefined`     | Value change callback          |
| options.onFinish | `() => void`                        | `undefined`     | Animation finish callback      |
| options.onReset  | `() => void`                        | `undefined`     | Reset callback                 |

**Returns:**

| Property/Method | Type                    | Description                         |
| --------------- | ----------------------- | ----------------------------------- |
| currentValue    | `Ref<number>`           | Current value                       |
| displayValue    | `ComputedRef<string>`   | Formatted display value             |
| isRunning       | `Ref<boolean>`          | Whether running                     |
| start           | `() => void`            | Start animation                     |
| pause           | `() => void`            | Pause animation                     |
| resume          | `() => void`            | Resume animation                    |
| reset           | `() => void`            | Reset to start value                |
| update          | `(value: number) => void` | Update target and restart animation |
| cleanup         | `() => void`            | Cleanup animation                   |

---

### `formatCountToValue(value, options?)`

**Format number display**

| Parameter        | Type     | Default | Description        |
| ---------------- | -------- | ------- | ------------------ |
| value            | `number` | —       | Input value        |
| options          | `object` | `{}`    | Format config      |
| options.decimals | `number` | `0`     | Decimal places     |
| options.decimal  | `string` | `'.'`   | Decimal point      |
| options.separator | `string` | `','`  | Thousand separator |
| options.prefix   | `string` | `''`    | Prefix             |
| options.suffix   | `string` | `''`    | Suffix             |

**Returns:** `string`

---

### `easeOutExpo(t, b, c, d)`

**Built-in easing function (exponential decay)**

| Parameter | Type     | Description       |
| --------- | -------- | ----------------- |
| t         | `number` | Current time      |
| b         | `number` | Start value       |
| c         | `number` | Change in value   |
| d         | `number` | Total duration    |

**Returns:** `number`
