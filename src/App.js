import { useEffect, useState } from "react";
import "./App.css";
import SelectSearch from "react-select-search";
function App() {
  //creating  allpokemons [ ] states
  const [AllFetchedPokemons, setAllFetchedPokemons] = useState([]);
  //api call func
  const getAllPokemon = () => {
    //using fetch to call poke Api  u can  also axios
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((response) => response.json()) //getting  response in api

      .then((allPokemon) => setAllFetchedPokemons(allPokemon.results)); //set the state  with response data
  };

  useEffect(() => {
    getAllPokemon();
  }, []);
  //options  for react search
  const options = AllFetchedPokemons.map((obj) => {
    const temp = {};
    temp["name"] = obj.name;
    return temp;
  });

  return (
    <div>
      <SelectSearch
        options={options}
        value="sv"
        name="language"
        placeholder="Choose your Pokémon"
      />
      <h1>All Pokémons</h1>
      {/* showing data onweb */}
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 g gap-2 ">
        {AllFetchedPokemons?.map((pokemon) => (
          <div
            className="bg-[url('./images/pokeball.png')] bg-auto bg-no-repeat bg-center  max-w-24  max-h-24 m-4 rounded-lg  ring-1 ring-slate-600/5 shadow-xl"
            key={pokemon.url}
          >
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
