<template>
  <h4>{{ post.title }}</h4>
  <p>
    {{ post.content }}
  </p>
</template>

<script>
export default {
  emits: ['createPost'],
  
  props: {
    posts: {
      type:Array,
      default: []
    }
  },

  computed:  {
    post() {
      return this.posts.find(p => 
        p.id.toString() === this.$route.params.id
      )
    }
  }
}
</script>

<style>

</style>