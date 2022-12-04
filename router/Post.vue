<template>
  <h4>{{ post.title }}</h4>
  <p>
    {{ post.content }}
  </p>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { testPosts } from './testPosts';

export default {
  setup() {
    const route = useRoute()
    const post = computed(() => testPosts.find(p => p.id.toString() === route.params.id))
    
    return {
      post
    }
  }
}
</script>

<style>

</style>