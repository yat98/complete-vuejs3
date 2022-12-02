<template>
  {{ post }}
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  },
  setup(props) {
    console.log(props)
  }
}
</script>

<style>

</style>