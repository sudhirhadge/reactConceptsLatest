import React, { useContext } from 'react'
import { useReducer } from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'

export const CountContext = React.createContext()

const intialState = {
  count: 0,
}
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case 'Increament':
      return {
        count: state.count + 1,
      }
    case 'Decreament':
      return {
        count: state.count - 1,
      }
    case 'Reset':
      return {
        count: 0,
      }
    default:
      return state
  }
}
function ReducerPlusContextApp() {
  const [finalState, dispatch] = useReducer(reducer, intialState)
  return (
    <CountContext.Provider
      value={{ countState: finalState.count, countDispatch: dispatch }}
    >
      <div>
        GlobalCount : {finalState.count}
        <ComponentA />
        <ComponentB />
      </div>
    </CountContext.Provider>
  )
}

export default ReducerPlusContextApp
