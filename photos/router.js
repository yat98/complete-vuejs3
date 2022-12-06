import { createRouter, createWebHistory } from "vue-router";
import PhotoApp from "./PhotoApp.vue"
import PhotoView from "./PhotoView.vue"

export const router = createRouter({
  history:createWebHistory(),
  routes: [
    {
      path: '/',
      component: PhotoApp,
      children: [
        {
          path: 'album/:id',
          component: PhotoView
        }
      ]
    }
  ]
})