import './style.css'
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"

import { createApp } from 'vue'
import App from './App.vue'

// toastification options
const options = {
    draggable: false,
    timeout: 2000,
    closeButton: false,
    hideProgressBar: true,
    
};

const app = createApp(App)
app.mount('#app')
app.use(Toast, options );