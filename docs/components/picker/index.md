---
layout: doc
outline: deep
title: Picker 选择器
titleTemplate: SeeYouUI - Picker 选择器
description: SeeYouUI 组件库 seePicker 选择器组件
iframeSrc: /pages/seePicker/index
---

# Picker 选择器

> 底部弹出式滚轮选择器组件，支持单列、多列、联动三种模式。通过触摸滑动选择选项，支持惯性滚动和吸附效果，常用于表单中的选项选择场景。

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基本使用

- 单列模式下，`columns` 传入一维数组即可。通过 `v-model` 绑定选中值。

```html:line-numbers {}
<see-picker v-model="value" :columns="columns" />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const columns = [
  { text: '杭州', value: 'hangzhou' },
  { text: '宁波', value: 'ningbo' },
  { text: '温州', value: 'wenzhou' },
  { text: '嘉兴', value: 'jiaxing' }
]
</script>
```

## 多列选择

- 多列模式下，`columns` 传入二维数组，每列独立滚动。

```html:line-numbers {}
<see-picker v-model="value" :columns="columns" />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref<string[]>(['2024', '06'])
const columns = [
  [
    { text: '2023', value: '2023' },
    { text: '2024', value: '2024' },
    { text: '2025', value: '2025' }
  ],
  [
    { text: '01', value: '01' },
    { text: '02', value: '02' },
    { text: '03', value: '03' },
    { text: '04', value: '04' },
    { text: '05', value: '05' },
    { text: '06', value: '06' }
  ]
]
</script>
```

## 联动选择

- 设置 `isCascade` 为 `true` 开启联动模式，通过 `children` 字段定义子级数据。
- 选择某列后，右侧列会自动更新为对应子级选项。

```html:line-numbers {}
<see-picker v-model="value" :columns="columns" isCascade />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref<string[]>([])
const columns = [
  {
    text: '浙江',
    value: 'zhejiang',
    children: [
      {
        text: '杭州',
        value: 'hangzhou',
        children: [
          { text: '西湖区', value: 'xihu' },
          { text: '余杭区', value: 'yuhang' }
        ]
      },
      {
        text: '宁波',
        value: 'ningbo',
        children: [
          { text: '海曙区', value: 'haishu' },
          { text: '鄞州区', value: 'yinzhou' }
        ]
      }
    ]
  },
  {
    text: '江苏',
    value: 'jiangsu',
    children: [
      {
        text: '南京',
        value: 'nanjing',
        children: [
          { text: '玄武区', value: 'xuanwu' },
          { text: '鼓楼区', value: 'gulou' }
        ]
      }
    ]
  }
]
</script>
```

## 自定义配置

- 通过 `toolbarTitle` 设置标题。
- 通过 `confirmText`、`cancelText` 自定义按钮文字。
- 通过 `visibleItemCount` 控制可见选项数量。

```html:line-numbers {}
<see-picker
  v-model="value"
  :columns="columns"
  toolbarTitle="选择城市"
  confirmText="确定"
  cancelText="关闭"
  :visibleItemCount="7"
/>
```

## 禁用选项

- 在选项数据中设置 `disabled` 为 `true` 可禁用单个选项。
- 在组件上设置 `isDisabled` 可禁用整个选择器。

```html:line-numbers {}
<see-picker v-model="value" :columns="columns" />
<see-picker v-model="value" :columns="columns" isDisabled />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const columns = [
  { text: '选项一', value: '1' },
  { text: '选项二（禁用）', value: '2', disabled: true },
  { text: '选项三', value: '3' }
]
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue | 绑定值（v-model） | `string \| number \| (string\|number)[]` | `''` |
| columns | 选项数据 | `PickerColumn[]` | `[]` |
| placeholder | 占位符 | `string` | `'请选择'` |
| isDisabled | 是否禁用 | `boolean` | `false` |
| isReadonly | 是否只读 | `boolean` | `false` |
| isShowToolbar | 是否显示顶部工具栏 | `boolean` | `true` |
| toolbarTitle | 工具栏标题 | `string` | `''` |
| confirmText | 确认按钮文字 | `string` | `'确认'` |
| cancelText | 取消按钮文字 | `string` | `'取消'` |
| isCascade | 是否联动模式 | `boolean` | `false` |
| valueKey | 值键名 | `string` | `'value'` |
| labelKey | 标签键名 | `string` | `'text'` |
| childrenKey | 子选项键名 | `string` | `'children'` |
| size | 尺寸 | `'small' \| 'default' \| 'large'` | `'default'` |
| isBorder | 是否显示边框 | `boolean` | `true` |
| name | 表单字段名 | `string` | `''` |
| visibleItemCount | 可见选项数量 | `number` | `5` |
| isAsync | 是否异步加载 | `boolean` | `false` |

**PickerOption 类型定义：**

| 字段 | 说明 | 类型 | 是否必填 |
| --- | --- | --- | --- |
| text | 显示文字 | `string` | 是 |
| value | 选项值 | `string \| number` | 是 |
| disabled | 是否禁用 | `boolean` | 否 |
| children | 子选项（联动模式） | `PickerOption[]` | 否 |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onChange | 选中值变化时触发 | `value: string \| number \| (string\|number)[], index: number` |
| onConfirm | 点击确认按钮时触发 | `value: string \| number \| (string\|number)[]` |
| onCancel | 点击取消按钮或遮罩时触发 | - |
| onColumnChange | 列变化时触发（联动模式下切换列时） | `index: number` |

### Expose

| 方法 | 说明 | 参数 |
| --- | --- | --- |
| open | 打开选择器 | - |
| close | 关闭选择器 | - |
| getValue | 获取当前选中值 | - |
