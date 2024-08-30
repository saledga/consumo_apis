import React, { useEffect, useState } from 'react'

function Pokemon() {

  const [pokemon, setPokemon] = useState();
  const [id, setId] = useState(1);

  const handlePrevious = () => { 
    setId(id - 1);
  };

  const handleNext = () => { 
    setId(id + 1);
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((resp) => resp.json())
    .then((data) => {
       setPokemon(data);
    })
  }, [id])
  
  return (
    <div>{pokemon &&
      <div>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <br />
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>}</div>
  )
}

export default Pokemon