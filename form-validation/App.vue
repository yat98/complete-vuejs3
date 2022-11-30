<script setup>
import MyButton from './MyButton.vue'
</script>

<template>
  <MyButton 
    background="darkslateblue"
    color="white"
    :disabled="!valid"
  />
</template>

<script>
export default {
  components: {
    MyButton
  },
  data() {
    return {
      valid: true
    }
  }
}
</script>

<style scoped>
</style>