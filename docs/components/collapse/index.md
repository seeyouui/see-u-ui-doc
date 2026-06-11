---
layout: doc
outline: deep
title: Collapse 折叠面板
titleTemplate: SeeYouUI - Collapse 折叠面板
description: SeeYouUI 组件库 see-collapse 折叠面板组件
iframeSrc: /pages/seeCollapse/index
---

# Collapse 折叠面板

将一组内容进行折叠/展开操作，支持手风琴模式。

## 基本使用

```vue
<script setup lang="ts">
import { ref } from 'vue'

const activeNames = ref(['1'])

const onChange = (names) => {
  console.log('当前展开:', names)
}
</script>

<template>
  <see-collapse v-model="activeNames" @change="onChange">
    <see-collapse-item title="标题1" name="1">
      代码是写出来给人看的，附带能在机器上运行。
    </see-collapse-item>
    <see-collapse-item title="标题2" name="2">
      技术的浪潮不断向前，唯有持续学习才能不被淘汰。
    </see-collapse-item>
    <see-collapse-item title="标题3" name="3" is-disabled>
      此项被禁用，无法展开。
    </see-collapse-item>
  </see-collapse>
</template>
```

## 手风琴模式

```vue
<script setup lang="ts">
import { ref } from 'vue'

const activeName = ref('1')
</script>

<template>
  <see-collapse v-model="activeName" is-accordion>
    <see-collapse-item title="标题1" name="1">
      手风琴模式下同时只能展开一个面板。
    </see-collapse-item>
    <see-collapse-item title="标题2" name="2">
      展开此项会自动收起其他项。
    </see-collapse-item>
  </see-collapse>
</template>
```

## API

### SeeCollapse Props

| 参数名 | 说明 | 类型 | 默认值 |
|--------|------|------|--------|
| modelValue | 当前展开的 item name 数组（v-model） | `(string \| number)[]` | `[]` |
| isAccordion | 手风琴模式（同时只能展开一个） | `Boolean` | `false` |
| isShowBorder | 是否显示边框 | `Boolean` | `true` |

### SeeCollapse Events

| 属性名 | 说明 | 回调参数 |
|--------|------|----------|
| onChange | 展开项变化时触发 | `(names: (string \| number)[])` |
| update:modelValue | v-model 更新 | `(names: (string \| number)[])` |

### SeeCollapseItem Props

| 参数名 | 说明 | 类型 | 默认值 |
|--------|------|------|--------|
| name | 唯一标识（必填） | `String \| Number` | - |
| title | 标题 | `String` | `''` |
| icon | 左侧图标 | `String` | `''` |
| isDisabled | 是否禁用 | `Boolean` | `false` |
| isLazy | 是否懒加载内容 | `Boolean` | `false` |
| arrowIcon | 自定义箭头图标 | `String` | `'›'` |

### SeeCollapseItem Events

| 属性名 | 说明 | 回调参数 |
|--------|------|----------|
| onClick | 点击标题时触发 | - |

### SeeCollapseItem Slots

| 插槽名 | 说明 |
|--------|------|
| title | 自定义标题 |
| default | 折叠内容 |

### 平台差异

| 属性 | 微信小程序 | H5 | App |
|------|-----------|-----|-----|
| modelValue | 支持 | 支持 | 支持 |
| isAccordion | 支持 | 支持 | 支持 |
| isLazy | 支持 | 支持 | 支持 |
| arrowIcon | 支持 | 支持 | 支持 |
| icon | 支持 | 支持 | 支持 |
