<template>
  <button
    @click="click"
  >Like</button>
  {{ post.likes }}
  <Hashtag 
    v-for="hashtag in post.hashtags" 
    :key="hashtag"
    :hashtag="hashtag"
  >
  </Hashtag>
</template>

<script>
import { store } from './store';
import Hashtag from './Hashtag.vue';

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
    const click = () => {
      store.incrementLike(props.post)
    }

    return {
      click
    }
  }
}
</script>

<style>

</style>