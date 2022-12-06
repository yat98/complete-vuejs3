<template>
  <img 
    v-for="photo in photos"
    :key="photo.id"
    :src="photo.thumbnailUrl"
  />
</template>

<script>
export default {
  computed: {
    photos() {
      const id = this.$route.params.id
      if(!id) return
      this.$store.dispatch("photos/getByAlbum", { albumId: id })

      return this.$store.state.photos.all
    }
  },
}
</script>

<style>

</style>