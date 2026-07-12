---
layout: doc
outline: deep
title: 更新日志
titleTemplate: SeeYouUI - 更新日志
description: SeeYouUI 组件库 更新日志
iframeSrc: /pages/index/index
---

# 更新日志

> 日志说明：<Badge type="info" text="修改" /> <Badge type="tip" text="新增" /> <Badge type="warning" text="修复" /> <Badge type="danger" text="删除" />

## 1.3.2 **_[`2026-07-13`](https://www.npmjs.com/package/see-u-ui/v/1.3.2)_**

> > - <Badge type="warning" text="修复" /> **安全 · 三处 XSS 攻击面**
> >   - <Badge type="warning" text="修复" /> Parse H5 端 `v-html` 接入标签/属性白名单与 `isSafeUrl` 协议校验，`allowedTags` / `allowedAttrs` 在 H5 端正式生效，拦截 `javascript:` / `data:text/html` 等危险协议
> >   - <Badge type="warning" text="修复" /> useHtmlParser `on*` 事件属性过滤放宽分隔符匹配，堵住 `<img/onerror=...>` 这类以 `/` 分隔的绕过
> >   - <Badge type="warning" text="修复" /> Markdown `highlight` 回调输出经 sanitize 清洗后再嵌入，杜绝高亮回调注入
> > - <Badge type="warning" text="修复" /> **跨端崩溃 · 条件编译缺失**
> >   - <Badge type="warning" text="修复" /> Popup 滚动锁 `document` 访问加运行时守卫、`requestAnimationFrame` 在非 H5 端改用 nextTick 兜底，小程序 / App 端打开弹层不再 ReferenceError
> >   - <Badge type="warning" text="修复" /> IndexList 索引导航 `requestAnimationFrame` 改用 setTimeout 节流，非 H5 端触摸不再崩溃
> >   - <Badge type="warning" text="修复" /> Modal 命令式调用改为响应式驱动，关闭动画可正常播放
> >   - <Badge type="warning" text="修复" /> useGesture 补 H5 运行时守卫与 touches 空值保护
> > - <Badge type="warning" text="修复" /> **v-model / 受控失效**
> >   - <Badge type="warning" text="修复" /> Cascader 新增 modelValue 侦听与首屏回显，中间层点击不再直接改写外部值、取消可正确还原
> >   - <Badge type="warning" text="修复" /> Tree 接通 v-model（modelValue 初始化 + update 回写），搜索时自动展开命中项祖先，折叠子树内的匹配项可见
> >   - <Badge type="warning" text="修复" /> CityLocate 补齐 `update:modelValue` 闭环，支持受控设置与回显
> > - <Badge type="warning" text="修复" /> **表单校验体系**
> >   - <Badge type="warning" text="修复" /> useForm 全表单校验不再把无规则字段误置为 success 绿态
> >   - <Badge type="warning" text="修复" /> FormItem 接通 change / blur 自动校验，「输入即校验」正式生效
> >   - <Badge type="warning" text="修复" /> CheckboxGroup / RadioGroup 修正 `formContext.props` 读取路径，Form 级 disabled / readonly / size 可正确下发
> > - <Badge type="warning" text="修复" /> **其它组件缺陷**
> >   - <Badge type="warning" text="修复" /> Input `number` / `digit` 类型支持连续输入小数（不再吞掉小数点）
> >   - <Badge type="warning" text="修复" /> Navbar `isShowLeft` / `isShowRight` 显隐生效；Tabbar fixed 占位补齐底部安全区、安全区 `0` 值不再被强制成 20px
> >   - <Badge type="warning" text="修复" /> Sticky 引入占位元素修复吸顶后无法复原的「吸顶卡死」与布局跳动；Tabs 可滚动模式指示器扣除横向滚动偏移
> >   - <Badge type="warning" text="修复" /> NoticeBar 默认图标不再被当作明文 "volume" 渲染
> >   - <Badge type="warning" text="修复" /> Toast / Notify 单例状态多实例串味修复，命令式调用不再重复弹出
> >   - <Badge type="warning" text="修复" /> Button `onTap` 事件正式触发、清理 ripple 队列内存泄漏、H5 点击坐标兼容
> >   - <Badge type="warning" text="修复" /> Config 全局事件监听器改为配对注册 / 注销，消除 hide / show 往返叠加泄漏
> >   - <Badge type="warning" text="修复" /> Upload 引入内部状态副本并按文件 id 定位，修复依赖 prop 回流导致的状态 / 进度 / url 丢失
> >   - <Badge type="warning" text="修复" /> Image `src` 变更时重置加载状态并重新挂载，`reload()` 可真正触发重载
> >   - <Badge type="warning" text="修复" /> Waterfall 加载更多不再只触发一次，支持持续下拉加载

## 1.3.1 **_[`2026-06-11`](https://www.npmjs.com/package/see-u-ui/v/1.3.1)_**

> > - <Badge type="tip" text="新增" /> **内容解析组件体系** — 2 个内容解析组件完整实现
> >   - <Badge type="tip" text="新增" /> Parse 富文本解析器（跨平台 HTML 富文本解析与渲染，内置 XSS 安全过滤 / 图片预览 / 链接拦截 / tagStyle 注入；H5 使用 v-html 直接渲染，App / 小程序使用 rich-text + parsed nodes）
> >   - <Badge type="tip" text="新增" /> Markdown 文本解析组件（零依赖 GFM 子集纯字符串解析器：标题 / 强调 / 链接 / 图片 / 代码块 / 列表 / 任务列表 / 引用 / 水平线 / 表格 / 自动链接 / 反斜杠转义，内部委托 SeeParse 渲染并复用其 XSS 过滤、图片预览、链接拦截能力）
> > - <Badge type="tip" text="新增" /> **内容解析基础设施**
> >   - <Badge type="tip" text="新增" /> useHtmlParser Hook — HTML 解析工具（导出 parseHtml / stripHtml / sanitizeHtml / extractImgSrc 四个纯函数，支持 HTML 实体解码 / 标签白名单 / 危险标签及协议剥离 / tagStyle 注入）
> >   - <Badge type="tip" text="新增" /> useMarkdownParser Hook — Markdown 解析工具（导出 markdownToHtml / stripMarkdown / extractMarkdownImages 三个纯函数，支持 GFM 开关 / 高亮回调 / 自定义 options）
> > - <Badge type="info" text="修改" /> **useField** Hook 优化导入结构，提升模块化复用性
> > - <Badge type="tip" text="新增" /> **index.ts** 注册 SeeParse、SeeMarkdown 组件，新增类型导出：`SeeParseProps`、`SeeParseEmits`、`SeeParseNode`、`SeeMarkdownProps`、`SeeMarkdownEmits`、`MarkdownParserOptions` 等

## 1.3.0 **_[`2026-06-11`](https://www.npmjs.com/package/see-u-ui/v/1.3.0)_**

> > - <Badge type="tip" text="新增" /> **导航组件体系** — 13 个导航组件完整实现
> >   - <Badge type="tip" text="新增" /> Navbar 自定义导航栏（支持固定定位 / 搜索栏嵌入 / 毛玻璃效果 / 安全区适配）
> >   - <Badge type="tip" text="新增" /> NavbarMini 迷你导航栏（轻量子页面导航，默认高度 64rpx）
> >   - <Badge type="tip" text="新增" /> Tabbar 底部导航栏（支持 v-model / 中央凸起按钮 / Badge 徽标 / 路由模式）
> >   - <Badge type="tip" text="新增" /> BackTop 返回顶部（支持滚动监听 / 自定义容器 / 平滑回顶动画）
> >   - <Badge type="tip" text="新增" /> Tabs 标签页（支持三种样式 / 滑动切换 / 懒加载 / KeepAlive 缓存 / 动态增删）
> >   - <Badge type="tip" text="新增" /> Subsection 分段器（支持 default / button / pill 三种样式，轻量切换控件）
> >   - <Badge type="tip" text="新增" /> Dropdown 下拉菜单（支持单选 / 多选 / 级联 / 日期筛选 / 自定义面板）
> >   - <Badge type="tip" text="新增" /> Pagination 分页器（支持 button / simple / number 三种模式）
> >   - <Badge type="tip" text="新增" /> Steps 步骤条（支持水平 / 垂直方向 / 四种状态 / 圆点模式）
> >   - <Badge type="tip" text="新增" /> IndexList 索引列表（支持 A-Z 索引 / 拼音搜索 / 右侧索引导航条）
> >   - <Badge type="tip" text="新增" /> Tree 树形组件（支持级联选择 / 半选状态 / 搜索过滤 / 10000 节点虚拟滚动）
> >   - <Badge type="tip" text="新增" /> CityLocate 城市定位选择器（支持 GPS 定位 / 拼音搜索 / 150+ 城市数据 / 历史缓存）
> >   - <Badge type="tip" text="新增" /> Empty 空状态组件（支持 5 种内置类型 / 自定义图片和操作按钮）
> > - <Badge type="tip" text="新增" /> **导航基础设施**
> >   - <Badge type="tip" text="新增" /> useRoute Hook — 跨平台路由统一封装（navigateTo / redirectTo / switchTab / reLaunch / navigateBack）
> >   - <Badge type="tip" text="新增" /> useSafeArea Hook — 安全区适配（top / bottom / left / right 安全边距 + statusBarHeight）
> >   - <Badge type="tip" text="新增" /> useScrollSpy Hook — 滚动位置监听（RFA 节流 / 方向判断 / 指定容器）
> >   - <Badge type="tip" text="新增" /> useTree Hook — 树形数据管理（扁平化 / 级联算法 / 搜索过滤）
> > - <Badge type="tip" text="新增" /> **theme.scss** 新增 55+ 导航组件 CSS 变量，含 Light / Dark 双模式
> > - <Badge type="tip" text="新增" /> 所有导航组件支持 Light / Dark 主题切换
> > - <Badge type="tip" text="新增" /> 所有导航组件支持 H5 / 小程序 / App 多端兼容
> > - <Badge type="tip" text="新增" /> **index.ts** 注册 16 个导航组件 + 4 个导航 Hooks，完整类型导出

## 1.2.0 **_[`2026-06-10`](https://www.npmjs.com/package/see-u-ui/v/1.2.0)_**

> > - <Badge type="tip" text="新增" /> **数据组件体系** — 6 个数据组件完整实现
> >   - <Badge type="tip" text="新增" /> CountDown 倒计时（支持精确挂钟校准 / 毫秒精度 / 自定义格式 / 服务端时间同步）
> >   - <Badge type="tip" text="新增" /> CountTo 数字滚动（支持缓动函数 / 千分位分隔 / 前缀后缀 / 动态更新目标值）
> >   - <Badge type="tip" text="新增" /> LineProgress 线形进度条（支持状态颜色 / 渐变色 / 条纹动画 / 文字内置 / 自定义格式化）
> >   - <Badge type="tip" text="新增" /> List 列表（支持加载状态 / 空状态 / 错误状态 / 完成状态 / 分组 / 水平滚动 / 上拉加载更多）
> >   - <Badge type="tip" text="新增" /> Table 表格（支持列配置 / 排序 / 行选择 / 展开行 / 树形数据 / 分页 / 吸顶表头 / 固定列 / 虚拟滚动）
> >   - <Badge type="tip" text="新增" /> VirtualList 虚拟列表（支持固定高度 / 动态高度 / 水平滚动 / 缓冲区 / 滚动到指定位置）
> > - <Badge type="tip" text="新增" /> **数据组件基础设施**
> >   - <Badge type="tip" text="新增" /> useCountdown Hook — 倒计时管理（精确挂钟校准 / 暂停恢复 / 重置）
> >   - <Badge type="tip" text="新增" /> useCountTo Hook — 数字滚动管理（缓动动画 / 暂停恢复 / 动态更新）
> >   - <Badge type="tip" text="新增" /> useVirtualWindow Hook — 虚拟滚动窗口管理（可视区域计算 / 动态高度支持）
> > - <Badge type="tip" text="新增" /> 所有数据组件支持 Light / Dark 主题切换
> > - <Badge type="tip" text="新增" /> 所有数据组件支持 H5 / 小程序 / App 多端兼容
> > - <Badge type="tip" text="新增" /> **index.ts** 新增类型导出：`CountdownTimeData`、`SeeTableColumn`、`SeeTablePagination` 等

## 1.1.0 **_[`2026-06-05`](https://www.npmjs.com/package/see-u-ui/v/1.1.0)_**

> > - <Badge type="tip" text="新增" /> **表单组件体系** — 17 个表单组件完整实现
> >   - <Badge type="tip" text="新增" /> Form 表单（支持 validate / reset / clearValidate / scrollToField）
> >   - <Badge type="tip" text="新增" /> FormItem 表单项（支持 label / 校验状态 / 错误信息展示）
> >   - <Badge type="tip" text="新增" /> Input 输入框（支持 clearable / password / formatter / prefix / suffix / count）
> >   - <Badge type="tip" text="新增" /> Textarea 文本域（支持 autoHeight / wordLimit / clearable）
> >   - <Badge type="tip" text="新增" /> Checkbox 复选框（支持 Group / 全选半选 / min / max 限制）
> >   - <Badge type="tip" text="新增" /> Radio 单选框（支持 Group / 行内排列 / 边框模式）
> >   - <Badge type="tip" text="新增" /> Switch 开关选择器（支持自定义值 / 颜色 / 文字描述）
> >   - <Badge type="tip" text="新增" /> Rate 评分（支持半星 / 自定义图标 / 清除评分）
> >   - <Badge type="tip" text="新增" /> Slider 滑动选择器（支持范围选择 / 垂直模式 / 步长刻度）
> >   - <Badge type="tip" text="新增" /> NumberBox 步进器（支持步长 / 小数位数 / 长按连续增减）
> >   - <Badge type="tip" text="新增" /> Search 搜索（支持圆角方形 / 操作按钮 / 自定义插槽）
> >   - <Badge type="tip" text="新增" /> Select 选择器（支持单选多选 / 搜索过滤 / 远程搜索 / 分组）
> >   - <Badge type="tip" text="新增" /> Picker 选择器（支持单列 / 多列 / 联动模式）
> >   - <Badge type="tip" text="新增" /> Cascader 级联选择器（支持无限级 / 懒加载）
> >   - <Badge type="tip" text="新增" /> DatetimePicker 日期选择器（支持 date / time / datetime / year-month / month-day）
> >   - <Badge type="tip" text="新增" /> Upload 上传（支持图片 / 视频 / 文件 / 多选 / 压缩 / 自定义上传）
> >   - <Badge type="tip" text="新增" /> Code 验证码输入框（支持自动聚焦 / 粘贴 / 遮罩 / 光标动画）
> >   - <Badge type="tip" text="新增" /> Keyboard 键盘（支持数字 / 身份证 / 完整键盘 / 安全键盘）
> > - <Badge type="tip" text="新增" /> **表单基础设施**
> >   - <Badge type="tip" text="新增" /> useForm Hook — 表单管理（校验 / 重置 / 清除 / 数据读写）
> >   - <Badge type="tip" text="新增" /> useField Hook — 字段管理（校验状态 / 生命周期 / Form 联动）
> >   - <Badge type="tip" text="新增" /> 表单验证引擎（支持同步 / 异步校验、内置规则、自定义校验器）
> > - <Badge type="tip" text="新增" /> 所有表单组件支持 Light / Dark 主题切换
> > - <Badge type="tip" text="新增" /> 所有表单组件支持 H5 / 小程序 / App 多端兼容
> > - <Badge type="info" text="修改" /> **Button** `size` 属性默认值从 `'normal'` 改为 `'default'`
> > - <Badge type="info" text="修改" /> **Tag** `disabled` 属性重命名为 `isDisabled`，保持命名一致性
> > - <Badge type="tip" text="新增" /> **Radio** 支持独立使用 `v-model`，无需 RadioGroup 包裹
> > - <Badge type="tip" text="新增" /> **Textarea** 集成 `useField`，支持表单校验联动，暴露 `validateStatus` / `validateMessage`
> > - <Badge type="info" text="修改" /> **Form** 合并多个 watch 为单个，优化响应式性能
> > - <Badge type="info" text="修改" /> **Picker** 选中项改为居中对齐，优化滚轮交互体验
> > - <Badge type="info" text="修改" /> **Cascader** 面板增加安全区域适配，`options` 监听改为 `deep: false` 提升性能
> > - <Badge type="info" text="修改" /> **Slider** 垂直模式改用 CSS 变量定位，提升渲染稳定性
> > - <Badge type="info" text="修改" /> **NumberBox** 长按重复改用递归 `setTimeout` 实现加速，修复 H5 端鼠标事件泄漏
> > - <Badge type="info" text="修改" /> **Upload** 新增 `accept` 文件类型校验，修复 Object URL 内存泄漏，H5 端移除 `chooseMedia` 降级
> > - <Badge type="info" text="修改" /> **Keyboard** 数字随机键盘布局改为打开时缓存，避免输入过程中变化
> > - <Badge type="info" text="修改" /> **Link** 新增 URL 协议白名单校验，阻止非安全协议跳转
> > - <Badge type="info" text="修改" /> **Rate** 半星渲染改用 `background-clip: text`，提升跨平台兼容性
> > - <Badge type="info" text="修改" /> **DatetimePicker** 选项高度根据 `size` 动态计算，外层包裹 div 避免结构问题
> > - <Badge type="info" text="修改" /> **Code** 聚焦逻辑优化，小程序端通过 `needFocus` 切换实现重新聚焦
> > - <Badge type="info" text="修改" /> **theme.scss** 新增 `--see-bg-dark-color`、`--see-surface-color` 主题变量
> > - <Badge type="info" text="修改" /> 所有表单组件 `inject` 统一使用 `InjectionKey`，类型更安全
> > - <Badge type="tip" text="新增" /> **index.ts** 新增类型导出：`FormRule`、`FormInstance`、`SelectOption`、`CascaderOption` 等

## 1.0.014 **_[`2025-12-15`](https://www.npmjs.com/package/see-u-ui/v/1.0.14)_**

> [`commit: 6524585`](https://github.com/seeyouui/see-u-ui/commit/6524585c4e974472c4a2dd60d2f7b5fd529f9528)
>
> > - <Badge type="warning" text="修复" /> Text 组件打字机计数方法类型错误的 BUG
>
> [`commit: 3cc3700`](https://github.com/seeyouui/see-u-ui/commit/3cc370020f6ec4e6e7f9a3d241f121568e6a205a)
>
> > - <Badge type="tip" text="新增" /> Text 组件打字机效果
> > - <Badge type="tip" text="新增" /> 打字机效果 Hook
> > - <Badge type="tip" text="新增" /> 新增数字滚动 Hook
>
> [`commit: 4300ee3`](https://github.com/seeyouui/see-u-ui/commit/4300ee31539e926fbda4fbfd747237d908eff3c2)
>
> > - <Badge type="tip" text="新增" /> 新增 Text 组件数字滚动

## 1.0.013 **_[`2025-12-13`](https://www.npmjs.com/package/see-u-ui/v/1.0.13)_**

> [`commit: da12e81`](https://github.com/seeyouui/see-u-ui/commit/da12e81003f0cfa894562289e0583a5f466f22e1)
>
> > - <Badge type="tip" text="新增" /> Icon 图标组件示例
> > - <Badge type="tip" text="新增" /> Icon 图标组件

> [`commit: eaaf85a`](https://github.com/seeyouui/see-u-ui/commit/eaaf85a728521fbea2f6db18e9d7b43dd5d36867)
>
> > - <Badge type="tip" text="新增" /> Link 组件 Props 中的 size 属性
> > - <Badge type="tip" text="新增" /> Text 组件 Props 中的 size 属性

> [`commit: a5ec9bd`](https://github.com/seeyouui/see-u-ui/commit/a5ec9bd1448af0dcae809d997ae1a7004697dca1)
>
> > - <Badge type="info" text="修改" /> 部分组件中的 JsDoc
> > - <Badge type="info" text="修改" /> Dcloud 中 README.md

## 1.0.012

- 测试 GitHub Action 自动拉取最新 npm 包

## 1.0.011

- 测试 GitHub Action 自动拉取最新 npm 包

## 1.0.010 **_[`2025-12-07`](https://www.npmjs.com/package/see-u-ui/v/1.0.10)_**

> [`commit: 7320e8c`](https://github.com/seeyouui/see-u-ui/commit/7320e8cc6537097b976a71cd46db6722b8fee31d)
>
> > - <Badge type="info" text="修改" /> 组件位置以适配 Dcloud 插件市场

## 1.0.009 **_[`2025-12-06`](https://www.npmjs.com/package/see-u-ui/v/1.0.9)_**

> [`commit: 95acfdc`](https://github.com/seeyouui/see-u-ui/commit/95acfdc24af2e03e29fd29afa3ba3f93ce5dc25a)
>
> > - <Badge type="info" text="修改" /> 组件驼峰命名为短横线命名

## 1.0.009-alpha1 **_[`2025-12-05`](https://www.npmjs.com/package/see-u-ui/v/1.0.9-alpha1)_**

> [`commit: a3c8efd`](https://github.com/seeyouui/see-u-ui/commit/a3c8efd5b98aa853ccb2cc969e499900d2e17180)
>
> > - <Badge type="tip" text="新增" /> CurrencyOptions 和 DateFormatOptions 导出

## 1.0.008 **_[`2025-12-05`](https://www.npmjs.com/package/see-u-ui/v/1.0.8)_**

> [`commit: d793988`](https://github.com/seeyouui/see-u-ui/commit/d793988af3d8b39fbb913e4b40f8edb1f9fee40b)
>
> > - <Badge type="info" text="修改" /> 组件注释位置

## 1.0.008-alpha7 **_[`2025-12-05`](https://www.npmjs.com/package/see-u-ui/v/1.0.8-alpha7)_**

> [`commit: 84b01af`](https://github.com/seeyouui/see-u-ui/commit/84b01af7c5bbd5775bf3c9b448846156a9a4dc3f)
>
> > - <Badge type="tip" text="新增" /> 组件 name

## 1.0.008-alpha6 **_[`2025-12-05`](https://www.npmjs.com/package/see-u-ui/v/1.0.8-alpha6)_**

> [`commit: 1db701d`](https://github.com/GmhLovEDM/SeeYouUINpm/commit/1db701d5f90685a430454663c8a153d9afb4266f)
>
> > - <Badge type="tip" text="新增" /> 打包路径

## 1.0.008-alpha5 **_[`2025-12-05`](https://www.npmjs.com/package/see-u-ui/v/1.0.8-alpha5)_**

> [`commit: f8fe7a7`](https://github.com/GmhLovEDM/SeeYouUINpm/commit/f8fe7a7734f21d8cd90fbd54ae2a009582ac2f94)
>
> > - <Badge type="tip" text="新增" /> 使用 vite 构建

## 1.0.008-alpha4 **_[`2025-12-05`](https://www.npmjs.com/package/see-u-ui/v/1.0.8-alpha4)_**

> [`commit: d0efd67`](https://github.com/GmhLovEDM/SeeYouUINpm/commit/d0efd670ff18c1c93d5fa3a8f67c614466d63ffa)
>
> > - <Badge type="info" text="修改" /> 打包配置

## 1.0.008-alpha3 **_[`2025-12-05`](https://www.npmjs.com/package/see-u-ui/v/1.0.8-alpha3)_**

> [`commit: 34c1a55`](https://github.com/GmhLovEDM/SeeYouUINpm/commit/34c1a55d899b14efa5f67b928cf2e56fa120c5c9)
>
> > - <Badge type="info" text="修改" /> 打包配置

## 1.0.008-alpha2 **_[`2025-12-05`](https://www.npmjs.com/package/see-u-ui/v/1.0.8-alpha2)_**

> [`commit: 45c35b4`](https://github.com/seeyouui/see-u-ui/commit/45c35b441b465828e74e98553f0b40d613943f36)
>
> > - <Badge type="info" text="修改" /> SeeLink 中 text 类型
> > - <Badge type="warning" text="修复" /> useCurrencyFormat 中 unref 类型报错的 BUG

## 1.0.008-alpha1 **_[`2025-12-04`](https://www.npmjs.com/package/see-u-ui/v/1.0.8-alpha1)_**

> [`commit: 58294e3`](https://github.com/seeyouui/see-u-ui/commit/58294e3ddbf411deb3903e251231c0416ee920cc)
>
> > - <Badge type="tip" text="新增" /> 日期格式化 Hook
> > - <Badge type="tip" text="新增" /> 时间距今 Hook
> > - <Badge type="tip" text="新增" /> 金额格式化 Hook

> [`commit: c24964f`](https://github.com/seeyouui/see-u-ui/commit/c24964fb36d7540a4b2402ae43ecef362d3e5496)
>
> > - <Badge type="tip" text="新增" /> 新增 SeeText 组件
> > - <Badge type="danger" text="删除" /> SeeButton 无用的文档示例

> [`commit: dd7e18f`](https://github.com/seeyouui/see-u-ui/commit/dd7e18f22ae23fa0cefd5d1014285d185154b0a5)
>
> > - <Badge type="tip" text="新增" /> .gitignore 文件

> [`commit: 8101299`](https://github.com/seeyouui/see-u-ui/commit/8101299dd35455fa3e91b112f8d8080def80dacf)
>
> > - <Badge type="tip" text="新增" /> SeeLink 组件预览页面
> > - <Badge type="tip" text="新增" /> SeeLink 组件

> [`commit: 854d920`](https://github.com/seeyouui/see-u-ui/commit/854d9209ad9504574ec9220b7173145641f0d624)
>
> > - <Badge type="warning" text="修复" /> SeeButton 预览页面在 APP 端间距过大的 BUG

## 1.0.007 **_[`2025-12-02`](https://www.npmjs.com/package/see-u-ui/v/1.0.7)_**

- <Badge type="info" text="修改" /> theme.scss 主题文件

## 1.0.006 **_[`2025-12-01`](https://www.npmjs.com/package/see-u-ui/v/1.0.6)_**

- <Badge type="info" text="修改" /> SeeButton 导入结构
- <Badge type="tip" text="新增" /> 类型文件 declaration.d.ts

## 1.0.005-alpha **_[`2025-12-01`](https://www.npmjs.com/package/see-u-ui/v/1.0.5)_**

- <Badge type="info" text="修改" /> 回滚至 **_[`1.0.3`](https://www.npmjs.com/package/see-u-ui/v/1.0.3)_**

## 1.0.004-alpha **_[`2025-12-01`](https://www.npmjs.com/package/see-u-ui/v/1.0.4)_**

- <Badge type="warning" text="修复" /> Typescript 失效的 bug
- <Badge type="tip" text="新增" /> Vite 构建

## 1.0.003-alpha **_[`2025-12-01`](https://www.npmjs.com/package/see-u-ui/v/1.0.3)_**

- <Badge type="tip" text="新增" /> Typescript 支持
- <Badge type="tip" text="新增" /> theme.scss

## 1.0.002 **_[`2025-11-30`](https://www.npmjs.com/package/see-u-ui/v/1.0.2)_**

- <Badge type="tip" text="新增" /> Button 组件

## 1.0.001 **_[`2025-11-27`](https://www.npmjs.com/package/see-u-ui/v/1.0.1)_**

- 开坑
