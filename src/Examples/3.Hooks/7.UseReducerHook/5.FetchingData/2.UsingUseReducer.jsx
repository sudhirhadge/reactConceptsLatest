import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
const initialData = {
  loading: true,
  post: {},
  error: '',
}
const reducer = (state = initialData, action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return {
        loading: false,
        post: action.payload,
        error: '',
      }
    case 'FETCH_DATA_FAILURE':
      return {
        loading: false,
        post: action.payload,
        error: 'Something went wrong...not in reducer logic in your fething ',
      }
    default:
      return state
  }
}
function UsingUseReducer() {
  const [finalState, dispatchMethod] = useReducer(reducer, initialData)
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/2')
      .then((resp) => {
        dispatchMethod({ type: 'FETCH_DATA_SUCCESS', payload: resp.data })
      })
      .catch((err) => {
        dispatchMethod({ type: 'FETCH_DATA_FAILURE', payload: {} })
      })
  }, [])
  return (
    <div>
      {finalState.loading ? 'Loading...' : finalState.post.title}
      {finalState.error ? finalState.error : null}
    </div>
  )
}

export default UsingUseReducer
