import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LitzenseileView from '../views/LitzenseileView.vue'
import VVSeileView from '../views/VV-SeileView.vue'
import Page404 from '../views/404Page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/litzenseile',
      name: 'litzenseile',
      component: LitzenseileView
    },
    {
      path: '/vv-seile',
      name: 'vv-seile',
      component: VVSeileView
    },
    // 404 Page
    {
      path: '/:catchAll(.*)',
      name: '404Page',
      component: Page404
    }
  ]
})

export default router
