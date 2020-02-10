import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_SMURFS = "UPDATE_SMURFS";
export const SET_ERROR = "SET_ERROR";

export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_ERROR = "ADD_SMURF_ERROR";

export const EDIT_SMURF = "EDIT_SMURF";
export const EDIT_SMURF_SUCCESS = "EDIT_SMURF_SUCCES";
export const EDIT_SMURF_ERROR = "EDIT_SMURF_ERROR";

export const DELETE_SMURF = "DELETE_SMURF";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_ERROR = "DELETE_SMURF_ERROR";

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
    .then(res => dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: ADD_SMURF_ERROR, payload: "We hit a snag... Please come back later.", error }));
}

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF })
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: DELETE_SMURF_ERROR, payload: error }))
}

export const editSmurf = smurf => dispatch => {
  dispatch({ type: EDIT_SMURF })
  axios
    .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(res => dispatch({ type: EDIT_SMURF_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: EDIT_SMURF_ERROR, payload: err }))
}
