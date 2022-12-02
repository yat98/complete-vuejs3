<template>
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
    const filteredPosts = computed(() => {
      if(!store.state.currentTag){
        return store.state.posts
      }
      
      return store.state.posts.filter(post => post.hashtags.includes(store.state.currentTag))
      
    })

    return {
      filteredPosts,
    }
  }
}
</script>

<style>

</style>