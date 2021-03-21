import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList'


function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit={limit}&offset={offset}");
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios.get(currentPageUrl, { cancelToken: new axios.CancelToken(c => cancel = c) }).then(res => {
      setLoading(false);
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.previous);
      setPokemon(res.data.results)
    })
    return () => {
      cancel()
    }
  }, [currentPageUrl])

  const nextPage = () => setCurrentPageUrl(nextPageUrl);

  const prevPage = () => setCurrentPageUrl(prevPageUrl);

  if (loading) return "Loading..."

  return (
    <div className="App">
        <PokemonList pokemon={pokemon} nextPage={nextPageUrl ? nextPage : null} prevPage={prevPageUrl ? prevPage : null} />
    </div>
  );
}

export default App;
