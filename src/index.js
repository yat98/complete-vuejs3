import * as Vue from 'vue/dist/vue.esm-bundler.js'


const Hello = {
  props: ['greeting'],
  template: `<p>{{ greeting }}</p>`
}

const Number = {
  props: ['number'],
  template: `
    <div :class="getClass(number)">
      {{ number }}
    </div>`,
  methods: {
    getClass(number) {
      return this.isEven(number) ? 'blue' : 'red'
    },

    isEven(number) {
      return number % 2 === 0
    }
  }
}

const app = Vue.createApp({
  components: {
    Hello,
    Number
  },
  template: `
    <Hello :greeting="'Halo'"/>
    <Hello greeting="Hello"/>
    <Hello greeting="Hi"/>
    
    <button v-on:click="increment">Increment</button>
    <p>{{ count }}</p>
    <Number  v-for="number in numbers"
      :number="number" />
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
    increment() {
      this.count += 1
    },
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