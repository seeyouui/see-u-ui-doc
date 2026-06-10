---
layout: doc
outline: deep
title: Countdown
titleTemplate: SeeYouUI - Countdown
description: SeeYouUI Component Library Countdown Hook
iframeSrc: /pages/index/index
---

# Countdown (useCountdown)

> `useCountdown` is a Vue composable for countdown management, supporting precise wall-clock time calibration, millisecond-level precision, and custom formatting.
>
> It helps you easily handle: verification code countdowns, event countdowns, payment time remaining, order timeout scenarios, and more.
>
> > Source code: [GitHub](https://github.com/seeyouui/see-u-ui/blob/main/uni_modules/see-u-ui/utils/hooks/useCountdown/index.ts)

## Usage

::: code-group

```vue [Basic Usage]
<template>
  <text>{{ formatted }}</text>
  <button @tap="countdown.start()">Start</button>
  <button @tap="countdown.pause()">Pause</button>
  <button @tap="countdown.reset()">Reset</button>
</template>

<script setup>
import { computed } from 'vue'
import { useCountdown, formatCountdown } from 'see-u-ui'

const countdown = useCountdown({
  time: 60000,
  onChange: (timeData) => console.log('Changed:', timeData),
  onFinish: () => console.log('Countdown finished')
})

const formatted = computed(() => formatCountdown(countdown.current.value, 'mm:ss'))
</script>
```

```vue [Server Time Sync]
<script setup>
import { useCountdown } from 'see-u-ui'

// Use server timestamp for cross-client consistency
const countdown = useCountdown({
  serverTime: 1700000000000,
  endTime: 1700003600000,  // Ends in 1 hour
  onFinish: () => console.log('Event ended')
})
</script>
```

```vue [Millisecond Precision]
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

## Format Rules

`formatCountdown` supports the following placeholders:

| Placeholder | Description              | Example |
| ----------- | ------------------------ | ------- |
| `DD`        | Days (zero-padded)       | `01`    |
| `D`         | Days                     | `1`     |
| `HH`        | Hours (zero-padded)      | `02`    |
| `H`         | Hours                    | `2`     |
| `mm`        | Minutes (zero-padded)    | `05`    |
| `m`         | Minutes                  | `5`     |
| `ss`        | Seconds (zero-padded)    | `09`    |
| `s`         | Seconds                  | `9`     |
| `SSS`       | Milliseconds (zero-padded) | `012` |
| `S`         | Milliseconds             | `12`    |

## API

### `useCountdown(options)`

**Countdown management Hook**

| Parameter           | Type                        | Default     | Description                                            |
| ------------------- | --------------------------- | ----------- | ------------------------------------------------------ |
| options.time        | `number`                    | `0`         | Countdown duration (ms)                                |
| options.interval    | `number`                    | `auto`      | Countdown interval (ms), 16ms for millisecond, 1000ms  |
| options.millisecond | `boolean`                   | `false`     | Enable millisecond precision                           |
| options.serverTime  | `number`                    | `undefined` | Server current timestamp (ms)                          |
| options.endTime     | `number`                    | `undefined` | End timestamp (ms), used with serverTime               |
| options.onChange     | `(timeData) => void`        | `undefined` | Countdown change callback                              |
| options.onFinish    | `() => void`                | `undefined` | Countdown finish callback                              |

**Returns:**

| Property/Method | Type                    | Description                              |
| --------------- | ----------------------- | ---------------------------------------- |
| current         | `Ref<CountdownTimeData>` | Current countdown data                   |
| isRunning       | `Ref<boolean>`          | Whether running                          |
| start           | `() => void`            | Start countdown                          |
| pause           | `() => void`            | Pause countdown                          |
| reset           | `(time?: number) => void` | Reset countdown, optionally with new duration |
| finish          | `() => void`            | Immediately finish countdown             |
| cleanup         | `() => void`            | Cleanup timer                            |

---

### `parseCountdownTime(time)`

**Parse countdown data**

| Parameter | Type     | Description                    |
| --------- | -------- | ------------------------------ |
| time      | `number` | Remaining time (ms)            |

**Returns:** `CountdownTimeData`

---

### `formatCountdown(timeData, format?)`

**Format countdown display**

| Parameter | Type                | Default       | Description      |
| --------- | ------------------- | ------------- | ---------------- |
| timeData  | `CountdownTimeData` | —             | Countdown data   |
| format    | `string`            | `'HH:mm:ss'` | Format template  |

**Returns:** `string`

---

### `CountdownTimeData`

```typescript
interface CountdownTimeData {
  days: number         // Days
  hours: number        // Hours
  minutes: number      // Minutes
  seconds: number      // Seconds
  milliseconds: number // Milliseconds
  total: number        // Total remaining milliseconds
}
```
