<script setup>
import Card from "./Card.vue";
</script>

<template>
  <div class="cards">
    <Card v-for="pokemon in pokemons" :pokemon="pokemon" :key="pokemon.id">
      <template #title>{{ pokemon.name }}</template>
      <template #content>
        <img :src="pokemon.sprite" />
      </template>
      <template #description>
        <div v-for="pokemonType in pokemon.types" :key="pokemonType">
          {{ pokemonType }}
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
const api = "https://pokeapi.co/api/v2/pokemon";
const ids = [1, 4, 7];

export default {
  components: {
    Card,
  },

  data() {
    return {
      pokemons: [],
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      const responses = await Promise.all(
        ids.map((id) => window.fetch(`${api}/${id}`))
      );
      const json = await Promise.all(
        responses.map((response) => response.json())
      );
      this.pokemons = json.map((data) => ({
        id: data.id,
        name: data.name,
        sprite: data.sprites.other["official-artwork"].front_default,
        types: data.types.map((type) => type.type.name),
      }));
    },
  },
};
</script>

<style scoped>
.cards {
  display: flex;
}
img {
  width: 100%;
}
</style>