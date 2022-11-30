<script setup>
import MyButton from './MyButton.vue'
import MyInput from './MyInput.vue'
</script>

<template>
  <div class="input-wrapper">
    <MyInput 
      name="Username"
      :rules="{ required: true, min: 5 }"
    />
  </div>
  <br>
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
.input-wrapper{
  display: inline-block;
}
</style>