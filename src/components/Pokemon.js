import React from 'react';
import '.././stylesheets/Pokemon.scss';

const Pokemon = (props) => {
  let evolution;
  if (props.pokeEv === null) {
    evolution = <></>;
  } else {
    evolution = (
      <p className="article__ev">
        Evolves from <span className="article__ev capitalize">{props.pokeEv}</span>
      </p>
    );
  }
  const pokemonType = props.pokeType.map((type, i) => {
    return (
      <li className="article__type--item" key={i}>
        {type}
      </li>
    );
  });
  return (
    <article className="article">
      <img src={props.img} alt={props.pokeName} className="article__img" />
      <h2 className="article__name">{props.pokeName}</h2>
      {evolution}
      <h3 className="article__type">Type:</h3>
      <ul>{pokemonType}</ul>
    </article>
  );
};

export default Pokemon;
