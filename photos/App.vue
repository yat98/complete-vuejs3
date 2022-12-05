<template>
  <Layout>
    <template #header>
      Header
    </template>

    <template #sidebar>
      <div
        v-for="album in albums"
        :key="album.id"
      >
        {{ album.title }}
      </div>
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

export default {
  components: {
    Layout
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