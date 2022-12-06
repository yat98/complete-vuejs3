<script setup>
import Card from "./Card.vue";
</script>
<template>
  <div class="cards">
    <Card
      v-for="pokemon in pokemons"
      :pokemon="pokemon"
      :key="pokemon.id"
      @click="click(pokemon)"
      :class="{ opace: selectedId && pokemon.id !== selectedId }"
      class="card"
    >
      <template #title>
        {{ pokemon.name }} #{{ pokemon.id }}
      </template>
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
export default {
  components: {
    Card,
  },
  emits: ["chosen"],
  props: {
    pokemons: {
      type: Array,
      default: [],
    },
    selectedId: {
      type: Number,
    },
  },
  methods: {
    click(pokemon) {
      this.$emit("chosen", pokemon);
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
.opace {
  opacity: 0.5;
}
.card:hover {
  opacity: 1;
}
.cards {
  display: flex;
}
</style>