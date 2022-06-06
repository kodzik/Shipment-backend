import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundPage from "../components/NotFoundPage.vue";
// import UpdateShip from '../views/UpdateShip.vue'
// import CreateShip from '../views/CreateShip.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
    // component: () => import('../views/HomeView.vue'),
  },
  { 
    path: '/update/:id', 
    name: 'update',
    // component: UpdateShip
    component: () => import('../views/UpdateShip.vue') 
  },
  { 
    path: '/add', 
    name: 'add',
    // component: CreateShip
    component: () => import('../views/CreateShip.vue') 
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: "Not Found",
    component: NotFoundPage 
  }

  // { 
  //   path: '/details/:id', 
  //   name: 'details',
  //   // component: CreateShip
  //   component: () => import('../views/DetailsView.vue') 
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
