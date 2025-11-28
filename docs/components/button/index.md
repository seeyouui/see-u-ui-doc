---
layout: doc
outline: deep
title: Button 按钮
titleTemplate: SeeYouUI - Button 按钮
description: SeeYouUI 组件库 seeButton 按钮组件
iframeSrc: /pages/seeButton/index
---

# Button 按钮

> 该组件内部实现以 uni-app [`button`](https://uniapp.dcloud.net.cn/component/button.html) 组件为基础，进行二次封装，主要区别在于：
>
> - 新增了[`type`](#按钮类型)属性，用于设置按钮类型
> - 新增了[`size`](#按钮大小)属性，用于设置按钮大小
> - 新增了[`isRipple`](#水波动画)属性，用于设置按钮点击涟漪效果

::: warning 注意
按钮开放能力与 uni-app 按钮组件保持一致，不新增任何功能。参考[uni-app 按钮组件](https://uniapp.dcloud.net.cn/component/button.html)
:::

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基本使用

```html:line-numbers {}
<SeeButton title="默认按钮" />
```

## 设置按钮参数

### 按钮类型

```html:line-numbers {}
<SeeButton title="默认按钮" />
<SeeButton title="主要按钮" type="primary" />
<SeeButton title="失败按钮" type="error" />
<SeeButton title="警告按钮" type="warning" />
<SeeButton title="成功按钮" type="success" />
```

### 镂空按钮

```html:line-numbers {}
<SeeButton isHollow title="默认按钮" />
<SeeButton isHollow title="主要按钮" type="primary" />
<SeeButton isHollow title="失败按钮" type="error" />
<SeeButton isHollow title="警告按钮" type="warning" />
<SeeButton isHollow title="成功按钮" type="success" />
```

### 禁用按钮

```html:line-numbers {}
<SeeButton isDisabled title="默认按钮" />
<SeeButton isDisabled title="主要按钮" type="primary" />
<SeeButton isDisabled title="失败按钮" type="error" />
<SeeButton isDisabled title="警告按钮" type="warning" />
<SeeButton isDisabled title="成功按钮" type="success" />
```

### 按钮大小

```html:line-numbers {}
<SeeButton size="normal" title="默认大小" />
<SeeButton size="small" title="小型尺寸" />
<SeeButton size="mini" title="最小尺寸" />
<SeeButton size="large" title="超大尺寸" />
```

### 水波动画

```html:line-numbers {}
<SeeButton title="默认动画" isRipple />
<SeeButton type="primary" size="normal" title="按钮颜色" isRipple />
<SeeButton size="normal" title="动画颜色" isRipple ripple-color="blue" />
<SeeButton
  size="large"
  title="动画时长(10000ms)"
  isRipple
  ripple-time="10000"
  ripple-color="red"
  mask-time="20000"
/>
```

### 自定义

```html:line-numbers {}
<SeeButton :customStyle="customStyle" title="自定义宽高" />
<SeeButton :radius="24" title="圆角按钮" />
<SeeButton
  size="large"
  title="渐变色按钮"
  textColor="#FFFFFF"
  color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"
  isRipple
/>
<SeeButton title="自定义颜色" color="#8A4D35" textColor="#FFFFFF" isRipple />
<SeeButton title="传入一个view">
  <view style="width: 10px; height: 10px; border: 1px red solid" />
</SeeButton>
<SeeButton size="large">
  <text>标题以slot形式</text>
</SeeButton>
```

<!-- - `title`：按钮文本
- `type`：按钮类型，可选值为`primary`、`error`、`warning`、`success`
- `size`：按钮大小，可选值为`small`、`mini`、`large`
- `isRipple`：是否开启点击涟漪效果，可选值为`true`、`false` -->

## API

### Props

| 参数名      | 说明                                                | 类型                                                       | 默认值              | 可选值                                           | 平台差异 |
| ----------- | --------------------------------------------------- | ---------------------------------------------------------- | ------------------- | ------------------------------------------------ | -------- |
| title       | 按钮文本内容                                        | String                                                     | `''`                | 任意字符串                                       | -        |
| size        | 按钮尺寸                                            | `"normal" \| "large" \| "small" \| "mini"`                 | `'normal'`          | `normal`、`large`、`small`、`mini`               | -        |
| type        | 按钮类型（预置样式）                                | `"info" \| "primary" \| "error" \| "warning" \| "success"` | `'info'`            | `info`、`primary`、`error`、`warning`、`success` | -        |
| color       | 自定义背景色（会覆盖 type 的默认颜色）              | String                                                     | `''`                | 任意 CSS 颜色值                                  | -        |
| textColor   | 文本颜色                                            | String                                                     | `''`                | 任意 CSS 颜色值                                  | -        |
| isRipple    | 是否启用水波纹点击效果                              | Boolean                                                    | `false`             | `true`、`false`                                  | -        |
| rippleTime  | 水波纹扩散动画时长（毫秒）                          | Number                                                     | `500`               | 任意数字（建议 300–800）                         | -        |
| maskTime    | 水波纹淡出遮罩时长（毫秒）                          | Number                                                     | `1000`              | 任意数字（建议为 rippleTime 的 2 倍）            | -        |
| rippleColor | 点击产生的涟漪颜色                                  | String                                                     | `'rgba(0,0,0,.15)'` | 任意 CSS 颜色值                                  | -        |
| rippleStyle | 涟漪的自定义 style（如透明度、动画方式等）          | String                                                     | `''`                | 任意字符串                                       | -        |
| customStyle | 自定义按钮 style（整体覆盖外层 view + 内部 button） | String                                                     | `''`                | 任意字符串                                       | -        |
| hoverClass  | 点击时的 hover 样式（H5 & 小程序有效）              | String / Null                                              | `''`                | 传入自定义 class 名                              | -        |
| border      | 边框开关（使用 box-shadow 模拟边框）                | `1 \| 0`                                                   | `1`                 | `1`（有边框）、`0`（无边框）                     | -        |
| isDisabled  | 是否禁用按钮                                        | Boolean                                                    | `false`             | `true`、`false`                                  | -        |
| radius      | 按钮圆角（px）                                      | Number                                                     | `4`                 | 任意数字                                         | -        |
| isHollow    | 是否为镂空按钮（反色按钮）                          | Boolean                                                    | `false`             | `true`、`false`                                  | -        |

### Events

| 属性名 | 说明           | 类型 | 默认值 | 可选值 | 平台差异说明 |
| ------ | -------------- | ---- | ------ | ------ | ------------ |
| click  | 点击按钮时触发 | 无   | -      | -      | -            |
