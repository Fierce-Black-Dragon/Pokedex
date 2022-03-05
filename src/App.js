import "./App.css";

import { NavBar } from "./component/NavBar";

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
