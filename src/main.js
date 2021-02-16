import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './style/main.scss'
import { i18n } from './i18n'


const runVue = async (r) => {
    const router = await r
    createApp(App)
        .use(store)
        .use(router)
        .use(i18n)
        .mount('#app')
}
runVue(router)
