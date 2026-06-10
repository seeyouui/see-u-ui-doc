---
layout: doc
outline: deep
title: NoNetwork 无网络提示
titleTemplate: SeeYouUI - NoNetwork 无网络提示
description: SeeYouUI 组件库 SeeNoNetwork 无网络提示组件
iframeSrc: /pages/seeNoNetwork/index
---

# NoNetwork 无网络提示

> 监听设备网络状态，在断网时显示友好的提示信息，支持手动重试和自动重试。

## 平台兼容性

|  App(vue)  |  App(nvue)  |  H5  |  小程序  |
| :-------: | :--------: | :--: | :-----: |
|     ✅    |     ✅     |  ✅  |   ✅    |

## 代码示例

### 基础用法

通过 `v-model:show` 控制显示与隐藏，设置 `autoCheck` 为 `false` 关闭自动监听。

```html:line-numbers {}
<see-no-network v-model:show="show" :auto-check="false" />
```

### 自定义文案

通过 `text` 和 `retryText` 自定义提示文案和重试按钮文案。

```html:line-numbers {}
<see-no-network
  v-model:show="show"
  text="哎呀，网络开小差了~"
  retry-text="点击重试"
  :auto-check="false"
/>
```

### 全屏模式

设置 `isFullscreen` 为 `true`，组件将以全屏遮罩形式展示。

```html:line-numbers {}
<see-no-network v-model:show="show" is-fullscreen :auto-check="false" />
```

### 重试事件

监听 `onRetry` 事件，在用户点击重试按钮时执行自定义逻辑。

```html:line-numbers {}
<see-no-network v-model:show="show" :auto-check="false" @on-retry="handleRetry" />
```

### 自动监听网络状态

`autoCheck` 默认为 `true`，组件会自动监听网络变化。断网时自动显示，恢复时自动隐藏。

```html:line-numbers {}
<see-no-network v-model:show="show" />
```

### 自动重试

设置 `retryInterval`（毫秒），组件会在断网期间自动触发网络检测。

```html:line-numbers {}
<see-no-network v-model:show="show" :retry-interval="5000" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| show | 是否显示（v-model） | `boolean` | `false` | true / false |
| text | 提示文案 | `string` | `'网络异常，请检查网络连接'` | - |
| retryText | 重试按钮文案 | `string` | `'重新连接'` | - |
| isFullscreen | 是否全屏显示 | `boolean` | `false` | true / false |
| icon | 图标名称 | `string` | `'📡'` | - |
| autoCheck | 是否自动监听网络状态 | `boolean` | `true` | true / false |
| retryInterval | 自动重试间隔（毫秒），0 表示不自动重试 | `number` | `0` | - |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| onRetry | 点击重试按钮时触发 | - |
| onNetworkChange | 网络状态变化时触发 | `online: boolean` |
| update:show | 显示状态变化时触发（v-model） | `value: boolean` |
