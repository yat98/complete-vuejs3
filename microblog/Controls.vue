<script setup>
import Hashtag from './Hashtag.vue';
</script>

<template>
  <button>Like</button>
  {{ post.likes }}
  <Hashtag 
    v-for="hashtag in post.hashtags" 
    :key="hashtag"
    :hashtag="hashtag"
  >
  </Hashtag>
</template>

<script>
export default {
  components: {
    Hashtag
  },
  props: {
    post: {
      type: Object,
      required: true,
    }
  },
  setup(props) {
    console.log(props)
  }
}
</script>

<style>

</style>