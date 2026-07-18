---
layout: doc
outline: deep
title: LLMs.txt
titleTemplate: SeeYouUI - LLMs.txt
description: SeeYouUI's llms.txt protocol files for LLM crawling
iframeSrc: /pages/index/index
---

# LLMs.txt

> Follows the [llms.txt standard](https://llmstxt.org/) - let LLMs crawl the entire SeeYouUI component API in one shot.

## What is llms.txt

[llms.txt](https://llmstxt.org/) is a crawl protocol designed for LLMs: place a `llms.txt` at the site root, and an LLM can fetch a structured content index instead of parsing HTML pages built for humans.

SeeYouUI provides two files:

| File | URL | Content |
| --- | --- | --- |
| `llms.txt` | [/llms.txt](https://www.seeuui.cn/llms.txt) | Compact index: tag + one-line description + doc link for all 84 components, grouped by category |
| `llms-full.txt` | [/llms-full.txt](https://www.seeuui.cn/llms-full.txt) | Full API: complete Props / Events / Slots / examples tables for every component |

The file header records the version, component count, tag prefix `see-`, event kebab-case convention, etc. - AI understands at a glance.

## How to Use

### Let AI Read It

In an AI assistant with web access (e.g. [Claude](https://claude.com/)), ask it directly:

```
Please read https://www.seeuui.cn/llms-full.txt to learn the SeeYouUI
component library, then build me a login form with see-u-ui.
```

### Add to Your Project

You can also download `llms-full.txt` into your project as AI reference material, or cite it from your agent rule file (SeeYouUI's `AGENTS.md` already points to `llms-full.txt` as the full API source).

## vs. MCP

|  | LLMs.txt | MCP |
| --- | --- | --- |
| Form | Static text file | Runtime service |
| Granularity | Full (all at once) | On demand (per query) |
| Best for | One-shot context loading, global awareness | Precise lookup across turns |
| Context cost | Large (92KB) | Small (one component) |

They complement each other: llms.txt gives AI a quick global picture, MCP gives precise verification while coding. Best used together with [Agent Rules](./agents).
