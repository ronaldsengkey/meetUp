import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Landing from '../views/Landing.vue'
import HomeMember from '../views/Home/HomeMember.vue'
import HomeGuest from '../views/Home/HomeGuest.vue'
import Grooming from '../views/Grooming/Grooming.vue'
import Groomer from '../views/Grooming/Groomer.vue'
import GroomingPlace from '../views/Grooming/GroomingPlace.vue'

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
  {
    path: '/grooming',
    name: 'Grooming',
    component: Grooming,
    children : [
      {
        path: '/groomingPlace',
        component: GroomingPlace
      },
      {
        path: '/groomer',
        component: Groomer
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
