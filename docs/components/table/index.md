---
layout: doc
outline: deep
title: Table 表格
titleTemplate: SeeYouUI - Table 表格
description: SeeYouUI 组件库 seeTable 表格组件
iframeSrc: /pages/seeTable/index
---

# Table 表格

> 重型数据表格，支持列配置、表头、横向滚动、状态展示、边框/斑马纹/尺寸、插槽、行/单元格点击、排序、选择、展开行、树形数据、分页联动、吸顶表头、固定列、虚拟行、虚拟列及高级组合。

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基本使用

- 通过 `columns` 定义列配置。
- 通过 `data` 传入表格数据。
- 通过 `rowKey` 指定行唯一标识字段。

```html:line-numbers {}
<see-table :columns="columns" :data="data" rowKey="id" />

<script lang="ts" setup>
const columns = [
  { key: 'name', title: '姓名' },
  { key: 'age', title: '年龄' },
  { key: 'address', title: '地址' }
]

const data = [
  { id: 1, name: '张三', age: 25, address: '北京市' },
  { id: 2, name: '李四', age: 30, address: '上海市' },
  { id: 3, name: '王五', age: 28, address: '广州市' }
]
</script>
```

## 列配置

- `key`：列唯一标识。
- `title`：列标题。
- `dataIndex`：数据字段名，默认等于 `key`。
- `width`：列宽度（px 或 rpx）。
- `minWidth`：最小列宽度。
- `align`：文本对齐方式，支持 `left`、`center`、`right`。
- `ellipsis`：文本溢出时是否省略。
- `formatter`：自定义单元格格式化函数。

```html:line-numbers {}
<script lang="ts" setup>
const columns = [
  { key: 'name', title: '姓名', width: 120, fixed: 'left' },
  { key: 'age', title: '年龄', align: 'center', width: 80 },
  {
    key: 'score',
    title: '分数',
    formatter: (row) => `${row.score}分`
  },
  { key: 'address', title: '地址', ellipsis: true }
]
</script>
```

## 边框与斑马纹

- 设置 `border` 为 `true` 显示边框。
- 设置 `stripe` 为 `true` 显示斑马纹。

```html:line-numbers {}
<see-table :columns="columns" :data="data" rowKey="id" border />
<see-table :columns="columns" :data="data" rowKey="id" stripe />
```

## 表格尺寸

- 通过 `size` 设置表格尺寸，支持 `small`、`medium`、`large`。

```html:line-numbers {}
<see-table :columns="columns" :data="data" rowKey="id" size="small" />
<see-table :columns="columns" :data="data" rowKey="id" size="medium" />
<see-table :columns="columns" :data="data" rowKey="id" size="large" />
```

## 固定高度与滚动

- 通过 `height` 设置固定高度，启用纵向滚动。
- 通过 `maxHeight` 设置最大高度。

```html:line-numbers {}
<see-table :columns="columns" :data="data" rowKey="id" height="300px" />
<see-table :columns="columns" :data="data" rowKey="id" maxHeight="400px" />
```

## 吸顶表头

- 设置 `stickyHeader` 为 `true` 开启吸顶表头。

```html:line-numbers {}
<see-table :columns="columns" :data="data" rowKey="id" stickyHeader height="300px" />
```

## 排序

- 设置 `sortable` 为 `true` 开启全局排序。
- 或在列配置中设置 `sortable` 开启单列排序。
- 通过 `sortKey` 和 `sortOrder` 控制受控排序。
- 排序变更时触发 `onSortChange` 事件。

```html:line-numbers {}
<see-table
  :columns="columns"
  :data="data"
  rowKey="id"
  sortable
  :sortKey="sortKey"
  :sortOrder="sortOrder"
  @onSortChange="handleSortChange"
/>

<script lang="ts" setup>
const columns = [
  { key: 'name', title: '姓名' },
  { key: 'age', title: '年龄', sortable: true }
]
</script>
```

## 行选择

- 设置 `selectable` 为 `true` 开启行选择。
- 通过 `selectedKeys` 控制选中行。
- 或在列配置中设置 `type: 'selection'` 自定义选择列位置。
- 选择变更时触发 `onSelectionChange` 事件。

```html:line-numbers {}
<see-table
  :columns="columns"
  :data="data"
  rowKey="id"
  selectable
  :selectedKeys="selectedKeys"
  @onSelectionChange="handleSelectionChange"
/>
```

## 展开行

- 在列配置中设置 `type: 'expand'` 添加展开列。
- 设置 `expandable` 为 `true` 开启展开行功能。
- 通过 `expandedKeys` 控制展开行。
- 使用 `expand` 插槽自定义展开内容。

```html:line-numbers {}
<see-table
  :columns="columns"
  :data="data"
  rowKey="id"
  expandable
  :expandedKeys="expandedKeys"
>
  <template #expand="{ row }">
    <view style="padding: 16rpx;">{{ row.detail }}</view>
  </template>
</see-table>

<script lang="ts" setup>
const columns = [
  { key: 'expand', type: 'expand', title: '' },
  { key: 'name', title: '姓名' }
]
</script>
```

## 序号列

- 在列配置中设置 `type: 'index'` 添加序号列。

```html:line-numbers {}
<script lang="ts" setup>
const columns = [
  { key: 'index', type: 'index', title: '#', width: 60 },
  { key: 'name', title: '姓名' }
]
</script>
```

## 树形数据

- 设置 `tree` 为 `true` 开启树形数据展示。
- 通过 `childrenField` 指定子节点字段名，默认为 `children`。
- 通过 `indent` 设置缩进量，默认为 `24`。
- 设置 `defaultExpandAll` 为 `true` 默认展开所有节点。

```html:line-numbers {}
<see-table
  :columns="columns"
  :data="treeData"
  rowKey="id"
  tree
  childrenField="children"
  :defaultExpandAll="true"
/>

<script lang="ts" setup>
const treeData = [
  {
    id: 1, name: '部门A',
    children: [
      { id: 11, name: '小组A-1' },
      { id: 12, name: '小组A-2' }
    ]
  },
  { id: 2, name: '部门B' }
]
</script>
```

## 分页

- 设置 `pagination` 为分页配置对象开启分页。
- 配置项：`current`（当前页）、`pageSize`（每页条数）、`total`（总条数）、`showTotal`（显示总数）、`simple`（简单分页）。

```html:line-numbers {}
<see-table
  :columns="columns"
  :data="data"
  rowKey="id"
  :pagination="{ current: 1, pageSize: 10, total: 100, showTotal: true }"
  @onPageChange="handlePageChange"
/>
```

## 虚拟滚动

- 设置 `virtual` 为 `true` 开启虚拟行滚动（纵向）。
- 设置 `virtualX` 为 `true` 开启虚拟列滚动（横向）。
- `rowHeight`：行高，虚拟滚动时建议设置。
- `estimatedRowHeight`：预估行高，用于动态高度。
- `buffer`：缓冲行数，默认为 `5`。

```html:line-numbers {}
<see-table
  :columns="columns"
  :data="largeData"
  rowKey="id"
  virtual
  :rowHeight="48"
  height="400px"
/>
```

## 固定列

- 在列配置中设置 `fixed` 为 `'left'` 或 `'right'` 实现固定列。

```html:line-numbers {}
<script lang="ts" setup>
const columns = [
  { key: 'name', title: '姓名', width: 120, fixed: 'left' },
  { key: 'age', title: '年龄' },
  { key: 'address', title: '地址' },
  { key: 'action', title: '操作', width: 100, fixed: 'right' }
]
</script>
```

## 自定义单元格

- 通过 `cell-{key}` 插槽自定义指定列的单元格内容。

```html:line-numbers {}
<see-table :columns="columns" :data="data" rowKey="id">
  <template #cell-name="{ row, value }">
    <text style="color: #2979ff;">{{ value }}</text>
  </template>
  <template #cell-action="{ row }">
    <button size="mini" @tap="handleEdit(row)">编辑</button>
  </template>
</see-table>
```

## 自定义表头

- 通过 `header-{key}` 插槽自定义指定列的表头内容。

```html:line-numbers {}
<see-table :columns="columns" :data="data" rowKey="id">
  <template #header-name="{ column }">
    <text style="color: red;">{{ column.title }} *</text>
  </template>
</see-table>
```

## 加载与空状态

- 设置 `loading` 为 `true` 显示加载状态。
- 设置 `error` 为 `true` 显示错误状态。
- 通过 `emptyText` 自定义空状态文字。

```html:line-numbers {}
<see-table :columns="columns" :data="[]" loading />
<see-table :columns="columns" :data="[]" error />
<see-table :columns="columns" :data="[]" emptyText="暂无记录" />
```

## API

### Props

| 参数名           | 说明                         | 类型                                       | 默认值    | 可选值                               | 平台差异 |
| ---------------- | ---------------------------- | ------------------------------------------ | --------- | ------------------------------------ | -------- |
| data             | 表格数据                     | Array                                      | `[]`      | 任意数组                             | -        |
| columns          | 列配置                       | `SeeTableColumn[]`                         | `[]`      | 见列配置说明                         | -        |
| rowKey           | 行唯一标识字段名或函数       | String / Function                          | `''`      | 字符串或 `(row, index) => string`    | -        |
| loading          | 是否加载中                   | Boolean                                    | `false`   | `true`、`false`                      | -        |
| error            | 是否加载出错                 | Boolean                                    | `false`   | `true`、`false`                      | -        |
| emptyText        | 空状态文字                   | String                                     | `''`      | 任意字符串                           | -        |
| border           | 是否显示边框                 | Boolean                                    | `false`   | `true`、`false`                      | -        |
| stripe           | 是否显示斑马纹               | Boolean                                    | `false`   | `true`、`false`                      | -        |
| size             | 表格尺寸                     | `'small' \| 'medium' \| 'large'`           | `'medium'` | `small`、`medium`、`large`           | -        |
| height           | 表格固定高度                 | String / Number                            | `''`      | 任意 CSS 长度值                      | -        |
| maxHeight        | 表格最大高度                 | String / Number                            | `''`      | 任意 CSS 长度值                      | -        |
| showHeader       | 是否显示表头                 | Boolean                                    | `true`    | `true`、`false`                      | -        |
| stickyHeader     | 吸顶表头                     | Boolean                                    | `false`   | `true`、`false`                      | -        |
| selectable       | 是否可选择行                 | Boolean                                    | `false`   | `true`、`false`                      | -        |
| selectedKeys     | 选中行的 key 列表            | `Array<string \| number>`                  | `[]`      | 任意数组                             | -        |
| defaultSelectedKeys | 默认选中行的 key 列表     | `Array<string \| number>`                  | `[]`      | 任意数组                             | -        |
| sortable         | 是否可排序                   | Boolean                                    | `false`   | `true`、`false`                      | -        |
| sortKey          | 排序字段                     | String                                     | `''`      | 任意字符串                           | -        |
| sortOrder        | 排序方向                     | `'asc' \| 'desc' \| ''`                    | `''`      | `asc`、`desc`、`''`                  | -        |
| expandable       | 是否可展开行                 | Boolean                                    | `false`   | `true`、`false`                      | -        |
| expandedKeys     | 展开行的 key 列表            | `Array<string \| number>`                  | `[]`      | 任意数组                             | -        |
| tree             | 是否为树形数据               | Boolean                                    | `false`   | `true`、`false`                      | -        |
| childrenField    | 子节点字段名                 | String                                     | `'children'` | 任意字符串                         | -        |
| indent           | 树形缩进量                   | Number                                     | `24`      | 任意正数                             | -        |
| defaultExpandAll | 是否默认展开所有节点         | Boolean                                    | `false`   | `true`、`false`                      | -        |
| pagination       | 分页配置                     | `false \| SeeTablePagination`              | `false`   | `false` 或分页配置对象               | -        |
| virtual          | 是否开启虚拟行               | Boolean                                    | `false`   | `true`、`false`                      | -        |
| virtualX         | 是否开启虚拟列               | Boolean                                    | `false`   | `true`、`false`                      | -        |
| rowHeight        | 行高，虚拟滚动时建议设置     | Number                                     | `0`       | 任意正数                             | -        |
| estimatedRowHeight | 预估行高，动态高度使用     | Number                                     | `0`       | 任意正数                             | -        |
| buffer           | 虚拟滚动缓冲行数             | Number                                     | `5`       | 任意正数                             | -        |

### 列配置 (SeeTableColumn)

| 参数名    | 说明                           | 类型                                           | 默认值      |
| --------- | ------------------------------ | ---------------------------------------------- | ----------- |
| key       | 列唯一标识                     | String                                         | -           |
| title     | 列标题                         | String                                         | -           |
| dataIndex | 数据字段名，默认等于 key       | String                                         | `key`       |
| width     | 列宽度                         | String / Number                                | -           |
| minWidth  | 最小列宽度                     | String / Number                                | -           |
| align     | 文本对齐方式                   | `'left' \| 'center' \| 'right'`                | `'left'`    |
| fixed     | 固定列方向                     | `'left' \| 'right'`                            | -           |
| sortable  | 是否可排序                     | Boolean / `'custom'`                           | -           |
| ellipsis  | 文本溢出时是否省略             | Boolean                                        | `false`     |
| type      | 列类型                         | `'normal' \| 'selection' \| 'index' \| 'expand'` | `'normal'` |
| children  | 子列（分组表头）               | `SeeTableColumn[]`                             | -           |
| formatter | 自定义单元格格式化             | `(row, column, rowIndex) => string \| number`  | -           |

### Events

| 事件名           | 说明                 | 回调参数                                                          | 平台差异 |
| ---------------- | -------------------- | ----------------------------------------------------------------- | -------- |
| onRowClick       | 点击行时触发         | `row: unknown, rowIndex: number`                                  | -        |
| onCellClick      | 点击单元格时触发     | `row: unknown, column: SeeTableColumn, rowIndex: number`          | -        |
| onSortChange     | 排序变更时触发       | `{ key: string, order: string, column: SeeTableColumn }`          | -        |
| onSelectionChange | 选择变更时触发      | `selectedKeys: Array<string \| number>, selectedRows: unknown[]`  | -        |
| onExpandChange   | 展开变更时触发       | `expandedKeys: Array<string \| number>, row: unknown`             | -        |
| onPageChange     | 分页变更时触发       | `{ current: number, pageSize: number }`                           | -        |
| onScroll         | 滚动时触发           | `event: unknown`                                                  | -        |
| onRangeChange    | 虚拟滚动范围变更时触发 | `{ rowStart, rowEnd, colStart, colEnd }`                        | -        |

### Slots

| 插槽名           | 说明           | 作用域数据                                              |
| ---------------- | -------------- | ------------------------------------------------------- |
| cell-{key}       | 自定义单元格   | `{ row, column, rowIndex, value }`                      |
| header-{key}     | 自定义表头     | `{ column, columnIndex }`                               |
| expand           | 展开行内容     | `{ row, rowIndex }`                                     |
| loading          | 自定义加载状态 | 无                                                      |
| empty            | 自定义空状态   | 无                                                      |
| error            | 自定义错误状态 | 无                                                      |
| footer           | 表格底部       | 无                                                      |
