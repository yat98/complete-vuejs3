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
      <Controls 
        :post="post"
        @setHashtag="setHashtag"
      />
    </template>
  </Card>
</template>

<script>
import Card from './Card.vue'
import Controls from './Controls.vue'
import { ref, computed } from 'vue';
import { store } from "./store.js"

export default {
  components: {
    Card,
    Controls
  },
  setup() {
    const currentTag = ref('')

    const setHashtag = (hashtag) => {
      currentTag.value = hashtag
    }

    const filteredPosts = computed(() => {
      if(!currentTag.value){
        return store.state.posts
      }

      return store.state.posts.filter(post => post.hashtags.includes(currentTag.value))
    })

    return {
      filteredPosts,
      setHashtag,
    }
  }
}
</script>

<style>

</style>