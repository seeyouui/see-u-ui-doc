---
layout: doc
outline: deep
title: CountDown
titleTemplate: SeeYouUI - CountDown
description: SeeYouUI Component Library seeCountDown component
iframeSrc: /pages/seeCountDown/index
---

# CountDown

> Used for verification code countdowns, event countdowns, payment time remaining, and order timeout scenarios.

::: tip Note
This component is implemented based on the `useCountdown` Hook, supporting precise wall-clock time calibration, millisecond-level precision, and custom formatting.
:::

## Platform Differences

| App (vue) | App (nvue) | H5  | Mini Program |
| --------- | ---------- | --- | ------------ |
| √         | √          | √   | √            |

## Basic Usage

- Set the countdown duration (in milliseconds) via `time`.
- The countdown starts automatically by default.

```html:line-numbers {}
<see-count-down :time="60000" />
```

## Custom Format

- Customize the display format via `format`.
- Supported placeholders: `DD` (days), `HH`/`hh` (hours), `mm` (minutes), `ss` (seconds), `SSS` (milliseconds).

```html:line-numbers {}
<!-- Show minutes and seconds only -->
<see-count-down :time="120000" format="mm:ss" />

<!-- Show days -->
<see-count-down :time="86400000" format="DDd HH:mm:ss" />
```

## Separator

- Customize the separator via `separator`, defaults to `:`.
- Only takes effect when `format` is not set.

```html:line-numbers {}
<see-count-down :time="60000" separator="-" />
<see-count-down :time="60000" separator=" " />
```

## Show Days

- Set whether to show days via `showDays`, defaults to `false`.

```html:line-numbers {}
<see-count-down :time="172800000" showDays />
```

## Millisecond Precision

- Enable millisecond-level precision display via `millisecond`.

```html:line-numbers {}
<see-count-down :time="10000" millisecond />
```

## Manual Control

- Set `autoStart` to `false` to disable auto-start.
- Manually control via component instance methods: `start()`, `pause()`, `reset()`.

::: code-group

```vue [Composition]:line-numbers {}
<see-count-down ref="countdownRef" :time="60000" :autoStart="false" />
<button @tap="countdownRef?.start()">Start</button>
<button @tap="countdownRef?.pause()">Pause</button>
<button @tap="countdownRef?.reset()">Reset</button>

<script lang="ts" setup>
import { ref } from 'vue'
const countdownRef = ref()
</script>
```

```vue [Options]:line-numbers {}
<see-count-down ref="countdownRef" :time="60000" :autoStart="false" />
<button @tap="$refs.countdownRef.start()">Start</button>
<button @tap="$refs.countdownRef.pause()">Pause</button>
<button @tap="$refs.countdownRef.reset()">Reset</button>

<script>
export default {
  data() {
    return {}
  }
}
</script>
```

:::

## Server Time

- Pass the server timestamp via `serverTime`, used with `endTime` for precise cross-client countdowns.

```html:line-numbers {}
<see-count-down :serverTime="1700000000000" :endTime="1700003600000" />
```

## Slot Usage

- The default slot exposes current time data for custom rendering.

```html:line-numbers {}
<see-count-down :time="60000">
  <template #default="{ minutes, seconds }">
    <text>{{ minutes }}m {{ seconds }}s</text>
  </template>
</see-count-down>
```

## Custom Styling

- Set text color via `textColor`.
- Set font size via `fontSize`.
- Set block-level display via `block`.

```html:line-numbers {}
<see-count-down :time="60000" textColor="#ff0000" fontSize="32rpx" />
<see-count-down :time="60000" block />
```

## API

### Props

| Parameter   | Description                          | Type      | Default                                     | Optional Values                          | Platform Notes |
| ----------- | ------------------------------------ | --------- | ------------------------------------------- | ---------------------------------------- | -------------- |
| time        | Countdown duration (ms)              | Number    | `0`                                         | Any non-negative integer                 | -              |
| format      | Custom display format                | String    | `''` (auto: `HH:mm:ss` or `DD:HH:mm:ss`)   | String with `DD/HH/mm/ss/SSS`           | -              |
| autoStart   | Whether to auto-start the countdown  | Boolean   | `true`                                      | `true`, `false`                          | -              |
| millisecond | Enable millisecond precision         | Boolean   | `false`                                     | `true`, `false`                          | -              |
| interval    | Countdown interval (ms)              | Number    | `0` (auto: 16ms for millisecond, 1000ms)    | Any positive integer                     | -              |
| serverTime  | Server timestamp (ms)                | Number    | `undefined`                                 | Any timestamp                            | -              |
| endTime     | End timestamp (ms)                   | Number    | `undefined`                                 | Any timestamp                            | -              |
| separator   | Separator character                  | String    | `':'`                                       | Any string                               | -              |
| showDays    | Whether to show days                 | Boolean   | `false`                                     | `true`, `false`                          | -              |
| zeroPad     | Whether to zero-pad numbers          | Boolean   | `true`                                      | `true`, `false`                          | -              |
| textColor   | Text color                           | String    | `'var(--see-text-color, #303133)'`          | Any CSS color value                      | -              |
| fontSize    | Font size                            | String    | `'28rpx'`                                   | Any CSS font size value                  | -              |
| block       | Whether to display as block          | Boolean   | `false`                                     | `true`, `false`                          | -              |

### Events

| Event     | Description                              | Callback Parameters                             | Platform Notes |
| --------- | ---------------------------------------- | ----------------------------------------------- | -------------- |
| onChange   | Triggered on each countdown tick         | `timeData: { days, hours, minutes, seconds, milliseconds, total }` | -              |
| onFinish  | Triggered when countdown finishes        | None                                            | -              |
| onStart   | Triggered when countdown starts          | None                                            | -              |
| onPause   | Triggered when countdown pauses          | None                                            | -              |
| onReset   | Triggered when countdown resets          | None                                            | -              |

### Slots

| Slot Name | Description            | Scope Data                                  |
| --------- | ---------------------- | ------------------------------------------- |
| default   | Custom display content | `{ days, hours, minutes, seconds, milliseconds, total, formatted }` |

### Methods

Call via component instance obtained through `ref`.

| Method | Description              | Parameters                          |
| ------ | ------------------------ | ----------------------------------- |
| start  | Start the countdown      | None                                |
| pause  | Pause the countdown      | None                                |
| reset  | Reset the countdown      | `time?: number` Optional, reset to specified duration |
| finish | Immediately finish       | None                                |
