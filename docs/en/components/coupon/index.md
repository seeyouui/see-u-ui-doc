---
layout: doc
outline: deep
title: Coupon
titleTemplate: SeeYouUI - Coupon
description: SeeYouUI Component Library seeCoupon component
iframeSrc: /pages/seeCoupon/index
---

# Coupon

> An e-commerce coupon card component with a two-column layout (amount area + info area), a gear-notch divider decoration in the middle, four theme colors, multiple statuses (available/received/used/expired), and a top-right tag slot. Suitable for coupon lists, card centers, and similar scenarios.

## Platform Differences

| App (vue) | App (nvue) | H5  | Mini Program |
| --------- | ---------- | --- | ------------ |
| √         | √          | √   | √            |

## Basic Usage

- Set `amount`, `unit`, and `condition` for a basic amount-based coupon.

```html:line-numbers {}
<see-coupon :amount="10" unit="¥" condition="Over ¥100" title="New User Coupon" />
```

## Discount Coupon

- Use `discountText` for discount display (takes priority over `amount`).

```html:line-numbers {}
<see-coupon discount-text="12% off" condition="Over ¥50" title="Store-wide" type="warning" />
```

## Theme Colors

- Set `type` to one of: `primary` (blue), `warning` (orange), `success` (green), `error` (red).

```html:line-numbers {}
<see-coupon :amount="20" title="New user" type="primary" />
<see-coupon :amount="15" title="Discount" type="success" />
<see-coupon :amount="30" title="Flash sale" type="warning" />
<see-coupon :amount="5" title="Used" type="error" />
```

## Status

- `available` — can be claimed.
- `received` — already claimed (button text changes).
- `used` — shows a "used" stamp and disables interactions.
- `expired` — shows an "expired" stamp and disables interactions.

```html:line-numbers {}
<see-coupon :amount="10" title="Available" status="available" />
<see-coupon :amount="10" title="Received" status="received" />
<see-coupon :amount="20" title="Used" status="used" />
<see-coupon :amount="30" title="Expired" status="expired" />
```

## Top-right Tag

- Use `tag` to display a small label in the top-right corner.

```html:line-numbers {}
<see-coupon :amount="10" title="Flash sale" tag="Limited" type="warning" />
```

## Events

- `onClick` fires when the entire card is tapped.
- `onButtonClick` fires when the button is tapped (only when `status` is `'available'` and not disabled).

```html:line-numbers {}
<see-coupon :amount="15" title="Claim now" @on-click="onClick" @on-button-click="onButtonClick" />

<script lang="ts" setup>
const onClick = (payload) => console.log('Card clicked', payload)
const onButtonClick = (payload) => console.log('Button clicked', payload)
</script>
```

## API

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| amount | Main amount | `string \| number` | `''` |
| unit | Amount unit prefix | `string` | `'¥'` |
| discountText | Discount text (overrides amount display) | `string` | `''` |
| condition | Usage condition | `string` | `''` |
| title | Main title | `string` | `''` |
| description | Description | `string` | `''` |
| validDate | Validity text | `string` | `''` |
| buttonText | Button label | `string` | `'Claim'` |
| isDisabled | Disabled state | `boolean` | `false` |
| status | Status | `'available' \| 'received' \| 'used' \| 'expired'` | `'available'` |
| type | Theme color | `'primary' \| 'warning' \| 'success' \| 'error'` | `'primary'` |
| tag | Top-right tag text | `string` | `''` |

### Events

| Event | Description | Payload |
| --- | --- | --- |
| onClick | Card tapped | `{ amount, status }` |
| onButtonClick | Button tapped | `{ amount, status }` |

### Slots

| Name | Description |
| --- | --- |
| amount | Customize the amount area |
| title | Customize the title |
| description | Customize the description |
| button | Customize the button |
| stamp | Customize the stamp image |
