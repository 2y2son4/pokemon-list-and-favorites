import React from 'react';
import '.././stylesheets/Pokemon.scss';

const Pokemon = (props) => {
  console.log(props);
  const pokemonType = props.pokeType.map((type, i) => {
    return <li className="pokeItem">{type}</li>;
  });
  return (
    <article className="pokeCard">
      <img src={props.img} alt={props.pokeName} className="pokeImg" />
      <h2 className="pokeName">{props.pokeName}</h2>
      <h3 className="pokeType">Type:</h3>
      <ul>{pokemonType}</ul>
      {/* <p className="pokeEv">Evolution: {props.pokeEv}</p> */}
    </article>
  );
};

export default Pokemon;
