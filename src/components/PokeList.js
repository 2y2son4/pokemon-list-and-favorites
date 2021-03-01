import React from 'react';
import Pokemon from './Pokemon';
import '.././stylesheets/PokeList.scss';

class PokeList extends React.Component {
  render() {
    console.log(this.props);
    const resultList = this.props.pokemons.map((pokemon, i) => {
      return (
        <li className={'pokeCard__item'} id={pokemon.id} key={i}>
          <Pokemon
            id={pokemon.id}
            img={pokemon.url}
            pokeName={pokemon.name}
            pokeType={pokemon.types}
            pokeEv={pokemon.evolution}
            handlePokemon={this.props.handlePokemon}
          />
        </li>
      );
    });

    return <ul className="pokeCard">{resultList}</ul>;
  }
}

export default PokeList;
