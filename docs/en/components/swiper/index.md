---
layout: doc
outline: deep
title: Swiper Carousel
titleTemplate: SeeYouUI - Swiper Carousel
description: SeeYouUI component library SeeSwiper carousel component
iframeSrc: /pages/seeSwiper/index
---

# SeeSwiper

A carousel component supporting image slides, autoplay, multiple indicator styles, and custom content slots.

## Basic Usage

```vue
<template>
  <SeeSwiper :list="list" @onClick="onItemClick" />
</template>

<script setup>
import SeeSwiper from '@/uni_modules/see-u-ui/components/see-swiper/see-swiper.vue'

const list = [
  { image: 'https://example.com/img1.png', title: 'Title One' },
  { image: 'https://example.com/img2.png', title: 'Title Two' },
  { image: 'https://example.com/img3.png', title: 'Title Three' },
]

const onItemClick = (item, index) => {
  console.log('Clicked:', item.title, index)
}
</script>
```

## Custom Height

Set the carousel height via the `height` prop. Default is `300rpx`.

```vue
<SeeSwiper :list="list" height="400rpx" />
```

## Digital Indicator

Use `indicatorType="digital"` to display a digital page indicator.

```vue
<SeeSwiper :list="list" indicatorType="digital" />
```

## No Indicator

Use `indicatorType="none"` to hide the indicator.

```vue
<SeeSwiper :list="list" indicatorType="none" />
```

## Custom Content Slot

Use the `item` slot to customize carousel content.

```vue
<SeeSwiper :list="list" height="400rpx">
  <template #item="{ item, index }">
    <view class="custom-slide">
      <image :src="item.image" mode="aspectFill" />
      <view class="overlay">
        <text>{{ item.title }} - Page {{ index + 1 }}</text>
      </view>
    </view>
  </template>
</SeeSwiper>
```

## v-model Binding

Use `v-model:current` for two-way binding of the current page index.

```vue
<template>
  <SeeSwiper :list="list" v-model:current="current" />
  <button @click="current = 0">Go to first</button>
</template>

<script setup>
import { ref } from 'vue'
const current = ref(0)
</script>
```

## Props

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| list | Carousel data | `SwiperItemData[]` | `[]` |
| height | Carousel height | `string` | `'300rpx'` |
| autoplay | Enable autoplay | `boolean` | `true` |
| interval | Autoplay interval in ms | `number` | `3000` |
| duration | Slide animation duration in ms | `number` | `300` |
| loop | Enable infinite loop | `boolean` | `true` |
| indicatorType | Indicator style | `'dots' \| 'digital' \| 'none'` | `'dots'` |
| activeColor | Active indicator color | `string` | `'var(--see-primary)'` |
| inactiveColor | Inactive indicator color | `string` | `'rgba(255,255,255,0.5)'` |
| current | Current page index (v-model) | `number` | `0` |

## Events

| Event | Description | Parameters |
|-------|-------------|------------|
| onChange | Triggered on slide change | `(index: number)` |
| onClick | Triggered when an item is clicked | `(item: SwiperItemData, index: number)` |
| update:current | Triggered when page index changes | `(index: number)` |

## Slots

| Slot | Description | Slot Props |
|------|-------------|------------|
| item | Custom carousel item content | `{ item: SwiperItemData, index: number }` |

## SwiperItemData Type

```typescript
interface SwiperItemData {
  /** Image URL */
  image?: string
  /** Title */
  title?: string
  /** Link URL */
  url?: string
  /** Custom data */
  [key: string]: any
}
```
