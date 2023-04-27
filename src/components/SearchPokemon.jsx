import {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemonsDate, setDetailsPokemon, startLoadingPokemons, stopLoading } from '../store/slices';
import Swal from 'sweetalert2';


export const SelectPokemon = () => {

  const dispatch = useDispatch();
  const [Id, setId] = useState('');
  const [name, setName] = useState();
  const [stats, setStats] = useState([]);
  const [types , setTypes] = useState([]);
  const [sprite, setSprite] = useState();
  const [description, setDescription] = useState();
  const [error, setError] = useState(false);
  const handleButtonClick = async (pokemon) => {
    dispatch(startLoadingPokemons());
    const pokemonDetails = await dispatch(getPokemonsDate(pokemon));

    dispatch(setDetailsPokemon({

                Id: pokemonDetails.id,
                name: pokemonDetails.name,
                description: pokemonDetails.description,
                sprite: pokemonDetails.sprite,
                types: pokemonDetails.types,
                stats: pokemonDetails.stats

              }));

    //Actualizo datos del pokemon
    setName(pokemonDetails.name);
    setId(pokemonDetails.id)
    setDescription(pokemonDetails.description);
    setStats(pokemonDetails.stats);
    setTypes(pokemonDetails.types);
    setSprite(pokemonDetails.sprite);


  };
  const handleSearchSubmit = async (pokemonName) => {
    dispatch(startLoadingPokemons());
   
 try {

       const pokemonDetails = await dispatch(getPokemonsDate(pokemonName));

          dispatch(setDetailsPokemon({

            Id: pokemonDetails.id,
            name: pokemonDetails.name,
            description: pokemonDetails.description,
            sprite: pokemonDetails.sprite,
            types: pokemonDetails.types,
            stats: pokemonDetails.stats

          }));

        //Actualizo datos del pokemon
        setName(pokemonDetails.name);
        setId(pokemonDetails.id)
        setDescription(pokemonDetails.description);
        setStats(pokemonDetails.stats);
        setTypes(pokemonDetails.types);
        setSprite(pokemonDetails.sprite);
       
   
    } catch (error) {
      console.log(error)
     await setError(true);
      dispatch(stopLoading());
    
      Swal.fire({
        title: "El pokemon no existe",
        icon: "error"
      })
      throw Error('No se encontro el pokemon buscado', error);
    }
  };

    return { Id, name, stats, types, sprite, description, error, handleButtonClick, handleSearchSubmit };
}



  
    

