import "./App.css";
import useFetch from "use-http";
import { NavBar } from "./component/NavBar";

function App() {
  const {
    loading,
    error,
    data = [],
  } = useFetch("https://pokeapi.co/api/v2/pokemon?limit=100", []);
  console.log(data.results);
  return (
    <div>
      <NavBar />
      {error && "Error!"}
      {loading && "Loading..."}
      {data?.results?.map((pokemon) => (
        <div key={pokemon.url}>{pokemon.name}</div>
      ))}
    </div>
  );
}

export default App;
