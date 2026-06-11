---
layout: doc
outline: deep
title: CityLocate 城市定位选择器
titleTemplate: SeeYouUI - CityLocate 城市定位选择器
description: SeeYouUI 组件库 seeCityLocate 城市定位选择器组件
---

# CityLocate 城市定位选择器

出行/电商类应用的城市选择基础设施。支持 GPS 定位、热门城市、字母索引、拼音搜索、最近访问缓存。

## 基础用法

```vue
<template>
  <see-city-locate @on-select="onSelect" />
</template>

<script setup>
const onSelect = (city) => {
  console.log('选择了:', city)
}
</script>
```

## 自定义热门城市

```vue
<template>
  <see-city-locate :hot-cities="hotCities" @on-select="onSelect" />
</template>

<script setup>
const hotCities = [
  { id: 'beijing', name: '北京', level: 'city' },
  { id: 'shanghai', name: '上海', level: 'city' }
]
</script>
```

## CityInfo

| 属性 | 类型 | 说明 |
|------|------|------|
| id | string \| number | 城市 ID |
| name | string | 城市名称 |
| nameEn | string | 英文名称 |
| pinyin | string | 拼音 |
| firstLetter | string | 首字母 |
| level | `'country' \| 'province' \| 'city' \| 'district'` | 层级 |
| latitude | number | 纬度 |
| longitude | number | 经度 |
| hot | boolean | 是否热门城市 |

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| modelValue | CityInfo \| null | `null` | 当前选中的城市 |
| hotCities | CityInfo[] | 内置热门城市 | 热门城市列表 |
| cities | CityInfo[] | 内置城市数据 | 城市数据列表 |
| isShowSearch | boolean | `true` | 是否显示搜索框 |
| isShowLocation | boolean | `true` | 是否显示定位功能 |
| isShowHistory | boolean | `true` | 是否显示最近访问 |
| isInternational | boolean | `false` | 是否支持国际城市 |
| maxHistory | number | `10` | 最近访问最大数量 |
| searchPlaceholder | string | `'搜索城市'` | 搜索框占位文字 |
| locateText | string | `'定位中...'` | 定位按钮文字 |

## Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| onSelect | city | 选择城市 |
| onLocate | city | 定位成功 |
| onLocateError | error | 定位失败 |
