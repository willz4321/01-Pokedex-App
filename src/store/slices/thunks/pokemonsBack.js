import { useState } from "react";
import { pokeapi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "../pokemon/pokemonSlice"


export const getPokemonsBack = (page ) => {


     return async( dispatch ) => {
        console.log(page);
        dispatch( startLoadingPokemons() );
        const count = (page-1) *14
        const {data} = await pokeapi.get(`/pokemon?limit=14&offset=${ count }`);
        dispatch( setPokemons({ pokemons: data.results, page: page , count: count}));
        
       
    }
}