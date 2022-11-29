import * as Vue from 'vue/dist/vue.esm-bundler.js'
const app = Vue.createApp({
  template: `
    <button v-on:click="increment">Increment</button>
    <p>{{ count }}</p>
    <div v-for="number in numbers">
      <div :class="getClass(number)">
        {{ number }} 
      </div>
    </div>
    <input type="text" v-model="value"/>
    <br>
    <input type="radio" value="a" v-model="value"/>
    <input type="radio" value="b" v-model="value"/>
    <br>
    <input type="checkbox" value="a" v-model="value"/>
    <input type="checkbox" value="b" v-model="value"/>
    <br>
    {{ value }}
    <br>
    <div class="red">
      {{ error }}
    </div>`,

  methods: {
    getClass(number) {
      return this.isEven(number) ? 'blue' : 'red'
    },
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
    },
    error() {
      if(this.value.length < 5) {
        return 'Must be greater than 5'
      }
    }
  },

  data() {
    return {
      count: 0,
      value: ['a'],
      numbers: [1,2,3,4,5,6,7,8,9,10],
    }
  },
})
app.mount('#app')