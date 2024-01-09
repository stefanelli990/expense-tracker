import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { useStoreTransactions } from './stores/storeTransactions' 

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

const storeTransactions = useStoreTransactions()
storeTransactions.loadFromLocalStorage()

app.mount('#app')