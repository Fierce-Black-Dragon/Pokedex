import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [AllFetchedPokemons, setAllFetchedPokemons] = useState([]);
  const getAllPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((response) => response.json())
      .then((allPokemon) => setAllFetchedPokemons(allPokemon.results));
  };

  useEffect(() => {
    getAllPokemon();
  }, []);
  console.log(AllFetchedPokemons);
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 g gap-2 ">
      {AllFetchedPokemons?.map((pokemon) => (
        <div
          className="bg-gray-400 w-32 m-4 rounded-lg px-5 py-7 ring-1 ring-slate-900/5 shadow-xl"
          key={pokemon.url}
        >
          <p>{pokemon.name}</p>
          <a href={pokemon.url}> more info</a>
        </div>
      ))}
    </div>
  );
}

export default App;
