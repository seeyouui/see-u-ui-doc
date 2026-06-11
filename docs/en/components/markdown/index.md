---
layout: doc
outline: deep
title: Markdown
titleTemplate: SeeYouUI - Markdown
description: SeeYouUI component see-markdown - cross-platform Markdown parser & renderer
iframeSrc: /pages/seeMarkdown/index
---

# Markdown

> Cross-platform Markdown parser & renderer. **Zero-dependency** string parser that emits safe HTML and delegates rendering to [`<see-parse>`](/en/components/parse/index.md).
> Write once, run on H5 / App / Mini-Programs.

## Platform Compatibility

| App (vue) | App (nvue) | H5  | Mini-Program |
| --------- | ---------- | --- | ------------ |
| ✓         | ✓          | ✓   | ✓            |

## `<see-markdown>` vs `<see-parse>`

| Aspect       | `<see-parse>`                            | `<see-markdown>`                                 |
| ------------ | ---------------------------------------- | ------------------------------------------------ |
| Input        | HTML string                              | Markdown text                                    |
| Best fit     | Server-rendered HTML, WYSIWYG output     | Articles / chat messages / AI streaming output   |
| Safety       | XSS filter (strips dangerous tags)       | Char escaping + protocol guard + see-parse stack |
| Dependencies | Zero                                     | Zero (uses `<see-parse>` internally)             |

## Basic Usage

Pass Markdown text via `content`. The component supports a GFM subset (see "Syntax" below).

```vue
<see-markdown :content="md" />
```

```js
const md = `# Heading
## Sub-heading
A **paragraph** with *italic*, ~~strike~~ and \`inline code\`.`
```

## Syntax

| Category       | Markdown                                                           |
| -------------- | ------------------------------------------------------------------ |
| Heading        | `#` ~ `######`                                                     |
| Emphasis       | `**bold**` / `__bold__` / `*italic*` / `_italic_` / `~~del~~`      |
| Inline code    | `` `code` ``                                                       |
| Link           | `[text](url "title")`                                              |
| Image          | `![alt](src "title")`                                              |
| Fenced code    | ` ``` ` or `~~~`, optional language (e.g. ` ```js `)              |
| Block quote    | `> quote`                                                          |
| Unordered list | `- item` / `* item` / `+ item`                                     |
| Ordered list   | `1. item`                                                          |
| Task list      | `- [ ] todo` / `- [x] done`                                        |
| Horizontal rule | `---` / `***` / `___`                                             |
| Table          | `| A | B |\n\|---\|---\|\n\| 1 \| 2 \|`, alignment via `:---/:---:/---:` |
| Autolink       | Bare `https://...` URLs                                            |
| Backslash escape | `\*` `\_` `\#` …                                                 |

## Links & Images

- Tapping `<a>` emits `onLinkTap` so you can implement custom navigation.
- Tapping `<img>` emits `onImgTap` and triggers preview by default (`previewImage` is `true`).
- The preview URL list is auto-collected from the Markdown, or overridden via `imageUrls`.

```vue
<template>
  <see-markdown :content="md" @on-link-tap="onLinkTap" @on-img-tap="onImgTap" />
</template>

<script setup>
import { ref } from 'vue'
const md = ref(`Visit [SeeYouUI](https://www.seeuui.cn)\n\n![logo](https://example.com/a.png)`)
const onLinkTap = (href) => uni.showToast({ title: 'tapped: ' + href, icon: 'none' })
const onImgTap = (src) => console.log('img:', src)
</script>
```

## Code Block Highlighting

Plug in any highlighter (Prism, highlight.js, …) through `highlight`. The returned HTML is embedded verbatim into `<code>`.

```vue
<template>
  <see-markdown :content="md" :highlight="highlight" />
</template>

<script setup>
import Prism from 'prismjs'

const md = `\n\`\`\`js\nconst hi = 'SeeYouUI'\n\`\`\``
const highlight = (code, lang) => {
  if (lang && Prism.languages[lang]) {
    return Prism.highlight(code, Prism.languages[lang], lang)
  }
  return code // unrecognized → returned as-is; the component will HTML-escape it
}
</script>
```

> If `highlight` is omitted, the component HTML-escapes the code body for you. If you return raw HTML from your highlighter, make sure it is safe.

## GFM Tables

```vue
<see-markdown
  :content="`| A | B | C |\n|:---|:---:|---:|\n| L | C | R |\n| 1 | 2 | 3 |`"
/>
```

Set `gfm="false"` to disable tables / strikethrough / task lists.

## Autolink (linkify)

By default, bare URLs (`https://...`) are converted into clickable links. Pass `linkify="false"` to opt out:

```vue
<see-markdown :content="md" :linkify="false" />
```

## Line Breaks Inside a Paragraph

By default the parser follows standard Markdown: single line-breaks are NOT rendered as `<br>`.
Pass `breaks="true"` to convert every `\n` into `<br>` (GFM style, ideal for chat messages).

```vue
<see-markdown content="line 1\nline 2\nline 3" breaks />
```

## Per-Tag Styling (tagStyle)

`tagStyle` is injected into the matching opening tags at the HTML-string stage, so behavior is consistent across H5 and rich-text platforms.

```vue
<see-markdown
  :content="md"
  :tag-style="{
    h1: 'color: #3ca7ff; border-bottom: 2px solid #3ca7ff;',
    blockquote: 'border-left-color: #ffb645; background: #fff8e8;'
  }"
/>
```

## XSS Protection

The component layers multiple defenses:

1. During parsing, `<`, `>`, `&`, `"` in Markdown text are escaped to HTML entities.
2. Link/image URLs reject `javascript:`, `vbscript:`, `data:text/html` protocols.
3. Output goes through `<see-parse>`, which strips dangerous tags (`<script>`, `<style>`, `<iframe>`) and all `on*` event attributes.

```vue
<see-markdown content="hello <script>alert('xss')</script>" />
<!-- The script tag is escaped to text; it never executes. -->
```

## Empty Placeholder

```vue
<see-markdown content="" empty-text="No content yet." />
```

## Dynamic Updates

You can update via reactive `content` or call `setContent` imperatively. Every change re-emits `onLoad`, which makes the component perfect for streaming AI output.

```vue
<template>
  <see-markdown ref="mdRef" :content="md" @on-load="onLoad" />
  <see-button @tap="append">Append paragraph</see-button>
</template>

<script setup>
import { ref } from 'vue'

const md = ref('## Streaming...\n')
const mdRef = ref()

const append = () => {
  md.value += '\nNew chunk at ' + Date.now()
}

const onLoad = (html, _nodes) => console.log('html length:', html.length)
</script>
```

## Extracting Plain Text

```js
const text = mdRef.value?.getText()
// e.g. "Streaming...\nNew chunk at ..."
```

## API

### Props

| Name           | Description                                          | Type                                | Default     |
| -------------- | ---------------------------------------------------- | ----------------------------------- | ----------- |
| content        | Markdown source text                                 | `String`                            | `''`        |
| breaks         | Convert single `\n` to `<br>` (GFM-style)            | `Boolean`                           | `false`     |
| linkify        | Auto-convert bare URLs to links                      | `Boolean`                           | `true`      |
| gfm            | Enable GFM extensions (table / del / task list)      | `Boolean`                           | `true`      |
| highlight      | Code-block highlighter `(code, lang) => html`        | `Function`                          | `undefined` |
| tagStyle       | Per-tag inline-style injection                       | `Record<string, string>`            | `{}`        |
| selectable     | Whether text is selectable (rich-text only)          | `Boolean`                           | `false`     |
| previewImage   | Enable image tap preview                             | `Boolean`                           | `true`      |
| imageUrls      | Custom preview URLs; auto-collected if not set       | `String[]`                          | `undefined` |
| emptyText      | Placeholder when content is empty                    | `String`                            | `''`        |
| lazyLoad       | Lazy-load images on H5                               | `Boolean`                           | `false`     |
| containerClass | Custom class for the root element                    | `String`                            | `''`        |
| containerStyle | Custom inline style for the root element             | `String \| Object`                  | `''`        |
| allowedTags    | Custom tag whitelist (forwarded to see-parse)        | `String[]`                          | `undefined` |
| allowedAttrs   | Custom attr whitelist (forwarded to see-parse)       | `String[]`                          | `undefined` |

### Events

| Event     | Description                | Callback                                |
| --------- | -------------------------- | --------------------------------------- |
| onLoad    | Parsing finished           | `(html: string, nodes: ParseNode[])`    |
| onError   | Parsing failed             | `(err: Error)`                          |
| onClick   | Root container tapped      | `(event)`                               |
| onLinkTap | A link was tapped          | `(href: string, event)`                 |
| onImgTap  | An image was tapped        | `(src: string, urls: string[], event)`  |
| onReady   | Component mounted          | `()`                                    |

### Methods (via ref)

| Method          | Description                            | Params           | Return       |
| --------------- | -------------------------------------- | ---------------- | ------------ |
| getHtml()       | Return the current generated HTML      | `()`             | `string`     |
| getText()       | Return Markdown stripped to plain text | `()`             | `string`     |
| setContent()    | Update Markdown content imperatively   | `(md: string)`   | `void`       |
| getImageUrls()  | Return collected image URLs            | `()`             | `string[]`   |

### TypeScript

```ts
import type { SeeMarkdownProps, SeeMarkdownEmits, MarkdownParserOptions } from 'see-u-ui'
```

## Utility Functions

If you only want the parser without the component, the utility functions are exported standalone:

```ts
import { markdownToHtml, stripMarkdown, extractMarkdownImages } from 'see-u-ui'

const html = markdownToHtml('# Hello **World**')
// → "<h1>Hello <strong>World</strong></h1>"

const text = stripMarkdown('# Hello **World**')
// → "Hello World"

const imgs = extractMarkdownImages('![a](a.jpg)\n![b](b.jpg)')
// → ["a.jpg", "b.jpg"]
```

## Security Note

The built-in XSS protection covers most application scenarios. If your Markdown comes from **fully untrusted** input (e.g. multi-user UGC), consider running a server-side sanitizer (such as DOMPurify) before sending it to clients.
