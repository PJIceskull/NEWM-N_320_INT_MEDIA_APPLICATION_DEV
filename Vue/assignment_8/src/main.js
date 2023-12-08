import App from './App.vue'
// Import from Components

import SelectTeam from './components/SelectTeam.vue'
import TeamData from './components/TeamData.vue'
import userTeamData from './components/userTeamData.vue'
import navHeader from './components/navHeader.vue'

import router from './router'
import { createApp } from 'vue'

const app = createApp(App)

app.component('select-team', SelectTeam)
app.component('team-data', TeamData)
app.component('userteam-data', userTeamData)
app.component('nav-header', navHeader)

app.use(router)
app.mount('#app')
