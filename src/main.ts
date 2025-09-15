import './assets/css/base.css'
import './assets/css/fonts.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueGoodTablePlugin from 'vue-good-table-next'
import { createI18n } from 'vue-i18n'

// Sprachdateien importieren
import de from './locales/de.json'
import en from './locales/en.json'

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

//Sprachen
const userLang = navigator.language.startsWith('de') ? 'de' : 'en'

const i18n = createI18n({
  legacy: false, // wichtig für Composition API
  locale: userLang, // Standardsprache
  fallbackLocale: 'en',
  messages: {
    en,
    de
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueGoodTablePlugin)
app.use(i18n)

app.mount('#app')
