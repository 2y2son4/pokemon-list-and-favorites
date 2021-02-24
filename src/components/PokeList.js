import React from 'react';
import Pokemon from './Pokemon';
import '.././stylesheets/PokeList.scss';

class PokeList extends React.Component {
  render() {
    const resultList = this.props.list.map((listItem, i) => {
      return (
        <li className="itemLi" id={i + 1} key={i}>
          <Pokemon img={listItem.url} pokeName={listItem.name} pokeType={listItem.types} pokeEv={listItem.evolution} />
        </li>
      );
    });

    return <ul>{resultList}</ul>;
  }
}

export default PokeList;
