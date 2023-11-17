<template>
  <AppHeader/>
  
  <main class="section-container">
    <div class="flex space-x-4">
        <div class="bg-white rounded-xl p-6 w-1/2">
            <h2 class="text-xl font-semibold mb-6">Edit Budget</h2>
            <div class="flex justce items-end space-x-2">
                <AppInputs v-model="budget" type="number" label="Your Budget"/>
                <AppButtons @click="setBudget">Set Budget</AppButtons>
            </div>
        </div>
        <div class="bg-white rounded-xl p-6 w-1/2">
            <h2 class="text-xl font-semibold mb-6">Add New Transaction</h2>
            <div class="flex justce items-end space-x-2">
                <AppInputs v-model="transactionName" type="text" label="Transaction Name"/>
                <AppInputs v-model="transactionCost" type="number" label="Transaction Cost"/>
                <AppButtons @click="addTransaction">Add</AppButtons>
            </div>
        </div>
    </div>

    <div class="flex space-x-4 my-4">
      <div class="bg-white rounded-xl p-4 flex items-center space-x-4 flex-1">
        <div class="bg-blue-100 h-24 w-24 rounded-xl flex justify-center items-center">
          <Icon width="48" height="48" class="text-blue-500" icon="ph:wallet-fill" />
        </div>
        <div>
          <h2 class="text-2xl font-semibold">${{ budget }}</h2>
          <p class="text-md font-semibold">Budget</p>
        </div>
      </div>

      <div class="bg-white rounded-xl p-4 flex items-center space-x-4 flex-1">
        <div class="bg-yellow-100 h-24 w-24 rounded-xl flex justify-center items-center">
          <Icon width="48" height="48" class="text-yellow-500" icon="fluent:money-hand-16-filled" />
        </div>
        <div>
          <h2 class="text-2xl font-semibold">${{ expenses }}</h2>
          <p class="text-md font-semibold">Expenses</p>
        </div>
      </div>

      <div class="bg-white rounded-xl p-4 flex items-center space-x-4 flex-1">
        <div class="bg-green-100 h-24 w-24 rounded-xl flex justify-center items-center">
          <Icon width="48" height="48" class="text-green-500" icon="fa:dollar" />
        </div>
        <div>
          <div class="flex items-center space-x-1">
            <h2 class="text-2xl font-semibold">${{ balance }}</h2><div>
              <Icon width="20" height="20" class="text-green-500" icon="ph:arrow-up-left-bold" />
              <!-- <Icon class="text-red-500" icon="ph:arrow-down-left-bold" /> -->
            </div>
          </div>
          <p class="text-md font-semibold">Balance</p>
        </div>
      </div>
    </div>

    <TransactionHistory :transactions="transactions"/>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { uuid } from 'vue-uuid';
import AppHeader from './components/AppHeader.vue'
import AppButtons from './components/AppButtons.vue'
import AppInputs from './components/AppInputs.vue'
import TransactionHistory from './components/TransactionHistory.vue'


const budget = ref(0)
const transactionName = ref('')
const transactionCost = ref(null)
const expenses = ref(0)
const balance = ref(0)

const transactions = ref([
//   {
//   id: uuid.v1(), name: 'Iphone', cost: 1000, date: '26 April 2023'
// },{
//   id: uuid.v1(), name: 'Car', cost: 3500, date: '21 May 2023'
// },{
//   id: uuid.v1(), name: 'Cigarettes', cost: 10, date: '13 February 2023'
// }
])


const addTransaction = () => {
  const options = { day: "numeric", month: "long", year: "numeric" };
  const transaction = {
    name: transactionName.value,
    cost: transactionCost.value,
    id: uuid.v1(),
    date: new Date().toLocaleDateString(undefined, options),
  }
  balance.value = balance.value - transactionCost.value

  if(transactionName.value && transactionCost.value) {   
    transactions.value.unshift(transaction)
    transactionName.value = ''
    transactionCost.value = null
    
  }
  
}

const setBudget = () => {
  if(budget.value) {
    budget.value = budget.value
    balance.value = budget.value
  }
}


</script>


