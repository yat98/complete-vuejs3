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
}

export const store = new Store