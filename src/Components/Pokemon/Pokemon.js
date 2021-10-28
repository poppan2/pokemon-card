import React from "react";
import { useParams } from "react-router";
import './Pokemon.css'

const Pokemon = (props) => {
  const { pokename } = useParams();
  
  return (
    <div id="poke-data">
      <div className="poke-data">
        <div className="images">
          {props.pokeData.sprites && <img alt="" src={props.pokeData.sprites.front_default}></img>}
          {props.pokeData.sprites && <img alt="" src={props.pokeData.sprites.back_default}></img>}
        </div>
        <div className="poke-name">{pokename}</div>
        <div className="poke-info">
          {props.pokeData.height && <p>Height: {props.pokeData.height}</p>}
          {props.pokeData.weight && <p>Weight: {props.pokeData.weight}</p>}
          {props.pokeData.types && <p>Type: {props.pokeData.types[0].type.name}</p>}
        </div>
        <button onClick={()=> props.addPokemonOnClick(props.pokeData)}>Add to Team</button>
      </div>
    </div>
  );
};

export default Pokemon;
