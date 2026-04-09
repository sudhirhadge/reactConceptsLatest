import React, { useState } from 'react'

function HookCounterWithPreviousValueSolved() {
  const [counter, setCounter] = useState(0) //Array Destructuring
  const IncreamentByFiveLoop = () => {
    for (let i = 0; i < 5; i++) {
      setCounter((peviousValue) => peviousValue + 1)
    }
  }
  return (
    <div>
      Count {counter}
      <button onClick={() => setCounter(0)}>Reset </button>
      <button onClick={() => setCounter((peviousValue) => peviousValue + 1)}>
        Increament{' '}
      </button>
      <button onClick={() => setCounter((peviousValue) => peviousValue - 1)}>
        Decreament{' '}
      </button>
      <button onClick={() => setCounter((peviousValue) => peviousValue + 5)}>
        IncreamentByFive{' '}
      </button>
      <button onClick={IncreamentByFiveLoop} style={{ color: 'green' }}>
        IncreamentByFiveLoop{' '}
      </button>
    </div>
  )
}

export default HookCounterWithPreviousValueSolved
