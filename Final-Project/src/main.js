import App from './App.vue'

import navHeader from './components/navHeader.vue'
import sessionData from './components/sessionData.vue'

import { createApp } from 'vue'
import router from './router'

const app = createApp(App)

app.component('nav-header', navHeader)
app.component('session-data', sessionData)

app.use(router)
app.mount('#app')
