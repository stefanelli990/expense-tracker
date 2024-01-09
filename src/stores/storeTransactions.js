import { defineStore } from 'pinia'
import { v4 as uuidv4 } from "uuid"
export const useStoreTransactions = defineStore('storeTransactions', {
  state: () => {
    return { 
        transactions: [],
        initialBudget: 0,
        budget: 0,
        transactionName: '',
        transactionCost: null,
        expenses: null,
        balance: null,
        menuIsVisible: false
    }
  },
  getters: {
   
  },
  actions: {
    addTransaction() {
        const options = { day: "numeric", month: "long", year: "numeric" };
        const transactionData = {
            name: this.transactionName,
            cost: this.transactionCost,
            id: uuidv4(),
            date: new Date().toLocaleDateString(undefined, options)
        }
        if(!this.transactionName || !this.transactionCost) {   
            console.log('error')
            return
        }
        // calculate balance and expenses
        this.balance = this.balance - this.transactionCost
        this.expenses = Number(this.expenses) + Number(this.transactionCost)
        this.closeMenu()
        console.log("New transaction has been added")
        this.transactions.unshift(transactionData)
        this.transactionName = ''
        this.transactionCost = null
        this.saveToLocalStorage()
    },
    deleteTransaction(id,cost) {
        console.log("transaction deleted")
        console.log(id,cost)
        this.transactions = this.transactions.filter(transaction => transaction.id !== id)
        this.expenses = this.expenses - cost
        this.balance = Number(this.balance) + Number(cost)
        this.saveToLocalStorage()
    },
    setBudget() {
        if(!this.budget) {
            console.log("error")
            return
          }
          this.initialBudget = Number(this.budget)
          this.balance = this.budget
          this.saveToLocalStorage()
    },
    openMenu() {
        this.menuIsVisible = true
    },
    closeMenu() {
        this.menuIsVisible = false
    },
    // Function to save transactions in local storage
    saveToLocalStorage() {
        localStorage.setItem('transactions', JSON.stringify(this.transactions))
        localStorage.setItem('expenses', JSON.stringify(this.expenses))
        localStorage.setItem('balance', JSON.stringify(this.balance))
        localStorage.setItem('budget', JSON.stringify(this.budget))
        localStorage.setItem('initialBudget', JSON.stringify(this.initialBudget))
    },
      // Function to load transactions from local storage
    loadFromLocalStorage() {
        const savedTransactions = JSON.parse(localStorage.getItem('transactions'))
        const savedExpenses = JSON.parse(localStorage.getItem('expenses'))
        const savedBalances = JSON.parse(localStorage.getItem('balance'))
        const savedBudget = JSON.parse(localStorage.getItem('budget'))
        const savedInitialBudget = JSON.parse(localStorage.getItem('initialBudget'))
        
        if(savedTransactions) {
            this.transactions = savedTransactions
        }
        if(savedExpenses) {
            this.expenses = savedExpenses
        }
        if(savedBalances) {
            this.balance = savedBalances
        }
        if(savedBudget) {
            this.budget = savedBudget
        }
        if(savedInitialBudget) {
            this.initialBudget = savedInitialBudget
        }
    }
  }
})