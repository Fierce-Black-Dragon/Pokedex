import React from "react";
import { Pokemon } from "./Pokemon";

export const PokeList = ({ pokemons }) => {
  const handleClick = () => {};
  return (
    <div>
      {pokemons?.map((pokemon, index) => (
        <Pokemon
          pokemon={pokemon?.name}
          handleClick={handleClick}
          key={index}
        />
      ))}
    </div>
  );
};
