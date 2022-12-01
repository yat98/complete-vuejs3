<template>
  <div class="card">
    <div class="title">Title</div>
    <div class="content">Content</div>
    <div class="description">Description</div>
    <button @click="fetchData">Fetch</button>
  </div>
</template>

<script>
const api = 'https://pokeapi.co/api/v2/pokemon'

export default {
  data() {
    return {
      pokemon: null
    }
  },
  methods: {
    async fetchData() {
      await window.fetch(`${api}/1`)
        .then(result => result.json())
        .then(response => this.pokemon = {
          id: response.id,
          name: response.name,
          sprite: response.sprites.other['official-artwork'].front_default,
          types: response.types.map(type => type.type.name)
        })
      console.log(this.pokemon)
    }
  }
};
</script>

<style scoped>
.card {
  border: 1px solid silver;
  border-radius: 8px;
  max-width: 200px;
  margin: 0 5px;
  cursor: pointer;
  box-shadow: 0px 1px 3px darkgrey;
  transition: 0.2s;
}
.title,
.content,
.description {
  padding: 16px;
  text-transform: capitalize;
  text-align: center;
}
.title,
.content {
  border-bottom: 1px solid silver;
}
.title {
  font-size: 1.25em;
}
.card:hover {
  transition: 0.2s;
  box-shadow: 0px 1px 9px darkgrey;
}
</style>