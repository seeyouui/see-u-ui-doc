---
layout: doc
outline: deep
title: Modal 模态框
titleTemplate: SeeYouUI - Modal 模态框
description: SeeYouUI 组件库 see-modal 模态框组件
iframeSrc: /pages/seeModal/index
---

# Modal 模态框

> 模态弹窗，支持标题、内容、确认/取消按钮，常用于二次确认、信息提示等场景。

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基本使用

- 通过 `show` 控制模态框显示/隐藏，支持 `v-model` 双向绑定。

```html
<see-modal v-model:show="showModal" title="提示" content="确认删除该数据？" />
```

## 按钮类型

- 通过 `confirmType` 设置确认按钮类型：`primary`（默认）、`danger`、`warning`。

```html
<see-modal v-model:show="show" title="警告" content="此操作不可逆" confirmType="danger" />
```

## 关闭前钩子

- 通过 `beforeClose` 在点击确认/取消前执行异步校验，返回 `false` 阻止关闭。
- 钩子接收 `'confirm'` 或 `'cancel'` 参数，标识点击来源。

```html
<see-modal v-model:show="show" title="提交" content="确认提交？" :beforeClose="onBeforeClose" />

<script setup>
const onBeforeClose = (action) => {
  if (action === 'confirm') {
    // 返回 false 阻止关闭
    return submitForm().then(() => true).catch(() => false)
  }
  return true
}
</script>
```

## 命令式调用

- 通过 `modal.confirm()` 或 `modal.alert()` 命令式调用，H5 端自动挂载真实组件实例。

```ts
import { modal } from 'see-u-ui'

// 确认弹窗（含取消按钮）
const result = await modal.confirm({
  title: '提示',
  content: '确认删除？',
  confirmType: 'danger'
})
if (result.confirm) {
  // 用户点击确认
}

// 提示弹窗（仅确认按钮）
await modal.alert({
  title: '提示',
  content: '操作成功'
})
```

::: tip 注意
命令式 API 在 H5 端通过 `createApp` 挂载真实 SeeModal 组件，支持所有 Props（包括 `confirmType`、`beforeClose` 等）。在小程序/App 端回退到 `uni.showModal`，部分自定义属性不可用。
:::

## API

### Props

| 参数名 | 说明 | 类型 | 默认值 |
|--------|------|------|--------|
| show | 是否显示（v-model） | Boolean | `false` |
| title | 标题 | String | `''` |
| content | 内容文字 | String | `''` |
| isShowHeader | 是否显示标题栏 | Boolean | `true` |
| isShowFooter | 是否显示底部按钮区 | Boolean | `true` |
| confirmText | 确认按钮文字 | String | `'确认'` |
| cancelText | 取消按钮文字 | String | `'取消'` |
| isShowCancelBtn | 是否显示取消按钮 | Boolean | `true` |
| confirmType | 确认按钮类型 | `'primary' \| 'danger' \| 'warning'` | `'primary'` |
| isConfirmLoading | 确认按钮加载状态 | Boolean | `false` |
| isConfirmDisabled | 确认按钮禁用状态 | Boolean | `false` |
| width | 模态框宽度 | String | `'600rpx'` |
| zIndex | z-index 层级 | Number | `1001` |
| duration | 动画时长(ms) | Number | `300` |
| isCloseOnClickOverlay | 点击遮罩是否关闭 | Boolean | `false` |
| isLockScroll | 是否锁定背景滚动 | Boolean | `true` |
| beforeClose | 关闭前钩子，接收 `'confirm'` 或 `'cancel'` | `((action: 'confirm' \| 'cancel') => boolean \| Promise<boolean>) \| null` | `null` |

### Events

| 属性名 | 说明 | 回调参数 |
|--------|------|----------|
| onConfirm | 点击确认按钮时触发 | - |
| onCancel | 点击取消按钮时触发 | - |
| onOpen | 模态框打开时触发 | - |
| onOpened | 打开动画结束时触发 | - |
| onClose | 模态框关闭时触发 | - |
| onClosed | 关闭动画结束时触发 | - |
| update:show | v-model 更新 | `value: boolean` |

### Slots

| 插槽名 | 说明 |
|--------|------|
| header | 标题栏内容 |
| default | 内容区域 |
| footer | 底部按钮区内容 |
