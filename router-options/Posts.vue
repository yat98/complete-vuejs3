<template>
  <h2>Posts</h2>
  <RouterLink to="/posts/create"> Create Post </RouterLink>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <RouterLink :to="`/posts/${post.id}`">
        {{ post.title }}
      </RouterLink>
    </li>
  </ul>
  <RouterView :posts="posts" @createPost="createPost" />
</template>

<script>
import { testPosts } from "../router-options/testPosts";

export default {
  data() {
    return {
      posts: testPosts,
    };
  },

  methods: {
    createPost(newPost) {
      const id = this.posts.length + 1
      this.posts.push({
        id,
        title: newPost.title,
        content: newPost.content
      })

      this.$router.push(`/posts/${id}`)
    }
  }
};
</script>

<style>
</style>