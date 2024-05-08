import './style.css'
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { useStoreTransactions } from './stores/storeTransactions'

const app = createApp(App)
const pinia = createPinia()

const options = {
    transition: "Vue-Toastification__fade",
    closeButton: false,
    hideProgressBar: true,
    timeout: 2000
};

app.use(Toast, options);

app.use(pinia)

const storeTransactions = useStoreTransactions()
storeTransactions.loadFromLocalStorage()

app.mount('#app')