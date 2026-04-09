import React, { useState } from 'react'
import useCounter from './useCounter'

function CounterTwo() {
  const [count, increament, decreament, reset] = useCounter()
  // const [count, increament, decreament, reset] = useCounter(5)
  return (
    <div>
      CounterWithCustomHook = {count} <hr />
      <button onClick={increament}>Increament</button>
      <button onClick={decreament}>Decreament</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterTwo
