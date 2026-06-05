---
layout: doc
outline: deep
title: Upload 上传
titleTemplate: SeeYouUI - Upload 上传
description: SeeYouUI 组件库 seeUpload 组件
iframeSrc: /pages/seeUpload/index
---

# Upload 上传

> 用于文件/图片/视频的上传组件，支持多选、压缩、预览、自定义上传等功能。
>
> - 支持图片、视频、文件等多种类型上传
> - 支持多选和数量限制
> - 支持图片压缩
> - 支持自定义上传逻辑
> - 支持禁用、只读状态

::: warning 注意
该组件在不同平台上的表现可能存在细微差异，请以实际效果为准。
:::

## 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| ---------- | ----------- | --- | ------ |
| √          | √           | √   | √      |

## 基本使用

- 通过 `v-model` 绑定文件列表，默认为空数组。
- 通过 `accept` 设置接受的文件类型，默认为 `image`。

```html:line-numbers {}
<see-upload v-model="fileList" />

<script lang="ts" setup>
import { ref } from 'vue';
const fileList = ref([]);
</script>
```

## 多选上传

- 通过设置 `isMultiple` 为 `true` 启用多选。
- 通过 `maxCount` 设置最大文件数量，默认为 `9`。

```html:line-numbers {}
<see-upload v-model="fileList" isMultiple :maxCount="9" />

<script lang="ts" setup>
import { ref } from 'vue';
const fileList = ref([]);
</script>
```

## 文件大小限制

- 通过 `maxSize` 设置单个文件大小限制，单位为 MB。
- 超出限制时会触发 `onOversize` 事件。

```html:line-numbers {}
<see-upload v-model="fileList" :maxSize="5" @on-oversize="handleOversize" />

<script lang="ts" setup>
import { ref } from 'vue';
const fileList = ref([]);

const handleOversize = (file) => {
  console.log('文件大小超出限制', file);
};
</script>
```

## 视频上传

- 将 `accept` 设置为 `video` 可上传视频文件。
- 设置为 `media` 可同时支持图片和视频。

```html:line-numbers {}
<see-upload v-model="fileList" accept="video" :maxCount="3" />

<script lang="ts" setup>
import { ref } from 'vue';
const fileList = ref([]);
</script>
```

## 自定义上传

- 通过 `upload` 属性传入自定义上传函数，返回文件 URL。
- 通过 `beforeRead` 在上传前进行校验。
- 通过 `afterRead` 在上传后执行回调。

```html:line-numbers {}
<see-upload
  v-model="fileList"
  :upload="customUpload"
  :before-read="beforeRead"
  :after-read="afterRead"
/>

<script lang="ts" setup>
import { ref } from 'vue';
const fileList = ref([]);

const customUpload = async (file) => {
  // 自定义上传逻辑，返回文件 URL
  const url = await uploadToServer(file);
  return url;
};

const beforeRead = (file) => {
  // 返回 false 阻止上传
  return file.size < 10 * 1024 * 1024;
};

const afterRead = (file) => {
  console.log('上传完成', file);
};
</script>
```

## 禁用和只读

- 通过设置 `isDisabled` 为 `true` 禁用上传。
- 通过设置 `isReadonly` 为 `true` 设置只读模式，可预览但不能增删。

```html:line-numbers {}
<see-upload v-model="fileList" isDisabled />
<see-upload v-model="fileList" isReadonly />
```

## 图片压缩

- 通过设置 `isCompress` 为 `true` 启用图片压缩，默认开启。
- 通过 `compressQuality` 设置压缩质量，范围 0-100，默认为 `80`。

```html:line-numbers {}
<see-upload v-model="fileList" isCompress :compressQuality="60" />
```

## API

### Props

| 参数名 | 说明 | 类型 | 默认值 | 可选值 |
| ------ | ---- | ---- | ------ | ------ |
| modelValue | 文件列表 | `UploadFileItem[]` | `[]` | - |
| accept | 接受的文件类型 | `'image' \| 'video' \| 'file' \| 'media'` | `'image'` | - |
| isMultiple | 是否支持多选 | `boolean` | `false` | - |
| maxCount | 最大文件数量 | `number` | `9` | - |
| maxSize | 单个文件大小限制（MB） | `number` | `-` | - |
| isDisabled | 是否禁用 | `boolean` | `false` | - |
| isReadonly | 是否只读 | `boolean` | `false` | - |
| isDeletable | 是否显示删除按钮 | `boolean` | `true` | - |
| isPreview | 是否支持预览 | `boolean` | `true` | - |
| isCompress | 是否压缩图片 | `boolean` | `true` | - |
| compressQuality | 压缩质量 0-100 | `number` | `80` | - |
| upload | 自定义上传函数 | `(file) => Promise<string>` | `-` | - |
| beforeRead | 上传前校验 | `(file) => boolean \| Promise<boolean>` | `-` | - |
| afterRead | 上传后回调 | `(file) => void` | `-` | - |
| name | 表单字段名 | `string` | `''` | - |
| size | 尺寸 | `'small' \| 'default' \| 'large'` | `'default'` | - |
| uploadText | 上传按钮文字 | `string` | `''` | - |

### UploadFileItem 类型

| 参数名 | 说明 | 类型 |
| ------ | ---- | ---- |
| url | 文件地址 | `string` |
| name | 文件名 | `string` |
| size | 文件大小 | `number` |
| type | 文件类型 | `string` |
| status | 上传状态 | `'uploading' \| 'done' \| 'error'` |
| message | 状态提示信息 | `string` |
| progress | 上传进度 0-100 | `number` |

### Events

| 事件名 | 说明 | 回调参数 |
| ------ | ---- | -------- |
| onChange | 文件列表变化时触发 | `files: UploadFileItem[]` |
| onOversize | 文件大小超出限制时触发 | `file: UploadFileItem` |
| onDelete | 删除文件时触发 | `file: UploadFileItem, index: number` |
| onPreview | 预览文件时触发 | `file: UploadFileItem, index: number` |
| onClickUpload | 点击上传按钮时触发 | `event: Event` |
| onError | 上传出错时触发 | `error: Error` |

### Slots

| 插槽名 | 说明 |
| ------ | ---- |
| default | 自定义上传区域内容 |
| preview | 自定义预览内容 |
| preview-delete | 自定义删除按钮内容 |
