---
layout: doc
outline: deep
title: Agent Rules
titleTemplate: SeeYouUI - Agent Rules
description: SeeYouUI's project-root rule files for AI agents
iframeSrc: /pages/index/index
---

# Agent Rules

> Drop a rule file at the project root - AI assistants read it automatically on project open, so generated code naturally follows SeeYouUI conventions.

## Three Synced Rule Files

Different AI tools read different project-root convention files. SeeYouUI ships all three (same content, auto-generated from the SSOT):

| File | AI tool that reads it |
| --- | --- |
| `AGENTS.md` | Universal agent convention ([Cursor](https://www.cursor.com/), [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview), etc. - the new standard) |
| `.cursorrules` | [Cursor](https://www.cursor.com/) |
| `CLAUDE.md` | [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview) |

## What's Inside

The rule file spells out conventions AI must follow when generating SeeYouUI code:

- **Tag prefix**: every component starts with `see-`, e.g. `<see-button>`
- **Component name**: PascalCase, e.g. `SeeButton`
- **Boolean props**: prefixed with `is`, e.g. `isDisabled` / `isHollow` / `isReadonly`
- **Event bindings**: kebab-case - internal emit `onChange` maps to `@on-change`; native semantic events keep their name, e.g. `@click`
- **Two-way binding**: form components support `v-model`
- **Import**: easycom auto-import - no manual import needed
- **Component catalog**: all 84 components with a one-line description + first example line; full API points to `llms-full.txt`

## How to Use

### Option 1: Clone the main repo (auto-effective)

The `see-u-ui` repo root already ships all three files - clone it and open with an AI tool, done.

### Option 2: Copy into your project

If you use SeeYouUI in your own project, copy the rule file to your project root - AI tools will read and follow the conventions on project open.

::: tip Auto-generated, no manual writing
Rule files are produced by `pnpm ai:artifacts` from `registry.json`. Regenerate after component updates - they always stay in sync with the code. Pair with [LLMs.txt](./llms) so AI has both the rules and the full API to query.
:::
