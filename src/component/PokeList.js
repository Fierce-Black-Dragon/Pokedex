import React from "react";
import { Pokemon } from "./Pokemon";
import "../style/pokeList.css";
export const PokeList = ({ pokemons }) => {
  const handleClick = () => {};
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 g gap-2 ">
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
