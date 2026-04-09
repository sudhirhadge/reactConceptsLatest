import React from 'react'
/*
-Hook used for state management.
Alternative to useState.

useState is built using useReducer.
When to use useReducer vs useState ?

let's compare array.reduce vs useReducer 

in JS
array.reduce(reducer, initialValue)
singleValue = reducer(accumulator, itemValue)
reduce method returns a single value. 

in React 
useReducer(reducer, initialState)
newState = reducer(currentState , action)
useReducer hook return pair of values [newState, dispatch]
dispatch method is used to specify action. 
*/
import CounterOne from './1.CounterOne'
import CounterTwo from './2.CounterTwo'
import CounterThree from './3.CounterThree'
import ReducerPlusContextApp from './4.reducerPlusContext/reducerPlusContextApp'
function UseReducerApp() {
  return (
    <div>
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      <ReducerPlusContextApp />
    </div>
  )
}

export default UseReducerApp
