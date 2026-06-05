---
layout: doc
outline: deep
title: Cascader 级联选择器
titleTemplate: SeeYouUI - Cascader 级联选择器
description: SeeYouUI 组件库 seeCascader 级联选择器组件
iframeSrc: /pages/seeCascader/index
---

# Cascader 级联选择器

> Tab 切换式层级选择器组件，支持无限级联动和懒加载。底部弹出面板，通过 Tab 标签页切换层级，适用于省市区选择、组织架构选择等多层级数据选择场景。

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基本使用

- 通过 `options` 传入树形结构数据，通过 `v-model` 绑定选中值路径数组。
- 选中叶子节点后自动确认并关闭面板。

```html:line-numbers {}
<see-cascader v-model="value" :options="options" />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref<(string | number)[]>([])
const options = [
  {
    value: 'zhejiang',
    text: '浙江',
    children: [
      {
        value: 'hangzhou',
        text: '杭州',
        children: [
          { value: 'xihu', text: '西湖区' },
          { value: 'yuhang', text: '余杭区' }
        ]
      },
      {
        value: 'ningbo',
        text: '宁波',
        children: [
          { value: 'haishu', text: '海曙区' },
          { value: 'yinzhou', text: '鄞州区' }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    text: '江苏',
    children: [
      {
        value: 'nanjing',
        text: '南京',
        children: [
          { value: 'xuanwu', text: '玄武区' },
          { value: 'gulou', text: '鼓楼区' }
        ]
      }
    ]
  }
]
</script>
```

## 懒加载

- 设置 `isLazy` 为 `true` 开启懒加载模式。
- 通过 `lazyLoad` 传入异步加载函数，函数接收当前节点，返回子选项数组。
- 选项数据中 `isLeaf` 字段标识是否为叶子节点。

```html:line-numbers {}
<see-cascader
  v-model="value"
  :options="options"
  isLazy
  :lazyLoad="loadChildren"
/>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref<(string | number)[]>([])
const options = [
  { value: 'zhejiang', text: '浙江', isLeaf: false },
  { value: 'jiangsu', text: '江苏', isLeaf: false }
]

async function loadChildren(node: any) {
  // 模拟异步请求
  return new Promise((resolve) => {
    setTimeout(() => {
      if (node.value === 'zhejiang') {
        resolve([
          { value: 'hangzhou', text: '杭州', isLeaf: false },
          { value: 'ningbo', text: '宁波' }
        ])
      } else {
        resolve([
          { value: 'nanjing', text: '南京' },
          { value: 'suzhou', text: '苏州' }
        ])
      }
    }, 500)
  })
}
</script>
```

## 自定义配置

- 通过 `toolbarTitle` 设置标题。
- 通过 `confirmText`、`cancelText` 自定义按钮文字。
- 设置 `isShowTab` 为 `false` 可隐藏层级 Tab 导航。
- 通过 `valueKey`、`labelKey`、`childrenKey` 自定义字段映射。

```html:line-numbers {}
<see-cascader
  v-model="value"
  :options="options"
  toolbarTitle="选择地区"
  confirmText="确定"
  cancelText="关闭"
  :isShowTab="false"
/>
```

## 禁用选项

- 在选项数据中设置 `disabled` 为 `true` 可禁用单个选项。
- 在组件上设置 `isDisabled` 可禁用整个选择器。

```html:line-numbers {}
<see-cascader v-model="value" :options="options" />
<see-cascader v-model="value" :options="options" isDisabled />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref<(string | number)[]>([])
const options = [
  {
    value: 'zhejiang',
    text: '浙江',
    children: [
      { value: 'hangzhou', text: '杭州' },
      { value: 'ningbo', text: '宁波', disabled: true }
    ]
  }
]
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue | 选中值路径数组（v-model） | `(string \| number)[]` | `[]` |
| options | 选项数据（树形结构） | `CascaderOption[]` | `[]` |
| placeholder | 占位符 | `string` | `'请选择'` |
| isDisabled | 是否禁用 | `boolean` | `false` |
| isReadonly | 是否只读 | `boolean` | `false` |
| isShowToolbar | 是否显示顶部工具栏 | `boolean` | `true` |
| toolbarTitle | 工具栏标题 | `string` | `''` |
| confirmText | 确认按钮文字 | `string` | `'确认'` |
| cancelText | 取消按钮文字 | `string` | `'取消'` |
| valueKey | 值键名 | `string` | `'value'` |
| labelKey | 标签键名 | `string` | `'text'` |
| childrenKey | 子选项键名 | `string` | `'children'` |
| isLazy | 是否懒加载子选项 | `boolean` | `false` |
| lazyLoad | 懒加载函数 | `(node: CascaderOption) => Promise<CascaderOption[]>` | - |
| size | 尺寸 | `'small' \| 'default' \| 'large'` | `'default'` |
| isBorder | 是否显示边框 | `boolean` | `true` |
| name | 表单字段名 | `string` | `''` |
| isShowTab | 是否显示层级 Tab 导航 | `boolean` | `true` |

**CascaderOption 类型定义：**

| 字段 | 说明 | 类型 | 是否必填 |
| --- | --- | --- | --- |
| value | 选项值 | `string \| number` | 是 |
| text | 选项文本 | `string` | 是 |
| disabled | 是否禁用 | `boolean` | 否 |
| isLeaf | 是否叶子节点（懒加载模式下使用） | `boolean` | 否 |
| children | 子选项列表 | `CascaderOption[]` | 否 |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onChange | 值变化时触发 | `value: (string \| number)[]` |
| onConfirm | 点击确认按钮时触发 | `value: (string \| number)[]` |
| onCancel | 点击取消按钮或遮罩时触发 | - |
| onTabChange | 切换层级 Tab 时触发 | `index: number` |
