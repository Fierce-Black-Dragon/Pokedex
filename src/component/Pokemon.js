import React from "react";

export const Pokemon = ({ pokemon, handleClick }) => {
  // "https://pokeapi.co/api/v2/pokemon?limit=100";
  return (
    <div className="pokemon">
      <button onClick={handleClick}>
        <strong>{pokemon}</strong>
      </button>
    </div>
  );
};
