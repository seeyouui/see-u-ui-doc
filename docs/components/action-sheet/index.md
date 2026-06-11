---
layout: doc
outline: deep
title: ActionSheet 动作面板
titleTemplate: SeeYouUI - ActionSheet 动作面板
description: SeeYouUI 组件库 see-action-sheet 动作面板组件
iframeSrc: /pages/seeActionSheet/index
---

# ActionSheet 动作面板

从底部弹出的动作面板，提供一组选项供用户选择。

## 基本使用

```vue
<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)
const actions = [
  { name: '选项一', value: 1 },
  { name: '选项二', value: 2 },
  { name: '选项三', value: 3, color: '#ee0a24' },
]

const onSelect = (action, index) => {
  console.log('选中:', action, index)
  show.value = false
}
</script>

<template>
  <see-button @click="show = true">弹出动作面板</see-button>
  <see-action-sheet
    v-model:show="show"
    title="标题"
    :actions="actions"
    @select="onSelect"
  />
</template>
```

## API

### Props

| 参数名 | 说明 | 类型 | 默认值 |
|--------|------|------|--------|
| show | 是否显示（v-model） | `Boolean` | `false` |
| title | 标题 | `String` | `''` |
| description | 描述文字 | `String` | `''` |
| actions | 选项列表 | `ActionSheetAction[]` | `[]` |
| cancelText | 取消按钮文字 | `String` | `'取消'` |
| isShowCancelBtn | 是否显示取消按钮 | `Boolean` | `true` |
| zIndex | z-index 层级 | `Number` | `1001` |
| duration | 动画时长(ms) | `Number` | `300` |
| isCloseOnClickOverlay | 点击遮罩是否关闭 | `Boolean` | `true` |
| isRound | 是否圆角 | `Boolean` | `true` |
| isSafeArea | 是否适配安全区 | `Boolean` | `true` |
| beforeClose | 关闭前钩子 | `(() => boolean \| Promise<boolean>) \| null` | `null` |

### ActionSheetAction

| 参数名 | 说明 | 类型 | 默认值 |
|--------|------|------|--------|
| name | 选项名称 | `String` | - |
| description | 选项描述 | `String` | - |
| icon | 左侧图标 | `String` | - |
| color | 选项文字颜色 | `String` | - |
| isDisabled | 是否禁用 | `Boolean` | `false` |
| loading | 是否加载中 | `Boolean` | `false` |
| value | 选项值 | `any` | - |

### Events

| 属性名 | 说明 | 回调参数 |
|--------|------|----------|
| onSelect | 选中选项时触发 | `(action: ActionSheetAction, index: number)` |
| onCancel | 点击取消时触发 | - |
| onOpen | 打开时触发 | - |
| onClose | 关闭时触发 | - |
| update:show | v-model 更新 | `(value: boolean)` |

### 平台差异

| 属性 | 微信小程序 | H5 | App |
|------|-----------|-----|-----|
| show | 支持 | 支持 | 支持 |
| title | 支持 | 支持 | 支持 |
| actions | 支持 | 支持 | 支持 |
| beforeClose | 支持 | 支持 | 支持 |
| isSafeArea | 支持 | 支持 | 支持 |
