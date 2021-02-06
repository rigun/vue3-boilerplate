import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

const runVue = async (r) => {
    const router = await r
    createApp(App).use(store).use(router).mount('#app')
}

runVue(router)

