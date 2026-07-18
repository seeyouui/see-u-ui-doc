---
layout: doc
outline: deep
title: LLMs.txt
titleTemplate: SeeYouUI - LLMs.txt
description: SeeYouUI 提供的 llms.txt 协议文件，让大语言模型抓取整站组件 API
iframeSrc: /pages/index/index
---

# LLMs.txt

> 遵循 [llms.txt 标准](https://llmstxt.org/)，让大语言模型一键抓取 SeeYouUI 全部组件 API。

## 什么是 llms.txt

[llms.txt](https://llmstxt.org/) 是一个为 LLM 设计的抓取协议：在网站根目录放一份 `llms.txt`，大模型访问时就能拿到结构化的内容索引，而不必去解析为人类设计的 HTML 页面。

SeeYouUI 提供两个文件：

| 文件 | 地址 | 内容 |
| --- | --- | --- |
| `llms.txt` | [/llms.txt](https://www.seeuui.cn/llms.txt) | 精简索引：84 个组件的 tag + 一句话描述 + 文档链接，按分组组织 |
| `llms-full.txt` | [/llms-full.txt](https://www.seeuui.cn/llms-full.txt) | 全量 API：每个组件完整的 Props / Events / Slots / 示例表格 |

文件头注明了版本、组件数、标签前缀 `see-`、事件 kebab-case 约定等关键信息，AI 一读就懂。

## 怎么用

### 让 AI 读取

在支持联网的 AI 助手（如 [Claude](https://claude.com/)）里，直接让它访问：

```
请阅读 https://www.seeuui.cn/llms-full.txt 了解 SeeYouUI 组件库，
然后帮我用 see-u-ui 写一个登录表单
```

### 配置到项目

也可以把 `llms-full.txt` 下载到项目里，作为 AI 的参考资料，或在 Agent 规则文件里引用它（SeeYouUI 的 `AGENTS.md` 已指向 `llms-full.txt` 作为完整 API 来源）。

## 与 MCP 的区别

|  | LLMs.txt | MCP |
| --- | --- | --- |
| 形式 | 静态文本文件 | 运行时服务 |
| 粒度 | 全量（一次给全部） | 按需（查哪个给哪个） |
| 适合 | 一次性灌入上下文，建立全局认知 | 多轮对话中精准查证 |
| 上下文占用 | 大（92KB） | 小（单组件） |

两者互补：llms.txt 让 AI 快速认识全库，MCP 让 AI 在写代码时精准查证。配合 [Agent 规则](./agents) 一起用效果最好。
