<template>
    <div class="flex flex-col space-y-1 flex-1">
        <label class="text-xs">{{ label }}</label>
        <input :id="id" ref="inputRef" @click="selectAllText" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :type="type" class="border border-gray-200 rounded-xl p-4 w-full outline-primaryColor text-xs [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none">
    </div>
</template>

<script setup>
import { ref } from 'vue'
defineEmits(['update:modelValue'])
defineProps(['modelValue','label','type','id'])

const inputRef = ref(null)

const selectAllText = () => {
    const element = inputRef.value
    const hasID = element.id === 'budgetInput'

    if (hasID) {
        element.select()
    }
}

</script>