---
layout: doc
outline: deep
title: Markdown 文本解析
titleTemplate: SeeYouUI - Markdown 文本解析
description: SeeYouUI 组件库 seeMarkdown 文本解析组件
iframeSrc: /pages/seeMarkdown/index
---

# Markdown 文本解析

> 跨平台 Markdown 文本解析与渲染组件。**零依赖**纯字符串解析器，输出安全的 HTML，再委托 [`<see-parse>`](/components/parse/index.md) 渲染。
> 一次编写、四端可用（H5 / App / 小程序）。

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 与 `<see-parse>` 的区别

| 维度       | `<see-parse>`              | `<see-markdown>`                       |
| ---------- | -------------------------- | -------------------------------------- |
| 输入       | HTML 字符串                | Markdown 文本                          |
| 适用场景   | 后端返回的富文本、富文本编辑器导出 | 文章 / 消息 / Wiki / AI 流式输出 |
| 安全       | XSS 过滤（剥离危险标签）   | 字符转义 + 协议拦截 + 复用 see-parse 过滤 |
| 依赖       | 零依赖                     | 零依赖，内部依赖 `<see-parse>`         |

## 基本使用

只需通过 `content` 传入 Markdown 文本即可。组件支持 GFM 子集（详见下方"语法支持"）。

```html:line-numbers {}
<see-markdown :content="md" />
```

```js
const md = `# 一级标题
## 二级标题
这是一个**段落**，含 *斜体*、~~删除线~~ 和 \`行内代码\`。`
```

## 语法支持

| 类别       | 语法                                                                  |
| ---------- | --------------------------------------------------------------------- |
| 标题       | `#` ~ `######`                                                        |
| 强调       | `**bold**` / `__bold__` / `*italic*` / `_italic_` / `~~del~~`         |
| 行内代码   | `` `code` ``                                                          |
| 链接       | `[text](url "title")`                                                 |
| 图片       | `![alt](src "title")`                                                 |
| 围栏代码块 | ` ``` ` 或 `~~~`，可加语言标识（如 ` ```js `）                       |
| 引用       | `> quote`                                                             |
| 无序列表   | `- item` / `* item` / `+ item`                                        |
| 有序列表   | `1. item`                                                             |
| 任务列表   | `- [ ] todo` / `- [x] done`                                           |
| 水平线     | `---` / `***` / `___`                                                 |
| 表格       | `| A | B |\n\|---\|---\|\n\| 1 \| 2 \|`，支持对齐 `:---/:---:/---:` |
| 自动链接   | 直接粘贴 `https://...`                                                |
| 反斜杠转义 | `\*` `\_` `\#` 等                                                     |

## 链接与图片

- 点击链接会触发 `onLinkTap`，可自定义跳转逻辑。
- 点击图片会触发 `onImgTap`，并自动启用预览（`previewImage` 默认 `true`）。
- 图片预览列表会从 Markdown 中自动收集，也可通过 `imageUrls` 覆盖。

```vue
<template>
  <see-markdown :content="md" @on-link-tap="onLinkTap" @on-img-tap="onImgTap" />
</template>

<script setup>
import { ref } from 'vue'
const md = ref(`访问 [SeeYouUI](https://www.seeuui.cn)\n\n![logo](https://example.com/a.png)`)
const onLinkTap = (href) => uni.showToast({ title: '点击: ' + href, icon: 'none' })
const onImgTap = (src) => console.log('img:', src)
</script>
```

## 代码块语法高亮

通过 `highlight` 回调接入任意高亮库（如 prismjs、highlight.js）；返回的 HTML 会原样嵌入 `<code>` 内部。

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
  return code // 若未识别，则原样返回，组件内部会自动转义
}
</script>
```

> 注意：若不传 `highlight`，组件会自动对代码做 HTML 转义；若你的回调直接返回未转义的 HTML，请自行确保安全。

## GFM 表格

```html:line-numbers {}
<see-markdown
  :content="`| 列 A | 列 B | 列 C |\n|:---|:---:|---:|\n| 左 | 中 | 右 |\n| 1 | 2 | 3 |`"
/>
```

`gfm="false"` 可关闭表格 / 删除线 / 任务列表。

## 自动链接（linkify）

默认情况下，裸 URL（`https://...`）会被自动转为可点击的链接。设置 `linkify="false"` 关闭该行为：

```html:line-numbers {}
<see-markdown :content="md" :linkify="false" />
```

## 段内换行

默认遵循标准 Markdown：单换行不渲染为 `<br>`。
设置 `breaks="true"` 后，段内的所有 `\n` 都会转为 `<br>`（GFM 风格，更接近聊天消息的直觉）。

```html:line-numbers {}
<see-markdown content="line 1\nline 2\nline 3" breaks />
```

## 自定义标签样式（tagStyle）

`tagStyle` 会在 HTML 字符串阶段被注入到匹配的开标签，跨平台一致生效：

```html:line-numbers {}
<see-markdown
  :content="md"
  :tag-style="{
    h1: 'color: #3ca7ff; border-bottom: 2px solid #3ca7ff; padding-bottom: 4px;',
    blockquote: 'border-left-color: #ffb645; background: #fff8e8;'
  }"
/>
```

## XSS 防护

组件多层防护：

1. 解析阶段：Markdown 文本中的 `<` `>` `&` `"` 会被转义为 HTML 实体；
2. 链接 / 图片 URL 会拒绝 `javascript:` `vbscript:` `data:text/html` 协议；
3. 内部复用 `<see-parse>` 的 XSS 过滤（剥离 `<script>` `<style>` `<iframe>`、`on*` 事件属性）。

```html:line-numbers {}
<see-markdown content="hello <script>alert('xss')</script>" />
<!-- 渲染结果中 script 被转义为纯文本，不会执行 -->
```

## 空内容占位

```html:line-numbers {}
<see-markdown content="" empty-text="暂无 Markdown 内容~" />
```

## 动态更新内容

既可以通过 `content` 响应式更新，也可以调用 `setContent` 方法。每次内容变化都会重新触发 `onLoad`，非常适合 AI 流式输出场景。

```vue
<template>
  <see-markdown ref="mdRef" :content="md" @on-load="onLoad" />
  <see-button @tap="append">追加段落</see-button>
</template>

<script setup>
import { ref } from 'vue'

const md = ref('## 开始接收\n')
const mdRef = ref()

const append = () => {
  md.value += '\n这是一段新的内容 ' + Date.now()
}

const onLoad = (html, _nodes) => console.log('html length:', html.length)
</script>
```

## 提取纯文本

```js
const text = mdRef.value?.getText()
// "开始接收\n这是一段新的内容 ..."
```

## API

### Props

| 参数名         | 说明                                            | 类型                                | 默认值      |
| -------------- | ----------------------------------------------- | ----------------------------------- | ----------- |
| content        | Markdown 文本                                   | `String`                            | `''`        |
| breaks         | 段内单换行是否转为 `<br>`（GFM 风格）           | `Boolean`                           | `false`     |
| linkify        | 是否自动把裸 URL 转为链接                       | `Boolean`                           | `true`      |
| gfm            | 是否启用 GFM 扩展（表格 / 删除线 / 任务列表）   | `Boolean`                           | `true`      |
| highlight      | 代码块语法高亮回调 `(code, lang) => html`       | `Function`                          | `undefined` |
| tagStyle       | 标签级样式注入                                  | `Record<string, string>`            | `{}`        |
| selectable     | 文本是否可选中（rich-text 平台生效）            | `Boolean`                           | `false`     |
| previewImage   | 是否启用图片点击预览                            | `Boolean`                           | `true`      |
| imageUrls      | 自定义预览图片列表；不传则自动收集              | `String[]`                          | `undefined` |
| emptyText      | 空内容占位文本                                  | `String`                            | `''`        |
| lazyLoad       | H5 模式下图片懒加载                             | `Boolean`                           | `false`     |
| containerClass | 自定义根元素 class                              | `String`                            | `''`        |
| containerStyle | 自定义根元素 style                              | `String \| Object`                  | `''`        |
| allowedTags    | 自定义允许的标签白名单（透传到 see-parse）      | `String[]`                          | `undefined` |
| allowedAttrs   | 自定义允许的属性白名单（透传到 see-parse）      | `String[]`                          | `undefined` |

### Events

| 事件名    | 说明                  | 回调参数                                |
| --------- | --------------------- | --------------------------------------- |
| onLoad    | 内容解析完成          | `(html: string, nodes: ParseNode[])`    |
| onError   | 解析失败              | `(err: Error)`                          |
| onClick   | 点击根容器            | `(event)`                               |
| onLinkTap | 点击链接              | `(href: string, event)`                 |
| onImgTap  | 点击图片              | `(src: string, urls: string[], event)`  |
| onReady   | 组件挂载就绪          | `()`                                    |

### Methods（通过 ref 调用）

| 方法名         | 说明                                | 参数             | 返回值       |
| -------------- | ----------------------------------- | ---------------- | ------------ |
| getHtml()      | 获取当前 Markdown 转换后的 HTML     | `()`             | `string`     |
| getText()      | 获取剥离 Markdown 后的纯文本        | `()`             | `string`     |
| setContent()   | 动态设置 Markdown 内容              | `(md: string)`   | `void`       |
| getImageUrls() | 获取图片 URL 列表                   | `()`             | `string[]`   |

### TypeScript 类型

```ts
import type { SeeMarkdownProps, SeeMarkdownEmits, MarkdownParserOptions } from 'see-u-ui'
```

## 工具函数

如果你只想直接调用解析逻辑（不需要组件），可单独使用工具函数：

```ts
import { markdownToHtml, stripMarkdown, extractMarkdownImages } from 'see-u-ui'

const html = markdownToHtml('# Hello **World**')
// → "<h1>Hello <strong>World</strong></h1>"

const text = stripMarkdown('# Hello **World**')
// → "Hello World"

const imgs = extractMarkdownImages('![a](a.jpg)\n![b](b.jpg)')
// → ["a.jpg", "b.jpg"]
```

## 安全说明

该组件的 XSS 防护足以应对大多数业务场景。但若你的 Markdown 来自**完全不可信**的用户输入（例如多人协作的 UGC 内容），建议在服务端再使用专业的 sanitizer（如 DOMPurify）做二次清洗后再下发到客户端。
