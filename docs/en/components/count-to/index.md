---
layout: doc
outline: deep
title: CountTo
titleTemplate: SeeYouUI - CountTo
description: SeeYouUI Component Library seeCountTo component
iframeSrc: /pages/seeCountTo/index
---

# CountTo

> Used for statistics cards, amount changes, data dashboards, and metric growth animations.

::: tip Note
This component is implemented based on the `useCountTo` Hook, supporting easing functions, thousand-separator formatting, and custom prefix/suffix.
:::

## Platform Differences

| App (vue) | App (nvue) | H5  | Mini Program |
| --------- | ---------- | --- | ------------ |
| √         | √          | √   | √            |

## Basic Usage

- Set the start value via `startVal` and the target value via `endVal`.
- The animation starts automatically by default.

```html:line-numbers {}
<see-count-to :startVal="0" :endVal="2024" />
```

## Animation Duration

- Set the animation duration (in milliseconds) via `duration`, defaults to `2000`.

```html:line-numbers {}
<see-count-to :endVal="1000" :duration="3000" />
<see-count-to :endVal="1000" :duration="500" />
```

## Decimal Places

- Set decimal places via `decimals`.
- Set the decimal point character via `decimal`, defaults to `.`.

```html:line-numbers {}
<see-count-to :startVal="0" :endVal="99.99" :decimals="2" />
<see-count-to :startVal="0" :endVal="99.99" :decimals="2" decimal="," />
```

## Thousand Separator

- Set the thousand separator via `separator`, defaults to `,`.

```html:line-numbers {}
<see-count-to :endVal="1000000" separator="," />
<see-count-to :endVal="1000000" separator="" />
```

## Prefix and Suffix

- Set prefix via `prefix` and suffix via `suffix`.

```html:line-numbers {}
<see-count-to :endVal="9999" prefix="$" />
<see-count-to :endVal="99.9" :decimals="1" suffix="%" />
<see-count-to :endVal="1000" prefix="Total " suffix=" items" />
```

## Easing Function

- Uses `easeOutExpo` easing function by default, producing a fast-then-slow effect.
- Set `useEasing` to `false` to disable easing and use linear animation.

```html:line-numbers {}
<!-- Eased animation (default) -->
<see-count-to :endVal="10000" useEasing />

<!-- Linear animation -->
<see-count-to :endVal="10000" :useEasing="false" />
```

## Manual Control

- Set `autoplay` to `false` to disable auto-start.
- Control via component instance methods: `start()`, `pause()`, `resume()`, `reset()`.

::: code-group

```vue [Composition]:line-numbers {}
<see-count-to ref="counterRef" :endVal="10000" :autoplay="false" />
<button @tap="counterRef?.start()">Start</button>
<button @tap="counterRef?.pause()">Pause</button>
<button @tap="counterRef?.resume()">Resume</button>
<button @tap="counterRef?.reset()">Reset</button>

<script lang="ts" setup>
import { ref } from 'vue'
const counterRef = ref()
</script>
```

```vue [Options]:line-numbers {}
<see-count-to ref="counterRef" :endVal="10000" :autoplay="false" />
<button @tap="$refs.counterRef.start()">Start</button>
<button @tap="$refs.counterRef.pause()">Pause</button>
<button @tap="$refs.counterRef.resume()">Resume</button>
<button @tap="$refs.counterRef.reset()">Reset</button>

<script>
export default {
  data() {
    return {}
  }
}
</script>
```

:::

## Dynamic Update

- Modifying `endVal` triggers a dynamic update animation.

```html:line-numbers {}
<see-count-to :endVal="endVal" />
<button @tap="endVal = Math.floor(Math.random() * 100000)">Random</button>
```

## Slot Usage

- The default slot exposes the current value.
- `prefix` and `suffix` slots allow custom prefix and suffix.

```html:line-numbers {}
<see-count-to :endVal="9999" prefix="$" suffix=" USD">
  <template #default="{ value }">
    <text style="color: red">{{ value.toFixed(0) }}</text>
  </template>
</see-count-to>
```

## Custom Styling

- Set text color via `color`.
- Set font size via `fontSize`.
- Set font weight via `fontWeight`.

```html:line-numbers {}
<see-count-to :endVal="2024" color="#ff0000" fontSize="48rpx" fontWeight="bold" />
```

## API

### Props

| Parameter  | Description                         | Type                                    | Default                              | Optional Values             | Platform Notes |
| ---------- | ----------------------------------- | --------------------------------------- | ------------------------------------ | --------------------------- | -------------- |
| startVal   | Start value                         | Number                                  | `0`                                  | Any number                  | -              |
| endVal     | Target value                        | Number                                  | `0`                                  | Any number                  | -              |
| duration   | Animation duration (ms)             | Number                                  | `2000`                               | Any positive integer        | -              |
| autoplay   | Whether to auto-start animation     | Boolean                                 | `true`                               | `true`, `false`             | -              |
| decimals   | Decimal places                      | Number                                  | `0`                                  | 0–20                        | -              |
| decimal    | Decimal point character             | String                                  | `'.'`                                | Any string                  | -              |
| separator  | Thousand separator                  | String                                  | `','`                                | Any string (can be empty)   | -              |
| prefix     | Prefix text                         | String                                  | `''`                                 | Any string                  | -              |
| suffix     | Suffix text                         | String                                  | `''`                                 | Any string                  | -              |
| useEasing  | Whether to use easing function      | Boolean                                 | `true`                               | `true`, `false`             | -              |
| easingFn   | Custom easing function              | `(t, b, c, d) => number`                | `undefined` (built-in easeOutExpo)   | Any easing function         | -              |
| color      | Text color                          | String                                  | `'var(--see-text-color, #303133)'`   | Any CSS color value         | -              |
| fontSize   | Font size                           | String                                  | `'32rpx'`                            | Any CSS font size value     | -              |
| fontWeight | Font weight                         | String / Number                         | `600`                                | Any CSS font weight value   | -              |

### Events

| Event     | Description                      | Callback Parameters | Platform Notes |
| --------- | -------------------------------- | ------------------- | -------------- |
| onStart   | Triggered when animation starts  | None                | -              |
| onChange   | Triggered on value change        | `value: number`     | -              |
| onFinish  | Triggered when animation ends    | None                | -              |
| onReset   | Triggered on reset               | None                | -              |

### Slots

| Slot Name | Description              | Scope Data                  |
| --------- | ------------------------ | --------------------------- |
| default   | Custom number display    | `{ value, displayValue }`   |
| prefix    | Custom prefix            | None                        |
| suffix    | Custom suffix            | None                        |

### Methods

Call via component instance obtained through `ref`.

| Method | Description                           | Parameters                   |
| ------ | ------------------------------------- | ---------------------------- |
| start  | Start animation                       | None                         |
| pause  | Pause animation                       | None                         |
| resume | Resume animation                      | None                         |
| reset  | Reset to start value                  | None                         |
| update | Update target value and restart       | `value: number` New target   |
