import { createRouter, createWebHistory } from "vue-router";
import PhotoApp from "./PhotoApp.vue"

export const router = createRouter({
  history:createWebHistory(),
  routes: [
    {
      path: '/',
      component: PhotoApp
    }
  ]
})