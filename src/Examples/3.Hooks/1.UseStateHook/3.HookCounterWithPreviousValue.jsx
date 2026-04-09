import React, { useState } from 'react'

function HookCounterWithPreviousValue() {
  const [counter, setCounter] = useState(0) //Array Destructuring
  const IncreamentByFiveLoop = () => {
    for (let i = 0; i < 5; i++) {
      setCounter(counter + 1)
    }
  }
  return (
    <div>
      Count {counter}
      <button onClick={() => setCounter(0)}>Reset </button>
      <button onClick={() => setCounter(counter + 1)}>Increament </button>
      <button onClick={() => setCounter(counter - 1)}>Decreament </button>
      <button onClick={() => setCounter(counter + 5)}>IncreamentByFive </button>
      <button onClick={IncreamentByFiveLoop} style={{ color: 'red' }}>
        IncreamentByFiveLoop{' '}
      </button>
    </div>
  )
}

export default HookCounterWithPreviousValue
