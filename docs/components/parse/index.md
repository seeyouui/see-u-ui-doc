---
layout: doc
outline: deep
title: Parse 富文本解析器
titleTemplate: SeeYouUI - Parse 富文本解析器
description: SeeYouUI 组件库 seeParse 富文本解析器组件
iframeSrc: /pages/seeParse/index
---

# Parse 富文本解析器

> 跨平台的 HTML 富文本解析与渲染组件。内置 **XSS 安全过滤**、**图片点击预览**、**链接点击拦截**、**tagStyle 注入** 等能力。  
> H5 平台使用 `v-html` 渲染（保真度更高），App / 小程序使用 `<rich-text>` + 解析后的 nodes 渲染。

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基本使用

- 通过 `content` 传入 HTML 字符串即可渲染。
- 组件已内置常用块级 / 内联 / 媒体标签的样式兜底。

```html:line-numbers {}
<see-parse content="<h3>标题</h3><p>这是一段<b>富文本内容</b></p>" />
```

## 含图片与链接

- 默认会从 `content` 中自动收集所有 `<img src>`，点击图片可触发预览（`previewImage` 默认为 `true`）。
- 点击 `<a>` 标签会触发 `onLinkTap`，可在事件中自定义跳转。

```html:line-numbers {}
<template>
  <see-parse :content="html" @on-link-tap="onLinkTap" @on-img-tap="onImgTap" />
</template>

<script setup>
import { ref } from 'vue'

const html = ref(`
  <p>下面是一张图片：</p>
  <p><img src="https://example.com/a.png" alt="logo" /></p>
  <p>点击 <a href="https://www.seeuui.cn">SeeYouUI 官网</a> 了解更多。</p>
`)

const onLinkTap = (href) => uni.showToast({ title: '点击: ' + href, icon: 'none' })
const onImgTap = (src, urls) => console.log('img', src, urls)
</script>
```

## 自定义标签样式（tagStyle）

- 通过 `tagStyle` 给指定标签注入额外内联样式，会与标签原有 `style` 合并。
- 适合在不修改源 HTML 的情况下统一调整富文本外观。

```html:line-numbers {}
<see-parse
  :content="html"
  :tag-style="{
    h3: 'color: #3ca7ff; border-bottom: 2px solid #3ca7ff;',
    p: 'color: #ff6b6b; font-size: 16px; line-height: 1.8;',
    img: 'max-width: 100%; border-radius: 8px;'
  }"
/>
```

## 安全过滤（内置 XSS 防护）

组件会自动剥离以下内容，无需手动清洗：

- `<script>` / `<style>` / `<iframe>` / `<frame>` / `<object>` / `<embed>` 等危险标签
- 任意 `on*` 事件属性（如 `onclick`、`onmouseover`）
- `href="javascript:..."`、`href="vbscript:..."`、`src="data:text/html..."` 等危险协议
- HTML 注释 `<!-- ... -->`

```html:line-numbers {}
<see-parse content="<p>正常 ✅</p><script>alert(1)</script><div onclick='bad()'>x</div>" />
<!-- 渲染结果: 仅保留 <p>正常 ✅</p><div title='...'>x</div>，script 与 onclick 全部被剥离 -->
```

## 空内容占位

- 当 `content` 为空字符串且设置了 `emptyText` 时，会显示占位文本。

```html:line-numbers {}
<see-parse content="" empty-text="暂无内容，请稍后再试~" />
```

## 文本可选中

- 通过 `selectable` 设置文本是否允许长按选中。
- 该属性仅在 `<rich-text>` 平台（App / 小程序）生效，H5 默认即可选中。

```html:line-numbers {}
<see-parse :content="html" selectable />
```

## 保留换行符

- 默认 `\n` 不会被渲染为换行（与浏览器原生行为一致）。
- 设置 `preserveNewline` 后，组件会把字符串中的 `\n` 转为 `<br/>`，常用于服务端返回的纯文本+少量标签的混合内容。

```html:line-numbers {}
<see-parse :content="'第一行\n第二行\n第三行'" preserve-newline />
```

## 动态更新

- 既可以通过 `content` 响应式更新，也可以调用 `setContent` 方法。
- 内容变化后会重新触发 `onLoad`。

```vue
<template>
  <see-parse ref="parseRef" :content="html" @on-load="onLoad" />
  <see-button @tap="refresh">刷新</see-button>
</template>

<script setup>
import { ref } from 'vue'

const html = ref('<p>初始内容</p>')
const parseRef = ref()

const refresh = () => {
  parseRef.value?.setContent('<p>动态注入的新内容 ' + Date.now() + '</p>')
}
const onLoad = (nodes) => console.log('nodes:', nodes.length)
</script>
```

## 提取纯文本

- 调用 `getText()` 可获取去掉所有标签后的纯文本（含实体解码与空白归一化），适合做摘要预览或字数统计。

```js
const text = parseRef.value?.getText()
```

## 自定义白名单

- 默认白名单已覆盖 rich-text 支持的全部常用标签。
- 业务上若需限制更严格，可通过 `allowedTags` / `allowedAttrs` 自定义：

```html:line-numbers {}
<see-parse
  :content="html"
  :allowed-tags="['p', 'b', 'i', 'a']"
  :allowed-attrs="['href', 'title']"
/>
```

## API

### Props

| 参数名          | 说明                                     | 类型                            | 默认值        |
| --------------- | ---------------------------------------- | ------------------------------- | ------------- |
| content         | 富文本 HTML 字符串                       | `String`                        | `''`          |
| tagStyle        | 标签级样式注入                           | `Record<string, string>`        | `{}`          |
| selectable      | 文本是否可选中（rich-text 平台生效）     | `Boolean`                       | `false`       |
| previewImage    | 是否启用图片点击预览                     | `Boolean`                       | `true`        |
| imageUrls       | 自定义预览图片列表；不传则自动收集       | `String[]`                      | `undefined`   |
| emptyText       | 空内容占位文本                           | `String`                        | `''`          |
| preserveNewline | 是否把 `\n` 转换为 `<br/>`               | `Boolean`                       | `false`       |
| lazyLoad        | H5 模式下图片懒加载                      | `Boolean`                       | `false`       |
| containerClass  | 自定义根元素 class                       | `String`                        | `''`          |
| containerStyle  | 自定义根元素 style                       | `String \| Object`              | `''`          |
| space           | rich-text 空格处理：`ensp/emsp/nbsp`     | `String`                        | `''`          |
| allowedTags     | 自定义允许的标签白名单                   | `String[]`                      | `undefined`   |
| allowedAttrs    | 自定义允许的属性白名单                   | `String[]`                      | `undefined`   |

### Events

| 事件名     | 说明                                  | 回调参数                          |
| ---------- | ------------------------------------- | --------------------------------- |
| onLoad     | 内容解析完成                          | `(nodes: ParseNode[])`            |
| onError    | 解析失败                              | `(err: Error)`                    |
| onClick    | 点击富文本容器                        | `(event)`                         |
| onLinkTap  | 点击链接                              | `(href: string, event)`           |
| onImgTap   | 点击图片                              | `(src: string, urls: string[], event)` |
| onReady    | 组件挂载就绪                          | `()`                              |

### Methods（通过 ref 调用）

| 方法名         | 说明                                       | 参数                  | 返回值         |
| -------------- | ------------------------------------------ | --------------------- | -------------- |
| getText()      | 获取剥离所有标签后的纯文本                 | `()`                  | `string`       |
| setContent()   | 动态设置内容                               | `(html: string)`      | `void`         |
| getImageUrls() | 获取图片 URL 列表                          | `()`                  | `string[]`     |
| parseHTML()    | 调用底层 parser 解析任意 HTML              | `(html: string)`      | `ParseNode[]`  |

### TypeScript 类型

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

## 安全说明

该组件提供基础的 XSS 防护，足以应对常见的不可信富文本场景。但如果你需要处理**完全不可信**的用户输入（如多人协作的 UGC 内容），建议在服务端再使用专业的 HTML sanitizer（如 DOMPurify）做二次清洗后再下发到客户端。
