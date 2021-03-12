import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Landing from '../views/Landing.vue'
import HomeMember from '../views/Home/HomeMember.vue'
import HomeGuest from '../views/Home/HomeGuest.vue'
import Grooming from '../views/Grooming/Grooming.vue'
import Groomer from '../views/Grooming/Groomer.vue'
import GroomingPlace from '../views/Grooming/GroomingPlace.vue'
import GroomerProfile from '../views/Grooming/GroomerProfile.vue'
import PlaceProfile from '../views/Grooming/PlaceProfile.vue'
import BookGroomer from '../views/Grooming/BookGroomer.vue'
import PlaceBooking from '../views/Grooming/PlaceBooking.vue'
import BookedBill from '../views/Grooming/BookedBill.vue'

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
  {
    path: '/groomerProfile',
    name: 'groomerProfile',
    component: GroomerProfile
  },
  {
    path: '/placeProfile',
    name: 'placeProfile',
    component: PlaceProfile
  },
  {
    path: '/bookGroomer',
    name: 'bookGroomer',
    component: BookGroomer
  },
  {
    path: '/placeBooking',
    name: 'placeBooking',
    component: PlaceBooking
  },
  {
    path: '/bookedBill',
    name: 'bookedBill',
    component: BookedBill
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
