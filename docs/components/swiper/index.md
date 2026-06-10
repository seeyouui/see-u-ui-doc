---
layout: doc
outline: deep
title: Swiper 轮播图
titleTemplate: SeeYouUI - Swiper 轮播图
description: SeeYouUI 组件库 SeeSwiper 轮播图组件
iframeSrc: /pages/seeSwiper/index
---

# SeeSwiper 轮播图

轮播图组件，支持图片轮播、自动播放、多种指示器样式以及自定义内容。

## 基础用法

```vue
<template>
  <SeeSwiper :list="list" @onClick="onItemClick" />
</template>

<script setup>
import SeeSwiper from '@/uni_modules/see-u-ui/components/see-swiper/see-swiper.vue'

const list = [
  { image: 'https://example.com/img1.png', title: '标题一' },
  { image: 'https://example.com/img2.png', title: '标题二' },
  { image: 'https://example.com/img3.png', title: '标题三' },
]

const onItemClick = (item, index) => {
  console.log('点击了:', item.title, index)
}
</script>
```

## 自定义高度

通过 `height` 属性设置轮播图高度，默认为 `300rpx`。

```vue
<SeeSwiper :list="list" height="400rpx" />
```

## 数字指示器

通过 `indicatorType="digital"` 显示数字形式的指示器。

```vue
<SeeSwiper :list="list" indicatorType="digital" />
```

## 无指示器

通过 `indicatorType="none"` 隐藏指示器。

```vue
<SeeSwiper :list="list" indicatorType="none" />
```

## 自定义内容插槽

通过 `item` 插槽自定义轮播内容。

```vue
<SeeSwiper :list="list" height="400rpx">
  <template #item="{ item, index }">
    <view class="custom-slide">
      <image :src="item.image" mode="aspectFill" />
      <view class="overlay">
        <text>{{ item.title }} - 第 {{ index + 1 }} 页</text>
      </view>
    </view>
  </template>
</SeeSwiper>
```

## v-model 双向绑定

通过 `v-model:current` 实现当前页码的双向绑定。

```vue
<template>
  <SeeSwiper :list="list" v-model:current="current" />
  <button @click="current = 0">回到第一页</button>
</template>

<script setup>
import { ref } from 'vue'
const current = ref(0)
</script>
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| list | 轮播数据 | `SwiperItemData[]` | `[]` |
| height | 轮播图高度 | `string` | `'300rpx'` |
| autoplay | 是否自动播放 | `boolean` | `true` |
| interval | 自动播放间隔（毫秒） | `number` | `3000` |
| duration | 滑动动画时长（毫秒） | `number` | `300` |
| loop | 是否循环播放 | `boolean` | `true` |
| indicatorType | 指示器样式 | `'dots' \| 'digital' \| 'none'` | `'dots'` |
| activeColor | 指示器激活颜色 | `string` | `'var(--see-primary)'` |
| inactiveColor | 指示器默认颜色 | `string` | `'rgba(255,255,255,0.5)'` |
| current | 当前页码（v-model） | `number` | `0` |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| onChange | 切换时触发 | `(index: number)` |
| onClick | 点击轮播项时触发 | `(item: SwiperItemData, index: number)` |
| update:current | 页码变化时触发 | `(index: number)` |

## Slots

| 插槽名 | 说明 | 插槽参数 |
|--------|------|----------|
| item | 自定义轮播项内容 | `{ item: SwiperItemData, index: number }` |

## SwiperItemData 类型

```typescript
interface SwiperItemData {
  /** 图片 URL */
  image?: string
  /** 标题 */
  title?: string
  /** 链接 */
  url?: string
  /** 自定义数据 */
  [key: string]: any
}
```
