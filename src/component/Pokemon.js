import React from "react";
import "../style/pokemon.css";
export const Pokemon = ({ pokemon, handleClick }) => {
  // "https://pokeapi.co/api/v2/pokemon?limit=100";
  return (
    <div>
      <button className="pokemon" onClick={handleClick}>
        {pokemon}
      </button>
    </div>
  );
};
