import React from 'react';
import '.././stylesheets/App.scss';
import Data from '.././data/Data.json';
import Header from './Header';
import PokeList from './PokeList';
import Footer from './Footer';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    // const [pokemons] = useState([Data]);
    return (
      <div className="App App-header">
        <Header />
        <PokeList list={Data} />
        <Footer />
      </div>
    );
  }
}

export default App;
