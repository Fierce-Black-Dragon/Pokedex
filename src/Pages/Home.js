import axios from "axios";
import React, { useEffect, useState } from "react";
import { PokeList } from "../component/PokeList";
import { PokeScreen } from "../component/PokeScreen";
import { PokeSearch } from "../component/PokeSearch";
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
  const [currentURl, setCurrentURl] = useState(
    " https://pokeapi.co/api/v2/pokemon?limit=10"
  );
  // const []

  const handleClick = (urls) => {
    axios
      .get(urls)
      .then((response) => {
        console.log(response);
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
        console.log(response);
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
    <div className=" backScreen   ">
      <PokeSearch
        setPokemonD={setPokemonD}
        setError={setError}
        loading={loading}
        setLoading={setLoading}
      />

      {pokemonD?.name ? (
        <PokeScreen pokemonD={pokemonD} loading={loading} error={error} />
      ) : (
        ""
      )}

      <PokeList pokemons={pokemonSD} />
      <div>
        <button
          onClick={() => {
            handleClick(previous);
          }}
        >
          {" "}
          Previous{" "}
        </button>
        <button
          onClick={() => {
            handleClick(next);
          }}
        >
          {" "}
          Next{" "}
        </button>
      </div>
    </div>
  );
};
