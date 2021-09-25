import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Non from '../views/Non/Non.vue'
import Pon from '../views/Pon/Pon.vue'
import Yok from '../views/Yok/Yok.vue'
import Tao from '../views/Tao/Tao.vue'

// ระบบรถถัง
import Cavalry_time_attendance_system from '../views/Pon/Cavalry_time_attendance_system.vue'
import Tank_time_attendance_system from '../views/Pon/Tank_time_attendance_system.vue'
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
  // pon -------------------
  {
    path: '/Pon',
    name: 'Pon',
    component: Pon
  },
  {
    path: '/Cavalry_time_attendance_system',
    name: 'Cavalry_time_attendance_system',
    component: Cavalry_time_attendance_system
  }, 
  {
    path: '/Tank_time_attendance_system',
    name: 'Tank_time_attendance_system',
    component: Tank_time_attendance_system
  },
  // -----------------------
  {
    path: '/Yok',
    name: 'Yok',
    component: Yok
  },
  {
    path: '/Tao',
    name: 'Tao',
    component: Tao
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
