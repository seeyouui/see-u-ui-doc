---
layout: doc
outline: deep
title: Link
titleTemplate: SeeYouUI - Link
description: SeeYouUI is a high-quality component library based on uni-app, developed with TypeScript, providing rich components and utility functions to help you quickly build cross-platform applications. SeeLink Link Component
iframeSrc: /pages/seeLink/index
---

# Link

> Link component, used to display clickable text links, supporting theme colors, custom colors, underline styles, and cross-platform navigation handling.
> Platform adaptation has been implemented for App, H5, and Mini Programs, making it the recommended component for text navigation scenarios.

## Platform Difference

| App (vue) | App (nvue) | H5  | Mini Program |
| --------- | ---------- | --- | ------------ |
| √         | √          | √   | √            |

---

## Basic Usage

- Set the display content via `text`.
- Set the jump address via `href`.
- After clicking, adaptation will be handled based on different platforms.

```html:line-numbers {}
<see-link text="This is SeeYouUI's official documentation" type="primary" href="[https://www.baidu.com](https://www.baidu.com)" />
<see-link text="Custom text color" color="#52f7bd" href="[https://www.baidu.com](https://www.baidu.com)" />

```

## Themes

* Set preset theme colors via `type`.
* Five built-in themes: `primary` `error` `success` `warning` `info`.

```html:line-numbers {}
<see-link text="A Poem" type="" href="[https://www.baidu.com](https://www.baidu.com)" />
<see-link text="Moonlight before my bed," type="primary" href="[https://www.baidu.com](https://www.baidu.com)" />
<see-link text="Could it be frost on the ground?" type="error" href="[https://www.baidu.com](https://www.baidu.com)" />
<see-link text="Looking up at the bright moon," type="warning" href="[https://www.baidu.com](https://www.baidu.com)" />
<see-link text="Bowing my head, I think of home." type="success" href="[https://www.baidu.com](https://www.baidu.com)" />

```

## Underline Style

* Control whether to display an underline via `is-line`.
* The default underline color follows the theme color.
* Custom underline color via `line-color` (overrides theme color after setting).

```html:line-numbers {}
<see-link text="Since you're here, can you give me a Star?" isLine type="primary" href="[https://www.baidu.com](https://www.baidu.com)" />
<see-link text="Custom underline color" isLine line-color="#52f7bd" type="primary" href="[https://www.baidu.com](https://www.baidu.com)" />

```

## API

### Props

| Parameter | Description | Type | Default | Optional Values / Description | Platform Differences |
| --- | --- | --- | --- | --- | --- |
| text | Link display text | `String | Number` | `''` | Any string / number | - |
| type | Text theme style | `"info" | "primary" | "error" | "warning" | "success"` | `'info'` | Theme colors | - |
| color | Custom text color (overrides `type`) | `String` | `''` | Any CSS color value | - |
| href | Target link address | `String` | `''` | Legal URL | - |
| isLine | Whether to show underline | `Boolean` | `false` | `true` / `false` | - |
| lineColor | Underline color (overrides theme color) | `String` | `''` | Any CSS color value | - |
| size | Font size | `String | Number` | `16` | Number (default `px`) or legal CSS units | - |

---

### Events

| Event Name | Description | Callback Parameters | Return Value | Platform Notes |
| --- | --- | --- | --- | --- |
| onClick | Triggered when the link is clicked | None | None | - |