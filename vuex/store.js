import { createStore } from "vuex"
import { testPosts } from "./testPosts"

const delay = new Promise(res => setTimeout(res, 1000))

const posts = {
  namespaced: true,

  state() {
    return {
      count: 0,
      postId: null,
      all: []
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
      state.all = posts
    }
  },

  actions: {
    async fetch(ctx) {
      await delay
      ctx.commit('setPosts', testPosts)
    }
  },

  getters: {
    currentPost(state) {
      return state.all.find(post => 
        post.id === state.postId
      )
    }
  }
}

export const store = createStore({
  modules: {
    posts
  }  
})