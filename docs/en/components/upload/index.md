---
layout: doc
outline: deep
title: Upload
titleTemplate: SeeYouUI - Upload
description: SeeYouUI Component Library seeUpload component
iframeSrc: /pages/seeUpload/index
---

# Upload

> A file/image/video upload component that supports multiple selection, compression, preview, custom upload logic, and more.
>
> - Supports image, video, and file upload types
> - Supports multiple selection and count limits
> - Supports image compression
> - Supports custom upload logic
> - Supports disabled and readonly states

::: warning Notice
This component may have slight behavioral differences across platforms. Please refer to the actual rendered result.
:::

## Platform Differences

| App (vue) | App (nvue) | H5  | Mini Program |
| --------- | ---------- | --- | ------------ |
| √         | √          | √   | √            |

## Basic Usage

- Bind the file list via `v-model`, which defaults to an empty array.
- Set the accepted file type via `accept`, which defaults to `image`.

```html:line-numbers {}
<see-upload v-model="fileList" />

<script lang="ts" setup>
import { ref } from 'vue';
const fileList = ref([]);
</script>
```

## Multiple Upload

- Enable multiple selection by setting `isMultiple` to `true`.
- Set the maximum file count via `maxCount`, which defaults to `9`.

```html:line-numbers {}
<see-upload v-model="fileList" isMultiple :maxCount="9" />

<script lang="ts" setup>
import { ref } from 'vue';
const fileList = ref([]);
</script>
```

## File Size Limit

- Set the maximum file size via `maxSize` in MB.
- The `onOversize` event is triggered when a file exceeds the limit.

```html:line-numbers {}
<see-upload v-model="fileList" :maxSize="5" @on-oversize="handleOversize" />

<script lang="ts" setup>
import { ref } from 'vue';
const fileList = ref([]);

const handleOversize = (file) => {
  console.log('File size exceeds the limit', file);
};
</script>
```

## Video Upload

- Set `accept` to `video` to upload video files.
- Set it to `media` to support both images and videos.

```html:line-numbers {}
<see-upload v-model="fileList" accept="video" :maxCount="3" />

<script lang="ts" setup>
import { ref } from 'vue';
const fileList = ref([]);
</script>
```

## Custom Upload

- Pass a custom upload function via the `upload` prop that returns the file URL.
- Use `beforeRead` to validate before uploading.
- Use `afterRead` to execute a callback after uploading.

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
  // Custom upload logic, returns the file URL
  const url = await uploadToServer(file);
  return url;
};

const beforeRead = (file) => {
  // Return false to prevent upload
  return file.size < 10 * 1024 * 1024;
};

const afterRead = (file) => {
  console.log('Upload complete', file);
};
</script>
```

## Disabled and Readonly

- Disable the upload by setting `isDisabled` to `true`.
- Set readonly mode by setting `isReadonly` to `true`, which allows preview but prevents adding or deleting files.

```html:line-numbers {}
<see-upload v-model="fileList" isDisabled />
<see-upload v-model="fileList" isReadonly />
```

## Image Compression

- Enable image compression by setting `isCompress` to `true`, which is enabled by default.
- Set the compression quality via `compressQuality`, ranging from 0 to 100, defaulting to `80`.

```html:line-numbers {}
<see-upload v-model="fileList" isCompress :compressQuality="60" />
```

## API

### Props

| Parameter | Description | Type | Default | Optional Values |
| --- | --- | --- | --- | --- |
| modelValue | File list | `UploadFileItem[]` | `[]` | - |
| accept | Accepted file type | `'image' \| 'video' \| 'file' \| 'media'` | `'image'` | - |
| isMultiple | Whether to enable multiple selection | `boolean` | `false` | - |
| maxCount | Maximum file count | `number` | `9` | - |
| maxSize | Maximum file size per file (MB) | `number` | `-` | - |
| isDisabled | Whether disabled | `boolean` | `false` | - |
| isReadonly | Whether readonly | `boolean` | `false` | - |
| isDeletable | Whether to show the delete button | `boolean` | `true` | - |
| isPreview | Whether to support preview | `boolean` | `true` | - |
| isCompress | Whether to compress images | `boolean` | `true` | - |
| compressQuality | Compression quality (0-100) | `number` | `80` | - |
| upload | Custom upload function | `(file) => Promise<string>` | `-` | - |
| beforeRead | Validation before reading | `(file) => boolean \| Promise<boolean>` | `-` | - |
| afterRead | Callback after reading | `(file) => void` | `-` | - |
| name | Form field name | `string` | `''` | - |
| size | Size | `'small' \| 'default' \| 'large'` | `'default'` | - |
| uploadText | Upload button text | `string` | `''` | - |

### UploadFileItem Type

| Parameter | Description | Type |
| --- | --- | --- |
| url | File URL | `string` |
| name | File name | `string` |
| size | File size | `number` |
| type | File type | `string` |
| status | Upload status | `'uploading' \| 'done' \| 'error'` |
| message | Status message | `string` |
| progress | Upload progress (0-100) | `number` |

### Events

| Event | Description | Callback Parameters |
| --- | --- | --- |
| onChange | Triggered when the file list changes | `files: UploadFileItem[]` |
| onOversize | Triggered when a file exceeds the size limit | `file: UploadFileItem` |
| onDelete | Triggered when a file is deleted | `file: UploadFileItem, index: number` |
| onPreview | Triggered when a file is previewed | `file: UploadFileItem, index: number` |
| onClickUpload | Triggered when the upload button is clicked | `event: Event` |
| onError | Triggered when an upload error occurs | `error: Error` |

### Slots

| Slot | Description |
| --- | --- |
| default | Custom upload area content |
| preview | Custom preview content |
| preview-delete | Custom delete button content |
