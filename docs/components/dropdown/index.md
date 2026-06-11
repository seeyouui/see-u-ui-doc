---
layout: doc
outline: deep
title: Dropdown 下拉菜单
titleTemplate: SeeYouUI - Dropdown 下拉菜单
description: SeeYouUI 组件库 seeDropdown 下拉菜单组件
iframeSrc: /pages/seeDropdown/index
---

# Dropdown 下拉菜单

向下弹出的菜单面板。由 `see-dropdown` 容器 + `see-dropdown-item` 菜单项 + `see-dropdown-panel` 面板三部分组成，按 `name` 关联菜单项与面板。

> 用法说明：`#panels` 插槽中**必须**使用 `see-dropdown-panel` 包裹每个面板，并通过 `name` 与对应的 `see-dropdown-item` 关联。组件根据当前激活的 item 自动切换显示对应的 panel。

## 基础用法

```vue
<template>
  <see-dropdown>
    <template #menu>
      <see-dropdown-item name="sort" title="排序" />
      <see-dropdown-item name="filter" title="筛选" />
    </template>
    <template #panels>
      <see-dropdown-panel name="sort">
        <view>排序面板内容</view>
      </see-dropdown-panel>
      <see-dropdown-panel name="filter">
        <view>筛选面板内容</view>
      </see-dropdown-panel>
    </template>
  </see-dropdown>
</template>
```

## 禁用项

```vue
<template>
  <see-dropdown>
    <template #menu>
      <see-dropdown-item name="enabled" title="可选" />
      <see-dropdown-item name="disabled" title="禁用" :is-disabled="true" />
    </template>
    <template #panels>
      <see-dropdown-panel name="enabled">
        <view>可选面板内容</view>
      </see-dropdown-panel>
    </template>
  </see-dropdown>
</template>
```

## 无遮罩

```vue
<template>
  <see-dropdown :is-overlay="false">
    <template #menu>
      <see-dropdown-item name="sort" title="排序" />
    </template>
    <template #panels>
      <see-dropdown-panel name="sort">
        <view>排序面板内容</view>
      </see-dropdown-panel>
    </template>
  </see-dropdown>
</template>
```

## Props (Dropdown)

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| modelValue | Record<string, any> | `{}` | 当前选中值 |
| zIndex | number | `100` | 层级 |
| duration | number | `200` | 动画时长（ms） |
| isOverlay | boolean | `true` | 是否显示遮罩 |
| closeOnClickOverlay | boolean | `true` | 点击遮罩是否关闭 |

## Props (DropdownItem)

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| name | string | - | 唯一标识（必填），与 `see-dropdown-panel` 的 name 对应 |
| title | string | `''` | 显示标题 |
| menuType | `'single' \| 'multiple' \| 'cascade' \| 'date' \| 'custom'` | `'single'` | 菜单类型 |
| options | DropdownOption[] | `[]` | 选项列表 |
| isDisabled | boolean | `false` | 是否禁用 |
| placeholder | string | `'请选择'` | 占位文字 |

## Props (DropdownPanel)

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| name | string | - | 唯一标识（必填），与 `see-dropdown-item` 的 name 对应 |

## Events (Dropdown)

| 事件名 | 参数 | 说明 |
|--------|------|------|
| onChange | value, name | 选项变更 |
| onOpen | name | 面板打开 |
| onClose | name | 面板关闭 |

## Expose (Dropdown)

| 方法名 | 参数 | 说明 |
|--------|------|------|
| open | name | 打开指定面板 |
| close | name | 关闭指定面板 |
| closeAll | - | 关闭所有面板 |
| reset | - | 重置所有选项 |

## Slots

| 组件 | 插槽名 | 说明 |
|------|--------|------|
| `see-dropdown` | menu | 菜单栏（放置 `see-dropdown-item`） |
| `see-dropdown` | panels | 面板容器（放置 `see-dropdown-panel`） |
| `see-dropdown-panel` | default | 单个面板的内容 |
