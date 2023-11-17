<template>
    <h2 class="mt-8 mb-4 text-2xl font-semibold">Transaction History</h2>
    <table class="border-collapse table-auto w-full text-sm text-left bg-white rounded-lg p-4 mb-4">
      <thead class="">
        <tr>
          <!-- <th class="border-b border-slate-100 p-4 pl-8 pb-3 font-semibold">No.</th> -->
          <th class="border-b border-slate-100 p-4 pl-8 pb-3 font-semibold">Name</th>
          <th class="border-b border-slate-100 p-4 pl-8 pb-3 font-semibold">Cost</th>
          <th class="border-b border-slate-100 p-4 pl-8 pb-3 font-semibold">Date</th>
          <th class="border-b border-slate-100 p-4 pl-8 pb-3 font-semibold">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="transaction in transactions" :key="transaction.id">
          <!-- <td class="border-b border-slate-100 p-4 pl-8">{{transaction.id}}</td> -->
          <td class="border-b border-slate-100 p-4 pl-8">{{ transaction.name }}</td>
          <td class="border-b border-slate-100 p-4 pl-8">${{ transaction.cost }}</td>
          <td class="border-b border-slate-100 p-4 pl-8">{{ transaction.date }}</td>
          <td class="border-b border-slate-100 p-4 pl-8">
            <div class="flex items-center space-x-1 cursor-pointer"><span>Remove</span><Icon class="text-red-500" width="16" height="16" icon="carbon:close-filled" /></div>
          </td>
        </tr>
      </tbody>
  </table>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const props = defineProps(['transactions'])

</script>