
import './App.css';

import { connect } from 'react-redux';
import { getCharacters } from './state/actions';
import { useEffect } from 'react';

function App(props) {

  
  console.log(props.state.characters)
  useEffect(() => {
    props.getCharacters()
  }, []);
  return (
    <div className="App">
      <h1>Pokemons</h1>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps, { getCharacters })(App);
