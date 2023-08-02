import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import { createPinia } from 'pinia'
import router from './router'
import axios from './plugins/axios'

createApp(App).use(router).use(createPinia()).use(axios, {
    baseUrl: 'https://cataas.com/',
}).use(Quasar, quasarUserOptions).mount('#app')
