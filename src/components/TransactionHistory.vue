<template>
  <div v-if="transactions.length < 1" class=" text-center text-xl font-semibold flex justify-center items-center h-[calc(100vh-490px)]">Your transaction history is empty.</div>
  <div v-else>
    <h2 class="mt-8 mb-4 text-xl font-semibold">Transaction History</h2>
    <div class="overflow-auto">
      <table class="border-collapse table-auto w-full text-sm text-left bg-white rounded-lg p-4 mb-4 whitespace-nowrap">
      <thead class="">
        <tr>
          <th class="border-b border-slate-100 p-4 pl-8 pb-3 font-semibold">No.</th>
          <th class="border-b border-slate-100 p-4 pl-8 pb-3 font-semibold">Name</th>
          <th class="border-b border-slate-100 p-4 pl-8 pb-3 font-semibold">Cost</th>
          <th class="border-b border-slate-100 p-4 pl-8 pb-3 font-semibold">Date</th>
          <th class="border-b border-slate-100 p-4 pl-8 pb-3 font-semibold">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(transaction, index) in transactions" :key="transaction.id">
          <td class="border-b border-slate-100 p-4 pl-8">{{ index + 1 }}.</td>
          <td class="border-b border-slate-100 p-4 pl-8">{{ transaction.name }}</td>
          <td class="border-b border-slate-100 p-4 pl-8">${{ transaction.cost }}</td>
          <td class="border-b border-slate-100 p-4 pl-8">{{ transaction.date }}</td>
          <td class="border-b border-slate-100 p-4 pl-8">
            <div class="flex items-center space-x-1 cursor-pointer" @click="$emit('delete', transaction.id, transaction.cost)"><span>Remove</span><Icon class="text-red-500" width="16" height="16" icon="carbon:close-filled" /></div>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'


const props = defineProps(['transactions'])

</script>