// Import files from components folder
import PropsOne from './components/propsOne.vue'
import App from './App.vue'
import { createApp } from 'vue'

const app = createApp(App)
app.component('props-one', PropsOne)

app.mount('#app')
