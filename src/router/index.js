import { createRouter, createWebHistory } from "vue-router";
import HomePage from '@/views/HomePage.vue'
import NotFoundPage from "@/views/NotFoundPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: NotFoundPage
    }
  ]
})

export default router