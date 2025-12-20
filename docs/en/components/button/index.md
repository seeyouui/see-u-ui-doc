---
layout: doc
outline: deep
title: Button
titleTemplate: SeeYouUI - Button
description: SeeYouUI Component Library seeButton component
iframeSrc: /pages/seeButton/index
---

# Button

> This component is internally implemented based on the uni-app [`button`](https://uniapp.dcloud.net.cn/component/button.html) component with secondary encapsulation. The main differences are:
>
> - Added the [`type`](#button-types) attribute to set the button type.
> - Added the [`size`](#button-sizes) attribute to set the button size.
> - Added the [`is-ripple`](#ripple-animation) attribute to set the ripple effect when clicked.

::: warning Notice
The button's open capabilities remain consistent with the uni-app button component; no new features are added in that regard. Please refer to the [uni-app Button Component](https://uniapp.dcloud.net.cn/component/button.html).
:::

## Platform Differences

| App (vue) | App (nvue) | H5  | Mini Program |
| --------- | ---------- | --- | ------------ |
| √         | √          | √   | √            |

## Basic Usage

- Set the button text via `title`.

```html:line-numbers {}
<see-button title="Default Button" />

```

## Button Types

* Set the button theme via the `type` parameter, defaulting to `info`.

```html:line-numbers {}
<see-button title="Default Button" />
<see-button title="Primary Button" type="primary" />
<see-button title="Error Button" type="error" />
<see-button title="Warning Button" type="warning" />
<see-button title="Success Button" type="success" />

```

## Hollow Buttons

* By setting `isHollow` to `true`, the background color becomes transparent while the border and text retain the theme color. Defaults to `false`.

```html:line-numbers {}
<see-button isHollow title="Default Button" />
<see-button isHollow title="Primary Button" type="primary" />
<see-button isHollow title="Error Button" type="error" />
<see-button isHollow title="Warning Button" type="warning" />
<see-button isHollow title="Success Button" type="success" />

```

## Disabled Buttons

* Set the button to a disabled state by setting the `isDisabled` parameter to `true`.
* In the disabled state, click events will not trigger, and the style will turn gray or reduce in transparency.

```html:line-numbers {}
<see-button isDisabled title="Default Button" />
<see-button isDisabled title="Primary Button" type="primary" />
<see-button isDisabled title="Error Button" type="error" />
<see-button isDisabled title="Warning Button" type="warning" />
<see-button isDisabled title="Success Button" type="success" />

```

## Button Sizes

* Set the button size via the `size` parameter. We provide four attributes: `normal`, `small`, `mini`, `large`.

```html:line-numbers {}
<see-button size="normal" title="Normal Size" />
<see-button size="small" title="Small Size" />
<see-button size="mini" title="Mini Size" />
<see-button size="large" title="Large Size" />

```

## Ripple Animation

* When the `isRipple` attribute is enabled, clicking the button will produce a ripple effect spreading from the contact point.
* `ripple-color`: Custom ripple color.
* `ripple-time`: Ripple diffusion speed (milliseconds).



```html:line-numbers {}
<see-button title="Default Animation" isRipple />
<see-button type="primary" size="normal" title="Button Color" isRipple />
<see-button size="normal" title="Animation Color" isRipple ripple-color="blue" />
<see-button
  size="large"
  title="Animation Duration (10000ms)"
  isRipple
  ripple-time="10000"
  ripple-color="red"
  mask-time="20000"
/>

```

## Customization

::: code-group

```vue [Composition]:line-numbers {}
<see-button :customStyle="customStyle" title="Custom Width/Height" />
<see-button :radius="24" title="Rounded Button" />
<see-button
  size="large"
  title="Gradient Button"
  textColor="#FFFFFF"
  color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"
  isRipple
/>
<see-button title="Custom Color" color="#8A4D35" textColor="#FFFFFF" isRipple />
<see-button title="Passing a view">
  <view style="width: 10px; height: 10px; border: 1px red solid" />
</see-button>
<see-button size="large">
  <text>Title as a slot</text>
</see-button>

<script lang="ts" setup>
const customStyle = {
  width: "200px",
  height: "150px",
};
</script>

```

```vue [Options]:line-numbers {}
<see-button :customStyle="customStyle" title="Custom Width/Height" />
<see-button :radius="24" title="Rounded Button" />
<see-button
  size="large"
  title="Gradient Button"
  textColor="#FFFFFF"
  color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"
  isRipple
/>
<see-button title="Custom Color" color="#8A4D35" textColor="#FFFFFF" isRipple />
<see-button title="Passing a view">
  <view style="width: 10px; height: 10px; border: 1px red solid" />
</see-button>
<see-button size="large">
  <text>Title as a slot</text>
</see-button>

<script>
export default {
  data() {
    return {
      customStyle: {
        width: "200px",
        height: "150px",
      },
    };
  },
};
</script>

```

:::

## API

### Props

| Parameter | Description | Type | Default | Optional Values | Platform Notes |
| --- | --- | --- | --- | --- | --- |
| title | Button text content | String | `''` | Any string | - |
| size | Button size | `"normal" | "large" | "small" | "mini"` | `'normal'` | `normal`, `large`, `small`, `mini` | - |
| type | Button type (preset styles) | `"info" | "primary" | "error" | "warning" | "success"` | `'info'` | `info`, `primary`, `error`, `warning`, `success` | - |
| color | Custom background color (overrides default type color) | String | `''` | Any CSS color value | - |
| textColor | Text color | String | `''` | Any CSS color value | - |
| isRipple | Whether to enable the ripple click effect | Boolean | `false` | `true`, `false` | - |
| rippleTime | Ripple diffusion animation duration (ms) | Number | `500` | Any number (suggested 300–800) | - |
| maskTime | Ripple mask fade-out duration (ms) | Number | `1000` | Any number (suggested 2x rippleTime) | - |
| rippleColor | Color of the generated ripple | String | `'rgba(0,0,0,.15)'` | Any CSS color value | - |
| rippleStyle | Custom style for the ripple (e.g., opacity, animation type) | String | `''` | Any string | - |
| customStyle | Custom button style (overrides outer view + inner button) | String | `''` | Any string | - |
| hoverClass | Hover style when clicked (valid for H5 & Mini Programs) | String / Null | `''` | Custom class name | - |
| border | Border toggle (simulates border using box-shadow) | `1 | 0` | `1` | `1` (with border), `0` (no border) | - |
| isDisabled | Whether the button is disabled | Boolean | `false` | `true`, `false` | - |
| radius | Button corner radius (px) | Number | `4` | Any number | - |
| isHollow | Whether the button is a hollow button (inverted colors) | Boolean | `false` | `true`, `false` | - |

### Events

| Attribute | Description | Type | Default | Optional | Platform Notes |
| --- | --- | --- | --- | --- | --- |
| click | Triggered when the button is clicked | None | - | - | - |