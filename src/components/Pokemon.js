import React from 'react';
import '.././stylesheets/Pokemon.scss';

const Pokemon = (props) => {
  console.log(props);
  const pokemonType = props.pokeType.map((type, i) => {
    return (
      <li className="article__type--item" id={i + 1} key={i}>
        {type}
      </li>
    );
  });
  return (
    <article className="article">
      <img src={props.img} alt={props.pokeName} className="article__img" />
      <h2 className="article__name">{props.pokeName}</h2>
      <h3 className="article__type">Type:</h3>
      <ul>{pokemonType}</ul>
      {/* <p className="pokeEv">Evolution: {props.pokeEv}</p> */}
    </article>
  );
};

export default Pokemon;
