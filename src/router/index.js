import { createRouter, createWebHistory } from "vue-router";
import HomePage from '@/views/HomePage.vue'
import NotFoundPage from "@/views/NotFoundPage.vue";
import AboutUsPage from "@/views/AboutUsPage.vue";
import ContactPage from "@/views/ContactPage.vue";

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
      path: '/contact',
      component: ContactPage,
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: NotFoundPage
    }
  ]
})

export default router