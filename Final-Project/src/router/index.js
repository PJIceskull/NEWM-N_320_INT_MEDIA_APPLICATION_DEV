import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../view/sessionsList.vue')
  },
  {
    path: '/sessions',
    name: 'sessions',
    component: () => import('../view/sessionsList.vue')
  },
  {
    path: '/mysessions',
    name: 'mysessions',
    component: () => import('../view/userSessions.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
