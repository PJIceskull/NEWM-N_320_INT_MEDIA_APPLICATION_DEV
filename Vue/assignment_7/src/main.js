import App from './App.vue'
// Import from Components
import TeamData from './components/TeamData.vue'
import SelectTeam from './components/SelectTeam.vue'

import { createApp } from 'vue'

const app = createApp(App)

app.component('team-data', TeamData)
app.component('select-team', SelectTeam)

app.mount('#app')
