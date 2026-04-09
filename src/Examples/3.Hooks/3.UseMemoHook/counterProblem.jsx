import React, { useState } from 'react'

function Counter() {
  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const handleCounterOne = () => {
    setCounterOne(counterOne + 1)
  }

  const handleCounterTwo = () => {
    setCounterTwo(counterTwo + 1)
  }

  const isEven = () => {
    let i = 0
    while (i < 900000000) {
      i++
    }
    return counterOne % 2 === 0
  }
  return (
    <div>
      <button onClick={handleCounterOne}>{counterOne}</button>
      {isEven() ? 'Even' : 'Odd'}
      <br />
      <button onClick={handleCounterTwo}>{counterTwo}</button>
    </div>
  )
}

export default Counter
