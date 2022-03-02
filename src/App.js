import "./App.css";
import useFetch from "use-http";
import { NavBar } from "./component/NavBar";
import { PokeScreen } from "./component/PokeScreen";

function App() {
  //   https://pokeapi.co/api/v2/pokemon?limit=10&offset=200

  return (
    <div>
      <NavBar />
      <div className="justify-center  ">
        <PokeScreen />
      </div>
    </div>
  );
}

export default App;
