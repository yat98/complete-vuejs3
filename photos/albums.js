export const albums = {
  namespaced: true,

  state() {
    return {
      all: []
    }
  },

  mutations: {
    setAlbums(state,albums) {
      state.all = albums
    }
  },

  actions: {
    async fetch(ctx) {
      const result = await window.fetch('https://jsonplaceholder.typicode.com/albums')
      const json = await result.json()
      ctx.commit('setAlbums', json)
    }
  },
}