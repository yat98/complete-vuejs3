<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  setup() {
    const msg = 'Hello Composition!'

    return {
      msg
    }
  }
}
</script>

<style scoped>

</style>