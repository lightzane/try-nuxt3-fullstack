type PokemonResponse = {
  id: string;
  name: string;
  sprites: {
    front_default: string;
  };
};

export default defineEventHandler(async (event) => {
  const pokemon = event.context.params?.name; // the `.name` reflect the `[name].ts`
  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const { id, name, sprites } = await $fetch<PokemonResponse>(URL);

  return {
    id,
    name,
    sprite: sprites.front_default,
  };
});
