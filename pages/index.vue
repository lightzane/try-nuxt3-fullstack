<script setup lang="ts">
const URL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
// const bulbasaur = await useAsyncData('bulbasaur', () => {
//   // $fetch = isometric / available between client and server
//   return $fetch(URL);
// });

// Reference: https://nuxt.com/docs/api/composables/use-fetch
// useFetch() = a convenient wrapper around useAsyncData and $fetch
// const bulbasaur = await useFetch(URL);

const { data: pokemon } = await useFetch('/api/pokemon/pikachu');

const helloApi = await useFetch('/api/hello');
</script>

<template>
  <h1>Home Page for Nuxt 3 Server Course</h1>
  <pre>{{ helloApi }}</pre>
  <ul v-if="pokemon">
    <li>
      <h2>#{{ pokemon.id }} {{ pokemon.name }}</h2>
      <img :src="pokemon.sprite" />
    </li>
  </ul>
</template>
