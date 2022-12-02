<template>
  <input v-model="msg" />
  <div>{{ msg }}</div>
  <hr>
  <button @click="increment">{{ count }}</button>
  <button @click="increase('a')">{{ numbers.a }}</button>
  <button @click="increase('b')">{{ numbers.b }}</button>
  <button @click="c++">{{ c }}</button>
  <button @click="d++">{{ d }}</button>
  <p>{{ total }}</p>
  <div v-for="h in history" :key="h">
    {{ h }}
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from "vue";

export default {
  setup() {
    // Ref => number, string (primitive)
    const msg = ref('Hello Composition!')
    const count = ref(0)
    const c = ref(0)
    const d = ref(0)
    const history  = ref([])
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

    const total = computed(() => numbers.a + numbers.b + count.value + c.value + d.value)

    watch(numbers, newVal => {
      console.log(`a: ${newVal.a}, b: ${newVal.b}`)
    },{
      immediate: true
    })

    watch(count, (newVal,oldVal) => {
      console.log(`count: ${newVal}`)
      // Work only in ref
      console.log(`New Value: ${newVal}, Old Value: ${oldVal}`)
    })

    watch([c, d], ([newC, newD],[oldC, oldD]) => {
      if(newC !== oldC)
      history.value.push(`New Value c: ${newC}, Old Value c: ${oldC}`)

      if(newD !== oldD)
      history.value.push(`New Value d: ${newD}, Old Value d: ${oldD}`)
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
      total,
      c,
      d,
      history
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