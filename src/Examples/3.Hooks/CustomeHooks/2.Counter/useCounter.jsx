import { useState } from 'react'

function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount)

  const increament = () => {
    setCount((count) => count + 1)
  }
  const decreament = () => {
    setCount((count) => count - 1)
  }
  const reset = () => {
    setCount(0)
  }

  return [count, increament, decreament, reset]
}

/* Customizing hook.
function useCounter(initialCount = 0,value) {
  const [count, setCount] = useState(initialCount)

  const increament = () => {
    setCount((count) => count + value)
  }
  const decreament = () => {
    setCount((count) => count - value)
  }
  const reset = () => {
    setCount(0)
  }
  return [count, increament, decreament, reset]
}
*/
export default useCounter
