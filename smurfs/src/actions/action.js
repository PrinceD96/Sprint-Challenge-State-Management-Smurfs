import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_SMURFS = "UPDATE_SMURFS";
export const SET_ERROR = "SET_ERROR";

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

