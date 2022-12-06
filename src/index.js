import * as Vue from 'vue/dist/vue.esm-bundler.js'

const Hello = {
  props: ['greeting'],
  template: `<p>{{ greeting }}</p>`
}

const Number = {
  props: ['number'],
  template: `
    <button :class="getClass(number)"
      @click="click">
      {{ number }}
    </button>`,
  methods: {
    getClass(number) {
      return this.isEven(number) ? 'blue' : 'red'
    },
    isEven(number) {
      return number % 2 === 0
    },
    click() {
      this.$emit('chosen', this.number)
    }
  }
}

const app = Vue.createApp({
  components: {
    Hello,
    Number
  },
  template: `
    <Number  v-for="number in numbers"
      :number="number" 
      @chosen="addNumber"/>
    <hr>
    <Number  v-for="number in numberHistory"
      :number="number" 
      @chosen="addNumber"/>`,

  methods: {
    addNumber(number) {
      this.numberHistory.push(number)
    }
  },

  computed: {
    evenList() {
      return this.numbers.filter(num => this.isEven(num))
    },
  },

  data() {
    return {
      numbers: [1,2,3,4,5,6,7,8,9,10],
      numberHistory: []
    }
  },
})
app.mount('#app')