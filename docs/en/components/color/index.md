---
layout: doc
outline: deep
title: Color
titleTemplate: SeeYouUI - Color
description: SeeYouUI Component Library seeColor Component
iframeSrc: /pages/seeColor/index
---

# Color

> SeeYouUI defines a color system to unify the color performance of components.

::: info Tip
SeeYouUI colors have been imported via [uni.scss](/config.md#import-seeyouuis-global-scss-theme-file-in-uniscss). Please do not define them again.
:::

## Primary Color

<div style="width: 100%;display: flex;align-items: center;justify-content: space-between;">
  <div style="width: 400px;margin-right: 24px;">
    <div style="width: 100%; height: 104px; background-color: #3ca7ff;padding: 12px;">
        <span style="color: #FFFFFF;">primary</span>
        <br />
        <span style="color: #FFFFFF;">#3ca7ff</span>
    </div>
   <div style="width: 100%; height: 104px;display: flex;align-items: center;justify-content: center;flex-wrap: wrap;">
     <div style="flex: 1; height: 104px; background-color: #208ee8;padding: 12px;">
        <span style="color: #FFFFFF;">dark</span>
        <br />
        <span style="color: #FFFFFF;">#208ee8</span>
     </div>
    <div style="flex: 1; height: 104px; background-color: #a8d8ff;padding: 12px;">
        <span style="color: #FFFFFF;">disabled</span>
        <br />
        <span style="color: #FFFFFF;">#a8d8ff</span>
    </div>
    <div style="flex: 1; height: 104px; background-color: #e9f6ff;padding: 12px;">
        <span style="color: #aeb0b4;">light</span>
        <br />
        <span style="color: #aeb0b4;">#e9f6ff</span>
    </div>
   </div>
  </div>
<div style="flex: 1">

:::code-group

```scss:[Definition]line-numbers {}
// Primary Color
$see-primary: #3ca7ff;
$see-primary-dark: #208ee8;
$see-primary-disabled: #a8d8ff;
$see-primary-light: #e9f6ff;

```

```scss:[usage]line-numbers {}
// Primary Color
color: $see-primary;
color: $see-primary-dark;
color: $see-primary-disabled;
color: $see-primary-light;

```

:::

</div>
</div>

## Support Colors: Error, Success, Warning, Info

<div style="width: 100%;display: flex;align-items: center;justify-content: space-between;">
<div style="width: 400px;margin-right: 24px;">
<div style="width: 100%; height: 104px; background-color: #ff6b6b;padding: 12px;">
<span style="color: #FFFFFF;">error</span>
<br />
<span style="color: #FFFFFF;">#ff6b6b</span>
</div>
<div style="width: 100%; height: 104px;display: flex;align-items: center;justify-content: center;flex-wrap: wrap;">
<div style="flex: 1; height: 104px; background-color: #e85b5b;padding: 12px;">
<span style="color: #FFFFFF;">dark</span>
<br />
<span style="color: #FFFFFF;">#e85b5b</span>
</div>
<div style="flex: 1; height: 104px; background-color: #ffbaba;padding: 12px;">
<span style="color: #FFFFFF;">disabled</span>
<br />
<span style="color: #FFFFFF;">#ffbaba</span>
</div>
<div style="flex: 1; height: 104px; background-color: #fff2f2;padding: 12px;">
<span style="color: #aeb0b4;">light</span>
<br />
<span style="color: #aeb0b4;">#fff2f2</span>
</div>
</div>
</div>
<div style="flex: 1">
<div style="width: 400px;margin-right: 24px;">
<div style="width: 100%; height: 104px; background-color: #ffb645;padding: 12px;">
<span style="color: #FFFFFF;">warning</span>
<br />
<span style="color: #FFFFFF;">#ffb645</span>
</div>
<div style="width: 100%; height: 104px;display: flex;align-items: center;justify-content: center;flex-wrap: wrap;">
<div style="flex: 1; height: 104px; background-color: #f0a233;padding: 12px;">
<span style="color: #FFFFFF;">dark</span>
<br />
<span style="color: #FFFFFF;">#f0a233</span>
</div>
<div style="flex: 1; height: 104px; background-color: #ffd9a6;padding: 12px;">
<span style="color: #FFFFFF;">disabled</span>
<br />
<span style="color: #FFFFFF;">#ffd9a6</span>
</div>
<div style="flex: 1; height: 104px; background-color: #fff6e8;padding: 12px;">
<span style="color: #aeb0b4;">light</span>
<br />
<span style="color: #aeb0b4;">#fff6e8</span>
</div>
</div>
</div>
</div>
</div>

<div style="height: 24px;"></div>

<div style="width: 100%;display: flex;align-items: center;justify-content: space-between;">
<div style="width: 400px;margin-right: 24px;">
<div style="width: 100%; height: 104px; background-color: #8a8f99;padding: 12px;">
<span style="color: #FFFFFF;">info</span>
<br />
<span style="color: #FFFFFF;">#8a8f99</span>
</div>
<div style="width: 100%; height: 104px;display: flex;align-items: center;justify-content: center;flex-wrap: wrap;">
<div style="flex: 1; height: 104px; background-color: #6e737c;padding: 12px;">
<span style="color: #FFFFFF;">dark</span>
<br />
<span style="color: #FFFFFF;">#6e737c</span>
</div>
<div style="flex: 1; height: 104px; background-color: #d2d5d9;padding: 12px;">
<span style="color: #FFFFFF;">disabled</span>
<br />
<span style="color: #FFFFFF;">#d2d5d9</span>
</div>
<div style="flex: 1; height: 104px; background-color: #f5f6f7;padding: 12px;">
<span style="color: #aeb0b4;">light</span>
<br />
<span style="color: #aeb0b4;">#f5f6f7</span>
</div>
</div>
</div>
<div style="flex: 1">
<div style="width: 400px;margin-right: 24px;">
<div style="width: 100%; height: 104px; background-color: #37d497;padding: 12px;">
<span style="color: #FFFFFF;">success</span>
<br />
<span style="color: #FFFFFF;">#37d497</span>
</div>
<div style="width: 100%; height: 104px;display: flex;align-items: center;justify-content: center;flex-wrap: wrap;">
<div style="flex: 1; height: 104px; background-color: #2bb881;padding: 12px;">
<span style="color: #FFFFFF;">dark</span>
<br />
<span style="color: #FFFFFF;">#2bb881</span>
</div>
<div style="flex: 1; height: 104px; background-color: #b6efd9;padding: 12px;">
<span style="color: #FFFFFF;">disabled</span>
<br />
<span style="color: #FFFFFF;">#b6efd9</span>
</div>
<div style="flex: 1; height: 104px; background-color: #f2fff9;padding: 12px;">
<span style="color: #aeb0b4;">light</span>
<br />
<span style="color: #aeb0b4;">#f2fff9</span>
</div>
</div>
</div>
</div>
</div>

:::code-group

```scss:[error]line-numbers {}
// Error
$see-error: #ff6b6b;
$see-error-dark: #e85b5b;
$see-error-disabled: #ffbaba;
$see-error-light: #fff2f2;

```

```scss:[warning]line-numbers {}
// Warning
$see-warning: #ffb645;
$see-warning-dark: #f0a233;
$see-warning-disabled: #ffd9a6;
$see-warning-light: #fff6e8;

```

```scss:[info]line-numbers {}
// Default Info
$see-info: #8a8f99;
$see-info-dark: #6e737c;
$see-info-disabled: #d2d5d9;
$see-info-light: #f5f6f7;

```

```scss:[success]line-numbers {}
// Success
$see-success: #37d497;
$see-success-dark: #2bb881;
$see-success-disabled: #b6efd9;
$see-success-light: #f2fff9;

```

:::

## Text Colors

<div style="width: 100%;display: flex;align-items: center;justify-content: space-between;">
<div style="width: 400px;margin-right: 24px;">
<div style="width: 100%; height: 104px; background-color: #2e2f33;padding: 12px;">
<span style="color: #FFFFFF;">Primary Text</span>
<br />
<span style="color: #FFFFFF;">#2e2f33</span>
</div>
<div style="width: 100%; height: 104px;display: flex;align-items: center;justify-content: center;flex-wrap: wrap;">
<div style="flex: 1; height: 104px; background-color: #5a5c60;padding: 12px;">
<span style="color: #FFFFFF;">Regular Text</span>
<br />
<span style="color: #FFFFFF;">#5a5c60</span>
</div>
<div style="flex: 1; height: 104px; background-color: #8c8e93;padding: 12px;">
<span style="color: #FFFFFF;">Secondary Text</span>
<br />
<span style="color: #FFFFFF;">#8c8e93</span>
</div>
<div style="flex: 1; height: 104px; background-color: #c9ccd1;padding: 12px;">
<span style="color: #ffffff;">Placeholder Text</span>
<br />
<span style="color: #ffffff;">#c9ccd1</span>
</div>
</div>
</div>
<div style="flex: 1">

:::code-group

```scss:[definition]line-numbers {}
// Text Colors
$see-main-color: #2e2f33;
$see-content-color: #5a5c60;
$see-tips-color: #8c8e93;
$see-light-color: #c9ccd1;

```

```scss:[usage]line-numbers {}
// Text Colors
color: $see-main-color;
color: $see-content-color;
color: $see-tips-color;
color: $see-light-color;

```

:::

</div>
</div>

## Border Colors

<div style="width: 100%;display: flex;align-items: center;justify-content: space-between;">
<div style="width: 400px;margin-right: 24px;">
<div style="width: 100%; height: 104px; background-color: #aeb0b4;padding: 12px;">
<span style="color: #FFFFFF;">Tier 1 Border</span>
<br />
<span style="color: #FFFFFF;">#aeb0b4</span>
</div>
<div style="width: 100%; height: 104px;display: flex;align-items: center;justify-content: center;flex-wrap: wrap;">
<div style="flex: 1; height: 104px; background-color: #c3c5c8;padding: 12px;">
<span style="color: #FFFFFF;">Tier 2 Border</span>
<br />
<span style="color: #FFFFFF;">#c3c5c8</span>
</div>
<div style="flex: 1; height: 104px; background-color: #d9dadc;padding: 12px;">
<span style="color: #FFFFFF;">Tier 3 Border</span>
<br />
<span style="color: #FFFFFF;">#d9dadc</span>
</div>
<div style="flex: 1; height: 104px; background-color: #eceff1;padding: 12px;">
<span style="color: #ffffff;">Tier 4 Border</span>
<br />
<span style="color: #ffffff;">#eceff1</span>
</div>
</div>
</div>
<div style="flex: 1">

:::code-group

```scss:[definition]line-numbers {}
// Border Colors
$see-border-color: #aeb0b4;
$see-border-two-color: #c3c5c8;
$see-border-three-color: #d9dadc;
$see-border-four-color: #eceff1;

```

```scss:[usage]line-numbers {}
// Border Colors
border-color: $see-border-color;
border-color: $see-border-two-color;
border-color: $see-border-three-color;
border-color: $see-border-four-color;

```

:::

</div>
</div>

## Background Colors

<div style="width: 100%;display: flex;align-items: center;justify-content: space-between;">
<div style="width: 400px;margin-right: 24px;">
<div style="width: 100%; height: 104px; background-color: #1e222a;padding: 12px;">
<span style="color: #FFFFFF;">Dark</span>
<br />
<span style="color: #FFFFFF;">#1e222a</span>
</div>
<div style="width: 100%; height: 104px;display: flex;align-items: center;justify-content: center;flex-wrap: wrap;">
<div style="flex: 1; height: 104px; background-color: #f6faff;padding: 12px;">
<span style="color: #aeb0b4;">Light</span>
<br />
<span style="color: #aeb0b4;">#f6faff</span>
</div>
</div>
</div>
<div style="flex: 1">

:::code-group

```scss:[dark]line-numbers {}
$see-bg-dark-color: #1e222a;

```

```scss:[light]line-numbers {}
$see-bg-light-color: #f6faff;

```

:::

</div>
</div>
