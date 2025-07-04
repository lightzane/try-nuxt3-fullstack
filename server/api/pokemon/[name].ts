type PokemonResponse = {
  id: string;
  name: string;
  sprites: {
    front_default: string;
  };
};

// server/api/hello => /api/hello
// server/api/pokemon/[name].ts => /api/pokemon/:name
// server/routes/newsletter => /newsletter
export default defineEventHandler(async (event) => {
  const pokemon = event.context.params?.name; // the `.name` reflect the `[name].ts`
  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  // const { id, name, sprites } = await $fetch<PokemonResponse>(URL);
  const [error, data] = await catchError($fetch<PokemonResponse>(URL));

  if (error) {
    throw createError(error);
  }

  if (!data) {
    return null;
  }

  const { id, name, sprites } = data;

  return {
    id,
    name,
    sprite: sprites.front_default,
  };
});

async function catchError<T, E = Error>(
  promise: Promise<T>
): Promise<[E | null, T | null]> {
  try {
    const data = await promise;
    return [null, data];
  } catch (err) {
    return [err as E, null];
  }
}
