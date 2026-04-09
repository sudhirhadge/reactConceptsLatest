import React, { useState } from 'react'

function CounterTwo() {
  const [count, setCount] = useState(0)

  const increament = () => {
    setCount((count) => count + 1)
  }
  const decreament = () => {
    setCount((count) => count - 1)
  }
  const reset = () => {
    setCount(0)
  }

  return (
    <div>
      Counter = {count} <hr />
      <button onClick={increament}>Increament</button>
      <button onClick={decreament}>Decreament</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterTwo
