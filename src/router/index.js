import { createRouter, createWebHistory } from "vue-router";
import HomePage from '@/views/HomePage.vue'
import NotFoundPage from "@/views/NotFoundPage.vue";
import AboutUsPage from "@/views/AboutUsPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/about',
      component: AboutUsPage
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: NotFoundPage
    }
  ]
})

export default router