<template>
  <Layout>
    <template #header>
      Header
    </template>

    <template #sidebar>
      <Album
        v-for="album in albums"
        :key="album.id"
        :album="album"
      />
    </template>

    <template #content>
      <RouterView />
    </template>
  </Layout>
</template>

<script>
import Layout from './Layout.vue';
import Album from './Album.vue';

export default {
  components: {
    Layout,
    Album,
  },

  computed: {
    albums() {
      return this.$store.state.albums.all
    }
  },

  mounted() {
    this.$store.dispatch('albums/fetch') 
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
body{
  margin: 0;
}
</style>