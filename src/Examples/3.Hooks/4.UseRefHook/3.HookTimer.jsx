import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

function HookTimer() {
  const intervalRef = useRef(null)
  const [timer, setTimer] = useState(0)

  /* when not to use UseRef hook.
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, []) */

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1)
    }, 1000)

    return () => clearInterval(intervalRef.current)
  }, [])
  return (
    <div>
      Hook timer : {timer}
      {/*  <button onClick={()=>ClearInterval(interval)}>Clear interval</button> 
This will thro an error as interval is not defined. ; we can clear the interval within the effect hook but not from an event handlere. This is where useRed comes to the end.
Although useRef holds an the reference of dom node with ref attribute it get also be used to store inmutable value. Value will persit through the rerenders and also not causes additional chnages if its value get changed. 

it can be used to create generic containers which can hold a mutable value similar to iinstance property on class component. This generic container does not cause re-renders when data in store changes at the same time it also remembers the stored data even after other state variables cause the re-render for this component  

*/}
      <button
        ref={intervalRef}
        onClick={() => clearInterval(intervalRef.current)}
      >
        Clear Hook Timer
      </button>
    </div>
  )
}
export default HookTimer
