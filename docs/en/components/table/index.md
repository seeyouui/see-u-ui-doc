---
layout: doc
outline: deep
title: Table
titleTemplate: SeeYouUI - Table
description: SeeYouUI Component Library seeTable component
iframeSrc: /pages/seeTable/index
---

# Table

> A full-featured data table supporting column configuration, headers, horizontal scrolling, state display, borders/stripes/sizes, slots, row/cell click, sorting, selection, expandable rows, tree data, pagination, sticky headers, fixed columns, virtual rows, virtual columns, and advanced combinations.

## Platform Differences

| App (vue) | App (nvue) | H5  | Mini Program |
| --------- | ---------- | --- | ------------ |
| √         | √          | √   | √            |

## Basic Usage

- Define columns via `columns`.
- Pass table data via `data`.
- Specify the unique row identifier via `rowKey`.

```html:line-numbers {}
<see-table :columns="columns" :data="data" rowKey="id" />

<script lang="ts" setup>
const columns = [
  { key: 'name', title: 'Name' },
  { key: 'age', title: 'Age' },
  { key: 'address', title: 'Address' }
]

const data = [
  { id: 1, name: 'John', age: 25, address: 'New York' },
  { id: 2, name: 'Jane', age: 30, address: 'London' },
  { id: 3, name: 'Bob', age: 28, address: 'Paris' }
]
</script>
```

## Column Configuration

- `key`: Unique column identifier.
- `title`: Column title.
- `dataIndex`: Data field name, defaults to `key`.
- `width`: Column width (px or rpx).
- `minWidth`: Minimum column width.
- `align`: Text alignment, supports `left`, `center`, `right`.
- `ellipsis`: Whether to ellipsis on overflow.
- `formatter`: Custom cell formatting function.

```html:line-numbers {}
<script lang="ts" setup>
const columns = [
  { key: 'name', title: 'Name', width: 120, fixed: 'left' },
  { key: 'age', title: 'Age', align: 'center', width: 80 },
  {
    key: 'score',
    title: 'Score',
    formatter: (row) => `${row.score} pts`
  },
  { key: 'address', title: 'Address', ellipsis: true }
]
</script>
```

## Borders and Stripes

- Set `border` to `true` to show borders.
- Set `stripe` to `true` to show stripes.

```html:line-numbers {}
<see-table :columns="columns" :data="data" rowKey="id" border />
<see-table :columns="columns" :data="data" rowKey="id" stripe />
```

## Table Size

- Set table size via `size`, supporting `small`, `medium`, `large`.

```html:line-numbers {}
<see-table :columns="columns" :data="data" rowKey="id" size="small" />
<see-table :columns="columns" :data="data" rowKey="id" size="medium" />
<see-table :columns="columns" :data="data" rowKey="id" size="large" />
```

## Fixed Height and Scrolling

- Set a fixed height via `height` to enable vertical scrolling.
- Set a maximum height via `maxHeight`.

```html:line-numbers {}
<see-table :columns="columns" :data="data" rowKey="id" height="300px" />
<see-table :columns="columns" :data="data" rowKey="id" maxHeight="400px" />
```

## Sticky Header

- Set `stickyHeader` to `true` to enable sticky headers.

```html:line-numbers {}
<see-table :columns="columns" :data="data" rowKey="id" stickyHeader height="300px" />
```

## Sorting

- Set `sortable` to `true` to enable global sorting.
- Or set `sortable` in column config for single-column sorting.
- Control sorting via `sortKey` and `sortOrder`.
- The `onSortChange` event fires on sort changes.

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
  { key: 'name', title: 'Name' },
  { key: 'age', title: 'Age', sortable: true }
]
</script>
```

## Row Selection

- Set `selectable` to `true` to enable row selection.
- Control selected rows via `selectedKeys`.
- Or set `type: 'selection'` in column config for custom selection column position.
- The `onSelectionChange` event fires on selection changes.

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

## Expandable Rows

- Set `type: 'expand'` in column config to add an expand column.
- Set `expandable` to `true` to enable row expansion.
- Control expanded rows via `expandedKeys`.
- Use the `expand` slot for custom expand content.

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
  { key: 'name', title: 'Name' }
]
</script>
```

## Index Column

- Set `type: 'index'` in column config to add an index column.

```html:line-numbers {}
<script lang="ts" setup>
const columns = [
  { key: 'index', type: 'index', title: '#', width: 60 },
  { key: 'name', title: 'Name' }
]
</script>
```

## Tree Data

- Set `tree` to `true` to enable tree data display.
- Specify the children field name via `childrenField`, defaults to `children`.
- Set indentation via `indent`, defaults to `24`.
- Set `defaultExpandAll` to `true` to expand all nodes by default.

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
    id: 1, name: 'Department A',
    children: [
      { id: 11, name: 'Team A-1' },
      { id: 12, name: 'Team A-2' }
    ]
  },
  { id: 2, name: 'Department B' }
]
</script>
```

## Pagination

- Set `pagination` to a pagination config object to enable pagination.
- Config options: `current` (current page), `pageSize` (items per page), `total` (total items), `showTotal` (show total), `simple` (simple pagination).

```html:line-numbers {}
<see-table
  :columns="columns"
  :data="data"
  rowKey="id"
  :pagination="{ current: 1, pageSize: 10, total: 100, showTotal: true }"
  @onPageChange="handlePageChange"
/>
```

## Virtual Scrolling

- Set `virtual` to `true` to enable virtual row scrolling (vertical).
- Set `virtualX` to `true` to enable virtual column scrolling (horizontal).
- `rowHeight`: Row height, recommended for virtual scrolling.
- `estimatedRowHeight`: Estimated row height for dynamic heights.
- `buffer`: Buffer row count, defaults to `5`.

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

## Fixed Columns

- Set `fixed` to `'left'` or `'right'` in column config for fixed columns.

```html:line-numbers {}
<script lang="ts" setup>
const columns = [
  { key: 'name', title: 'Name', width: 120, fixed: 'left' },
  { key: 'age', title: 'Age' },
  { key: 'address', title: 'Address' },
  { key: 'action', title: 'Action', width: 100, fixed: 'right' }
]
</script>
```

## Custom Cells

- Customize specific column cells via `cell-{key}` slots.

```html:line-numbers {}
<see-table :columns="columns" :data="data" rowKey="id">
  <template #cell-name="{ row, value }">
    <text style="color: #2979ff;">{{ value }}</text>
  </template>
  <template #cell-action="{ row }">
    <button size="mini" @tap="handleEdit(row)">Edit</button>
  </template>
</see-table>
```

## Custom Headers

- Customize specific column headers via `header-{key}` slots.

```html:line-numbers {}
<see-table :columns="columns" :data="data" rowKey="id">
  <template #header-name="{ column }">
    <text style="color: red;">{{ column.title }} *</text>
  </template>
</see-table>
```

## Loading and Empty States

- Set `loading` to `true` to show loading state.
- Set `error` to `true` to show error state.
- Customize empty state text via `emptyText`.

```html:line-numbers {}
<see-table :columns="columns" :data="[]" loading />
<see-table :columns="columns" :data="[]" error />
<see-table :columns="columns" :data="[]" emptyText="No records" />
```

## API

### Props

| Parameter          | Description                          | Type                                       | Default      | Optional Values                           | Platform Notes |
| ------------------ | ------------------------------------ | ------------------------------------------ | ------------ | ----------------------------------------- | -------------- |
| data               | Table data                           | Array                                      | `[]`         | Any array                                 | -              |
| columns            | Column configuration                 | `SeeTableColumn[]`                         | `[]`         | See column config                         | -              |
| rowKey             | Unique row identifier or function    | String / Function                          | `''`         | String or `(row, index) => string`        | -              |
| loading            | Whether loading                      | Boolean                                    | `false`      | `true`, `false`                           | -              |
| error              | Whether error state                  | Boolean                                    | `false`      | `true`, `false`                           | -              |
| emptyText          | Empty state text                     | String                                     | `''`         | Any string                                | -              |
| border             | Whether to show borders              | Boolean                                    | `false`      | `true`, `false`                           | -              |
| stripe             | Whether to show stripes              | Boolean                                    | `false`      | `true`, `false`                           | -              |
| size               | Table size                           | `'small' \| 'medium' \| 'large'`           | `'medium'`   | `small`, `medium`, `large`                | -              |
| height             | Fixed table height                   | String / Number                            | `''`         | Any CSS length value                      | -              |
| maxHeight          | Maximum table height                 | String / Number                            | `''`         | Any CSS length value                      | -              |
| showHeader         | Whether to show header               | Boolean                                    | `true`       | `true`, `false`                           | -              |
| stickyHeader       | Sticky header                        | Boolean                                    | `false`      | `true`, `false`                           | -              |
| selectable         | Whether rows are selectable          | Boolean                                    | `false`      | `true`, `false`                           | -              |
| selectedKeys       | Selected row keys                    | `Array<string \| number>`                  | `[]`         | Any array                                 | -              |
| defaultSelectedKeys | Default selected row keys           | `Array<string \| number>`                  | `[]`         | Any array                                 | -              |
| sortable           | Whether sortable                     | Boolean                                    | `false`      | `true`, `false`                           | -              |
| sortKey            | Sort field                           | String                                     | `''`         | Any string                                | -              |
| sortOrder          | Sort direction                       | `'asc' \| 'desc' \| ''`                    | `''`         | `asc`, `desc`, `''`                       | -              |
| expandable         | Whether rows are expandable          | Boolean                                    | `false`      | `true`, `false`                           | -              |
| expandedKeys       | Expanded row keys                    | `Array<string \| number>`                  | `[]`         | Any array                                 | -              |
| tree               | Whether data is tree-structured      | Boolean                                    | `false`      | `true`, `false`                           | -              |
| childrenField      | Children field name                  | String                                     | `'children'` | Any string                                | -              |
| indent             | Tree indentation                     | Number                                     | `24`         | Any positive number                       | -              |
| defaultExpandAll   | Whether to expand all nodes by default | Boolean                                 | `false`      | `true`, `false`                           | -              |
| pagination         | Pagination config                    | `false \| SeeTablePagination`              | `false`      | `false` or pagination config object       | -              |
| virtual            | Enable virtual rows                  | Boolean                                    | `false`      | `true`, `false`                           | -              |
| virtualX           | Enable virtual columns               | Boolean                                    | `false`      | `true`, `false`                           | -              |
| rowHeight          | Row height for virtual scrolling     | Number                                     | `0`          | Any positive number                       | -              |
| estimatedRowHeight | Estimated row height for dynamic     | Number                                     | `0`          | Any positive number                       | -              |
| buffer             | Virtual scroll buffer rows           | Number                                     | `5`          | Any positive number                       | -              |

### Column Config (SeeTableColumn)

| Parameter  | Description                          | Type                                           | Default    |
| ---------- | ------------------------------------ | ---------------------------------------------- | ---------- |
| key        | Unique column identifier             | String                                         | -          |
| title      | Column title                         | String                                         | -          |
| dataIndex  | Data field name, defaults to key     | String                                         | `key`      |
| width      | Column width                         | String / Number                                | -          |
| minWidth   | Minimum column width                 | String / Number                                | -          |
| align      | Text alignment                       | `'left' \| 'center' \| 'right'`                | `'left'`   |
| fixed      | Fixed column direction               | `'left' \| 'right'`                            | -          |
| sortable   | Whether sortable                     | Boolean / `'custom'`                           | -          |
| ellipsis   | Ellipsis on overflow                 | Boolean                                        | `false`    |
| type       | Column type                          | `'normal' \| 'selection' \| 'index' \| 'expand'` | `'normal'` |
| children   | Child columns (grouped headers)      | `SeeTableColumn[]`                             | -          |
| formatter  | Custom cell formatter                | `(row, column, rowIndex) => string \| number`  | -          |

### Events

| Event             | Description                            | Callback Parameters                                                   | Platform Notes |
| ----------------- | -------------------------------------- | --------------------------------------------------------------------- | -------------- |
| onRowClick        | Triggered when row is clicked          | `row: unknown, rowIndex: number`                                      | -              |
| onCellClick       | Triggered when cell is clicked         | `row: unknown, column: SeeTableColumn, rowIndex: number`              | -              |
| onSortChange      | Triggered on sort change               | `{ key: string, order: string, column: SeeTableColumn }`              | -              |
| onSelectionChange | Triggered on selection change          | `selectedKeys: Array<string \| number>, selectedRows: unknown[]`      | -              |
| onExpandChange    | Triggered on expand change             | `expandedKeys: Array<string \| number>, row: unknown`                 | -              |
| onPageChange      | Triggered on page change               | `{ current: number, pageSize: number }`                               | -              |
| onScroll          | Triggered on scroll                    | `event: unknown`                                                      | -              |
| onRangeChange     | Triggered on virtual scroll range change | `{ rowStart, rowEnd, colStart, colEnd }`                            | -              |

### Slots

| Slot Name        | Description              | Scope Data                                         |
| ---------------- | ------------------------ | -------------------------------------------------- |
| cell-{key}       | Custom cell content      | `{ row, column, rowIndex, value }`                 |
| header-{key}     | Custom header content    | `{ column, columnIndex }`                          |
| expand           | Expand row content       | `{ row, rowIndex }`                                |
| loading          | Custom loading state     | None                                               |
| empty            | Custom empty state       | None                                               |
| error            | Custom error state       | None                                               |
| footer           | Table footer             | None                                               |
