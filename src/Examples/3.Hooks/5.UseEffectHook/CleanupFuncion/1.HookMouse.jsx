import React, { useEffect, useState } from 'react'

function HookMouse() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = (e) => {
    console.log('in Mouse Event without cleanup')
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log('useEffect Called')
    window.addEventListener('mousemove', logMousePosition)
  }, [])

  return <div>{`X - ${x} , Y - ${y}`}</div>
}

export default HookMouse
