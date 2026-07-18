---
layout: doc
outline: deep
title: Agent 规则
titleTemplate: SeeYouUI - Agent 规则
description: SeeYouUI 为 AI Agent 提供的项目根规则文件
iframeSrc: /pages/index/index
---

# Agent 规则

> 在项目根放一份规则文件，AI 助手打开项目时会自动读取，生成的代码自然符合 SeeYouUI 约定。

## 三份同源规则文件

不同的 AI 工具读取的项目根约定文件不同，SeeYouUI 一次性提供三份（内容同源，由生成器从 SSOT 自动产出）：

| 文件 | 读取它的 AI 工具 |
| --- | --- |
| `AGENTS.md` | 通用 Agent 约定（[Cursor](https://www.cursor.com/)、[Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview) 等新标准） |
| `.cursorrules` | [Cursor](https://www.cursor.com/) |
| `CLAUDE.md` | [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview) |

## 包含什么

规则文件里写明了 AI 生成 SeeYouUI 代码时必须遵循的约定：

- **标签前缀**：所有组件以 `see-` 开头，如 `<see-button>`
- **组件名**：PascalCase，如 `SeeButton`
- **布尔属性**：以 `is` 前缀，如 `isDisabled` / `isHollow` / `isReadonly`
- **事件绑定**：kebab-case，内部 emit `onChange` 对应模板 `@on-change`；原生语义事件保留原名如 `@click`
- **双向绑定**：表单类组件支持 `v-model`
- **引入方式**：easycom 自动引入，无需手动 import
- **组件清单**：84 个组件每个附带一句话描述 + 示例首行，完整 API 指向 `llms-full.txt`

## 怎么用

### 方式一：克隆主库（自动生效）

`see-u-ui` 主库根目录已自带这三份文件，克隆下来用 AI 工具打开即生效。

### 方式二：复制到你的项目

如果你在自己的项目里用 SeeYouUI，可以把规则文件复制到项目根目录，AI 工具打开你的项目时就会读取并遵循约定。

::: tip 自动生成，无需手写
规则文件由 `pnpm ai:artifacts` 从 `registry.json` 自动生成，组件更新后重新生成即可，永远和代码保持一致。配合 [LLMs.txt](./llms) 一起使用，AI 既有约定规则，又有完整 API 可查。
:::
