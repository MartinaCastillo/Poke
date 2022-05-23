import React from "react";
import { searchPokemon } from "../api";
const { useState } = React;

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const onChange = (evt) => {
    console.log(evt.target.value);
    setSearch(evt.target.value);
  };
  const onClick = async (evt) => {
    const data = await searchPokemon(search);
    setPokemon(data);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar pokemon..." onChange={onChange} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onClick}>Buscar</button>
      </div>
    </div>
  );
};

export default SearchBar;
