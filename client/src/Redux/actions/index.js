import axios from "axios";
const urlMyApi = "http://localhost:3001";

export function postPokemon(payload){
return async function () {
  const response = await axios.post(`${urlMyApi}/pokemon` , payload)
  return response;
}
}

export function searchPoke(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`${urlMyApi}/pokemon?name=` + name) 
      return dispatch({
        type: "SEARCH_NAME",
        payload: json.data,
      });
    } catch {
      return alert("No se encontró el pokemon");
    }
  };
}

export function filterPokemonsByType(payload) {
  return {
    type: "FILTER_BY_TYPE",
    payload,
  };
}

export function Sort(order){
  return {
      type: "SORT",
      payload: order
  }
}
export function filterCreated(payload) {
  return {
    type: "FILTER_CREATED",
    payload
  };
}

export function filterByAttack(payload){
  return {
    type: "FILTER_BY_ATTACK",
    payload
  }
}

export function getPokemons() {
  return async function (dispatch) {
    var json = await axios.get(`${urlMyApi}/pokemon`);
    dispatch({
      type: "GET_POKEMONS",
      payload: json.data,
    });
  };
}


export function getDetail(id) {
  return async function (dispatch) {
    try{
        var json = await axios.get(`${urlMyApi}/pokemon/${id}`);
    return dispatch({
      type: "GET_DETAILS",
      payload: json.data
    })
   
} catch(error) {
  console.log(error)
}
  }
}


export function getType() {
  return async function (dispatch) {
    var json = await axios.get(`${urlMyApi}/types`);
    return dispatch({
      type: "GET_TYPE",
      payload: json.data
    })
  }

}