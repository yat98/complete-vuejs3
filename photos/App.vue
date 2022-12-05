<template>
  <Layout>
    <template #header>
      Header
    </template>

    <template #sidebar>
      Sidebar
    </template>

    <template #content>
      Content
    </template>
  </Layout>
</template>

<script>
import Layout from './Layout.vue';

export default {
  components: {
    Layout
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
body{
  margin: 0;
}
</style>