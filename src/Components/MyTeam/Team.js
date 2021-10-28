import "./Team.css";

const Team = (props) => {
  const showPokemons = props.addPokemon.map((pokemon, index) => {
    console.log(pokemon)
    return (
      <div key={index} className="added-pokemon">
        <img alt="" src={pokemon.sprites.front_default}></img>
        <p className="pokemonName">{pokemon.species.name}</p>
        <button
          className="remove-button"
          onClick={() => props.removePokemonOnClick(pokemon)}
        >
          Remove
        </button>
      </div>
    );
  });

  return (
    <>
      <div className="my-team">
        <div className="added-pokemons">{showPokemons}</div>
      </div>

      <div className="circle2"></div>
    </>
  );
};

export default Team;
