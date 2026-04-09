import React from "react";
import { useState } from 'react'
const UpdatedComponent = (OrignalComponent, increamentNumber) => {
  function NewComponent(props) {
    const [count, setCount] = useState(0)
    const actionHandle = () => {
      setCount((count) => {
        return count + increamentNumber
      })
    }
    return (
      <OrignalComponent
        name="sudhir"
        count={count}
        actionHandle={actionHandle}
        {...props}
      />
    )
  }

  return NewComponent
}

export default UpdatedComponent
