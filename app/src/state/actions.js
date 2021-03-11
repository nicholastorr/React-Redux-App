import axios from 'axios';


export const FETCH_CHARACTERS = 'FETCH_CHARACTERS'
export const FETCH_START = 'FETCH_START'
export const FETCH_ERROR = 'FETCH_ERROR'

export const getCharacters = () => (dispatch) => {
    dispatch({type: FETCH_START})
    axios
    .get('https://pokeapi.co/api/v2/pokemon')
    .then(res => {
        dispatch({type: FETCH_CHARACTERS, payload: res.data.results})

    })
    .catch(err => {
        dispatch({type: FETCH_ERROR, payload: { err }})
     
    });
}