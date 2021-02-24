import '.././stylesheets/App.scss';
import Data from '.././data/Data.json';
import Header from './Header';
import Footer from './Footer';
import PokeList from './PokeList';

function App() {
  return (
    <div className="App App-header">
      <Header />
      <PokeList list={Data} />
      <Footer />
    </div>
  );
}

export default App;
