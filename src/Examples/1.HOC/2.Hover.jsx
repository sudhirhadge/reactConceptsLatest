import React from 'react'
import { useState } from 'react'
import UpdatedComponent from './4.UpdatedComponent'

function Hover(props) {
  /*const [count, setCount] = useState(0)
  const actionHandle = () => {
    setCount((count) => {
      return count + 1
    })
  } */
  return (
    <div>
      <button onMouseEnter={props.actionHandle}>
        {props.name} {props.lastName} has Hovered {props.count} times
      </button>
    </div>
  )
}

export default UpdatedComponent(Hover, 10)
