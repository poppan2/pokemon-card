import { Route } from "react-router";
import "./App.css";
import Pokedex from "./Components/Pokedex/Pokedex";
import Team from "./Components/MyTeam/Team";
import Header from "./Components/Header/Header";
import Pokemon from "./Components/Pokemon/Pokemon";
import { useState } from "react";

function App() {
  const [pokeData, setPokeData] = useState({});
  const [addPokemon, setAddPokemon] = useState([]);

  const handleClick = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokeData(data));
  };

  const addPokemonOnClick = (poke) => {
    if(!addPokemon.includes(poke)){
      setAddPokemon([...addPokemon, poke]);
    }
  };

  // const removePokemonOnClick = (poke) => {
  //   const team = [...addPokemon];
  //   team.splice(team.indexOf(poke), 1);
  //   setAddPokemon(team);
  // };

  const removePokemonOnClick = (poke) =>{
    setAddPokemon([...addPokemon].filter((item)=>{
      return item !== poke
    }))
  }

  return (
    <div className="App">
      <Header />
      <main className="main">
        <Route
          path="/pokedex"
          render={() => <Pokedex handleClick={handleClick} />}
        />

        <Route
          exact
          path="/team"
          render={() => (
            <Team
              addPokemon={addPokemon}
              removePokemonOnClick={removePokemonOnClick}
            />
          )}
        />

        <Route
          path="/pokedex/:pokename"
          render={() => (
            <Pokemon
              pokeData={pokeData}
              addPokemonOnClick={addPokemonOnClick}
            />
          )}
        />
      </main>
    </div>
  );
}

export default App;
