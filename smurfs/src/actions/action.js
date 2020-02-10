import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_SMURFS = "UPDATE_SMURFS";
export const SET_ERROR = "SET_ERROR";

export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_ERROR = "ADD_SMURF_ERROR";

export const HANDLE_INPUT = "HANDLE_INPUT"

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log("API_DATA", res)
      dispatch({ type: UPDATE_SMURFS, payload: res.data })
    })
    .catch(error => {
      console.log(error)
      dispatch({ type: SET_ERROR, payload: "We hit a snag... Please come back later." })
    })
}

export const handleSmurfsFormChange = input => {
  return {
    type: HANDLE_INPUT,
    payload: input
  }
}

export const handleSmurfsFormSubmit = data => dispatch => {
  dispatch({ type: ADD_SMURF, payload: data });
  axios
    .post('http://localhost:3333/smurfs', data)
    .then(res => {
      console.log("handleSmurfsFormSubmit", res)
      dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data })
    })
    .catch(error => dispatch({ type: ADD_SMURF_ERROR, payload: "We hit a snag... Please come back later.", error }));
}

