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
import { ref, onMounted } from '@vue/runtime-core';
import Layout from './Layout.vue';

export default {
  components: {
    Layout
  },

  setup() {
    const albums = ref([])
    onMounted(async () => {
      const result = await window.fetch('https://jsonplaceholder.typicode.com/albums')
      const json = await result.json()
      albums.value = json
    })

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