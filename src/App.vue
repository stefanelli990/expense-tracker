<template>
  <AppHeader @open="openMenu"/>
  <main class="section-container">

    <!-- responsive inputs menu -->
    <div class="fixed top-0 left-0 min-h-screen p-4 bg-white w-full duration-300 md:hidden" :class="menuIsVisible ? 'translate-x-0' : '-translate-x-full'">
        <div class="flex justify-between items-center mb-10">
          <h2 class="text-xl font-semibold">Add New Transaction</h2>
          <button class="md:hidden" @click="closeMenu">
            <Icon height="24" width="24" icon="mingcute:close-line" />
          </button>
        </div>
        <div>
          <div class="mb-4">
            <h2 class="text-md font-semibold mb-4">Edit Budget</h2>
            <div class="flex flex-col space-y-2 sm:flex-row sm:items-end sm:space-y-0 sm:space-x-2">
                <AppInputs v-model="budget" type="number" label="Your Budget" id="budgetInput"/>
                <AppButtons @click="setBudget">Set Budget</AppButtons>
            </div>
        </div>
        <div class="">
            <h2 class="text-md font-semibold mb-4">Add Transaction</h2>
            <div class="flex flex-col sm:flex-row sm:items-end space-y-2 sm:space-y-0 sm:space-x-2">
                <div class="flex-1 space-y-2 sm:space-y-0 sm:flex sm:flex-row sm:space-x-2">
                  <AppInputs v-model="transactionName" type="text" label="Transaction Name"/>
                  <AppInputs v-model="transactionCost" type="number" label="Transaction Cost"/>
                </div>
                <AppButtons @click="addTransaction">Add</AppButtons>
            </div>
        </div>
        </div>
    </div>

    <!-- inputs desktop -->
    <div class="hidden md:flex space-x-4">
      <div class="bg-white flex-1 rounded-xl p-6 pb-6">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-xl font-semibold">Edit Budget</h2>
              <button class="md:hidden" @click="closeMenu">
                <Icon height="24" width="24" icon="mingcute:close-line" />
              </button>
            </div>
            <div class="flex flex-col items-stretch space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0 lg:items-end">
                <AppInputs v-model="budget" type="number" label="Your Budget"/>
                <AppButtons @click="setBudget">Set Budget</AppButtons>
            </div>
        </div>
        <div class="bg-white flex-1 rounded-xl p-6">
            <h2 class="text-xl font-semibold mb-6">Add Transaction</h2>
            <div class="flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-2 lg:items-end">
                <div class="flex flex-1 space-x-2">
                  <AppInputs v-model="transactionName" type="text" label="Transaction Name"/>
                  <AppInputs v-model="transactionCost" type="number" label="Transaction Cost"/>
                </div>
                <AppButtons @click="addTransaction">Add</AppButtons>
            </div>
        </div>
    </div>

    <div class="space-y-4 my-4 md:flex md:space-y-0 md:space-x-4">
      <div class="bg-white rounded-xl p-4 flex items-center space-x-4 flex-1">
        <div class="bg-blue-100 h-20 w-20 rounded-xl flex justify-center items-center">
          <Icon  class="text-blue-500 text-4xl" icon="ph:wallet-fill" />
        </div>
        <div>
          <h2 class="text-xl font-semibold">${{ initialBudget }}</h2>
          <p class="text-sm font-semibold">Budget</p>
        </div>
      </div>
      <div class="bg-white rounded-xl p-4 flex items-center space-x-4 flex-1">
        <div class="bg-yellow-100 h-20 w-20 rounded-xl flex justify-center items-center">
          <Icon class="text-yellow-500 text-4xl" icon="fluent:money-hand-16-filled" />
        </div>
        <div>
          <h2 class="text-xl font-semibold">${{ Number(expenses) }}</h2>
          <p class="text-sm font-semibold">Expenses</p>
        </div>
      </div>
      <div class="bg-white rounded-xl p-4 flex items-center space-x-4 flex-1">
        <div class="h-20 w-20 rounded-xl flex justify-center items-center" :class="balance < 0 ? 'bg-red-100' : 'bg-green-100'">
          <Icon  class="text-4xl" :class="balance < 0 ? 'text-red-500' : 'text-green-500'" icon="fa:dollar" />
        </div>
        <div>
          <div class="flex items-center space-x-1">
            <h2 class="text-xl font-semibold">${{ Number(balance) }}</h2><div>
              <Icon v-if="balance < 0"  width="20" height="20" class="text-red-500" icon="ph:arrow-down-left-bold" />
              <Icon v-else width="20" height="20" class="text-green-500" icon="ph:arrow-up-left-bold" />
            </div>
          </div>
          <p class="text-sm font-semibold">Balance</p>
        </div>
      </div>
    </div>
    <TransactionHistory :transactions="transactions" @delete="deleteTransaction"/>

  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import { uuid } from 'vue-uuid';
import AppHeader from './components/AppHeader.vue'
import AppButtons from './components/AppButtons.vue'
import AppInputs from './components/AppInputs.vue'
import TransactionHistory from './components/TransactionHistory.vue'

const initialBudget = ref(0)
const budget = ref(null)
const transactionName = ref('')
const transactionCost = ref(null)
const expenses = ref(0)
const balance = ref(0)
const menuIsVisible = ref(false)

const transactions = ref([])



// loading from local storage
onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem('transactions'))
  const savedExpenses = JSON.parse(localStorage.getItem('expenses'))
  const savedBalances = JSON.parse(localStorage.getItem('balance'))
  const savedBudget = JSON.parse(localStorage.getItem('budget'))
  const savedInitialBudget = JSON.parse(localStorage.getItem('initialBudget'))

  if(savedTransactions) {
    transactions.value = savedTransactions
  }
  if(savedExpenses) {
    expenses.value = savedExpenses
  }
  if(savedBalances) {
    balance.value = savedBalances
  }
  if(savedBudget) {
    budget.value = savedBudget
  }
  if(savedInitialBudget) {
    initialBudget.value = savedInitialBudget
  }
})

const addTransaction = () => {
  const options = { day: "numeric", month: "long", year: "numeric" };
  const transactionData = {
    name: transactionName.value,
    cost: transactionCost.value,
    id: uuid.v1(),
    date: new Date().toLocaleDateString(undefined, options),
  }
  if(!transactionName.value || !transactionCost.value) {   
    console.log('error')
    return
  }
  // calculate balance and expenses
  balance.value = balance.value - transactionCost.value
  expenses.value = Number(expenses.value) + Number(transactionCost.value)

  closeMenu()
  console.log("New transaction has been added")
  transactions.value.unshift(transactionData)
  transactionName.value = ''
  transactionCost.value = null
  saveBalances()
  saveExpenses()
  saveTransactions()
}

const deleteTransaction = (id,cost) => {
  console.log(id,cost)
  transactions.value = transactions.value.filter(transaction => transaction.id !== id)
  expenses.value = expenses.value - cost
  balance.value = Number(balance.value) + Number(cost)
  console.log("success")
  saveTransactions()
  saveExpenses()
  saveBalances()
}

const setBudget = () => {
  if(!budget.value) {
    console.log("error")
    return
  }
  initialBudget.value = Number(budget.value)
  balance.value = budget.value
  saveBudget()
  saveBalances()
  saveInitialBudget()
}

const openMenu = () => {
  menuIsVisible.value = true
}
const closeMenu = () => {
  menuIsVisible.value = false
}

// save to local storage

const saveTransactions = () => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value))
}
const saveExpenses = () => {
  localStorage.setItem('expenses', JSON.stringify(expenses.value))
}
const saveBalances = () => {
  localStorage.setItem('balance', JSON.stringify(balance.value))
}
const saveBudget = () => {
  localStorage.setItem('budget', JSON.stringify(budget.value))
}
const saveInitialBudget = () => {
  localStorage.setItem('initialBudget', JSON.stringify(initialBudget.value))
}
</script>


