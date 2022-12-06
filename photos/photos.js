export const photos = {
  namespaced: true,

  state() {
    return {
      all: []
    }
  },

  mutations: {
    setPhotos(state, photos) {
      state.all = photos
    }
  },

  actions: {
    async getByAlbum(ctx, { albumId }) {
      const result = await window.fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      const json = await result.json()
      ctx.commit('setPhotos', json)
    }
  },
}