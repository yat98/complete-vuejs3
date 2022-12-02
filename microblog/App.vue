<script setup>
import Card from './Card.vue'
import Controls from './Controls.vue'
</script>

<template>
  <Card 
    v-for="post in store.state.posts"
    :key="post.id"
  >
    <template #title>
      {{ post.title }}
    </template>
    <template #content>
      {{ post.content }}
    </template>
    <template #description>
      <Controls :post="post"/>
    </template>
  </Card>
</template>

<script>
import { store } from "./store.js"

export default {
  components: {
    Card
  },
  setup() {
    return {
      store
    }
  }
}
</script>

<style>

</style>