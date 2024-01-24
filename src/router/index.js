import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUs from '../views/AboutUs.vue'
import Pricing from '../views/Pricing.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/AboutUs',
      name: 'aboutus',
      component: AboutUs
    },
    {
      path: '/Pricing',
      name: 'pricing',
      component: Pricing
    }
  ]
})

export default router
