import React, { useEffect, useState } from 'react';

function PokemonList() {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=7&offset=0");
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");
  const [pokemonDetails, setPokemonDetails] = useState([]);

  const handlePrevious = () => {
    previous && setUrl(previous);
  }

  const handleNext = () => {
    setUrl(next);
  }

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setNext(data.next);
        setPrevious(data.previous);

        const promises = data.results.map((pokemon) =>
          fetch(pokemon.url).then((response) => response.json())
        );

        Promise.all(promises).then((details) => {
          setPokemonDetails(details);
        });
      });
  }, [url]);

  return (
    <div>
      <h2>Pokemon List</h2>
      <div>{pokemonDetails.length > 0 &&
        <div>
          {pokemonDetails.map((pokemon) => (
            <div key={pokemon.name}>
              <h3>{pokemon.name}</h3>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
          ))}
          <br />
          <button onClick={handlePrevious}>Anterior</button>
          <button onClick={handleNext}>Siguiente</button>
        </div>}
      </div>
    </div>
  )
}

export default PokemonList;
