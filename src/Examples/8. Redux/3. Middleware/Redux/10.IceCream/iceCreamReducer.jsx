//Reducer is a function that accepts state and action as parameters and return a new state
//first define initial state

import { BUY_ICECREAM } from './iceCreamType'

const initialState = {
  numOfIceCream: 20,
}

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numOfIceCream: state.numOfIceCream - 1 }
    default:
      return state
  }
}

export default iceCreamReducer
