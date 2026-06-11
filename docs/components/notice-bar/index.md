---
layout: doc
outline: deep
title: NoticeBar 通知栏
titleTemplate: SeeYouUI - NoticeBar 通知栏
description: SeeYouUI 组件库 seeNoticeBar 通知栏组件
iframeSrc: /pages/seeNoticeBar/index
---

# NoticeBar 通知栏

> 用于展示通知、公告等滚动消息，支持水平滚动、垂直轮播、可关闭等特性。

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基本使用

- 通过 `text` 设置通知文字内容。

```html:line-numbers {}
<see-notice-bar text="这是一条通知消息，内容超出时会自动滚动。" />
```

## 通知类型

- 通过 `type` 设置通知类型，默认为 `info`。

```html:line-numbers {}
<see-notice-bar type="info" text="这是一条信息通知。" />
<see-notice-bar type="warning" text="这是一条警告通知。" />
<see-notice-bar type="error" text="这是一条错误通知。" />
```

## 滚动控制

- 默认开启滚动，通过设置 `isScrollable` 为 `false` 可关闭滚动。
- 通过 `speed` 设置滚动速度，单位为 px/s，默认 50。
- 通过 `delay` 设置滚动开始前的停顿时间，单位为 ms，默认 1000。

```html:line-numbers {}
<see-notice-bar text="默认滚动速度的通知消息。" />
<see-notice-bar text="快速滚动的通知消息。" :speed="100" />
<see-notice-bar text="停顿更久再滚动。" :delay="3000" />
<see-notice-bar is-scrollable="false" text="不滚动的通知消息，内容超出时将被截断。" />
```

## 触摸暂停

- 默认触摸时暂停滚动，通过设置 `isPauseOnTouch` 为 `false` 可关闭此行为。

```html:line-numbers {}
<see-notice-bar text="触摸时会暂停滚动，松开后继续。" />
<see-notice-bar is-pause-on-touch="false" text="触摸时不会暂停滚动。" />
```

## 可关闭

- 通过设置 `isClosable` 为 `true` 显示关闭按钮。
- 关闭时会触发 `onClose` 事件。

```html:line-numbers {}
<see-notice-bar is-closable text="这是一条可关闭的通知消息。" />
```

## 图标

- 默认显示左侧图标，通过设置 `isShowIcon` 为 `false` 可隐藏图标。
- 通过 `icon` 自定义左侧图标，默认为 `🔊`。
- 通过 `rightIcon` 设置右侧图标。

```html:line-numbers {}
<see-notice-bar text="默认带喇叭图标的通知。" />
<see-notice-bar is-show-icon="false" text="没有图标的通知。" />
<see-notice-bar icon="📢" text="自定义左侧图标的通知。" />
<see-notice-bar right-icon="➡️" text="带右侧图标的通知。" />
```

## 垂直轮播

- 通过设置 `vertical` 为 `true` 启用垂直轮播模式。
- 通过 `messages` 传入多条消息。
- 通过 `verticalInterval` 设置轮播间隔，单位为 ms，默认 3000。

```html:line-numbers {}
<see-notice-bar
  vertical
  :messages="['第一条通知消息', '第二条通知消息', '第三条通知消息']"
/>
<see-notice-bar
  vertical
  :messages="['快速轮播消息一', '快速轮播消息二']"
  :vertical-interval="1500"
/>
```

## 受控显示

- 通过 `isShow`（v-model）控制通知栏的显示与隐藏。

```html:line-numbers {}
<see-notice-bar v-model:isShow="visible" text="通过 v-model 控制显示状态。" />
```

## 自定义插槽

- 通过 `left` 插槽自定义左侧内容。
- 通过 `right` 插槽自定义右侧内容。

```html:line-numbers {}
<see-notice-bar text="自定义左侧和右侧内容。">
  <template #left>
    <text>自定义左侧</text>
  </template>
  <template #right>
    <text>自定义右侧</text>
  </template>
</see-notice-bar>
```

## API

### Props

| 参数名 | 说明 | 类型 | 默认值 |
|--------|------|------|--------|
| text | 通知文字 | String | `''` |
| type | 通知类型 | `'info'` \| `'warning'` \| `'error'` | `'info'` |
| speed | 滚动速度（px/s） | Number | `50` |
| isScrollable | 是否滚动 | Boolean | `true` |
| delay | 滚动开始前停顿（ms） | Number | `1000` |
| isClosable | 是否可关闭 | Boolean | `false` |
| isShowIcon | 是否显示左侧图标 | Boolean | `true` |
| icon | 自定义左侧图标 | String | `'🔊'` |
| rightIcon | 右侧图标 | String | `''` |
| isShow | 是否显示（v-model） | Boolean | `true` |
| isPauseOnTouch | 触摸时是否暂停滚动 | Boolean | `true` |
| vertical | 是否垂直滚动（多消息轮播） | Boolean | `false` |
| messages | 多条消息（vertical=true 时使用） | String[] | `[]` |
| verticalInterval | 垂直轮播间隔（ms） | Number | `3000` |

### Events

| 属性名 | 说明 |
|--------|------|
| onClick | 点击通知栏时触发 |
| onClose | 关闭时触发 |
| onRightClick | 点击右侧图标时触发 |
| update:isShow | v-model 更新 |

### Slots

| 插槽名 | 说明 |
|--------|------|
| left | 自定义左侧内容 |
| right | 自定义右侧内容 |
