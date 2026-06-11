---
layout: doc
outline: deep
title: CityLocate City Selector
titleTemplate: SeeYouUI - CityLocate City Selector
description: SeeYouUI component library seeCityLocate city selector component
---

# CityLocate City Selector

City selection infrastructure for travel/e-commerce applications. Supports GPS location, hot cities, alphabet index, pinyin search, and recent visit cache.

## Basic Usage

```vue
<template>
  <see-city-locate @on-select="onSelect" />
</template>

<script setup>
const onSelect = (city) => {
  console.log('Selected:', city)
}
</script>
```

## Custom Hot Cities

```vue
<template>
  <see-city-locate :hot-cities="hotCities" @on-select="onSelect" />
</template>

<script setup>
const hotCities = [
  { id: 'beijing', name: 'Beijing', level: 'city' },
  { id: 'shanghai', name: 'Shanghai', level: 'city' }
]
</script>
```

## CityInfo

| Property | Type | Description |
|----------|------|-------------|
| id | string \| number | City ID |
| name | string | City name |
| nameEn | string | English name |
| pinyin | string | Pinyin |
| firstLetter | string | First letter |
| level | `'country' \| 'province' \| 'city' \| 'district'` | Level |
| latitude | number | Latitude |
| longitude | number | Longitude |
| hot | boolean | Whether hot city |

## Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| modelValue | CityInfo \| null | `null` | Selected city |
| hotCities | CityInfo[] | Built-in hot cities | Hot city list |
| cities | CityInfo[] | Built-in city data | City data list |
| isShowSearch | boolean | `true` | Whether to show search box |
| isShowLocation | boolean | `true` | Whether to show location |
| isShowHistory | boolean | `true` | Whether to show recent visits |
| isInternational | boolean | `false` | Whether international cities |
| maxHistory | number | `10` | Max recent visits |
| searchPlaceholder | string | `'Search city'` | Search placeholder |
| locateText | string | `'Locating...'` | Locate button text |

## Events

| Event | Parameters | Description |
|-------|-----------|-------------|
| onSelect | city | City selected |
| onLocate | city | Location success |
| onLocateError | error | Location failed |
