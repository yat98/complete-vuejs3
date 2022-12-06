<template>
  <h3>Create Post</h3>
  <form @submit.prevent="submit">
    <input v-model="newPost.title" placeholder="Title" />
    <br />
    <textarea cols="50" rows="10" v-model="newPost.content"></textarea>
    <br />
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  props: {
    posts: {
      type:Array,
      default: []
    }
  },

  emits: ['createPost'],

  data() {
    return {
      newPost: {
        title: '',
        content: '',
      }
    }
  },

  methods: {
    submit(){
      this.$emit('createPost', {
        title: this.newPost.title,
        content: this.newPost.content,
      })
    }
  }
};
</script>

<style>
</style>