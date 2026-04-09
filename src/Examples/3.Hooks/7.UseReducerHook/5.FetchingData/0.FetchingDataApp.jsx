import React from 'react'
import UsingUseState from './1.UsingUseState'
import UsingUseReducer from './2.UsingUseReducer'

function FetchingDataApp() {
  return (
    <div>
      useState : <UsingUseState /> <hr />
      Reducer : <UsingUseReducer />
    </div>
  )
}

export default FetchingDataApp
