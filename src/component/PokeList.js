import { Pokemon } from "./Pokemon";
import "../style/pokeList.css";

import PokemonContext from "../context/PokemonContext";
import { useContext } from "react";
export const PokeList = () => {
  const { setPokemonD, pokemonSD, loading, setLoading, setError } =
    useContext(PokemonContext);
  return (
    <div className="grid grid-cols-2 gap-2 mx-2 md:grid-cols-3 lg:grid-cols-4 g gap-2 ">
      {pokemonSD?.map((pokemon, index) => (
        <Pokemon pokemon={pokemon?.name} key={index} />
      ))}
    </div>
  );
};
