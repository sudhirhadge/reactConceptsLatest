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

const reducer2 = (state = intialState, action) => {
  switch (action.type) {
    case 'Increament':
      return {
        count: state.count + 2,
      }
    case 'Decreament':
      return {
        count: state.count - 2,
      }
    case 'Reset':
      return {
        count: 0,
      }
    default:
      return state
  }
}
function CounterThree() {
  const [newState, dispatch] = useReducer(reducer, intialState)
  const [newState2, dispatch2] = useReducer(reducer2, intialState)
  const [newState3, dispatch3] = useReducer(reducer, intialState)

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

  const handleIncreament2 = () => {
    const action2 = {
      type: 'Increament',
    }
    dispatch2(action2)
  }
  const handleDecreament2 = () => {
    const action2 = {
      type: 'Decreament',
    }
    dispatch2(action2)
  }
  const handleReset2 = () => {
    const action2 = {
      type: 'Reset',
    }
    dispatch2(action2)
  }
  return (
    <div>
      <div>
        {' '}
        Counter 1 : {newState.count} <hr />
        <button onClick={handleIncreament}>Increament</button>
        <button onClick={handleDecreament}>Decreament</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div>
        Counter 2 : {newState2.count} <hr />
        <button onClick={handleIncreament2}>Increament</button>
        <button onClick={handleDecreament2}>Decreament</button>
        <button onClick={handleReset2}>Reset</button>
      </div>
      <div>
        Counter 3 : {newState3.count} <hr />
        <button onClick={() => dispatch3({ type: 'Increament' })}>
          Increament
        </button>
        <button onClick={() => dispatch3({ type: 'Decreament' })}>
          Decreament
        </button>
        <button onClick={() => dispatch3({ type: 'Reset' })}>Reset</button>
      </div>
    </div>
  )
}

export default CounterThree
