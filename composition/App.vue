<template>
  <input v-model="msg" />
  <div>{{ msg }}</div>
  <hr>
  <button @click="increment">{{ count }}</button>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const msg = ref('Hello Composition!')
    const count = ref(0)
    const increment = () => {
      console.log(count)
      count.value++
    }

    return {
      msg,
      count,
      increment
    }
  }
}
</script>

<style scoped>
button{
  height: 200px;
  width: 200px;
  font-size: 40px;
}
</style>