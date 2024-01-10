<template>
    
    <!-- responsive inputs menu -->
    <div class="fixed top-0 left-0 min-h-screen p-4 z-10 bg-white w-full duration-300 md:hidden dark:bg-slate-900" :class="storeTransactions.menuIsVisible ? 'translate-x-0' : '-translate-x-full'">
        <div class="flex justify-between items-center mb-10">
          <h2 class="text-xl font-bold">Add New Transaction</h2>
          <button class="md:hidden" @click="storeTransactions.closeMenu">
            <Icon height="24" width="24" icon="mingcute:close-fill" />
          </button>
        </div>
        <div>
          <div class="mb-8">
            <h2 class="text-lg font-semibold mb-4">Edit Budget</h2>
            <div class="flex flex-col space-y-2 sm:flex-row sm:items-end sm:space-y-0 sm:space-x-2">
                <AppInputs v-model="storeTransactions.budget" type="number" label="Your Budget" id="budgetInput"/>
                <AppButtons @click="storeTransactions.setBudget">Set Budget</AppButtons>
            </div>
        </div>
        <div class="">
            <h2 class="text-lg font-semibold mb-4">Add Transaction</h2>
            <div class="flex flex-col sm:flex-row sm:items-end space-y-2 sm:space-y-0 sm:space-x-2">
                <div class="flex-1 space-y-2 sm:space-y-0 sm:flex sm:flex-row sm:space-x-2">
                  <AppInputs v-model="storeTransactions.transactionName" type="text" label="Transaction Name"/>
                  <AppInputs v-model="storeTransactions.transactionCost" type="number" label="Transaction Cost"/>
                </div>
                <AppButtons @click="storeTransactions.addTransaction">Add</AppButtons>
            </div>
        </div>
        </div>
    </div>

    <!-- inputs desktop -->
    <div class="hidden max-w-5xl mx-auto px-4 mt-8 md:flex space-x-4">
      <div class="bg-white flex-1 rounded-xl p-6 pb-6 dark:bg-slate-800/50">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-xl font-semibold">Edit Budget</h2>
            </div>
            <div class="flex flex-col items-stretch space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0 lg:items-end">
                <AppInputs v-model="storeTransactions.budget" type="number" label="Your Budget"/>
                <AppButtons @click="storeTransactions.setBudget">Set Budget</AppButtons>
            </div>
        </div>
        <div class="bg-white flex-1 rounded-xl p-6 dark:bg-slate-800/50">
            <h2 class="text-xl font-semibold mb-6">Add Transaction</h2>
            <div class="flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-2 lg:items-end">
                <div class="flex flex-1 space-x-2">
                  <AppInputs v-model="storeTransactions.transactionName" type="text" label="Transaction Name"/>
                  <AppInputs v-model="storeTransactions.transactionCost" type="number" label="Transaction Cost"/>
                </div>
                <AppButtons @click="storeTransactions.addTransaction">Add</AppButtons>
            </div>
        </div>
    </div>
</template>

<script setup>

import AppButtons from '../components/AppButtons.vue'
import AppInputs from '../components/AppInputs.vue'
import { Icon } from '@iconify/vue'
import { useStoreTransactions } from '../stores/storeTransactions'

const storeTransactions = useStoreTransactions()

</script>