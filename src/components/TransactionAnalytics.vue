<template>
    <div class="max-w-5xl mx-auto px-4 space-y-4 my-8 md:my-4 md:flex md:space-y-0 md:space-x-4">
      <div class="bg-white rounded-xl p-4 flex items-center space-x-4 flex-1 dark:bg-slate-800/50">
        <div class="bg-blue-100 h-20 w-20 rounded-xl flex justify-center items-center dark:bg-blue-400/25">
          <Icon  class="text-blue-500 text-4xl" icon="ph:wallet-fill" />
        </div>
        <div>
          <h2 class="text-xl font-semibold">${{ storeTransactions.initialBudget }}</h2>
          <p class="text-sm font-semibold">Budget</p>
        </div>
      </div>
      <div class="bg-white rounded-xl p-4 flex items-center space-x-4 flex-1 dark:bg-slate-800/50">
        <div class="bg-yellow-100 h-20 w-20 rounded-xl flex justify-center items-center dark:bg-yellow-300/25">
          <Icon class="text-yellow-500 text-4xl" icon="fluent:money-hand-16-filled" />
        </div>
        <div>
          <h2 class="text-xl font-semibold">${{ Number(storeTransactions.expenses) }}</h2>
          <p class="text-sm font-semibold">Expenses</p>
        </div>
      </div>
      <div class="bg-white rounded-xl p-4 flex items-center space-x-4 flex-1 dark:bg-slate-800/50">
        <div class="h-20 w-20 rounded-xl flex justify-center items-center" :class="storeTransactions.balance < 0 ? 'bg-red-100 dark:bg-red-300/25' : 'bg-green-100 dark:bg-green-300/25'">
          <Icon  class="text-4xl" :class="storeTransactions.balance < 0 ? 'text-red-500' : 'text-green-500'" icon="fa:dollar" />
        </div>
        <div>
          <div class="flex items-center space-x-1">
            <h2 class="text-xl font-semibold">${{ Number(storeTransactions.balance) }}</h2><div>
              <Icon v-if="storeTransactions.balance < 0"  width="20" height="20" class="text-red-500" icon="mingcute:arrow-left-down-fill"  />
              <Icon v-else width="20" height="20" class="text-green-500" icon="mingcute:arrow-left-up-fill"  />
            </div>
          </div>
          <p class="text-sm font-semibold">Balance</p>
        </div>
      </div>
      <div class="flex flex-col md:hidden">
        <AppButtons @click="storeTransactions.openMenu">Add Transaction</AppButtons>
      </div>
    </div>
</template>

<script setup>

import { Icon } from '@iconify/vue'
import { useStoreTransactions } from '../stores/storeTransactions'
import AppButtons from './AppButtons.vue';

const storeTransactions = useStoreTransactions();

</script>