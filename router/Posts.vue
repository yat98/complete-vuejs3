<template>
  <h2>Posts</h2>
  <ul>
    <li v-for="post in testPosts" :key="post.id">
      <RouterLink :to="`/posts/${post.id}`">
        {{ post.title }}
      </RouterLink>
    </li>
  </ul>
  <RouterView />
</template>

<script>
import { testPosts } from "./testPosts";

export default {
  setup() {
    return {
      testPosts,
    };
  },
};
</script>

<style>
</style>