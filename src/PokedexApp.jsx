import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices';
import { SelectPokemon, DataPokemonSelect, ListPokemon } from './components';


  export const PokedexApp = () => {

      const dispatch = useDispatch();
      const { pokemons = [], isLoading, page, count } = useSelector((state) => state.pokemons);
      const [pokemonName, setPokemonName] = useState('');
      const [showCard, setShowCard] = useState(false);

        useEffect(() => {
        dispatch(getPokemons());
      }, []);

    const handleClick = async() => {

      await setShowCard(true);
      setPokemonName('');
      };

  const { Id, name, stats, types, sprite, description, error, handleButtonClick, handleSearchSubmit } =SelectPokemon();

  return (
    <>
      <div className='container my-5'>
      <img className="mx-auto d-block img-fluid" style={{ maxWidth: '300px' }} src='../src/assets/pokedex.png' alt="pokedex" />
        <hr />
        
        <div className='row'>
          <ListPokemon data={{pokemons, page, isLoading, count, handleClick, handleButtonClick}} />
          

          <div className='col col-8 '>
             
            <nav className="navbar navbar-light">
              <div className="container-fluid ">
                <form className="d-flex w-100">
                  <input className="form-control me-2" 
                  value={pokemonName} 
                  type="text" 
                  placeholder="Buscar pokemon" 
                  aria-label="Search" 
                  onChange={(e) => setPokemonName(e.target.value)} />
                  <button disabled={isLoading} 
                  className="btn btn-outline-info" 
                  type="submit" 
                  onClick={
                    async() => { if(error===false) await handleClick() ; await handleSearchSubmit(pokemonName); setPokemonName('') 
                    }}>Search</button>
                </form>
              </div>
            </nav>

            {/* Datos del pokemon seleccionado*/}
            
            {showCard && ( <DataPokemonSelect data={{Id, name, sprite, types, stats, description}} /> ) } 
        
          </div>

        </div>
      </div>
    </>
  );
};


