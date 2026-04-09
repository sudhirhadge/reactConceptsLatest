//Reducer is a function that accepts state and action as parameters and return a new state
//first define initial state

import { BUY_CAKE } from './1.cakeTypes'

const initialState = {
  numOfCakes: 10,
}

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCakes: state.numOfCakes - 1 }
    default:
      return state
  }
}

export default cakeReducer
