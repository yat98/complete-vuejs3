import { createStore } from "vuex"
import { testPosts } from "./testPosts"

const delay = new Promise(res => setTimeout(res, 1000))

export const store = createStore({
  state() {
    return {
      count: 0,
      postId: null,
    }
  },

  mutations: {
    increment(state,{ number }){
      state.count += number
    },
    setPostId(state,postId){
      state.postId = postId
    }
  },

  actions: {
    async fetchPosts(ctx, payload) {
      await delay
      console.log(payload)
    }
  }
})