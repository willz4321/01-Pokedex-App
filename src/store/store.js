import { configureStore } from '@reduxjs/toolkit'
import { pokemonSlice } from './slices'

export const store = configureStore({
  reducer: {
    pokemons: pokemonSlice.reducer,
  },
})