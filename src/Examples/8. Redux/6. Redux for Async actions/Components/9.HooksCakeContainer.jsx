import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../Redux/Cake/2.cakeAction'
function HooksCakeContainer() {
  // useSelector hook act as a close equivalent to mapstateToPops function.
  // to get hold of any state which is maintained in th redux store we use useSelector Hook.
  //const numOfCakes = useSelector((state) => state.numOfCakes)
  const numOfCakes = useSelector((state) => state.cake.numOfCakes) // step 15 ; step 16 in 4.Store
  //useDispatch hooks return a reference to the dispatch function from the redux store.
  //Lets save that reference in variable called dispatch . This variable can be used to dispatch actions as needed.
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Num of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake with Hooks</button>
    </div>
  )
}

export default HooksCakeContainer
