<template>
  <input 
    :value="currentTag" 
    @input="setHashtag"
  />
  <Card 
    v-for="post in filteredPosts"
    :key="post.id"
  >
    <template #title>
      {{ post.title }}
    </template>
    <template #content>
      {{ post.content }}
    </template>
    <template #description>
      <Controls :post="post"/>
    </template>
  </Card>
</template>

<script>
import Card from './Card.vue'
import Controls from './Controls.vue'
import { computed } from 'vue';
import { store } from "./store.js"

export default {
  components: {
    Card,
    Controls
  },
  setup() {
    const setHashtag = (event) => {
      store.setHashtag(event.target.value)
    }

    return {
      setHashtag,
      filteredPosts: computed(() => store.filteredPosts),
      currentTag: computed(() => store.state.currentTag) ,
    }
  }
}
</script>

<style>

</style>