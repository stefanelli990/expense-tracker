<template>
  <div v-if="storeTransactions.transactions.length < 1" class="max-w-[300px] mx-auto text-center text-xl font-semibold flex justify-center items-center md:h-[calc(100vh-466px)] lg:h-[calc(100vh-410px)]">Your transaction history is empty.</div>
  <div v-else class="max-w-5xl mx-auto px-4">
    <h2 class="mt-8 mb-4 text-xl font-semibold">Transaction History</h2>
    <div class="overflow-auto">
      <table class="border-collapse table-auto w-full text-sm text-left bg-white rounded-lg p-4 mb-4 whitespace-nowrap overflow-hidden dark:bg-slate-800/50">
      <thead class="">
        <tr class="border-b dark:border-slate-700">
          <th class="p-4 pl-8 pb-3">No.</th>
          <th class="p-4 pl-8 pb-3">Name</th>
          <th class="p-4 pl-8 pb-3">Cost</th>
          <th class="p-4 pl-8 pb-3">Date</th>
          <th class="p-4 pl-8 pb-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <TransitionGroup name="transactions">
        <tr v-for="(transaction, index) in storeTransactions.transactions" :key="transaction.id" class="border-b dark:border-b-slate-700 last:border-none">
          <td class="p-4 pl-8">{{ index + 1 }}.</td>
          <td class="p-4 pl-8">{{ transaction.name }}</td>
          <td class="p-4 pl-8">${{ transaction.cost }}</td>
          <td class="p-4 pl-8">{{ transaction.date }}</td>
          <td class="p-4 pl-8">
            <div class="flex items-center space-x-2 cursor-pointer" @click="storeTransactions.deleteTransaction(transaction.id, transaction.cost)"><span>Remove</span><Icon class="text-red-500" width="16" height="16" icon="carbon:close-filled" /></div>
          </td>
        </tr>
      </TransitionGroup>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { useStoreTransactions } from '../stores/storeTransactions'

const storeTransactions = useStoreTransactions();

const props = defineProps(['transactions'])

</script>


<style scoped>



.transactions-enter-from {
  opacity: 0;
  translate: 0 -100%;
}
.transactions-enter-to {
  opacity: 1;
  translate: 0 0;
}
.transactions-enter-active,
.transactions-leave-active,
.transactions-move {
  transition: all 0.3s;
}
.transactions-leave-active { position: absolute; }
.transactions-leave-from { opacity: 1; }
.transactions-leave-to { opacity: 0; }

</style>