import axios from "axios";
import React, { useEffect, useState } from "react";
import { PokeList } from "../component/PokeList";
import { PokeScreen } from "../component/PokeScreen";
import { PokeSearch } from "../component/PokeSearch";
import PokemonContext from "../context/PokemonContext";
import "../style/home.css";
export const Home = () => {
  const [pokemonD, setPokemonD] = useState({});
  const [pokemonSD, setPokemonSD] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    fail: false,
    message: "",
  });
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");
  const currentURl = " https://pokeapi.co/api/v2/pokemon?limit=10";

  //cancelToken
  // const []

  const handleClick = (urls) => {
    axios
      .get(urls)
      .then((response) => {
        setLoading(false);
        setPokemonSD(response.data.results);
        setNext(response.data.next);
        setPrevious(response.data.previous);
      })
      .catch((err) => {
        setError({
          fail: true,
          message: err.message,
        });
        setLoading(false);
      });
  };
  useEffect(() => {
    axios
      .get(currentURl)
      .then((response) => {
        setLoading(false);
        setPokemonSD(response.data.results);
        setNext(response.data.next);
        setPrevious(response.data.previous);
      })
      .catch((err) => {
        setError({
          fail: true,
          message: err.message,
        });
        setLoading(false);
      });
  }, [currentURl]);
  return (
    // creating provider for context
    <PokemonContext.Provider
      value={{
        setPokemonD,
        setError,
        setLoading,
        loading,
        pokemonSD,
        setPokemonSD,
        pokemonD,
      }}
    >
      <div className=" backScreen   ">
        <div className=" m-auto justify-center">
          <PokeSearch />
        </div>

        {pokemonD?.name ? (
          <>
            <div className="m-auto text-center  justify-center  text-slate-200">
              <strong> Pokemon Info</strong>
            </div>
            <PokeScreen />
          </>
        ) : (
          ""
        )}
        <div className="m-auto text-center justify-center  text-indigo-900 ">
          <strong>All Pokemons</strong>
        </div>
        <PokeList />
        <div className="btn m-auto">
          {previous ? (
            <button
              onClick={() => {
                handleClick(previous);
              }}
            >
              {" "}
              Previous{" "}
            </button>
          ) : (
            ""
          )}
          <button
            className=""
            onClick={() => {
              handleClick(next);
            }}
          >
            {" "}
            Next{" "}
          </button>
        </div>
      </div>
    </PokemonContext.Provider>
  );
};
