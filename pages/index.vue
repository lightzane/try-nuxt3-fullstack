<script setup lang="ts">
const URL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
// const bulbasaur = await useAsyncData('bulbasaur', () => {
//   // $fetch = isometric / available between client and server
//   return $fetch(URL);
// });

// Reference: https://nuxt.com/docs/api/composables/use-fetch
// useFetch() = a convenient wrapper around useAsyncData and $fetch
const bulbasaur = await useFetch(URL);
</script>

<template>
  <h1>Home Page for Nuxt 3 Server Course</h1>
  <pre>{{ bulbasaur }}</pre>
</template>
