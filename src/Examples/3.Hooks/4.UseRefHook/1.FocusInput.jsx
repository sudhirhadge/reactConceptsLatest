import React from 'react'
import { useEffect, useRef } from 'react'

function FocusInput() {
  const inputRef = useRef(null)
  //useRef -  make it possible to access DOM nodes directly into a functional component.

  //create a ref variable by calling useRef passing in the initial value
  //Once we create a Ref we need to attached it to a input element. To attached a ref element we ue the reserved attribute called ref in input filed.
  //call focus method on input element
  //Where from currnet property coem from ; that is something which react does.
  //React will set a refs current property to the corresponding DOM node ; hence this is how you actually acess the input element.

  useEffect(() => {
    // for focusing input element when page reloads.
    inputRef.current.focus()
  }, [])
  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  )
}

export default FocusInput
