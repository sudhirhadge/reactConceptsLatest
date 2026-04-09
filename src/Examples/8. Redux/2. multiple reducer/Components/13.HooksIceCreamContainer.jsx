import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../Redux/10.IceCream/iceCreamAction'

function HooksIceCreamContainer() {
  // useSelector hook act as a close equivalent to mapstateToPops function.
  // to get hold of any state which is maintained in th redux store we use useSelector Hook.
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream)
  //useDispatch hooks return a reference to the dispatch function from the redux store.
  //Lets save that reference in variable called dispatch . This variable can be used to dispatch actions as needed.
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Num of IceCream - {numOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>
        Buy IceCream with Hooks
      </button>
    </div>
  )
}

export default HooksIceCreamContainer
