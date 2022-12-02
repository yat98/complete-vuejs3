<template>
  <button>Like</button>
  {{ post.likes }}
  <Hashtag 
    v-for="hashtag in post.hashtags" 
    :key="hashtag"
    :hashtag="hashtag"
    @setHashtag="setHashtag"
  >
  </Hashtag>
</template>

<script>
import Hashtag from './Hashtag.vue';

export default {
  emits: ['setHashtag'],

  components: {
    Hashtag
  },

  props: {
    post: {
      type: Object,
      required: true,
    }
  },

  setup(props,ctx) {
    const setHashtag = (hashtag) => {
      ctx.emit('setHashtag',hashtag)
    }

    return {
      setHashtag
    }
  }
}
</script>

<style>

</style>