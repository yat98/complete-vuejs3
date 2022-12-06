export const photos = {
  namespaced: true,

  state() {
    return {
      all: [],
      cache: {},
    }
  },

  mutations: {
    setPhotos(state, { photos, albumId}) {
      state.all = photos
      state.cache[albumId] = photos
    }
  },

  actions: {
    async getByAlbum(ctx, { albumId }) {
      if(ctx.state.cache[albumId]){
        ctx.commit('setPhotos', { photos: ctx.state.cache[albumId], albumId })
        return
      }

      const result = await window.fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      const json = await result.json()
      ctx.commit('setPhotos', { photos: json, albumId })
    }
  },
}