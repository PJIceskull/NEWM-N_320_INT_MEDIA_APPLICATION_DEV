// Import files from components folder
import PropsOne from './components/propsOne.vue'
import PropsTwo from './components/propsTwo.vue'
import StudentData from './components/StudentData.vue'

import SlotsOne from './components/SlotsOne.vue'
import CustomButton from './components/customButtom.vue'
import SlotsTwo from './components/SlotsTwo.vue'
import App from './App.vue'
import AddStudent from './components/AddStudent.vue'
import { createApp } from 'vue'

const app = createApp(App)
app.component('props-one', PropsOne)
app.component('props-two', PropsTwo)
app.component('student-data', StudentData)
app.component('slot-one', SlotsOne)
app.component('slot-two', SlotsTwo)
app.component('add-student', AddStudent)
app.component('custom-button', CustomButton)

app.mount('#app')
