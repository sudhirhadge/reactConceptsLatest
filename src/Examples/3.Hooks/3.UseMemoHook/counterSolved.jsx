import React, { useMemo, useState } from 'react'

function CounterSolved() {
  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const handleCounterOne = () => {
    setCounterOne(counterOne + 1)
  }

  const handleCounterTwo = () => {
    setCounterTwo(counterTwo + 1)
  }

  //useMemo returns a catched value.
  const isEven = useMemo(() => {
    let i = 0
    while (i < 900000000) {
      i++
    }
    return counterOne % 2 === 0
  }, [counterOne])

  return (
    <div>
      <button onClick={handleCounterOne}>{counterOne}</button>
      {isEven ? 'Even' : 'Odd'} {/* useMemo returns a catched value  */}
      <br />
      <button onClick={handleCounterTwo}>{counterTwo}</button>
    </div>
  )
}

export default CounterSolved
