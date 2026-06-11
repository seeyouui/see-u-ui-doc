---
layout: doc
outline: deep
title: Parse
titleTemplate: SeeYouUI - Parse
description: SeeYouUI component see-parse - cross-platform rich-text HTML parser
iframeSrc: /pages/seeParse/index
---

# Parse

> Cross-platform HTML rich-text parser & renderer. Built-in **XSS sanitization**, **image tap preview**, **link interception** and **per-tag style injection**.  
> On H5 it uses `v-html` for higher fidelity; on App / Mini-Programs it uses `<rich-text>` with parsed nodes.

## Platform Compatibility

| App (vue) | App (nvue) | H5  | Mini-Program |
| --------- | ---------- | --- | ------------ |
| ✓         | ✓          | ✓   | ✓            |

## Basic Usage

Pass an HTML string via `content` and the component renders it with sensible default styles.

```vue
<template>
  <see-parse content="<h3>Title</h3><p>This is <b>rich text</b></p>" />
</template>
```

## Images & Links

- Image `src` attributes are auto-collected from `content`; tapping an image triggers preview by default (`previewImage` is `true`).
- Tapping an `<a>` emits `onLinkTap` so you can implement custom navigation.

```vue
<template>
  <see-parse :content="html" @on-link-tap="onLinkTap" @on-img-tap="onImgTap" />
</template>

<script setup>
import { ref } from 'vue'

const html = ref(`
  <p><img src="https://example.com/a.png" alt="logo" /></p>
  <p>Visit <a href="https://www.seeuui.cn">SeeYouUI</a> for more.</p>
`)

const onLinkTap = (href) => uni.showToast({ title: 'tapped: ' + href, icon: 'none' })
const onImgTap = (src, urls) => console.log('img', src, urls)
</script>
```

## Custom Tag Styles

Use `tagStyle` to inject inline styles for specific tags. They merge with any existing `style` attribute.

```vue
<see-parse
  :content="html"
  :tag-style="{
    h3: 'color: #3ca7ff; border-bottom: 2px solid #3ca7ff;',
    p: 'color: #ff6b6b; font-size: 16px; line-height: 1.8;',
    img: 'max-width: 100%; border-radius: 8px;'
  }"
/>
```

## Built-in XSS Protection

The component automatically strips:

- Dangerous tags: `<script>`, `<style>`, `<iframe>`, `<frame>`, `<object>`, `<embed>`
- All `on*` event attributes (`onclick`, `onmouseover`, …)
- Unsafe protocols: `javascript:`, `vbscript:`, `data:text/html`
- HTML comments

```vue
<see-parse content="<p>Safe ✅</p><script>alert(1)</script><div onclick='bad()'>x</div>" />
<!-- Output: only <p>Safe ✅</p> + <div>x</div>; script and onclick removed -->
```

## Empty Placeholder

When `content` is empty and `emptyText` is set, the placeholder is shown.

```vue
<see-parse content="" empty-text="No content yet." />
```

## Selectable Text

Set `selectable` to allow text selection. Only takes effect on `<rich-text>` platforms (App / Mini-Programs); on H5, text is selectable by default.

```vue
<see-parse :content="html" selectable />
```

## Preserve Newlines

By default `\n` is collapsed (matching browser behavior). Set `preserveNewline` to convert `\n` into `<br/>` — useful for plain-text-ish content from a backend.

```vue
<see-parse :content="'line 1\nline 2\nline 3'" preserve-newline />
```

## Dynamic Updates

Update via reactive `content` or call the `setContent` method. `onLoad` fires after re-parse.

```vue
<template>
  <see-parse ref="parseRef" :content="html" @on-load="onLoad" />
  <see-button @tap="refresh">Refresh</see-button>
</template>

<script setup>
import { ref } from 'vue'

const html = ref('<p>initial</p>')
const parseRef = ref()
const refresh = () => parseRef.value?.setContent('<p>new ' + Date.now() + '</p>')
const onLoad = (nodes) => console.log('nodes:', nodes.length)
</script>
```

## Extract Plain Text

`getText()` returns the stripped, entity-decoded, whitespace-normalized text — useful for summaries or word counts.

```js
const text = parseRef.value?.getText()
```

## Custom Whitelist

Defaults already cover all standard `rich-text` tags. For stricter scenarios:

```vue
<see-parse
  :content="html"
  :allowed-tags="['p', 'b', 'i', 'a']"
  :allowed-attrs="['href', 'title']"
/>
```

## API

### Props

| Prop            | Type                       | Default     | Description                                          |
| --------------- | -------------------------- | ----------- | ---------------------------------------------------- |
| content         | `String`                   | `''`        | HTML string to render                                |
| tagStyle        | `Record<string, string>`   | `{}`        | Per-tag inline style injection                       |
| selectable      | `Boolean`                  | `false`     | Allow text selection (rich-text platforms)           |
| previewImage    | `Boolean`                  | `true`      | Enable tap-to-preview for images                     |
| imageUrls       | `String[]`                 | `undefined` | Custom preview list; auto-collected if omitted       |
| emptyText       | `String`                   | `''`        | Placeholder text when `content` is empty             |
| preserveNewline | `Boolean`                  | `false`     | Convert `\n` to `<br/>`                              |
| lazyLoad        | `Boolean`                  | `false`     | Lazy-load images on H5                               |
| containerClass  | `String`                   | `''`        | Custom class on the root element                     |
| containerStyle  | `String \| Object`         | `''`        | Custom style on the root element                     |
| space           | `String`                   | `''`        | rich-text space handling: `ensp` / `emsp` / `nbsp`   |
| allowedTags     | `String[]`                 | `undefined` | Custom tag whitelist                                 |
| allowedAttrs    | `String[]`                 | `undefined` | Custom attribute whitelist                           |

### Events

| Event      | Payload                                  | Description                  |
| ---------- | ---------------------------------------- | ---------------------------- |
| onLoad     | `(nodes: ParseNode[])`                   | Parsing finished             |
| onError    | `(err: Error)`                           | Parsing failed               |
| onClick    | `(event)`                                | Container tapped             |
| onLinkTap  | `(href: string, event)`                  | A link was tapped            |
| onImgTap   | `(src: string, urls: string[], event)`   | An image was tapped          |
| onReady    | `()`                                     | Component mounted            |

### Methods (via ref)

| Method         | Args             | Returns         | Description                                |
| -------------- | ---------------- | --------------- | ------------------------------------------ |
| getText()      | `()`             | `string`        | Stripped, decoded plain text               |
| setContent()   | `(html: string)` | `void`          | Replace current content                    |
| getImageUrls() | `()`             | `string[]`      | All image URLs in the content              |
| parseHTML()    | `(html: string)` | `ParseNode[]`   | Run the underlying parser on any HTML      |

### TypeScript

```ts
import type {
  SeeParseProps,
  SeeParseEmits,
  SeeParseNode,
  SeeParseElementNode,
  SeeParseTextNode,
  UseHtmlParserOptions
} from 'see-u-ui'
```

## Security Notes

This component provides baseline XSS protection that covers common rich-text scenarios. For **fully untrusted UGC**, run a server-side sanitizer (e.g. DOMPurify) on the HTML before sending it to the client.
