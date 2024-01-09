<template>
    <header class="bg-white shadow-md shadow-slate-100 dark:bg-slate-800/50 dark:shadow-none">
        <div class="max-w-5xl mx-auto p-4 flex justify-between items-center">
            <h1 class="text-xl font-bold md:text-2xl">ExpenseVue</h1>
            <button @click="toggleDark()" class="flex items-center space-x-1 dark:text-white">
                <Icon v-if="!isDark" icon="material-symbols-light:dark-mode-rounded" width="24" height="24"/>
                <Icon v-else icon="fluent:weather-sunny-28-filled" width="24" height="24"/>
                <span class="font-semibold">{{ !isDark ? 'Dark' : 'Light' }} Mode</span>
            </button>
        </div>
    </header>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>