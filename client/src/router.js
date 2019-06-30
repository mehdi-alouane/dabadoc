import Vue from 'vue'
import Router from 'vue-router'

const homeView = () => import('./views/Home.vue')
const registerView = () => import('./views/Register.vue')
const loginView = () => import('./views/Login.vue')

const routes = [
  { path: '/', name: 'home', component: homeView },
  { path: '/register', name: 'register', component: registerView },
  { path: '/login', name: 'login', component: loginView }
]

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
