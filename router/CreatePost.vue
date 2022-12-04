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
import { reactive } from "vue";

export default {
  setup() {
    const newPost = reactive({
      title: "",
      content: "",
    });

    const submit = () => {

    }

    return {
      newPost,
      submit
    };
  },
};
</script>

<style>
</style>