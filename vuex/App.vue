<template>
  <button
    v-for="post in posts" 
    :key="post.id"
    @click="click(post)"
  >
    {{ post.title }}  
  </button>
  <div v-if="currentPost">
    <h2>{{ currentPost.title }}</h2>
    <p>{{ currentPost.content }}</p>
  </div>
</template>

<script>
import { computed, onMounted, watchEffect } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    const click = (post) => {
      store.commit('posts/setPostId', post.id)
    }

    const fetchData = () => {
      store.dispatch('posts/fetch')
    }

    onMounted(() => {
      fetchData()
    })

    return {
      store,
      currentPost: computed(() => store.getters['posts/currentPost']),
      posts: computed(() => store.state.posts.all),
      postId: computed(() => store.state.postId),
      click,
    }
  }
}
</script>

<style>

</style>