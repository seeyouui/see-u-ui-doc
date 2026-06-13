---
layout: doc
outline: deep
title: Internationalization
titleTemplate: SeeYouUI - Internationalization
description: SeeYouUI Component Library Internationalization i18n Multi-language Hook
---

# Internationalization (useI18n / createI18n)

> `useI18n` is a Vue composable for internationalization, and `createI18n` is a factory function for creating i18n instances.
>
> They help you handle: multi-language switching for component library, custom language packs, business text translation, reactive language management, and other common i18n needs.
>
> Compatible with all uni-app platforms: H5, App, WeChat Mini Program, Alipay Mini Program, Baidu Mini Program, etc.

## Usage

::: code-group

```vue [Reactive: useI18n]
<template>
  <view>
    <p>{{ t('greeting', { name: 'Buddy' }) }}</p>
    <button @click="toggleLang">Switch Language</button>
  </view>
</template>

<script setup>
import { useI18n } from 'see-u-ui'

const { t, locale } = useI18n()

const toggleLang = () => {
  locale.value = locale.value === 'zh-CN' ? 'en' : 'zh-CN'
}
</script>
```

```ts [Configuration: createI18n]
// main.js
import { createI18n } from 'see-u-ui'

const i18n = createI18n({
  locale: 'en',              // Current language
  fallbackLocale: 'zh-CN',   // Fallback language
  messages: {                // Custom/override language pack
    'zh-CN': {
      greeting: '你好，{name}！',
    },
    'en': {
      greeting: 'Hello, {name}!',
    },
  },
})

// Pass when calling app.use
app.use(SeeYouUI, { i18n })
```

:::

## Translation Function t()

### Basic Usage

```ts
const { t } = useI18n()

t('cancel')    // → 'Cancel'
t('confirm')   // → 'OK'
```

### Interpolation

Use `{key}` syntax for string interpolation:

```ts
t('pagination.total', { total: 100 })
// zh-CN → '共 100 条'
// en    → '100 items'

t('greeting', { name: 'Claude' })
// zh-CN → '你好，Claude！'
// en    → 'Hello, Claude!'
```

### Fallback Logic

When a key is not found in the current language, the following priority is used:

1. User-defined `messages` for current locale
2. Built-in language pack for current locale
3. User-defined `messages` for fallback locale (`fallbackLocale`)
4. Built-in language pack for fallback locale
5. Return the key itself (e.g., `'some.unknown.key'`)

```ts
// Assuming locale='ja', fallbackLocale='zh-CN', no 'cancel' in Japanese pack
t('cancel')
// → Japanese user pack miss → Japanese built-in miss → Chinese user pack → Chinese built-in
// → '取消'
```

## Reactive Switching

`locale` is a `Ref<string>` — modifying it directly triggers re-translation in all components globally:

```ts
const { locale } = useI18n()

// Method 1: modify ref directly
locale.value = 'en'

// Method 2: use setLocale method
const { setLocale } = useI18n()
setLocale('en')  // equivalent to locale.value = 'en'
```

## API

### `createI18n(options)`

**Create an i18n instance**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| options | `CreateI18nOptions` | — | i18n configuration |
| options.locale | `string` | auto-detect | Language identifier (e.g., `'zh-CN'`, `'en'`) |
| options.fallbackLocale | `string` | `'zh-CN'` | Fallback language when key is not found |
| options.messages | `Record<string, LocaleMessages>` | `{}` | Custom language pack, deep-merged with built-in |

**Returns:** `I18nInstance`

**Auto-detection rule:** When `locale` is not provided, detects in the following order:
1. uni-app system language (`uni.getSystemInfoSync().locale`)
2. Chinese system → `'zh-CN'`
3. Others → `'en'`

---

### `useI18n()`

**Get the i18n instance in a component or hook**

> Can be called in any component or hook without manual injection. Uses Vue's `inject` mechanism internally, falling back to a global default singleton when not explicitly injected.

**Returns:** `I18nUseReturn`

| Return Value | Type | Description |
|--------------|------|-------------|
| `t` | `(key: string, params?: Record<string, any>) => string` | Translation function |
| `locale` | `Ref<string>` | Current language (reactive — modifying it switches language) |
| `setLocale` | `(locale: string) => void` | Set current language |
| `getLocale` | `() => string` | Get current language |
| `getMessages` | `() => LocaleMessages` | Get complete translation map for current language (user + built-in, merged) |

---

## Type Definitions

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

## See Also

See [Internationalization Guide](/en/i18n) for a complete usage guide and all built-in translation key list.
