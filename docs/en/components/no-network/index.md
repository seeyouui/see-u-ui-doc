---
layout: doc
outline: deep
title: NoNetwork
titleTemplate: SeeYouUI - NoNetwork
description: SeeYouUI NoNetwork component
iframeSrc: /pages/seeNoNetwork/index
---

# NoNetwork

> Monitors device network status and displays a friendly prompt when offline, with support for manual and automatic retry.

## Platform Compatibility

|  App(vue)  |  App(nvue)  |  H5  |  Mini Programs  |
| :-------: | :--------: | :--: | :------------: |
|     ✅    |     ✅     |  ✅  |       ✅       |

## Code Examples

### Basic Usage

Control visibility with `v-model:show`. Set `autoCheck` to `false` to disable automatic monitoring.

```html:line-numbers {}
<see-no-network v-model:show="show" :auto-check="false" />
```

### Custom Text

Use `text` and `retryText` to customize the prompt message and retry button label.

```html:line-numbers {}
<see-no-network
  v-model:show="show"
  text="Oops, network is unavailable~"
  retry-text="Tap to retry"
  :auto-check="false"
/>
```

### Fullscreen Mode

Set `isFullscreen` to `true` to display the component as a fullscreen overlay.

```html:line-numbers {}
<see-no-network v-model:show="show" is-fullscreen :auto-check="false" />
```

### Retry Event

Listen to the `onRetry` event to execute custom logic when the retry button is tapped.

```html:line-numbers {}
<see-no-network v-model:show="show" :auto-check="false" @on-retry="handleRetry" />
```

### Auto Network Monitoring

`autoCheck` defaults to `true`. The component automatically monitors network changes. It shows when offline and hides when back online.

```html:line-numbers {}
<see-no-network v-model:show="show" />
```

### Auto Retry

Set `retryInterval` in milliseconds to automatically trigger network checks while offline.

```html:line-numbers {}
<see-no-network v-model:show="show" :retry-interval="5000" />
```

## API

### Props

| Prop | Description | Type | Default | Accepted Values |
|------|-------------|------|---------|-----------------|
| show | Visibility (v-model) | `boolean` | `false` | true / false |
| text | Prompt message | `string` | `'Network error, please check your connection'` | - |
| retryText | Retry button label | `string` | `'Retry'` | - |
| isFullscreen | Whether to display fullscreen | `boolean` | `false` | true / false |
| icon | Icon name | `string` | `'📡'` | - |
| autoCheck | Auto monitor network status | `boolean` | `true` | true / false |
| retryInterval | Auto retry interval (ms), 0 to disable | `number` | `0` | - |

### Events

| Event | Description | Callback Parameters |
|-------|-------------|---------------------|
| onRetry | Emitted when retry button is tapped | - |
| onNetworkChange | Emitted when network status changes | `online: boolean` |
| update:show | Emitted when visibility changes (v-model) | `value: boolean` |
