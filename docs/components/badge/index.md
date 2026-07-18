---
layout: doc
outline: deep
title: Badge 徽标
titleTemplate: SeeYouUI - Badge 徽标
description: SeeYouUI 组件库 seeBadge 徽标组件
iframeSrc: /pages/seeBadge/index
---

# Badge 徽标

> 徽标数组件，用于显示未读消息数量、提示用户等场景。支持圆点形式和包含文字形式，拥有多种展示模式和丰富的自定义选项。

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基本使用

- 通过 `value` 设置徽标显示的内容，可以是数字或文本。

```html:line-numbers {}
<see-badge value="5">
  <view class="box">消息</view>
</see-badge>

<see-badge value="new">
  <view class="box">通知</view>
</see-badge>
```

## 主题类型

- 通过 `type` 设置徽标主题类型，默认为 `error`。

```html:line-numbers {}
<see-badge value="5" type="primary">
  <view class="box">主要</view>
</see-badge>
<see-badge value="5" type="success">
  <view class="box">成功</view>
</see-badge>
<see-badge value="5" type="warning">
  <view class="box">警告</view>
</see-badge>
<see-badge value="5" type="info">
  <view class="box">信息</view>
</see-badge>
<see-badge value="5" type="error">
  <view class="box">错误</view>
</see-badge>
```

## 圆点徽标

- 设置 `isDot` 为 `true`，可只显示圆点，不显示数字。

```html:line-numbers {}
<see-badge is-dot type="primary">
  <view class="box">消息</view>
</see-badge>
<see-badge is-dot type="success">
  <view class="box">通知</view>
</see-badge>
```

## 最大值

- 通过 `max` 设置最大值，超过最大值会显示 `{max}+`，默认为 `99`。

```html:line-numbers {}
<see-badge :value="100" :max="99">
  <view class="box">消息</view>
</see-badge>
<see-badge :value="50" :max="99">
  <view class="box">消息</view>
</see-badge>
```

## 数字显示方式

- 通过 `numberType` 设置数字显示方式。
- `overflow`：超过最大值显示 `{max}+`（默认）。
- `ellipsis`：超过最大值显示 `{max}...`。
- `limit`：按 1000、10000 格式化显示（如 `1.5k`、`2.3w`）。

```html:line-numbers {}
<see-badge :value="1500" number-type="overflow">
  <view class="box">overflow</view>
</see-badge>
<see-badge :value="1500" number-type="ellipsis">
  <view class="box">ellipsis</view>
</see-badge>
<see-badge :value="1500" number-type="limit">
  <view class="box">limit</view>
</see-badge>
```

## 徽标形状

- 通过 `shape` 设置徽标形状，支持 `circle`（圆角）和 `horn`（左下角直角）两种形状。

```html:line-numbers {}
<see-badge value="5" shape="circle">
  <view class="box">圆角</view>
</see-badge>
<see-badge value="5" shape="horn">
  <view class="box">角形</view>
</see-badge>
```

## 显示与隐藏

- 通过 `show` 控制徽标的显示与隐藏。
- 通过 `showZero` 设置数值为 0 时是否显示，默认为 `false`。

```html:line-numbers {}
<see-badge value="5" :show="true">
  <view class="box">显示</view>
</see-badge>
<see-badge value="5" :show="false">
  <view class="box">隐藏</view>
</see-badge>
<see-badge :value="0" :show-zero="true">
  <view class="box">显示零</view>
</see-badge>
```

## 位置偏移

- 通过 `offset` 设置徽标位置偏移，格式为 `[top, right]`，单位 rpx。
- 需要配合 `absolute` 使用。

```html:line-numbers {}
<see-badge value="5" absolute :offset="[-10, -10]">
  <view class="box">偏移</view>
</see-badge>
```

## 反转样式

- 设置 `inverted` 为 `true`，可反转徽标的背景和文字颜色。

```html:line-numbers {}
<see-badge value="5" type="primary">
  <view class="box">默认</view>
</see-badge>
<see-badge value="5" type="primary" inverted>
  <view class="box">反转</view>
</see-badge>
```

## 自定义颜色

- 通过 `color` 自定义文字颜色。
- 通过 `bgColor` 自定义背景颜色。

```html:line-numbers {}
<see-badge value="5" color="#fff" bg-color="#7232dd">
  <view class="box">自定义</view>
</see-badge>
```

::: warning 注意
自定义颜色为硬编码色值，不会随深色/浅色主题自动切换。
:::

## 自定义大小

- 通过 `size` 设置字体大小，单位 px。
- 通过 `dotSize` 设置圆点大小，单位 rpx。

```html:line-numbers {}
<see-badge value="5" :size="10">
  <view class="box">小号</view>
</see-badge>
<see-badge value="5" :size="14">
  <view class="box">大号</view>
</see-badge>
<see-badge is-dot :dot-size="24">
  <view class="box">大圆点</view>
</see-badge>
```

## Props

| 属性 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| value | 展示的数字或文本内容 | String \| Number | `''` | - |
| type | 徽标主题类型 | String | `'error'` | `'info'` `'primary'` `'error'` `'warning'` `'success'` |
| color | 自定义文字颜色 | String | `''` | - |
| bgColor | 自定义背景颜色 | String | `''` | - |
| max | 最大值，超过显示 `{max}+` | String \| Number | `99` | - |
| isDot | 是否只显示圆点 | Boolean | `false` | - |
| show | 是否显示徽标 | Boolean | `true` | - |
| showZero | 数值为0时是否显示 | Boolean | `false` | - |
| shape | 徽标形状 | String | `'circle'` | `'circle'` `'horn'` |
| numberType | 数字显示方式 | String | `'overflow'` | `'overflow'` `'ellipsis'` `'limit'` |
| offset | 徽标位置偏移 [top, right]，单位 rpx | Array | `[0, 0]` | - |
| absolute | 是否使用绝对定位 | Boolean | `false` | - |
| inverted | 是否反转背景和文字颜色 | Boolean | `false` | - |
| size | 字体大小，单位 px | Number | `8` | - |
| dotSize | 圆点大小，单位 rpx | Number | `18` | - |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| onClick | 点击徽标时触发 | - |

## Slots

| 插槽名 | 说明 |
|--------|------|
| default | 徽标包裹的内容 |

## Methods

| 方法名 | 说明 | 参数 |
|--------|------|------|
| getValue | 获取徽标的原始值 | - |
| getDisplayValue | 获取徽标显示的值（经过格式化处理） | - |
