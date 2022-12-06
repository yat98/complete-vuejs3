export const photos = {
  namespaced: true,

  state() {
    return {
      all: []
    }
  },

  mutations: {
    setPhotos(state, photos) {
      state.all = photos.splice(0,100)
    }
  },

  actions: {
    async getByAlbum(ctx, { album }) {
      const result = await window.fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`)
      const json = await result.json()
      console.log(json)
      ctx.commit('setPhotos', json)
    }
  },
}