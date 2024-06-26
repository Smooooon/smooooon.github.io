import './assets/css/base.css'
import './assets/css/fonts.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueGoodTablePlugin from 'vue-good-table-next'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then((reg) => console.debug(reg))
    .catch((err) => console.error(err))
}

//Environment
const environment = import.meta.env
console.log('Environmentinfo Seilschieber')
console.log('App mode: ' + environment.MODE)
console.debug('BASE_URL: ' + environment.BASE_URL)
console.debug('PROD: ' + environment.PROD)
console.debug('DEV: ' + environment.DEV)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueGoodTablePlugin)

app.mount('#app')
