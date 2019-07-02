import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

const homeView = () => import('./views/Home.vue')
const registerView = () => import('./views/Register.vue')
const loginView = () => import('./views/Login.vue')
const questionView = () => import('./views/Question.vue')
const answerView = () => import('./views/Answer.vue')
const favouritesView = () => import('./views/Favourites.vue')

const routes = [
  { path: '/', name: 'home', component: homeView, meta: { requiresAuth: true } },
  { path: '/register', name: 'register', component: registerView },
  { path: '/login', name: 'login', component: loginView },
  { path: '/question', name: 'question', component: questionView },
  { path: '/answer/:questionID', name: 'answer', component: answerView, meta: { requiresAuth: true } },
  { path: '/favourites', name: 'favourite', component: favouritesView, meta: { requiresAuth: true } }
]

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!store.state.isLoggedIn) {
      next({ name: 'login' })
    } else {
      store.dispatch('setUser')
    }
    next()
  }
  next()
})

export default router
