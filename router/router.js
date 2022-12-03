import { createWebHistory, createRouter } from "vue-router"
import Hello from "./Hello.vue"
import Posts from "./Posts.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/hello',
      component: Hello,
    },
    {
      path: '/posts',
      component: Posts,
    }
  ]
})

export { router }