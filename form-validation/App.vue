<script setup>
import MyButton from "./MyButton.vue";
import MyInput from "./MyInput.vue";
</script>

<template>
  <div>
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
        :rules="{ required: true, min: 10 }"
        :value="password.value"
        :error="password.error"
        @update="update"
      />
    </div>
  </div>
  <MyButton background="darkslateblue" color="white" :disabled="!valid" />
</template>

<script>
export default {
  components: {
    MyButton,
    MyInput,
  },

  data() {
    return {
      valid: true,
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

  methods: {
    update({ name, value, error }) {
      this[name].value = value;
      this[name].error = error;
    },
  },
};
</script>

<style scoped>
.input-wrapper {
  display: inline-block;
}
</style>