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

    const posts = [
      { id: 1, title: 'Post #1' },
      { id: 2, title: 'Post #2' },
    ]

    const click = (post) => {
      store.commit('setPostId', post.id)
    }

    const fetchData = () => {
      store.dispatch('fetchPosts','POSTS')
    }

    onMounted(() => {
      fetchData()
    })

    return {
      store,
      posts,
      postId: computed(() => store.state.postId),
      click,
    }
  }
}
</script>

<style>

</style>