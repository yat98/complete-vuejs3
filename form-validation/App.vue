<script setup>
import MyButton from "./MyButton.vue";
import MyInput from "./MyInput.vue";
</script>

<template>
  <form @submit.prevent="submit">
    <div class="input-wrapper">
      <MyInput
        name="Username"
        :rules="{ required: true, min: 5 }"
        :value="username.value"
        :error="username.error"
        @update="update"
      />
    </div>
    <br>
    <div class="input-wrapper">
      <MyInput
        name="Password"
        type="password"
        :rules="{ required: true, min: 10 }"
        :value="password.value"
        :error="password.error"
        @update="update"
      />
    </div>
    <br>
    <MyButton background="darkslateblue" color="white" :disabled="!valid" />
  </form>
</template>

<script>
export default {
  components: {
    MyButton,
    MyInput,
  },

  data() {
    return {
      username: {
        value: "user",
        error: '',
      },
      password: {
        value: "pass",
        error: '',
      },
    };
  },

  computed: {
    valid() {
      return (
        !this.username.error && 
        !this.password.error
      )
    }
  },

  methods: {
    update({ name, value, error }) {
      this[name].value = value;
      this[name].error = error;
    },
    submit() {
      console.log(`Event`)
    }
  },
};
</script>

<style scoped>
.input-wrapper {
  display: inline-block;
}
</style>