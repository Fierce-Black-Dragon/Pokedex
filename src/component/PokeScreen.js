import "../style/pokeScreen.css";

export const PokeScreen = ({ loading, pokemonD, error }) => {
  return (
    <div className=" pokeScreen">
      <div className=" pokeScreen__display">
        {!loading ? (
          <img
            src={pokemonD?.sprites?.other?.dream_world?.front_default}
            alt="pokemon"
          />
        ) : (
          <p className="text-orange-500"> Loading... </p>
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
                  <strong>{data?.stat.name} :</strong>
                </h5>
                <p>
                  {" "}
                  <span>{data?.base_stat}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
