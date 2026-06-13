---
layout: doc
outline: deep
title: ScratchCard 刮刮卡
titleTemplate: SeeYouUI - ScratchCard 刮刮卡
description: SeeYouUI 组件库 seeScratchCard 刮刮卡组件
iframeSrc: /pages/seeScratchCard/index
---

# ScratchCard 刮刮卡

> Canvas 实现的刮刮卡组件。手指刮开顶部覆盖层即可揭晓底层奖品内容。支持自定义覆盖颜色/文字、笔刷大小、刮开阈值自动揭晓等，适用于营销活动、抽奖、红包等互动场景。

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基础用法

- 奖品内容放在默认插槽中，覆盖层通过 `coverText` 设置提示文字。
- 组件自动处理触摸轨迹刮除，达到 `threshold`（默认 60%）时自动揭晓。

```html:line-numbers {}
<see-scratch-card :width="300" :height="160" cover-text="刮一刮">
  <view class="prize">🎉 恭喜获得 10 元红包</view>
</see-scratch-card>
```

## 自定义覆盖颜色

- 通过 `coverColor` 设置覆盖层纯色背景，配合 `coverTextColor` 设置文字颜色。

```html:line-numbers {}
<see-scratch-card :width="300" :height="160" cover-color="#ff6b6b" cover-text="刮开有奖" cover-text-color="#fff">
  <view>🎁 50 积分</view>
</see-scratch-card>
```

## 金色涂层 + 自定义阈值

- 设置 `brushSize` 控制笔刷半径，`threshold` 控制多少百分比后自动揭晓。

```html:line-numbers {}
<see-scratch-card
  :width="300"
  :height="160"
  cover-color="#e8b830"
  cover-text="刮一刮"
  :brush-size="30"
  :threshold="40"
>
  <view>🏆 免单券 x1</view>
</see-scratch-card>
```

## 禁用模式

- 设置 `isDisabled` 为 `true` 禁止刮开。

```html:line-numbers {}
<see-scratch-card :width="300" :height="160" is-disabled cover-text="刮一刮">
  <view>已过期</view>
</see-scratch-card>
```

## 事件

- `onStart`：首次开始刮时触发（仅触发一次）。
- `onProgress`：刮开进度变化时触发（百分比）。
- `onComplete`：达到阈值且 `autoReveal=true` 时自动触发。

```html:line-numbers {}
<see-scratch-card
  @on-start="onStart"
  @on-progress="onProgress"
  @on-complete="onComplete"
>
  <view>奖品内容</view>
</see-scratch-card>

<script lang="ts" setup>
const onStart = () => console.log('开始刮')
const onProgress = (percent: number) => console.log('进度', percent, '%')
const onComplete = (percent: number) => console.log('揭晓', percent, '%')
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 宽度（数值默认 rpx） | `number \| string` | `600` |
| height | 高度（数值默认 rpx） | `number \| string` | `300` |
| coverColor | 覆盖层纯色 | `string` | `'#c0c0c0'` |
| coverImage | 覆盖图片地址（优先于 coverColor） | `string` | `''` |
| coverText | 覆盖层文字 | `string` | `'刮一刮'` |
| coverTextColor | 覆盖层文字颜色 | `string` | `'#ffffff'` |
| coverTextSize | 覆盖层文字字号（rpx） | `number` | `40` |
| brushSize | 笔刷半径（rpx） | `number` | `40` |
| threshold | 揭晓阈值百分比（0-100） | `number` | `60` |
| isDisabled | 是否禁用 | `boolean` | `false` |
| autoReveal | 达到阈值是否自动揭晓 | `boolean` | `true` |
| canvasId | Canvas ID（多实例时需唯一） | `string` | 自动生成 |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onStart | 第一次开始刮 | - |
| onProgress | 刮开进度变化 | `percent: number` |
| onComplete | 达到阈值时触发 | `percent: number` |

### Expose

| 方法 | 说明 | 参数 |
| --- | --- | --- |
| reveal | 手动揭晓（清除全部覆盖层） | - |
| reset | 重置覆盖层（重新开始） | - |
| getProgress | 获取当前刮开百分比 | - |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 奖品内容（被覆盖层遮挡） |
