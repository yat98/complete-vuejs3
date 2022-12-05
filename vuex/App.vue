<template>
  <button
    v-for="post in posts" 
    :key="post.id"
    @click="click(post)"
  >
    {{ post.title }}  
  </button>
  {{ postId }}
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    const click = (post) => {
      store.commit('setPostId', post.id)
    }

    const fetchData = () => {
      store.dispatch('fetchPosts')
    }

    onMounted(() => {
      fetchData()
    })

    return {
      store,
      posts: computed(() => store.state.posts),
      postId: computed(() => store.state.postId),
      click,
    }
  }
}
</script>

<style>

</style>