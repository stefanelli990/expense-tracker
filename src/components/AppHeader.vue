<template>
    <header class="section-container flex justify-between items-center text-center pt-8 pb-4 md:justify-center md:pt-10 md:pb-10">
        <h1 class="text-2xl md:text-4xl font-bold">Expense Tracker</h1>
        <button class="md:hidden" @click="$emit('open')">
            <Icon class="text-3xl" icon="ci:hamburger-lg" />
        </button>
    </header>
</template>

<script setup>
import { Icon } from '@iconify/vue';

</script>