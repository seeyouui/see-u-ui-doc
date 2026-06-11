---
layout: doc
outline: deep
title: useRoute 路由管理
titleTemplate: SeeYouUI - useRoute 路由管理
description: SeeYouUI 组件库 useRoute 路由管理 Hook
iframeSrc: /pages/index/index
---

# 路由管理（useRoute）

跨平台路由统一封装，统一参数格式，自动编码 params。

## 基础用法

```typescript
import { useRoute } from '@/uni_modules/see-u-ui/utils/hooks/useRoute'

const {
  navigateTo,
  redirectTo,
  switchTab,
  reLaunch,
  navigateBack,
  currentRoute,
  getQuery
} = useRoute()
```

## API

### 返回值

| 属性/方法 | 类型 | 说明 |
|-----------|------|------|
| navigateTo | `(options: RouteOptions) => Promise<void>` | 跳转到新页面（压栈） |
| redirectTo | `(options: RouteOptions) => Promise<void>` | 重定向到新页面（替换当前页） |
| switchTab | `(options: RouteOptions) => Promise<void>` | 切换 Tab 页 |
| reLaunch | `(options: RouteOptions) => Promise<void>` | 关闭所有页面并打开新页面 |
| navigateBack | `(delta?: number) => Promise<void>` | 返回上一页，默认 delta=1 |
| currentRoute | `Ref<{ path: string; params: Record<string, any> }>` | 当前路由信息 |
| getQuery | `<T = Record<string, string>>() => T` | 获取当前页面参数 |

### RouteOptions

| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| url | `string` | 是 | 目标页面路径 |
| params | `Record<string, any>` | 否 | 路由参数，自动序列化编码 |
| events | `Record<string, Function>` | 否 | 页面间通信事件 |
| animationType | `string` | 否 | 页面动画类型（仅 APP） |

### animationType 可选值

| 值 | 说明 |
|------|------|
| auto | 自动选择动画 |
| none | 无动画 |
| slide-in-right | 从右侧滑入 |
| slide-in-left | 从左侧滑入 |
| slide-out-right | 向右侧滑出 |
| slide-out-left | 向左侧滑出 |
| fade-in | 淡入 |
| zoom-out | 缩放 |
| zoom-fade-out | 缩放淡出 |
| pop-out | 弹出 |

## 示例

### 基础跳转

```typescript
const { navigateTo } = useRoute()

// 跳转到新页面
await navigateTo({ url: '/pages/detail/index' })
```

### 带参数跳转

```typescript
const { navigateTo } = useRoute()

// 参数会自动 encodeURIComponent(JSON.stringify(params))
await navigateTo({
  url: '/pages/detail/index',
  params: { id: '123', name: 'test' }
})

// 目标页面获取参数
const { getQuery } = useRoute()
const params = getQuery<{ id: string; name: string }>()
console.log(params.id) // '123'
```

### 返回上一页

```typescript
const { navigateBack } = useRoute()

// 返回上一页
await navigateBack()

// 返回上两页
await navigateBack(2)
```

### 监听当前路由

```typescript
const { currentRoute } = useRoute()

console.log(currentRoute.value.path)
console.log(currentRoute.value.params)
```

## 平台差异

| 平台 | 实现方式 |
|------|----------|
| H5 | vue-router（条件编译） |
| 小程序 | uni.navigateTo / uni.redirectTo 等 |
| APP | uni.navigateTo / uni.redirectTo 等 |
