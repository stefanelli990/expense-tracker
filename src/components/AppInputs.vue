<template>
    <div class="flex flex-col space-y-2 flex-1">
        <label class="text-xs">{{ label }}</label>
        <input type="text" class="border border-gray-200 rounded-xl p-4 w-full outline-primaryColor text-xs">
    </div>
</template>

<script setup>

const props = defineProps(['label'])

</script>