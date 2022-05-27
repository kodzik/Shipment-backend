import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    { 
      path: '/update/:id', 
      name: 'update',
      component: () => import('../views/UpdateShip.vue') 
    },
    { 
      path: '/add', 
      name: 'add',
      component: () => import('../views/CreateShip.vue') 
    },
  ]
})

export default router
