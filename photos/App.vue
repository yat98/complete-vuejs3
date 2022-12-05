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
      Content
    </template>
  </Layout>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import Layout from './Layout.vue';
import Album from './Album.vue';

export default {
  components: {
    Layout,
    Album,
  },

  setup() {
    const store = useStore()

    onMounted(() => {
      store.dispatch('albums/fetch') 
    })
    
    const albums = computed(() => store.state.albums.all)

    return {
      albums
    }
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