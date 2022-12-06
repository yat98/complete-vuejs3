import { reactive } from "vue";
import { testPosts } from "./testPosts";
class Store{
  constructor() {
    this.state = reactive({
      posts: testPosts,
      currentTag: null
    })
  }

  setHashtag(hashtag) {
    this.state.currentTag = hashtag
  }

  incrementLike(postControl) {
    const thePost = this.state.posts.find((post) => post.id == postControl.id)
    if(!thePost) return
    thePost.likes++
  }

  get filteredPosts() {
    if(!store.state.currentTag){
      return store.state.posts
    }
    
    return store.state.posts.filter(post => post.hashtags.includes(store.state.currentTag))
  }
}

export const store = new Store