import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/teamForm.vue')
  },
  {
    path: '/teams',
    name: 'teams',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/teamMemberView.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('../views/teamForm.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
