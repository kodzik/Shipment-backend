import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundPage from "../components/NotFoundPage.vue";
import UpdateShip from '../views/UpdateShip.vue'
import CreateShip from '../views/CreateShip.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { 
    path: '/update/:id', 
    name: 'update',
    component: UpdateShip
  },
  { 
    path: '/add', 
    name: 'add',
    component: CreateShip
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: "Not Found",
    component: NotFoundPage 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
