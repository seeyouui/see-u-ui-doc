---
layout: doc
outline: deep
title: Alert 警告提示
titleTemplate: SeeYouUI - Alert 警告提示
description: SeeYouUI 组件库 seeAlert 警告提示组件
iframeSrc: /pages/seeAlert/index
---

# Alert 警告提示

> 用于页面中展示重要的提示信息，支持多种类型、显示效果、可关闭、可折叠等特性。

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基本使用

- 通过 `type` 设置警告类型，默认为 `info`。

```html:line-numbers {}
<see-alert type="info" title="信息提示" content="这是一条信息提示。" />
<see-alert type="success" title="成功提示" content="这是一条成功提示。" />
<see-alert type="warning" title="警告提示" content="这是一条警告提示。" />
<see-alert type="error" title="错误提示" content="这是一条错误提示。" />
```

## 显示效果

- 通过 `effect` 设置显示效果，支持 `light`（浅色）、`dark`（深色）、`border`（带边框）三种效果，默认为 `light`。

```html:line-numbers {}
<see-alert type="success" effect="light" title="浅色效果" content="默认的浅色背景效果。" />
<see-alert type="success" effect="dark" title="深色效果" content="深色填充背景效果。" />
<see-alert type="success" effect="border" title="边框效果" content="带边框的显示效果。" />
```

## 可关闭

- 通过设置 `isClosable` 为 `true` 显示关闭按钮。
- 关闭时会触发 `onClose` 事件。

```html:line-numbers {}
<see-alert type="warning" is-closable title="可关闭" content="点击右侧关闭按钮可以关闭此提示。" />
```

## 图标显示

- 默认显示图标，通过设置 `isShowIcon` 为 `false` 可隐藏图标。
- 通过 `icon` 可自定义图标。

```html:line-numbers {}
<see-alert type="info" title="带图标" content="默认显示图标。" />
<see-alert type="info" is-show-icon="false" title="无图标" content="隐藏图标后的效果。" />
<see-alert type="info" icon="🔔" title="自定义图标" content="使用自定义图标。" />
```

## 可折叠内容

- 当内容较长时，通过设置 `isCollapsible` 为 `true` 启用折叠功能。
- 通过 `isCollapsed` 设置默认折叠状态。

```html:line-numbers {}
<see-alert
  type="info"
  is-collapsible
  title="可折叠"
  content="这是一段很长的内容，可以通过点击展开或折叠来查看更多信息。折叠状态下只显示部分内容，展开后可以查看完整内容。"
/>
<see-alert
  type="info"
  is-collapsible
  is-collapsed
  title="默认折叠"
  content="这是一段很长的内容，默认处于折叠状态。"
/>
```

## 操作文字

- 通过 `actionText` 设置操作文字，点击后触发 `onAction` 事件。

```html:line-numbers {}
<see-alert type="info" title="操作提示" content="这是一条带操作的提示。" actionText="查看详情" @on-action="handleAction" />
```

## 文字居中

- 通过设置 `isCenter` 为 `true` 使文字居中显示。

```html:line-numbers {}
<see-alert type="info" is-center title="居中显示" content="文字内容居中对齐。" />
```

## 动画效果

- 默认启用动画效果，通过设置 `isAnimated` 为 `false` 可关闭动画。

```html:line-numbers {}
<see-alert type="success" title="带动画" content="默认启用过渡动画。" />
<see-alert type="success" is-animated="false" title="无动画" content="关闭动画后的效果。" />
```

## 受控显示

- 通过 `isShow`（v-model）控制警告提示的显示与隐藏。

```html:line-numbers {}
<see-alert v-model:isShow="visible" type="info" title="受控显示" content="通过 v-model 控制显示状态。" />
```

## API

### Props

| 参数名 | 说明 | 类型 | 默认值 |
|--------|------|------|--------|
| type | 警告类型 | `'success'` \| `'error'` \| `'warning'` \| `'info'` | `'info'` |
| title | 标题 | String | `''` |
| content | 内容文字 | String | `''` |
| effect | 显示效果 | `'light'` \| `'dark'` \| `'border'` | `'light'` |
| isClosable | 是否可关闭 | Boolean | `false` |
| isShowIcon | 是否显示图标 | Boolean | `true` |
| icon | 自定义图标 | String | `''` |
| isCollapsible | 是否可折叠（长内容） | Boolean | `false` |
| isCollapsed | 默认折叠状态 | Boolean | `false` |
| actionText | 操作文字 | String | `''` |
| isCenter | 文字是否居中 | Boolean | `false` |
| isShow | 是否显示（v-model） | Boolean | `true` |
| isAnimated | 是否启用动画 | Boolean | `true` |

### Events

| 属性名 | 说明 |
|--------|------|
| onClose | 关闭时触发 |
| onAction | 点击操作文字时触发 |
| update:isShow | v-model 更新 |
| update:isCollapsed | 折叠状态更新 |

### Slots

| 插槽名 | 说明 |
|--------|------|
| default | 自定义内容 |
| icon | 自定义图标 |
| action | 自定义操作区 |
