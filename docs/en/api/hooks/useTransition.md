---
layout: doc
outline: deep
title: useTransition
titleTemplate: SeeYouUI - useTransition
description: SeeYouUI useTransition Hook
---

# useTransition

> Animation state machine hook. Manages CSS enter/leave transitions with a 6-state lifecycle.

## Usage

```ts
import { ref } from 'vue'
import { useTransition } from 'see-u-ui'

const show = ref(false)
const { isVisible, transitionClass, enter, leave } = useTransition({
  show,
  duration: 300,
  name: 'fade',
  onAfterEnter: () => console.log('entered'),
  onAfterLeave: () => console.log('left')
})
```

## State Flow

```
enter → entering → entered  (enter animation)
leave → leaving  → left     (leave animation)
```

## API

### `useTransition(options)`

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| options.show | `Ref<boolean>` | — | Show/hide control |
| options.duration | `number` | `300` | Animation duration (ms) |
| options.name | `string` | `'see'` | CSS class prefix |
| options.onBeforeEnter | `() => void` | - | Before enter callback |
| options.onAfterEnter | `() => void` | - | After enter callback |
| options.onBeforeLeave | `() => void` | - | Before leave callback |
| options.onAfterLeave | `() => void` | - | After leave callback |

**Returns:**

| Property | Type | Description |
|----------|------|-------------|
| isVisible | `Ref<boolean>` | Visibility state |
| isAnimating | `Ref<boolean>` | Animation in progress |
| state | `Ref<TransitionState>` | Current state |
| transitionClass | `ComputedRef<string>` | CSS class names |
| enter | `() => void` | Trigger enter |
| leave | `() => void` | Trigger leave |
| cleanup | `() => void` | Cleanup timers |
