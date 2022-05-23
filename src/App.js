import React from 'react';
import "./styles.css";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import Pokedex from "../components/Pokedex";
import {getPokemons} from "../api";

const { useState, useEffect } = React;

export default function App() {

  const [pokemons, setPokemons] = useState([]);
  
  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      setPokemons(data.results)
    }catch(err){

    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="App">
        <SearchBar />
        <Pokedex pokemons={pokemons} />
      </div>
    </div>
  );
}
