import React, { useState } from 'react'
import { useEffect } from 'react'
import useDcoumentTitle from './useDcoumentTitle'

function DocTitleThreeWithHook() {
  const [count, setCount] = useState(0)
  useDcoumentTitle(count)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count with CustomHook: {count}
      </button>
    </div>
  )
}

export default DocTitleThreeWithHook
