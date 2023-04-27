import React from 'react'
import { useDispatch } from 'react-redux';
import { getPokemons, getPokemonsBack } from '../store/slices';

export const ListPokemon = ({data}) => {

    const {pokemons, page, isLoading, count, handleClick, handleButtonClick} = data;
    const dispatch = useDispatch();

  return (
     
    <div className='col col-4'>


    <div className="btn-group" role="group" aria-label="Basic outlined example">
        
        <button type="button" 
        className="btn btn-outline-primary" 
        disabled={
          isLoading || page === 1 ? true : false}
           onClick={ () =>  dispatch(getPokemonsBack(page-1)) }>
          Back</button>

          <button type="button"
           className="btn btn-outline-primary" 
           disabled={isLoading} 
           onClick={() => dispatch(getPokemons(page))}>
          Next</button>

      </div>
      <ol className='list-group my-3'>
        {pokemons.map((pokemon, index) => (
          
          <li
            className='list-group-item list-group-item-action'
            type="submit"
            key={pokemon.name}
            onClick={async()=> {await handleClick() ; await handleButtonClick(pokemon.name)}}
            
            >
            {index + count +1 } - {pokemon.name}
          </li>
        ))}
      </ol>
    </div>


  )
}
