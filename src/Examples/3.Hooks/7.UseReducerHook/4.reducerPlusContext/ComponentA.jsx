import React, { useContext } from 'react'
import { CountContext } from './reducerPlusContextApp'

function ComponentA() {
  const objectReceived = useContext(CountContext)
  return (
    <div>
      Component A : {objectReceived.countState}
      <button
        onClick={() => objectReceived.countDispatch({ type: 'Increament' })}
      >
        Increament
      </button>
      <button
        onClick={() => objectReceived.countDispatch({ type: 'Decreament' })}
      >
        Decreament
      </button>
      <button onClick={() => objectReceived.countDispatch({ type: 'Reset' })}>
        Reset
      </button>
    </div>
  )
}

export default ComponentA
