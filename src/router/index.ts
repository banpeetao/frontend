import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Non from '../views/Non/Non.vue'
import Pon from '../views/Pon/Pon.vue'
import Yok from '../views/Yok/Yok.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Non',
    name: 'Non',
    component: Non
  },
  {
    path: '/Pon',
    name: 'Pon',
    component: Pon
  },
  {
    path: '/Yok',
    name: 'Yok',
    component: Yok
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
