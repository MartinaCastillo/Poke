import React from "react";

const Pokedex = (props) => {
  console.log(props);
  const { pokemons } = props;
  return (
    <div>
      <div className="header">
        <img
          className="pokemon-logo"
          src="https://i.pinimg.com/originals/bd/cd/20/bdcd20f5411ee5785889542d303ad4cb.png"
          alt="pokemon-logo"
        />
        <div>pagination</div>
      </div>
      <div className="pokedex-grid">
        {pokemons.map((pokemon, idx) => {
          return (
            <div key={pokemon.name}>
              #{idx + 1}: {pokemon.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pokedex;
