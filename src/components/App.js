import React, { useState } from 'react';
import '.././stylesheets/App.scss';
import data from '.././data/Data.json';
import Header from './Header';
import PokeList from './PokeList';
import Footer from './Footer';

const App = () => {
  const [pokemons] = useState(data);
  const [favs, setFavs] = useState([]);

  const handlePokemon = (clickedId) => {
    const favPokemonIndex = favs.findIndex((fav) => {
      return fav.id === clickedId;
    });

    if (favPokemonIndex === -1) {
      const pokemonClicked = pokemons.find((pokemon) => {
        return pokemon.id === clickedId;
      });
      favs.push(pokemonClicked);
      setFavs([...favs]);
    } else {
      favs.splice(favPokemonIndex, 1);
      setFavs([...favs]);
    }
  };

  let favText;
  let noneClass;
  if (favs.length !== 0) {
    favText = 'Favorite Pokemons';
  } else {
    favText = '';
    noneClass = 'none';
  }

  return (
    <div className="App App-header">
      <Header />
      <main>
        <section>
          <h2 className="favs__title">List of Pokemons</h2>
          <PokeList pokemons={pokemons} handlePokemon={handlePokemon} />
        </section>

        <section className="favs">
          <h2 className={'favs__title ' + noneClass}>{favText}</h2>
          <PokeList pokemons={favs} handlePokemon={handlePokemon} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
