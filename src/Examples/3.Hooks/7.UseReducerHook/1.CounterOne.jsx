import React from 'react'
import { useReducer } from 'react'

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

function CounterOne() {
  const [newState, dispatch] = useReducer(reducer, intialState)
  const handleIncreament = () => {
    const action = {
      type: 'Increament',
    }
    dispatch(action)
  }
  const handleDecreament = () => {
    const action = {
      type: 'Decreament',
    }
    dispatch(action)
  }
  const handleReset = () => {
    const action = {
      type: 'Reset',
    }
    dispatch(action)
  }
  return (
    <div>
      {newState.count} <hr />
      <button onClick={handleIncreament}>Increament</button>
      <button onClick={handleDecreament}>Decreament</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default CounterOne
