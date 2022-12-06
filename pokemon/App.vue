<script setup>
import PokemonCard from "./PokemonCard.vue";
</script>

<template>
  <PokemonCard :pokemons="pokemons" 
    @chosen="fetchEvolutions"
    :selectedId="selectedId"/>
  <PokemonCard :pokemons="evolutions"/>
</template>

<script>
const api = "https://pokeapi.co/api/v2/pokemon";
const IDS = [1, 4, 7, 10, 13, 16];

export default {
  components: {
    PokemonCard,
  },

  data() {
    return {
      pokemons: [],
      evolutions: [],
      selectedId: null
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
      this.selectedId = pokemon.id
    }
  },
};
</script>

<style scoped>
</style>