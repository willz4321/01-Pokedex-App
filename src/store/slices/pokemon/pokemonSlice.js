import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {

       page: 0,
       count: 0,
       isLoading: false,
       pokemons: [

       ],
       pokemonSearch: [

       ],
       
      
 },
reducers: {

   startLoadingPokemons: (state) => {
      state.isLoading = true;
   },
   stopLoading: (state) => {
      state.isLoading = false;
   },

   setPokemons: (state, actions) => {
    state.isLoading = false;
    state.page = actions.payload.page;
    state.pokemons = actions.payload.pokemons;
    state.count = actions.payload.count;
   },

   setDetailsPokemon: (state, {payload}) => {
      state.isLoading = false;
      state.pokemonSearch = payload
   },
  }
});
export const { startLoadingPokemons, setPokemons, setDetailsPokemon, stopLoading } = pokemonSlice.actions;