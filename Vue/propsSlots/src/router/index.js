import { createRouter, createWebHistory } from 'vue-router'
// import PropsSlots from '../components/view/PropsSlots.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../view/PropsSlots.vue')
  },
  {
    path: '/students',
    name: 'students',
    // LAzy Loading
    component: () => import('../view/StudentView.vue')
  },
  {
    path: '/props',
    names: 'props',
    component: () => import('../view/PropsSlots.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
