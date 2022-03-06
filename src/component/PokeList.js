import { Pokemon } from "./Pokemon";
import "../style/pokeList.css";

import PokemonContext from "../context/PokemonContext";
import { useContext } from "react";
export const PokeList = () => {
  // consumer for context
  const { pokemonSD } = useContext(PokemonContext);
  return (
    <div className="grid m-auto grid-cols-2 gap-2 mx-2 md:grid-cols-4 lg:grid-cols-5 g gap-2 ">
      {pokemonSD?.map((pokemon, index) => (
        <Pokemon pokemon={pokemon?.name} key={index} />
      ))}
    </div>
  );
};
