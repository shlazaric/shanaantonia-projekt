import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: () => import(/* webpackChunkName: "signup" */ '../views/SignUp.vue')
  },
  {
    path: '/login-view',
    name: 'login-view',
    component: () => import(/* webpackChunkName: "loginview" */ '../views/LoginView.vue')
  },
  {
    path: '/search-view',
    name: 'search-view',
    component: () => import(/* webpackChunkName: "searchview" */ '../views/SearchView.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import(/* webpackChunkName: "searchview" */ '../views/ForgotPassword.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
