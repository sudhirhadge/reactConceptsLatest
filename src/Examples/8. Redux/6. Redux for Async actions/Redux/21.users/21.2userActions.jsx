import axios from 'axios'
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from './21.1userTypes'

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  }
}

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  }
}

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  }
}

// this is step 24.
/* 
 Two packages to raise get request to API end point and display user data. 
axios ==> this will be used to make get request to API end point 
redux-thunk ==> Will allow us to define async action creators in our application 

this is an action creator. Above three action creators return an action
   but fetchUsers action creator is special. by using thunk middleware fetchUsers will return another function 
   
   export const fetchUsers =()=>{
    return ()=>{

    }
   }
   what is special about the funcion..? It does not have to be pure.  It allows sideeffects such as async API calls.  This function also receives the dispatch method as its argument. 
   export const fetchUsers =(dispatch)=>{
    return ()=>{

    }
   }

   Let us make the axios request and dispatch the necessary actions. 
   */
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest)
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        const users = response.data
        dispatch(fetchUsersSuccess(users))
      })
      .catch((error) => {
        const errorMsg = error.message
        dispatch(fetchUsersFailure(errorMsg))
      })
  }
}

// for step 25 go to 20.userContainer
