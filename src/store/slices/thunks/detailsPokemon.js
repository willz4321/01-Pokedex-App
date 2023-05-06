import { pokeapi } from "../../../api/pokemonApi";
import { pokemonDetailsAPI } from "../../../api/pokemonDetailsAPI";
import { startLoadingPokemons } from "../pokemon/pokemonSlice";

export const getPokemonsDate = (pokemon) => {


  return async (dispatch) => {
   

    dispatch(startLoadingPokemons());


      const response = await pokeapi.get(`/pokemon/${pokemon.toLowerCase()}`);
      const descriptionPoke = await pokemonDetailsAPI.get(`${pokemon.toLowerCase()}`);
      const descriptions = descriptionPoke.data.flavor_text_entries;
      const enDescription = descriptions.find(description => description.language.name === 'es').flavor_text;
      const {
        id,
        name,
        stats,
        types,
        sprites: {
          other: {
            dream_world: { front_default },
          },
        },
      } = response.data;
      const sprite = [front_default];
      return { id, name, types, stats, sprite, description: enDescription };
      
  };
};
