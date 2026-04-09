//Reducer is a function that accepts state and action as parameters and return a new state
//first define initial state

import { BUY_CAKE } from './1.cakeTypes'
const initialState = {
  numOfCakes: 10,
}

/* // for 0.CakeContainer
const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCakes: state.numOfCakes - 1 }
    default:
      return state
  }
} */

//for 18.cakeContainerWithInput ;additionally this will also change 0.cakeContainer,9.HooksCakeContainer
const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCakes: state.numOfCakes - action.payload }
    default:
      return state
  }
}

export default cakeReducer
