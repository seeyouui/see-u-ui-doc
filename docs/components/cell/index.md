---
layout: doc
outline: deep
title: SeeCell 单元格
titleTemplate: SeeYouUI - SeeCell 单元格
description: SeeYouUI 组件库 SeeCell 单元格组件
iframeSrc: /pages/seeCell/index
---

# SeeCell 单元格

列表项组件，用于展示信息、设置项、表单项等场景。

## 平台支持

| 平台 | 支持情况 |
| --- | --- |
| H5 | ✅ |
| 微信小程序 | ✅ |
| 支付宝小程序 | ✅ |
| APP | ✅ |

## 基础用法

```vue
<template>
  <see-cell title="标题" value="内容" />
  <see-cell title="标题" value="带箭头" is-link />
</template>
```

## 带图标

通过 `icon` 属性设置左侧图标，可通过 `iconSize` 自定义图标大小。

```vue
<template>
  <see-cell title="设置" icon="⚙️" value="进入" is-link />
  <see-cell title="消息" icon="🔔" value="99+" />
</template>
```

## 带描述

通过 `label` 属性设置描述文字，展示在标题下方。

```vue
<template>
  <see-cell title="标题" label="这是一段描述信息" value="内容" />
  <see-cell title="标题" label="较长的描述信息会自动换行显示" is-link />
</template>
```

## 必填字段

设置 `isRequired` 显示表单必填星号。

```vue
<template>
  <see-cell title="用户名" value="请输入" is-required />
  <see-cell title="手机号" value="请输入" is-required is-link />
</template>
```

## 页面跳转

设置 `to` 属性后，点击单元格会自动跳转到对应页面。

```vue
<template>
  <see-cell title="个人中心" is-link to="/pages/index/index" />
</template>
```

## 自定义插槽

组件提供了 `icon`、`title`、`value`、`right` 四个插槽用于自定义内容。

```vue
<template>
  <see-cell title="用户头像">
    <template #right>
      <image src="/static/avatar.png" class="avatar" />
    </template>
  </see-cell>

  <see-cell>
    <template #title>
      <text style="color: #07c160; font-weight: bold;">自定义标题</text>
    </template>
    <template #value>
      <text style="color: #ee0a24;">自定义值</text>
    </template>
  </see-cell>
</template>
```

## 无边框

设置 `border` 为 `false` 隐藏下边框。

```vue
<template>
  <see-cell title="无下边框" value="内容" :border="false" />
</template>
```

## 居中对齐

设置 `isCenter` 使内容居中显示。

```vue
<template>
  <see-cell title="居中显示" value="内容" is-center />
</template>
```

## 点击反馈

通过 `clickEffect` 属性控制点击反馈效果，支持 `background`、`opacity`、`none` 三种模式。

```vue
<template>
  <see-cell title="背景反馈" click-effect="background" />
  <see-cell title="透明度反馈" click-effect="opacity" />
  <see-cell title="无反馈" click-effect="none" />
</template>
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `string` | - |
| value | 值/右侧文字 | `string` | - |
| label | 描述/副标题 | `string` | - |
| icon | 左侧图标名称 | `string` | - |
| iconSize | 图标大小 | `string` | `'40rpx'` |
| isLink | 是否显示右侧箭头 | `boolean` | `false` |
| to | 跳转 URL（设置后点击自动跳转） | `string` | - |
| isRequired | 是否显示表单必填星号 | `boolean` | `false` |
| border | 是否显示下边框 | `boolean` | `true` |
| height | 单元格高度 | `string` | - |
| clickEffect | 点击反馈效果 | `'background' \| 'opacity' \| 'none'` | `'background'` |
| titleWidth | 标题宽度 | `string` | `'auto'` |
| isCenter | 是否居中 | `boolean` | `false` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onClick | 点击单元格时触发 | - |

## Slots

| 插槽名 | 说明 |
| --- | --- |
| icon | 自定义左侧图标 |
| title | 自定义标题内容 |
| value | 自定义右侧值内容 |
| right | 自定义右侧区域 |
