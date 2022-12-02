import { reactive } from "vue";

class Store{
  constructor() {
    this.state = reactive({
      posts: [
        {
          id: 1,
          title: 'Reactive',
          content: 'Learn vue.js'
        }
      ]
    })
  }
}

export const store = new Store