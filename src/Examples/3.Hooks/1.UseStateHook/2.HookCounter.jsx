import React, { useState } from 'react'

function HookCounter() {
  const [counter, setCounter] = useState(0) //Array Destructuring
  const increamentCount = () => {
    setCounter(counter + 1)
  }
  return (
    <div>
      <button onClick={increamentCount}>Hook Counter {counter}</button>
    </div>
  )
}

export default HookCounter
