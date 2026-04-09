import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from './21.1userTypes'

const initialState = {
  loading: true, //loading a loading spinner in your component
  users: [], // List of users
  error: '', // Display the error message.
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: '',
      }

    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      }
    default:
      return state
  }
}
export default userReducer
// for step 22 go to 11.rootReducer.js
