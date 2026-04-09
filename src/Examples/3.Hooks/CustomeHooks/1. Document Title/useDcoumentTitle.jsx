import React from 'react'
import { useEffect } from 'react'

function useDcoumentTitle(count) {
  useEffect(() => {
    document.title = `Count : ${count}`
  }, [count])

  // Remove import React from 'react' as we do not have any JSX in custom Hooks
  //     return (
  //     <div>

  //     </div>
  //   )
}

export default useDcoumentTitle
