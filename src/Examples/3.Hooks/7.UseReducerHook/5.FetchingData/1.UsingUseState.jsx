import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UsingUseState() {
  const [loading, setLoading] = useState(true)
  const [post, setPost] = useState({})
  const [error, setError] = useState('')
  //'https://jsonplaceholder.typicode.com/posts/1'

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        setLoading(false)
        setPost(response.data)
        setError('')
      })
      .catch((err) => {
        setLoading(false)
        setPost({})
        setError('Something went wronng..Try again')
      })
  }, [])
  return (
    <div>
      {loading ? 'Loading..' : post.title}
      {error ? error : null}
    </div>
  )
}

export default UsingUseState
