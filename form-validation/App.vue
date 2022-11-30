<script setup>
import MyButton from './MyButton.vue'
import MyInput from './MyInput.vue'
</script>

<template>
  <MyInput name="Username"/>
  <MyButton 
    background="darkslateblue"
    color="white"
    :disabled="!valid"
  />
</template>

<script>
export default {
  components: {
    MyButton,
    MyInput
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