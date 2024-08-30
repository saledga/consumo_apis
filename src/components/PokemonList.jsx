import React, { useEffect, useState } from 'react'

function PokemonList() {

  const [currentList, setCurrentList] = useState({});
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=7&offset=0");
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");
  

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
      setCurrentList(data);
      setNext(data.next);
      setPrevious(data.previous);
    })
  }, [url])
  
  return (
    <div>
      <h2>Pokemon List</h2>
      <div>{currentList.results &&
        <div>
          {currentList.results.map((pokemon) => {
            return (
              <div key={pokemon.name}>
                <h3>{pokemon.name}</h3>
              </div>
            )
          })}
          <br />
          <button onClick={handlePrevious}>Anterior</button>
          <button onClick={handleNext}>Siguiente</button>
        </div>}
      </div>
    </div>
  )
}

export default PokemonList