---
layout: doc
outline: deep
title: MCP Integration
titleTemplate: SeeYouUI - MCP Integration
description: Let AI assistants query SeeYouUI component APIs in real time via MCP
iframeSrc: /pages/index/index
---

# MCP Integration

> Let AI assistants like [Cursor](https://www.cursor.com/) / [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview) query SeeYouUI's props / events / slots / examples in real time - **query on demand, no context bloat**.

## Why MCP

Giving AI a component doc traditionally has two approaches, each with a drawback:

| Approach | Problem |
| --- | --- |
| Stuff the whole doc into context | A 92KB full API fills the context window - expensive and inefficient |
| Let AI guess | Easy to get prop names, types, event names wrong |

[MCP](https://modelcontextprotocol.io/) (Model Context Protocol) resolves this: AI queries a single component on demand and gets only that component's API - precise supply, no wasted context.

SeeYouUI's MCP service [`see-u-ui-mcp`](https://www.npmjs.com/package/see-u-ui-mcp) is published on [npm](https://www.npmjs.com/), backed by the library's SSOT `registry.json` - works out of the box.

## Provided Tools

| Tool | Input | Purpose |
| --- | --- | --- |
| `list_components` | `category?` | List all components (filterable by group), returns tag / title / description |
| `get_component_api` | `tag` | Full API: props (type/required/default), events (template binding name), slots |
| `get_component_examples` | `tag` | Code examples |

::: tip Event binding name
`events[].bind` returned by `get_component_api` is the kebab-case binding name usable directly in templates: internal emit `onChange` maps to `@on-change`; native semantic events like `click` keep their name `@click`.
:::

## Integration

### Cursor

Edit `~/.cursor/mcp.json` (or project-level `.cursor/mcp.json`):

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

Or manually write to project-level `.mcp.json` / user-level `~/.claude.json`, same structure as Cursor's `mcpServers` above.

### Any MCP-capable Client

Transport: **stdio**, start command `npx -y see-u-ui-mcp`. On start it prints `[see-u-ui-mcp] ready · v1.3.2 · 84 components` to stderr; stdout carries JSON-RPC only.

## Real Example

After integration, ask AI to look up `see-button` - `get_component_api` returns:

```json
{
  "tag": "see-button",
  "props": [
    { "name": "type", "type": "'info' | 'primary' | 'error' | 'warning' | 'success'", "description": "Preset style type" },
    { "name": "size", "type": "'default' | 'large' | 'small' | 'mini'", "description": "Button size" },
    { "name": "isHollow", "type": "boolean", "description": "Hollow button (inverted)" }
    // ... 18 props in total
  ],
  "events": [{ "bind": "@click", "emit": "click" }],
  "slots": ["default"]
}
```

With this, AI generates correct `<see-button type="primary" @click="onClick" />` directly - no fabricated props.

When a component is not found, the tool returns nearby suggestions, e.g. querying `see-btn` prompts "did you mean: see-button".

## Data & Version

- **Source**: library SSOT `registry.json`, synced into the MCP package `data/` at build time, read from local copy at runtime - no cross-package dependency
- **Coverage**: 84 components
- **Transport**: stdio (JSON-RPC)
- **Node**: >= 18
- **Dependencies**: only `@modelcontextprotocol/sdk` + `zod`

## Maintenance

When library components update, run `pnpm ai:gen` in the `see-u-ui` repo to rebuild the registry, then `npm run sync` in the MCP package, then publish. See [AI Overview](./).
