import React, { useEffect, useState } from 'react'

function Pokemon() {

  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetch(" https://pokeapi.co/api/v2/pokemon/1")
    .then((resp) => resp.json())
    .then((data) => {
       setPokemon(data);
    })
  }, [])
  
  return (
    <div>{pokemon &&
      <div>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>}</div>
  )
}

export default Pokemon