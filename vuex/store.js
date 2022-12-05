import { createStore } from "vuex"

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
  }
})