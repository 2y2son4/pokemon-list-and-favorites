import React from 'react';
import '.././stylesheets/App.scss';
import Data from '.././data/Data.json';
import Header from './Header';
import PokeList from './PokeList';
import Footer from './Footer';

const App = () => {
  return (
    <div className="App App-header">
      <Header />
      <PokeList list={Data} />
      <Footer />
    </div>
  );
};

export default App;
