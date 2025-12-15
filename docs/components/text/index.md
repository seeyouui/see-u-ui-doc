---
layout: doc
outline: deep
title: Text 文本
titleTemplate: SeeYouUI - Text 文本
description: SeeYouUI 组件库 seeText 文本组件
iframeSrc: /pages/seeText/index
---

# Text 文本

> 文本组件，此组件集成了文本类在项目中的常用功能，包括设置主题，拨打电话，格式化日期，显示金额，超链接...等功能。 您大可不必在使用特殊文本时自己定义，text 组件几乎涵盖您能使用的大部分场景。

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基本使用

- 通过 `text` 参数设置文本内容。

```html:line-numbers {}
<see-text text="我的愿望是世界上没有加班"></see-text>
```

## 设置主题

- 通过 `type` 参数设置文本主题，我们提供了五类属性：`primary` `error` `success` `warning` `info`

```html:line-numbers {}
<see-text text="默认" />
<see-text text="主色" type="primary" />
<see-text text="失败" type="error" />
<see-text text="警告" type="warning" />
<see-text text="成功" type="success" />
<see-text text="自定义颜色" color="#52f7bd" />
```

## 链接

::: warning 注意

如需更完整功能,请查看 [Link 链接](../link/index.md) 组件

:::

- 通过 `mode` 参数设置 `link` 模式
- `link` 模式下，文本会被渲染为链接，点击后会跳转到指定的 URL。
- 通过 `href` 参数设置链接的目标 URL。

```html:line-numbers {}
<see-text text="这是SeeYouUI的官方文档" type="primary" mode="link" href="https://www.baidu.com" />
<see-text text="如需更完整功能,请查看Link链接组件" type="warning" mode="link" href="https://www.baidu.com" />
```

## 拨打电话

- 通过 `mode="phone"` 开启拨打电话模式
- 点击文本后会自动唤起系统拨号
- 通过 `phone-number` 指定要拨打的手机号
- `text` 用于控制显示内容，可与号码不同

```html:line-numbers {}
<see-text text="18888888888" type="primary" mode="phone" phone-number="18888888888" />
<see-text text="自定义文本" type="primary" mode="phone" phone-number="19999999999" />
```

## 显示金额

::: tip 提示

我们为 `余额格式化` 封装了 Hook，详见 [余额格式化（useCurrencyFormat）](../../api/hooks/useCurrencyFormat.md)

:::

- 通过 `mode="price"` 开启金额显示模式
- 自动进行金额格式化（千分位、小数位）
- 支持 `String` / `Number` 类型
- 适用于金额、价格、统计数据等场景

```html:line-numbers {}
<see-text text="一千块：" />
<see-text text="1000" type="primary" mode="price" />

<see-text text="好多钱：" />
<see-text :text="9999999999999.99" type="primary" mode="price" />
```

## 日期格式化

::: tip 提示

我们为 `日期格式化` 封装了 Hook，详见 [日期格式化（useDateFormat）](../../api/hooks/useDateFormat.md)

:::

- 通过 `mode="date"` 开启日期格式化
- `date` 支持多种类型：
  - 时间戳（字符串 / 数字）
  - `Date` 对象
- 通过 `date-format` 指定显示格式

```html:line-numbers {}
<see-text text="字符串时间戳：" />
<see-text type="primary" mode="date" date="1672502400000" date-format="YYYY-MM-DD" />

<see-text text="数字时间戳 + 时分秒：" />
<see-text type="primary" mode="date" :date="1715668235000" date-format="YYYY-MM-DD HH:mm:ss" />

<see-text text="显示星期：" />
<see-text type="primary" mode="date" :date="1715668235000" date-format="YYYY年MM月DD日 WWW" />

<see-text text="Date形式：" />
<see-text type="primary" mode="date" :date="new Date()" date-format="YYYY年MM月DD日" />

<see-text text="实时：" />
<see-text type="primary" mode="date" :date="currentTime" date-format="YYYY年MM月DD日 HH:mm:ss.S" />
```

## 时间距今

::: tip 提示

我们为 `时间距今` 封装了 Hook，详见 [时间距今（useTimeAgo）](../../api/hooks/useTimeAgo.md)

:::

- 通过 `mode="timeago"` 开启「时间距今」模式
- 根据当前时间自动计算：
  - 刚刚
  - 几分钟前
  - 几小时前
  - 几天前
- 当时间跨度过大时，可回退使用 `date-format`

```html:line-numbers {}
<see-text text="当前时间 + 1秒：" />
<see-text type="primary" mode="timeago" :date="Date.now() + 1000" date-format="YYYY-MM-DD" />

<see-text text="当前时间 - 30秒：" />
<see-text type="primary" mode="timeago" :date="Date.now() - 30 * 1000" date-format="YYYY-MM-DD" />

<see-text text="当前时间 - 30分钟：" />
<see-text type="primary" mode="timeago" :date="Date.now() - 30 * 60 * 1000" date-format="YYYY-MM-DD" />

<see-text text="当前时间 - 5小时：" />
<see-text type="primary" mode="timeago" :date="Date.now() - 5 * 3600 * 1000" date-format="YYYY-MM-DD" />

<see-text text="当前时间 - 3天：" />
<see-text type="primary" mode="timeago" :date="Date.now() - 3 * 86400 * 1000" date-format="YYYY-MM-DD" />

<see-text text="当前时间 - 15天：" />
<see-text type="primary" mode="timeago" :date="Date.now() - 15 * 86400 * 1000" date-format="YYYY-MM-DD" />

<see-text text="当前时间 - 150天：" />
<see-text type="primary" mode="timeago" :date="Date.now() - 150 * 86400 * 1000" date-format="YYYY-MM-DD" />

<see-text text="当前时间 - 800天：" />
<see-text type="primary" mode="timeago" :date="Date.now() - 800 * 86400 * 1000" date-format="YYYY-MM-DD" />
```

## API

### Props

| 参数名      | 说明                                                | 类型                                                            | 默认值         | 可选值                                                          | 平台差异      |
| ----------- | --------------------------------------------------- | --------------------------------------------------------------- | -------------- | --------------------------------------------------------------- | ------------- |
| text        | 文本内容                                            | `String \| Number`                                              | `''`           | 任意字符串 / 数字                                               | -             |
| mode        | 文本处理模式                                        | `"text" \| "link" \| "phone" \| "price" \| "date" \| "timeago"` | `'text'`       | `text`、`link`、`phone`、`price`、`date`、`timeago`             | -             |
| type        | 文本预置主题样式                                    | `"info" \| "primary" \| "error" \| "warning" \| "success"`      | `'info'`       | `info`、`primary`、`error`、`warning`、`success`                | -             |
| color       | 自定义文本颜色（设置后 `type` 失效）                | `String`                                                        | `''`           | 任意 CSS 颜色值                                                 | -             |
| size        | **文本字体大小**                                    | `String \| Number`                                              | `16`           | 数字（默认 `px`）或合法 CSS 尺寸（如 `14px`、`1.2em`、`32rpx`） | -             |
| href        | 链接地址（`mode="link"` 时生效）                    | `String`                                                        | `''`           | 合法 URL                                                        | -             |
| phoneNumber | 手机号（`mode="phone"` 时生效）                     | `String`                                                        | `''`           | 合法手机号                                                      | H5 不支持拨号 |
| date        | 日期数据（`mode="date"` / `mode="timeago"` 时生效） | `String \| Number \| Date`                                      | `''`           | 时间戳 / Date 对象                                              | -             |
| dateFormat  | 日期格式化规则（`mode="date"` 时生效）              | `String`                                                        | `'YYYY-MM-DD'` | 任意合法日期格式字符串                                          | -             |

---

### Events

| 事件名  | 说明           | 回调参数 | 返回值 | 平台差异说明 |
| ------- | -------------- | -------- | ------ | ------------ |
| onClick | 点击文本时触发 | 无       | 无     | -            |
