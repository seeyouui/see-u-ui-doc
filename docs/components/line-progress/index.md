---
layout: doc
outline: deep
title: LineProgress 线形进度条
titleTemplate: SeeYouUI - LineProgress 线形进度条
description: SeeYouUI 组件库 seeLineProgress 线形进度条组件
iframeSrc: /pages/seeLineProgress/index
---

# LineProgress 线形进度条

> 用于任务进度、上传进度、步骤完成度和仪表盘进度展示等场景。

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基本使用

- 通过 `percentage` 设置进度百分比（0–100）。

```html:line-numbers {}
<see-line-progress :percentage="50" />
```

## 进度状态

- 通过 `status` 设置进度条状态，支持 `normal`、`success`、`warning`、`error`。

```html:line-numbers {}
<see-line-progress :percentage="50" status="normal" />
<see-line-progress :percentage="100" status="success" />
<see-line-progress :percentage="80" status="warning" />
<see-line-progress :percentage="30" status="error" />
```

## 自定义颜色

- 通过 `activeColor` 自定义激活部分颜色，支持单色和渐变色。

```html:line-numbers {}
<!-- 单色 -->
<see-line-progress :percentage="60" activeColor="#ff6b6b" />

<!-- 渐变色 -->
<see-line-progress :percentage="80" :activeColor="['#43e97b', '#38f9d7']" />
```

## 条纹与动画

- 通过 `striped` 显示条纹效果。
- 通过 `animated` 开启条纹动画。

```html:line-numbers {}
<see-line-progress :percentage="60" striped />
<see-line-progress :percentage="80" striped animated />
```

## 进度条尺寸

- 通过 `strokeWidth` 设置进度条高度。

```html:line-numbers {}
<see-line-progress :percentage="50" strokeWidth="8rpx" />
<see-line-progress :percentage="50" strokeWidth="24rpx" />
```

## 文字位置

- 默认文字显示在进度条右侧。
- 设置 `textInside` 为 `true` 可将文字显示在进度条内部。
- 设置 `showText` 为 `false` 可隐藏文字。

```html:line-numbers {}
<!-- 外部文字（默认） -->
<see-line-progress :percentage="50" />

<!-- 内部文字 -->
<see-line-progress :percentage="60" textInside strokeWidth="32rpx" />

<!-- 隐藏文字 -->
<see-line-progress :percentage="70" :showText="false" />
```

## 自定义文字

- 通过 `format` 函数自定义显示文字。

```html:line-numbers {}
<see-line-progress :percentage="50" :format="formatText" />

<script lang="ts" setup>
const formatText = (percentage: number) => {
  return percentage === 100 ? '完成' : `${percentage}%`
}
</script>
```

## 圆角与禁用

- 设置 `round` 为 `false` 可关闭圆角，默认为 `true`。
- 设置 `inactive` 为 `true` 可显示禁用状态。

```html:line-numbers {}
<see-line-progress :percentage="50" :round="false" />
<see-line-progress :percentage="50" inactive />
```

## 自定义轨道颜色

- 通过 `trackColor` 自定义轨道背景颜色。

```html:line-numbers {}
<see-line-progress :percentage="50" trackColor="#e8e8e8" />
```

## 最大值

- 通过 `max` 设置最大值，默认为 `100`。
- `percentage` 会按 `max` 自动换算为百分比。

```html:line-numbers {}
<!-- 总数 200，当前 150，显示 75% -->
<see-line-progress :percentage="150" :max="200" />
```

## API

### Props

| 参数名       | 说明                          | 类型                              | 默认值                                    | 可选值                   | 平台差异 |
| ------------ | ----------------------------- | --------------------------------- | ----------------------------------------- | ------------------------ | -------- |
| percentage   | 进度值                        | Number                            | `0`                                       | 任意数字                 | -        |
| max          | 最大值                        | Number                            | `100`                                     | 任意正数                 | -        |
| strokeWidth  | 进度条高度                    | String                            | `'16rpx'`                                 | 任意 CSS 长度值          | -        |
| trackColor   | 轨道背景颜色                  | String                            | `'var(--see-fill-color-light, #f2f3f5)'`  | 任意 CSS 颜色值          | -        |
| activeColor  | 激活部分颜色                  | String / Array                    | `''`（使用 status 对应颜色）              | CSS 颜色值或颜色数组     | -        |
| status       | 进度条状态                    | `'normal' \| 'success' \| 'warning' \| 'error'` | `'normal'`                                | `normal`、`success`、`warning`、`error` | -        |
| striped      | 是否显示条纹                  | Boolean                           | `false`                                   | `true`、`false`          | -        |
| animated     | 是否开启条纹动画              | Boolean                           | `false`                                   | `true`、`false`          | -        |
| showText     | 是否显示文字                  | Boolean                           | `true`                                    | `true`、`false`          | -        |
| textInside   | 文字是否显示在进度条内部      | Boolean                           | `false`                                   | `true`、`false`          | -        |
| format       | 自定义文字格式化函数          | `(percentage: number) => string`  | `undefined`                               | 任意格式化函数           | -        |
| round        | 是否圆角                      | Boolean                           | `true`                                    | `true`、`false`          | -        |
| inactive     | 是否禁用状态                  | Boolean                           | `false`                                   | `true`、`false`          | -        |
| duration     | 过渡动画时长（毫秒）          | Number                            | `300`                                     | 任意正整数               | -        |

### Events

| 事件名     | 说明                       | 回调参数              | 平台差异 |
| ---------- | -------------------------- | --------------------- | -------- |
| onChange    | 进度值变化时触发           | `percentage: number`  | -        |
| onComplete | 进度达到 100% 时触发       | 无                    | -        |

### Slots

| 插槽名 | 说明           | 作用域数据            |
| ------ | -------------- | --------------------- |
| text   | 自定义文字内容 | `{ percentage }`      |
