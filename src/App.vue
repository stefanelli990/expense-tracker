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
          <h2 class="text-2xl font-semibold">${{ initialBudget }}</h2>
          <p class="text-md font-semibold">Budget</p>
        </div>
      </div>
      <div class="bg-white rounded-xl p-4 flex items-center space-x-4 flex-1">
        <div class="bg-yellow-100 h-24 w-24 rounded-xl flex justify-center items-center">
          <Icon width="48" height="48" class="text-yellow-500" icon="fluent:money-hand-16-filled" />
        </div>
        <div>
          <h2 class="text-2xl font-semibold">${{ Number(expenses) }}</h2>
          <p class="text-md font-semibold">Expenses</p>
        </div>
      </div>
      <div class="bg-white rounded-xl p-4 flex items-center space-x-4 flex-1">
        <div class="h-24 w-24 rounded-xl flex justify-center items-center" :class="balance < 0 ? 'bg-red-100' : 'bg-green-100'">
          <Icon width="48" height="48"  :class="balance < 0 ? 'text-red-500' : 'text-green-500'" icon="fa:dollar" />
        </div>
        <div>
          <div class="flex items-center space-x-1">
            <h2 class="text-2xl font-semibold">${{ Number(balance) }}</h2><div>
              <Icon v-if="balance < 0"  width="20" height="20" class="text-red-500" icon="ph:arrow-down-left-bold" />
              <Icon v-else width="20" height="20" class="text-green-500" icon="ph:arrow-up-left-bold" />
            </div>
          </div>
          <p class="text-md font-semibold">Balance</p>
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
import { useToast } from "vue-toastification";
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

const toast = useToast();

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

  // calculate balance and expenses
  balance.value = balance.value - transactionCost.value
  expenses.value = Number(expenses.value) + Number(transactionCost.value)
  if(!transactionName.value && !transactionCost.value) {   
    toast.error("You must enter both fields")
    return
  }
  toast.success("New transaction has been added")
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
  saveTransactions()
  saveExpenses()
  saveBalances()
}

const setBudget = () => {
  if(!budget.value) {
    toast.error("You must enter budget value")
    return
  }
  initialBudget.value = Number(budget.value)
  balance.value = budget.value
  saveBudget()
  saveBalances()
  saveInitialBudget()
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


