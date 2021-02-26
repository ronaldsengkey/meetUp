import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Landing from '../views/Landing.vue'
import HomeMember from '../views/HomeMember.vue'
import HomeGuest from '../views/HomeGuest.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children : [
      // {
      //   path: '/',
      //   component: () => import('../views/Landing.vue')
      // },
      {
        path: '/homeMember',
        component: HomeMember
      },
      {
        path: '/homeGuest',
        component: HomeGuest
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
