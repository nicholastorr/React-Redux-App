import axios from 'axios';
import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
      axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then(res => console.log(res))
      .catch(err => console.log({ err }))
  }, [])

  return (
    <div className="App">
      <h1>Pokemons</h1>
    </div>
  );
}

export default App;
