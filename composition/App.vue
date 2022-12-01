<template>
  <input v-model="msg" />
  <div>{{ msg }}</div>
  <hr>
  <button @click="increment">{{ count }}</button>
  <button @click="increase('a')">{{ numbers.a }}</button>
  <button @click="increase('b')">{{ numbers.b }}</button>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  setup() {
    // Ref => number, string (primitive)
    const msg = ref('Hello Composition!')
    const count = ref(0)
    // Reactive => {} (Object)
    const numbers = reactive({
      a: 0,
      b: 0
    })

    const increase = (index) => {
      numbers[index]++
    }

    const increment = () => {
      console.log(count)
      count.value++
    }

    return {
      msg,
      count,
      numbers,
      increment,
      increase,
    }
  }
}
</script>

<style scoped>
button{
  height: 100px;
  width: 100px;
  font-size: 40px;
}
</style>