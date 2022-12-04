import { createWebHistory, createRouter } from "vue-router"
import Home from "./Home.vue"
import Hello from "./Hello.vue"
import Posts from "./Posts.vue"
import Post from "./Post.vue"
import CreatePost from "./CreatePost.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
    },,
    {
      path: '/hello',
      component: Hello,
    },
    {
      path: '/posts',
      component: Posts,
      children: [
        {
          path: ':id',
          component: Post
        },
        {
          path: 'create',
          component: CreatePost
        }
,     ]
    }
  ]
})

export { router }