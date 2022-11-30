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
        @update="update"
      />
    </div>
    <br>
    <div class="input-wrapper">
      <MyInput
        name="Password"
        :rules="{ required: true, min: 10 }"
        :value="password.value"
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
        valid: false,
      },
      password: {
        value: "pass",
        valid: false,
      },
    };
  },

  methods: {
    update({ name, value }) {
      this[name].value = value;
    },
  },
};
</script>

<style scoped>
.input-wrapper {
  display: inline-block;
}
</style>