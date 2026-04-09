import React from 'react'
import { useState } from 'react'
import UpdatedComponent from './4.UpdatedComponent'

function Counter(props) {
  /*
  const [count, setCount] = useState(0)
  const actionHandle = () => {
    setCount((count) => {
      return count + 1
    })
  } */
  return (
    <div>
      <button onClick={props.actionHandle}>
        I am Clicked {props.count} times by {props.name} and {props.wifeName}
      </button>
    </div>
  )
}

export default UpdatedComponent(Counter, 5)
