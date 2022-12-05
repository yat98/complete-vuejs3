import { createStore } from "vuex"
import { testPosts } from "./testPosts"

const delay = new Promise(res => setTimeout(res, 1000))

export const store = createStore({
  state() {
    return {
      count: 0,
      postId: null,
      posts: []
    }
  },

  mutations: {
    increment(state,{ number }){
      state.count += number
    },
    setPostId(state,postId){
      state.postId = postId
    },
    setPosts(state,posts){
      state.posts = posts
    }
  },

  actions: {
    async fetchPosts(ctx) {
      await delay
      ctx.commit('setPosts', testPosts)
    }
  },

  getters: {
    currentPost(state) {
      return state.posts.find(post => 
        post.id === state.postId
      )
    }
  }
})