import * as Vue from 'vue/dist/vue.esm-bundler.js'
const app = Vue.createApp({
  template: `
    <button v-on:click="increment">Increment</button>
    <p>{{ count }}</p>
    <div v-for="number in evenList">
      <div>
        {{ number }} 
      </div>
    </div>`,

  methods: {
    increment() {
      this.count += 1
    },
    isEven(number) {
      return number % 2 === 0
    }
  },

  computed: {
    evenList() {
      return this.numbers.filter(num => this.isEven(num))
    }
  },

  data() {
    return {
      count: 0,
      numbers: [1,2,3,4,5,6,7,8,9,10]
    }
  },
})
app.mount('#app')