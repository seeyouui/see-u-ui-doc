---
layout: doc
outline: deep
title: 国际化
titleTemplate: SeeYouUI - 国际化
description: SeeYouUI 组件库 国际化 多语言 i18n
iframeSrc: /pages/index/index
---

# 国际化（useI18n / createI18n）

> `useI18n` 是一个用于国际化的 Vue 组合式函数，`createI18n` 是创建 i18n 实例的工厂函数。
>
> 它们帮助你轻松处理：组件库多语言切换、自定义语言包、业务文案翻译、响应式语言管理等常见国际化需求。
>
> 兼容 uni-app 全部平台：H5、App、微信小程序、支付宝小程序、百度小程序等。

## 使用方式

::: code-group

```vue [响应式：useI18n]
<template>
  <view>
    <p>{{ t('greeting', { name: '宝宝' }) }}</p>
    <button @click="toggleLang">切换语言</button>
  </view>
</template>

<script setup>
import { useI18n } from 'see-u-ui'

const { t, locale, setLocale } = useI18n()

const toggleLang = () => {
  locale.value = locale.value === 'zh-CN' ? 'en' : 'zh-CN'
}
</script>
```

```ts [配置：createI18n]
// main.js
import { createI18n } from 'see-u-ui'

const i18n = createI18n({
  locale: 'zh-CN',          // 当前语言
  fallbackLocale: 'zh-CN',  // 回退语言
  messages: {               // 自定义/覆盖语言包
    'zh-CN': {
      greeting: '你好，{name}！',
    },
    'en': {
      greeting: 'Hello, {name}!',
    },
  },
})

// 在 app.use 时传入
app.use(SeeYouUI, { i18n })
```

:::

## 翻译函数 t()

### 基本用法

```ts
const { t } = useI18n()

t('cancel')    // → '取消'
t('confirm')   // → '确定'
```

### 插值

使用 `{key}` 语法进行字符串插值：

```ts
t('pagination.total', { total: 100 })
// zh-CN → '共 100 条'
// en    → '100 items'

t('greeting', { name: 'Claude' })
// zh-CN → '你好，Claude！'
// en    → 'Hello, Claude!'
```

### 回退逻辑

当 key 在当前语言中找不到时，按以下优先级查找：

1. 当前语言的 `messages`（用户自定义）
2. 当前语言的内置语言包
3. 回退语言（`fallbackLocale`）的用户自定义
4. 回退语言的内置语言包
5. 返回 key 本身（如 `'some.unknown.key'`）

```ts
// 假设 locale='ja', fallbackLocale='zh-CN', 日语包中没有 'cancel'
t('cancel')
// → 日语包没有 → 找日语内置 → 没有日语内置 → 找中文用户自定义 → 找中文内置
// → '取消'
```

## 响应式切换

`locale` 是 `Ref<string>`，直接修改即可触发全局所有组件重新翻译：

```ts
const { locale } = useI18n()

// 方式 1：直接修改 ref
locale.value = 'en'

// 方式 2：使用 setLocale 方法
const { setLocale } = useI18n()
setLocale('en')  // 等价于 locale.value = 'en'
```

## API

### `createI18n(options)`

**创建 i18n 实例**

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| options | `CreateI18nOptions` | — | i18n 配置项 |
| options.locale | `string` | 自动检测 | 当前语言标识（如 `'zh-CN'`、`'en'`） |
| options.fallbackLocale | `string` | `'zh-CN'` | 找不到 key 时的回退语言 |
| options.messages | `Record<string, LocaleMessages>` | `{}` | 自定义语言包，与内置语言包深度合并 |

**返回：** `I18nInstance`

**自动检测规则：** 当不传 `locale` 时，按以下优先级检测：
1. uni-app 系统语言（`uni.getSystemInfoSync().locale`）
2. 中文系统 → `'zh-CN'`
3. 其他 → `'en'`

---

### `useI18n()`

**在组件或 Hook 中获取 i18n 实例**

> 可在任意组件或 Hook 中调用，无需手动注入。底层使用 Vue 的 `inject` 机制，未主动注入时自动回退到全局默认单例。

**返回：** `I18nUseReturn`

| 返回值 | 类型 | 说明 |
|--------|------|------|
| `t` | `(key: string, params?: Record<string, any>) => string` | 翻译函数 |
| `locale` | `Ref<string>` | 当前语言（响应式，修改即切换） |
| `setLocale` | `(locale: string) => void` | 设置当前语言 |
| `getLocale` | `() => string` | 获取当前语言 |
| `getMessages` | `() => LocaleMessages` | 获取当前语言的完整翻译表（含内置 + 自定义合并后） |

---

## 类型定义

### `CreateI18nOptions`

```ts
interface CreateI18nOptions {
  locale?: string
  fallbackLocale?: string
  messages?: Record<string, LocaleMessages>
}
```

### `LocaleMessages`

```ts
type LocaleMessages = Record<string, string>
```

### `I18nInstance`

```ts
interface I18nInstance {
  locale: Ref<string>
  fallbackLocale: string
  messages: Ref<Record<string, LocaleMessages>>
  t: (key: string, params?: Record<string, any>) => string
  setLocale: (locale: string) => void
  getLocale: () => string
  getMessages: () => LocaleMessages
  install: (app: App) => void
}
```

### `I18nUseReturn`

```ts
interface I18nUseReturn {
  t: (key: string, params?: Record<string, any>) => string
  locale: Ref<string>
  setLocale: (locale: string) => void
  getLocale: () => string
  getMessages: () => LocaleMessages
}
```

## 更多

请参考 [国际化配置指南](/i18n) 获取完整的使用说明和所有内置翻译 key 列表。
