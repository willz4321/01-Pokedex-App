
import { pokeapi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "../pokemon/pokemonSlice"


export const getPokemons = (page = 0 ) => {


    return async( dispatch, getState ) => {
    
        dispatch( startLoadingPokemons() );
        const count = page *14
        const {data} = await pokeapi.get(`/pokemon?limit=14&offset=${ page * 14 }`);
        dispatch( setPokemons({ pokemons: data.results, page: page + 1 , count: count}));
        
       
    }
}