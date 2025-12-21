---
layout: doc
outline: deep
title: Text
titleTemplate: SeeYouUI - Text
description: SeeYouUI Component Library seeText component
iframeSrc: /pages/seeText/index
---

# Text

> Text component. This component integrates common text-related functions used in projects, including setting themes, making phone calls, formatting dates, displaying currency, hyperlinks, and more. You don't have to define special text styles yourself; the text component covers almost most scenarios you would use.

## Platform Differences

| App (vue) | App (nvue) | H5  | Mini Program |
| --------- | ---------- | --- | ------------ |
| √         | √          | √   | √            |

## Basic Usage

- Set the text content via the `text` parameter.

```html:line-numbers {}
<see-text text="My wish is that there is no overtime work in the world"></see-text>

```

## Themes

* Set the text theme via the `type` parameter. We provide five attributes: `primary` `error` `success` `warning` `info`

```html:line-numbers {}
<see-text text="Default" />
<see-text text="Primary" type="primary" />
<see-text text="Error" type="error" />
<see-text text="Warning" type="warning" />
<see-text text="Success" type="success" />
<see-text text="Custom Color" color="#52f7bd" />

```

## Links

::: warning Notice

For more complete functionality, please check the [Link](https://www.google.com/search?q=../link/index.md) component.

:::

* Set `link` mode via the `mode` parameter.
* In `link` mode, the text is rendered as a link and will jump to the specified URL when clicked.
* Set the target URL via the `href` parameter.

```html:line-numbers {}
<see-text text="This is the official documentation of SeeYouUI" type="primary" mode="link" href="[https://www.baidu.com](https://www.baidu.com)" />
<see-text text="For more complete functionality, please check the Link component" type="warning" mode="link" href="[https://www.baidu.com](https://www.baidu.com)" />

```

## Phone Calls

* Enable phone call mode via `mode="phone"`.
* The system dialer will be automatically invoked after clicking the text.
* Specify the mobile number to call via `phone-number`.
* `text` is used to control the display content, which can differ from the phone number.

```html:line-numbers {}
<see-text text="18888888888" type="primary" mode="phone" phone-number="18888888888" />
<see-text text="Custom Text" type="primary" mode="phone" phone-number="19999999999" />

```

## Display Currency

::: tip Tip

We have encapsulated a Hook for `currency formatting`. See [可疑链接已删除] for details.

:::

* Enable currency display mode via `mode="price"`.
* Automatic currency formatting (thousand separators, decimal places).
* Supports `String` / `Number` types.
* Applicable for currency, price, statistical data, and other scenarios.

```html:line-numbers {}
<see-text text="One thousand yuan:" />
<see-text text="1000" type="primary" mode="price" />

<see-text text="A lot of money:" />
<see-text :text="9999999999999.99" type="primary" mode="price" />

```

## Date Formatting

::: tip Tip

We have encapsulated a Hook for `date formatting`. See [可疑链接已删除] for details.

:::

* Enable date formatting via `mode="date"`.
* `date` supports multiple types:
* Timestamp (String / Number)
* `Date` object


* Specify the display format via `date-format`.

```html:line-numbers {}
<see-text text="String Timestamp:" />
<see-text type="primary" mode="date" date="1672502400000" date-format="YYYY-MM-DD" />

<see-text text="Number Timestamp + HMS:" />
<see-text type="primary" mode="date" :date="1715668235000" date-format="YYYY-MM-DD HH:mm:ss" />

<see-text text="Display Weekday:" />
<see-text type="primary" mode="date" :date="1715668235000" date-format="YYYY-MM-DD WWW" />

<see-text text="Date Format:" />
<see-text type="primary" mode="date" :date="new Date()" date-format="YYYY-MM-DD" />

<see-text text="Real-time:" />
<see-text type="primary" mode="date" :date="currentTime" date-format="YYYY-MM-DD HH:mm:ss.S" />

```

## Time Ago

::: tip Tip

We have encapsulated a Hook for `Time Ago`. See [可疑链接已删除] for details.

:::

* Enable "Time Ago" mode via `mode="timeago"`.
* Calculates automatically based on current time:
* Just now
* A few minutes ago
* A few hours ago
* A few days ago


* When the time span is too large, it can fall back to using `date-format`.

```html:line-numbers {}
<see-text text="Current time + 1s:" />
<see-text type="primary" mode="timeago" :date="Date.now() + 1000" date-format="YYYY-MM-DD" />

<see-text text="Current time - 30s:" />
<see-text type="primary" mode="timeago" :date="Date.now() - 30 * 1000" date-format="YYYY-MM-DD" />

<see-text text="Current time - 30 minutes:" />
<see-text type="primary" mode="timeago" :date="Date.now() - 30 * 60 * 1000" date-format="YYYY-MM-DD" />

<see-text text="Current time - 5 hours:" />
<see-text type="primary" mode="timeago" :date="Date.now() - 5 * 3600 * 1000" date-format="YYYY-MM-DD" />

<see-text text="Current time - 3 days:" />
<see-text type="primary" mode="timeago" :date="Date.now() - 3 * 86400 * 1000" date-format="YYYY-MM-DD" />

<see-text text="Current time - 15 days:" />
<see-text type="primary" mode="timeago" :date="Date.now() - 15 * 86400 * 1000" date-format="YYYY-MM-DD" />

<see-text text="Current time - 150 days:" />
<see-text type="primary" mode="timeago" :date="Date.now() - 150 * 86400 * 1000" date-format="YYYY-MM-DD" />

<see-text text="Current time - 800 days:" />
<see-text type="primary" mode="timeago" :date="Date.now() - 800 * 86400 * 1000" date-format="YYYY-MM-DD" />

```

## API

### Props

| Parameter | Description | Type | Default | Optional Values | Platform Differences |
| --- | --- | --- | --- | --- | --- |
| text | Text content | `String | Number` | `''` | Any string / number | - |
| mode | Text processing mode | `"text" | "link" | "phone" | "price" | "date" | "timeago"` | `'text'` | `text`, `link`, `phone`, `price`, `date`, `timeago` | - |
| type | Text preset theme style | `"info" | "primary" | "error" | "warning" | "success"` | `'info'` | `info`, `primary`, `error`, `warning`, `success` | - |
| color | Custom text color (overrides `type`) | `String` | `''` | Any CSS color value | - |
| size | **Text font size** | `String | Number` | `16` | Number (default `px`) or legal CSS size (e.g., `14px`, `32rpx`) | - |
| href | Link address (valid when `mode="link"`) | `String` | `''` | Legal URL | - |
| phoneNumber | Phone number (valid when `mode="phone"`) | `String` | `''` | Legal mobile number | H5 does not support |
| date | Date data (valid when `mode="date"` / `mode="timeago"`) | `String | Number | Date` | `''` | Timestamp / Date object | - |
| dateFormat | Date formatting rules (valid when `mode="date"`) | `String` | `'YYYY-MM-DD'` | Any legal date format string | - |

---

### Events

| Event Name | Description | Callback Parameters | Return Value | Platform Differences |
| --- | --- | --- | --- | --- |
| onClick | Triggered when text is clicked | None | None | - |
