
import './App.css';

import { connect } from 'react-redux';
import { getCharacters } from './state/actions';
import { useEffect } from 'react';
import  CharacterList  from './components/CharacterList';

function App(props) {
  useEffect(() => {
    props.getCharacters();
  });

  return (
    <div className="App">
      <h1>Pokemons</h1>
      <CharacterList />
    </div>
  );
}

function mapStateToProps(state) {
 return {
   state
  }
}

export default connect(mapStateToProps, { getCharacters })(App);
