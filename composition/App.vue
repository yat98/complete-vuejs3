<template>
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
import { useNumbers } from "./useNumbers.js";

export default {
  setup() {
    return useNumbers()
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