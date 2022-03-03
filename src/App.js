import "./App.css";
import useFetch from "use-http";
import { NavBar } from "./component/NavBar";
import { PokeScreen } from "./component/PokeScreen";
import { Home } from "./Pages/Home";

function App() {
  //

  return (
    <div>
      <NavBar />
      <div className="justify-center  ">
        <Home />
      </div>
    </div>
  );
}

export default App;
