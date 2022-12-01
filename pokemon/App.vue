<script setup>
import Card from "./Card.vue";
</script>

<template>
  <div class="cards">
    <Card v-for="pokemon in pokemons" :pokemon="pokemon" :key="pokemon.id"
      @click="fetchEvolutions(pokemon)">
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

    <Card v-for="pokemon in evolutions" :pokemon="pokemon" :key="pokemon.id">
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
const IDS = [1, 4, 7, 10, 13, 16];

export default {
  components: {
    Card,
  },

  data() {
    return {
      pokemons: [],
      evolutions: [],
    };
  },

  async created() {
    this.pokemons = await this.fetchData(IDS);
  },

  methods: {
    async fetchData(ids) {
      const responses = await Promise.all(
        ids.map((id) => window.fetch(`${api}/${id}`))
      );
      const json = await Promise.all(
        responses.map((response) => response.json())
      );
      return json.map((data) => ({
        id: data.id,
        name: data.name,
        sprite: data.sprites.other["official-artwork"].front_default,
        types: data.types.map((type) => type.type.name),
      }));
    },
    async fetchEvolutions(pokemon) {
      this.evolutions = await this.fetchData(
        [pokemon.id + 1, pokemon.id + 2]
      )
    }
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