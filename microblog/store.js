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
}

export const store = new Store