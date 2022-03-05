import React from "react";
import "../style/pokemon.css";
import * as axios from "axios";
import { useContext } from "react";

import PokemonContext from "./../context/PokemonContext";
export const Pokemon = ({ pokemon }) => {
  // "https://pokeapi.co/api/v2/pokemon?limit=100";
  // const {  } = useContext(PokemonContext);
  const { setPokemonD, pokemonD, loading, setLoading, setError } =
    useContext(PokemonContext);
  return (
    <div>
      <button
        className="pokemon"
        onClick={() => {
          setLoading(true);
          axios
            .get(` https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then((results) => {
              setLoading(false);
              setPokemonD(results.data);
            })
            .catch((err) => {
              setPokemonD(null);
              setLoading(false);
              setError({
                fail: true,
              });
            });
        }}
      >
        {pokemon}
      </button>
    </div>
  );
};
