import axios from "axios";

export const pokemonDetailsAPI = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon-species/'
});