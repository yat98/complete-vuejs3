<template>
  <Card 
    v-for="post in store.state.posts"
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
  {{ currentTag }}
</template>

<script>
import Card from './Card.vue'
import Controls from './Controls.vue'
import { ref } from 'vue';
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
    return {
      store,
      currentTag,
      setHashtag
    }
  }
}
</script>

<style>

</style>