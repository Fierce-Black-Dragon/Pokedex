import * as axios from "axios";
import React, { useState } from "react";
import "../style/pokeScreen.css";
export const PokeScreen = () => {
  const [PokemonName, setPokemonName] = useState("");
  const [pokemonD, setPokemonD] = useState({});
  const [error, setError] = useState({
    fail: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (PokemonName) {
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
        });
    }
  };
  console.log(pokemonD);
  return (
    <div className=" backScreen  mx-42 ">
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
      {pokemonD?.name ? (
        <div className=" pokeScreen">
          <div className=" pokeScreen__display">
            {!loading ? (
              <img
                src={pokemonD?.sprites?.other?.dream_world?.front_default}
                alt="pokemon"
              />
            ) : (
              "loading..."
            )}{" "}
            <div className="pokeScreen__info">
              <div className="flex justify-evenly">
                <h4>
                  <strong> Name : </strong>{" "}
                </h4>
                <p>{pokemonD?.name}</p>
              </div>
              <div className="justify-center">
                <h4 className="px-4">
                  <strong> Pokemon Stats</strong>
                </h4>
                {pokemonD?.stats?.map((data, index) => (
                  <div key={index} className=" flex px-4  justify-between">
                    <h5>
                      <strong>{data.stat.name} :</strong>
                    </h5>
                    <p>
                      {" "}
                      <span>{data.base_stat}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
