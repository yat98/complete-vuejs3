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
import { usePosts } from './usePosts';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const postStore =  usePosts()
    const router = useRouter()

    const newPost = reactive({
      title: "",
      content: "",
    });

    const submit = () => {
      const  id = postStore.posts.value.length + 1
      postStore.addPost({
        id: id,
        title: newPost.title,
        content: newPost.content,
      })

      router.push(`/posts/${id}`)
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