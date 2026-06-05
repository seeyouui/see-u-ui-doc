---
layout: doc
outline: deep
title: Select 选择器
titleTemplate: SeeYouUI - Select 选择器
description: SeeYouUI 组件库 seeSelect 选择器组件
iframeSrc: /pages/seeSelect/index
---

# Select 选择器

> 下拉选择器组件，支持单选、多选、搜索过滤、远程搜索、分组选项等特性。基于弹出式下拉面板实现，选项支持扁平列表和树形分组两种结构。

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基本使用

- 通过 `options` 设置选项列表，通过 `v-model` 绑定选中值。

```html:line-numbers {}
<see-select v-model="value" :options="options" />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  { label: '选项一', value: '1' },
  { label: '选项二', value: '2' },
  { label: '选项三', value: '3' }
]
</script>
```

## 多选

- 设置 `isMultiple` 为 `true` 开启多选模式，`modelValue` 需绑定数组类型。
- 通过 `maxTagCount` 控制最多显示的标签数量，超出部分以 `+N` 形式展示。

```html:line-numbers {}
<see-select v-model="value" :options="options" isMultiple />
<see-select v-model="value" :options="options" isMultiple :maxTagCount="2" />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref<string[]>([])
const options = [
  { label: '选项一', value: '1' },
  { label: '选项二', value: '2' },
  { label: '选项三', value: '3' }
]
</script>
```

## 搜索过滤

- 设置 `isFilterable` 为 `true` 开启本地搜索过滤功能。
- 可通过 `filterMethod` 自定义过滤逻辑。

```html:line-numbers {}
<see-select v-model="value" :options="options" isFilterable />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai' },
  { label: '广州', value: 'guangzhou' },
  { label: '深圳', value: 'shenzhen' }
]
</script>
```

## 远程搜索

- 设置 `isRemote` 为 `true` 开启远程搜索，通过 `remoteMethod` 传入搜索回调。
- 搜索输入自带 300ms 防抖处理。
- 设置 `loading` 为 `true` 展示加载状态。

```html:line-numbers {}
<see-select
  v-model="value"
  :options="options"
  isFilterable
  isRemote
  :remoteMethod="onSearch"
  :loading="loading"
/>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const options = ref([])
const loading = ref(false)

function onSearch(query: string) {
  loading.value = true
  // 模拟远程请求
  setTimeout(() => {
    options.value = [
      { label: `${query}-结果一`, value: `${query}-1` },
      { label: `${query}-结果二`, value: `${query}-2` }
    ]
    loading.value = false
  }, 500)
}
</script>
```

## 分组选项

- 通过在 `options` 中使用 `children` 字段嵌套子选项实现分组展示。

```html:line-numbers {}
<see-select v-model="value" :options="options" />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  {
    label: '华东地区',
    value: 'east',
    children: [
      { label: '上海', value: 'shanghai' },
      { label: '杭州', value: 'hangzhou' }
    ]
  },
  {
    label: '华南地区',
    value: 'south',
    children: [
      { label: '广州', value: 'guangzhou' },
      { label: '深圳', value: 'shenzhen' }
    ]
  }
]
</script>
```

## 禁用选项

- 在选项数据中设置 `isDisabled` 为 `true` 可禁用单个选项。
- 在组件上设置 `isDisabled` 可禁用整个选择器。

```html:line-numbers {}
<see-select v-model="value" :options="options" />
<see-select v-model="value" :options="options" isDisabled />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  { label: '选项一', value: '1' },
  { label: '选项二（禁用）', value: '2', isDisabled: true },
  { label: '选项三', value: '3' }
]
</script>
```

## 可清除

- 设置 `isClearable` 为 `true`，选中值后鼠标悬停会显示清除按钮。

```html:line-numbers {}
<see-select v-model="value" :options="options" isClearable />

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('1')
const options = [
  { label: '选项一', value: '1' },
  { label: '选项二', value: '2' },
  { label: '选项三', value: '3' }
]
</script>
```

## 不同尺寸

- 通过 `size` 设置选择器尺寸，支持 `small`、`default`、`large` 三种。

```html:line-numbers {}
<see-select v-model="value" :options="options" size="small" />
<see-select v-model="value" :options="options" />
<see-select v-model="value" :options="options" size="large" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue | 绑定值（v-model） | `string \| number \| (string\|number)[]` | `[]` |
| options | 选项列表 | `SelectOption[]` | `[]` |
| placeholder | 占位符 | `string` | `'请选择'` |
| isDisabled | 是否禁用 | `boolean` | `false` |
| isReadonly | 是否只读 | `boolean` | `false` |
| isClearable | 是否可清除 | `boolean` | `false` |
| isMultiple | 是否多选 | `boolean` | `false` |
| isFilterable | 是否可搜索 | `boolean` | `false` |
| filterMethod | 自定义过滤方法 | `(query: string, option: SelectOption) => boolean` | - |
| isRemote | 是否远程搜索 | `boolean` | `false` |
| remoteMethod | 远程搜索方法 | `(query: string) => void` | - |
| loading | 是否加载中 | `boolean` | `false` |
| size | 尺寸 | `'small' \| 'default' \| 'large'` | `'default'` |
| maxTagCount | 多选最多显示标签数 | `number` | - |
| isBorder | 是否显示边框 | `boolean` | `true` |
| name | 表单字段名 | `string` | `''` |
| valueKey | 选项值的键名 | `string` | `'value'` |
| labelKey | 选项标签的键名 | `string` | `'label'` |

**SelectOption 类型定义：**

| 字段 | 说明 | 类型 | 是否必填 |
| --- | --- | --- | --- |
| label | 显示文字 | `string` | 是 |
| value | 选项值 | `string \| number` | 是 |
| isDisabled | 是否禁用 | `boolean` | 否 |
| children | 子选项（分组时使用） | `SelectOption[]` | 否 |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onChange | 值变化时触发 | `value: string \| number \| (string\|number)[]` |
| onVisibleChange | 下拉框显示/隐藏时触发 | `visible: boolean` |
| onRemoveTag | 多选移除标签时触发 | `value: string \| number` |
| onClear | 清除时触发 | - |
| onSearch | 搜索输入时触发 | `query: string` |

### Slots

| 插槽名 | 说明 | 作用域参数 |
| --- | --- | --- |
| default | 自定义选项内容（作用域插槽） | `{ option: SelectOption }` |
| prefix | 触发区域前缀内容 | - |
| empty | 选项列表为空时的内容 | - |

### Expose

| 方法 | 说明 | 参数 |
| --- | --- | --- |
| open | 打开下拉框 | - |
| close | 关闭下拉框 | - |
| clear | 清除选中值 | - |
