<template>
  <input v-model="msg" />
  <div>{{ msg }}</div>
  <hr>
  <button @click="increment">{{ count }}</button>
  <button @click="increase('a')">{{ numbers.a }}</button>
  <button @click="increase('b')">{{ numbers.b }}</button>
  <p>{{ total }}</p>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from "vue";

export default {
  setup() {
    // Ref => number, string (primitive)
    const msg = ref('Hello Composition!')
    const count = ref(0)
    // Reactive => {} (Object)
    const numbers = reactive({
      a: 1,
      b: 2
    })

    const increase = (index) => {
      numbers[index]++
    }

    const increment = () => {
      console.log(count)
      count.value++
    }

    const total = computed(() => numbers.a + numbers.b + count.value)

    watch(numbers, newVal => {
      console.log(`a: ${newVal.a}, b: ${newVal.b}`)
    },{
      immediate: true
    })

    watch(count, newVal => {
      console.log(`count: ${newVal}`)
    })

    watchEffect(() => {
      console.log(`From watchEffect a: ${numbers.a}, b: ${numbers.b}`)
    })

    return {
      msg,
      count,
      numbers,
      increment,
      increase,
      total
    }
  }
}
</script>

<style scoped>
p{
  font-size: 40px;
}
button{
  height: 100px;
  width: 100px;
  font-size: 40px;
}
</style>