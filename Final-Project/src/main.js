import App from './App.vue'

import navHeader from './components/navHeader.vue'
import sessionData from './components/sessionData.vue'
import userSessionData from './components/userSessionData.vue'

import { createApp } from 'vue'
import router from './router'

const app = createApp(App)

app.component('nav-header', navHeader)
app.component('session-data', sessionData)
app.component('userSession-data', userSessionData)

app.use(router)
app.mount('#app')
