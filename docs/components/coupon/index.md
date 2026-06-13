---
layout: doc
outline: deep
title: Coupon 优惠券
titleTemplate: SeeYouUI - Coupon 优惠券
description: SeeYouUI 组件库 seeCoupon 优惠券组件
iframeSrc: /pages/seeCoupon/index
---

# Coupon 优惠券

> 电商优惠券卡片组件。左右两段式布局（金额区 + 信息区），中间齿轮缺口装饰，支持四种主题色、多种状态（可用/已领取/已使用/已过期）和右上角标签。适用于优惠券列表、卡券中心等场景。

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基础用法

- 设置 `amount`、`unit`、`condition` 渲染基础金额券。

```html:line-numbers {}
<see-coupon :amount="10" unit="¥" condition="满 100 元可用" title="新人专享券" />
```

## 折扣券

- 通过 `discountText` 设置折扣文案（优先于 `amount` 显示）。

```html:line-numbers {}
<see-coupon discount-text="8.8 折" condition="满 50 元可用" title="全场折扣券" type="warning" />
```

## 主题色

- 通过 `type` 设置主题色：`primary`（蓝）、`warning`（橙）、`success`（绿）、`error`（红）。

```html:line-numbers {}
<see-coupon :amount="20" title="新人券" type="primary" />
<see-coupon :amount="15" title="满减券" type="success" />
<see-coupon :amount="30" title="限时券" type="warning" />
<see-coupon :amount="5" title="已优惠券" type="error" />
```

## 状态

- 通过 `status` 控制状态：`available`（可领取）、`received`（已领取，按钮变文案）、`used`（已使用，显示印章）、`expired`（已过期，显示印章 + 禁点击）。

```html:line-numbers {}
<see-coupon :amount="10" title="可用券" status="available" />
<see-coupon :amount="10" title="已领取" status="received" />
<see-coupon :amount="20" title="已使用" status="used" />
<see-coupon :amount="30" title="已过期" status="expired" />
```

## 右上角标签

- 通过 `tag` 设置右上角小标签文字。

```html:line-numbers {}
<see-coupon :amount="10" title="限时抢购券" tag="限时" type="warning" />
```

## 事件

- `onClick` 点击整张卡片触发。
- `onButtonClick` 点击按钮触发（仅在 `status` 为 `'available'` 且未禁用时触发）。

```html:line-numbers {}
<see-coupon :amount="15" title="点击领取" @on-click="onClick" @on-button-click="onButtonClick" />

<script lang="ts" setup>
const onClick = (payload) => console.log('点击卡片', payload)
const onButtonClick = (payload) => console.log('点击按钮', payload)
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| amount | 主金额 | `string \| number` | `''` |
| unit | 金额单位前缀 | `string` | `'¥'` |
| discountText | 折扣文案（优先于 amount） | `string` | `''` |
| condition | 使用条件 | `string` | `''` |
| title | 主标题 | `string` | `''` |
| description | 描述 | `string` | `''` |
| validDate | 有效期文案 | `string` | `''` |
| buttonText | 按钮文字 | `string` | `'立即领取'` |
| isDisabled | 是否禁用 | `boolean` | `false` |
| status | 状态 | `'available' \| 'received' \| 'used' \| 'expired'` | `'available'` |
| type | 主题色 | `'primary' \| 'warning' \| 'success' \| 'error'` | `'primary'` |
| tag | 右上角小标签文字 | `string` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onClick | 点击整张卡片 | `{ amount, status }` |
| onButtonClick | 点击按钮 | `{ amount, status }` |

### Slots

| 名称 | 说明 |
| --- | --- |
| amount | 自定义金额区 |
| title | 自定义标题 |
| description | 自定义描述 |
| button | 自定义按钮 |
| stamp | 自定义印章图案 |
