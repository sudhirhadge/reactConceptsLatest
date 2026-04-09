import React, { useEffect, useState } from 'react'

function HookMouseWithCleanUp() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = (e) => {
    console.log('in Mouse Event with cleanup')
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log('useEffect Called')
    window.addEventListener('mousemove', logMousePosition)

    return () => {
      console.log('Component Unmounting code')
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, [])

  return <div>{`X - ${x} , Y - ${y}`}</div>
}

export default HookMouseWithCleanUp
