import * as ACTIONS from "../actions/action.js";

const initialState = {
  smurfsFormInput: {
    name: '',
    age: '',
    height: ''
  },
  smurfs: [],
  isFetchingData: false,
  error: ""
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.HANDLE_INPUT:
      return {
        ...state,
        smurfsFormInput: action.payload
      };

    // FETCHING 
    case ACTIONS.FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
      };
    case ACTIONS.UPDATE_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
        isFetchingData: false,
      };
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload
      };


    // ADDING
    case ACTIONS.ADD_SMURF:
      return {
        ...state,
        isFetchingData: true,
        error: ""
      };
    case ACTIONS.ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        smurfsFormInput: {
          name: '',
          age: '',
          height: ''
        }
      };
    case ACTIONS.ADD_SMURF_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload
      };


    //DELETING
    case ACTIONS.DELETE_SMURF:
      return {
        ...state,
        isFetchingData: true,
        error: ""
      };
    case ACTIONS.DELETE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
      };
    case ACTIONS.DELETE_SMURF_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload
      }

    default:
      return state
  };
}