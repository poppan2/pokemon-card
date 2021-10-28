import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Pokedex.css'

const Pokedex = (props) => {
  const [pokeDex, setPokeDex] = useState([]);

  const makeAPICall = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokeDex(data));
  };

  useEffect(() => {
    const pokeUrl = "https://pokeapi.co/api/v2/pokemon";
    makeAPICall(pokeUrl);
  }, []);

  const pokeMons =
    pokeDex.results &&
    pokeDex.results.map((pokemon, index) => {
      return (
        <Link to={"/pokedex/" + pokemon.name}>
          <li
            className="pokemon"
            key={index}
            onClick={() => props.handleClick(pokemon.url)}
          >
            {pokemon.name}
          </li>
        </Link>
      );
    });

  return (
    <div id="pokemons">
      <div className="pokemons">{pokeMons}</div>
      <div className="circle"></div>
    </div>
  );
};

export default Pokedex;
