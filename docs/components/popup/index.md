---
layout: doc
outline: deep
title: Popup 弹出层
titleTemplate: SeeYouUI - Popup 弹出层
description: SeeYouUI 组件库 see-popup 弹出层组件
iframeSrc: /pages/seePopup/index
---

# Popup 弹出层

> 作为所有弹出类组件的底层容器，提供统一的弹出/关闭动画、遮罩管理、层级管理。

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基本使用

- 通过 `show` 控制弹出层显示/隐藏，支持 `v-model` 双向绑定。

```html
<see-popup v-model:show="showPopup">
  <view style="padding: 40rpx;">弹出层内容</view>
</see-popup>
```

## 弹出位置

- 通过 `position` 设置弹出位置，支持 `top`、`bottom`、`left`、`right`、`center`。

```html
<see-popup v-model:show="show" position="bottom">底部弹出</see-popup>
<see-popup v-model:show="show" position="top">顶部弹出</see-popup>
<see-popup v-model:show="show" position="center">居中弹出</see-popup>
```

## 标题栏与关闭按钮

- 设置 `isShowHeader` 显示标题栏，`title` 设置标题文字。
- 设置 `isShowCloseBtn` 显示关闭按钮。

```html
<see-popup v-model:show="show" isShowHeader title="标题" isShowCloseBtn>
  <view style="padding: 40rpx;">带标题和关闭按钮</view>
</see-popup>
```

## 关闭前钩子

- 通过 `beforeClose` 在关闭前执行异步校验，返回 `false` 阻止关闭。

```html
<see-popup v-model:show="show" :beforeClose="onBeforeClose">
  <view>内容</view>
</see-popup>

<script setup>
const onBeforeClose = () => {
  // 返回 false 阻止关闭，返回 Promise<boolean> 支持异步
  return new Promise((resolve) => {
    uni.showModal({
      title: '确认关闭？',
      success: (res) => resolve(!res.cancel)
    })
  })
}
</script>
```

## API

### Props

| 参数名 | 说明 | 类型 | 默认值 |
|--------|------|------|--------|
| show | 是否显示（v-model） | Boolean | `false` |
| position | 弹出位置 | `'top' \| 'bottom' \| 'left' \| 'right' \| 'center'` | `'bottom'` |
| zIndex | z-index 层级 | Number | `1000` |
| duration | 动画时长(ms) | Number | `300` |
| isOverlay | 是否显示遮罩 | Boolean | `true` |
| overlayBackground | 遮罩背景色 | String | `'var(--see-overlay-bg)'` |
| overlayOpacity | 遮罩透明度 | Number | `1` |
| isCloseOnClickOverlay | 点击遮罩是否关闭 | Boolean | `true` |
| isLockScroll | 是否锁定背景滚动 | Boolean | `true` |
| isShowCloseBtn | 是否显示关闭按钮 | Boolean | `false` |
| closeBtnPosition | 关闭按钮位置 | String | `'top-right'` |
| isRound | 是否圆角 | Boolean | `true` |
| borderRadius | 自定义圆角值 | String | `'32rpx 32rpx 0 0'` |
| isSafeArea | 是否适配安全区 | Boolean | `true` |
| isShowHeader | 是否显示标题栏 | Boolean | `false` |
| title | 标题文字 | String | `''` |
| transitionName | 过渡动画名称 | String | `'see-popup'` |
| isCloseOnPressBack | 是否响应返回键 | Boolean | `true` |
| beforeClose | 关闭前钩子，返回 `false` 阻止关闭 | `(() => boolean \| Promise<boolean>) \| null` | `null` |

### Events

| 属性名 | 说明 | 回调参数 |
|--------|------|----------|
| onOpen | 弹出层打开时触发 | - |
| onOpened | 打开动画结束时触发 | - |
| onClose | 弹出层关闭时触发 | - |
| onClosed | 关闭动画结束时触发 | - |
| onClickOverlay | 点击遮罩时触发 | - |
| update:show | v-model 更新 | `value: boolean` |

### Slots

| 插槽名 | 说明 |
|--------|------|
| default | 弹出层内容 |
| header | 标题栏内容 |
| close-btn | 关闭按钮内容 |

### Expose 方法

| 方法名 | 说明 | 参数 |
|--------|------|------|
| open | 打开弹出层 | - |
| close | 关闭弹出层 | - |
| toggle | 切换弹出层状态 | - |
