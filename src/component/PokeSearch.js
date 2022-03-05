import React, { useState } from "react";
import * as axios from "axios";
import "../style/pokeSearch.css";
import { useContext } from "react";
import PokemonContext from "../context/PokemonContext";
export const PokeSearch = () => {
  const [PokemonName, setPokemonName] = useState("");
  const { setPokemonD, pokemonD, loading, setLoading, setError } =
    useContext(PokemonContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!PokemonName) {
      setPokemonD(null);
      setLoading(false);
    }

    if (PokemonName) {
      setLoading(true);
      axios
        .get(` https://pokeapi.co/api/v2/pokemon/${PokemonName}`)
        .then((results) => {
          setLoading(false);
          setPokemonD(results.data);
        })
        .catch((err) => {
          setError({
            fail: true,
            message: err.message,
          });
          setLoading(false);
          setPokemonD(null);
        });
    }
  };

  return (
    <div>
      {" "}
      <div className="searchBar">
        <input
          type="text"
          name="pokemon"
          placeholder="search pokemon"
          onChange={(e) => setPokemonName(e.target.value)}
          value={PokemonName}
        />
        <button type="submit" onClick={handleSubmit}>
          {loading ? "loading..." : "search "}
        </button>
      </div>
    </div>
  );
};
