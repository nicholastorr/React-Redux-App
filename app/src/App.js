import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';

function App(props) {

  useEffect(() => {
      axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then(res => console.log(res))
      .catch(err => console.log({ err }))
  }, [])
  console.log(props)
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

export default connect(mapStateToProps)(App);
