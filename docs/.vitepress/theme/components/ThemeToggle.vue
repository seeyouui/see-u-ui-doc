<template>
    <span class="vp-theme-toggle-text" @click="changeTheme" role="button" tabindex="0"
        @keydown.enter.space="changeTheme" style="cursor: pointer; user-select: none;">
        {{ isDark ? darkText : lightText }}
    </span>
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'
const { isDark } = useData()

const props = defineProps({
    darkText: {
        type: String,
        default: '暗色'
    },
    lightText: {
        type: String,
        default: '亮色'
    }
})

const changeTheme = () => {
    isDark.value = !isDark.value
}
</script>

<style scoped>
.vp-theme-toggle-text {
    color: var(--vp-c-brand-1);
    transition: color .2s;
    gap: 0.3em;
}

.vp-theme-toggle-text:hover,
.vp-theme-toggle-text:focus-visible {
    color: var(--vp-c-brand-2);
}
</style>