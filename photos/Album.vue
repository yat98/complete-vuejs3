<template>
  <RouterLink :to="`/album/${album.id}`">
    {{ album.title }}
  </RouterLink>
</template>

<script>
export default {
  props: {
      album: {
          type: Object,
          required: true,
      },
  },
};
</script>

<style scoped>
a {
  background: darkcyan;
  color: white;
  border: none;
  padding: 10px;
  margin: 0 10px 5px 0;
  font-size: 18px;
  border-radius: 5px;
  transition: 0.1s;
  width: 100%;
  display: block;
  text-align: center;
  text-decoration: none;
  font-family: Arial;
}
a:hover {
  filter: brightness(120%);
  cursor: pointer;
  transition: 0.1s;
}
</style>