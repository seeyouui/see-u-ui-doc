---
layout: doc
outline: deep
title: MCP 接入
titleTemplate: SeeYouUI - MCP 接入
description: 通过 MCP 服务让 AI 助手实时查询 SeeYouUI 组件 API
iframeSrc: /pages/index/index
---

# MCP 接入

> 让 [Cursor](https://www.cursor.com/) / [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview) 等 AI 助手实时查询 SeeYouUI 组件的 props / events / slots / 示例，**按需查询、不占上下文**。

## 为什么用 MCP

给 AI 组件文档，传统有两种方式，各有短板：

| 方式 | 问题 |
| --- | --- |
| 把文档全塞进上下文 | 92KB 的全量 API 占满上下文窗口，昂贵又低效 |
| 让 AI 自己猜 | 容易写错属性名、类型、事件名 |

[MCP](https://modelcontextprotocol.io/)（Model Context Protocol，模型上下文协议）解决了这个矛盾：AI 按需查询单个组件，只返回该组件的 API，精准供给、不浪费上下文。

SeeYouUI 的 MCP 服务 [`see-u-ui-mcp`](https://www.npmjs.com/package/see-u-ui-mcp) 已发布到 [npm](https://www.npmjs.com/)，数据来自组件库的单一数据源 `registry.json`，开箱即用。

## 提供的工具

| 工具 | 入参 | 作用 |
| --- | --- | --- |
| `list_components` | `category?` | 列出全部组件（可按分组过滤），返回 tag / 标题 / 描述 |
| `get_component_api` | `tag` | 返回完整 API：props（类型/必填/默认值）、events（模板绑定名）、slots |
| `get_component_examples` | `tag` | 返回代码示例 |

::: tip 事件绑定名
`get_component_api` 返回的 `events[].bind` 是模板可直接使用的绑定名（kebab-case）：内部 emit `onChange` 对应模板 `@on-change`；原生语义事件如 `click` 保留原名 `@click`。
:::

## 接入方式

### Cursor

编辑 `~/.cursor/mcp.json`（或项目内 `.cursor/mcp.json`）：

```json
{
  "mcpServers": {
    "see-u-ui": {
      "command": "npx",
      "args": ["-y", "see-u-ui-mcp"]
    }
  }
}
```

### Claude Code

```bash
claude mcp add see-u-ui -- npx -y see-u-ui-mcp
```

或手动写入项目级 `.mcp.json` / 用户级 `~/.claude.json`，结构同上 Cursor 的 `mcpServers`。

### 任意支持 MCP 的客户端

传输方式 **stdio**，启动命令 `npx -y see-u-ui-mcp`。服务启动后在 stderr 打印 `[see-u-ui-mcp] ready · v1.3.2 · 84 components`，stdout 仅走 JSON-RPC。

## 真实调用示例

接入后，让 AI 查 `see-button`，`get_component_api` 会返回：

```json
{
  "tag": "see-button",
  "props": [
    { "name": "type", "type": "'info' | 'primary' | 'error' | 'warning' | 'success'", "description": "按钮预置样式类型" },
    { "name": "size", "type": "'default' | 'large' | 'small' | 'mini'", "description": "按钮尺寸" },
    { "name": "isHollow", "type": "boolean", "description": "是否为镂空按钮（反色按钮）" }
    // ... 共 18 个 props
  ],
  "events": [{ "bind": "@click", "emit": "click" }],
  "slots": ["default"]
}
```

AI 拿到这个，就能直接生成正确的 `<see-button type="primary" @click="onClick" />`，不会瞎编属性。

未找到组件时，工具会返回就近建议，例如查 `see-btn` 会提示「你是否想找：see-button」。

## 数据与版本

- **数据来源**：组件库 SSOT `registry.json`，构建期同步进 MCP 包 `data/`，运行时读本地副本，无跨包依赖
- **当前覆盖**：84 个组件
- **传输**：stdio（JSON-RPC）
- **Node 要求**：>= 18
- **依赖**：仅 `@modelcontextprotocol/sdk` + `zod`

## 维护流程

库组件有更新时，在 `see-u-ui` 库执行 `pnpm ai:gen` 重建 registry，再在 MCP 包执行 `npm run sync` 同步，最后发版即可。详见 [AI 总览](./)。
