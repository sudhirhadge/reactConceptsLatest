import React from 'react'
import { useReducer } from 'react'

const intialState = {
  count: 0,
  secondCounter: 10,
}
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case 'Increament':
      return { ...state, count: state.count + action.value }
    case 'Decreament':
      return { ...state, count: state.count - action.value }
    case 'Increament2':
      return { ...state, secondCounter: state.secondCounter + action.value }
    case 'Decreament2':
      return { ...state, secondCounter: state.secondCounter - action.value }
    case 'Reset':
      return {
        count: 0,
        secondCounter: 10,
      }
    default:
      return state
  }
}

function CounterTwo() {
  const [newState, dispatch] = useReducer(reducer, intialState)
  const handleIncreament = () => {
    const action = {
      type: 'Increament',
      value: 2,
    }
    dispatch(action)
  }
  const handleDecreament = () => {
    const action = {
      type: 'Decreament',
      value: 2,
    }
    dispatch(action)
  }
  const handleReset = () => {
    const action = {
      type: 'Reset',
    }
    dispatch(action)
  }

  const handleIncreament2 = () => {
    const action = {
      type: 'Increament2',
      value: 1,
    }
    dispatch(action)
  }
  const handleDecreament2 = () => {
    const action = {
      type: 'Decreament2',
      value: 1,
    }
    dispatch(action)
  }
  return (
    <div>
      <div>
        counter1 : {newState.count} <hr />
        <button onClick={handleIncreament}>Increament by 2</button>
        <button onClick={handleDecreament}>Decreament by 2</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div>
        counter2 : {newState.secondCounter} <hr />
        <button onClick={handleIncreament2}>Second Counter increament</button>
        <button onClick={handleDecreament2}>Second Counter decreament </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default CounterTwo
