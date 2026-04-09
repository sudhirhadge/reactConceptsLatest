import React, { useState } from 'react'
import HookMouse from './1.HookMouse'
import HookMouseWithCleanUp from './3.HookMouseWithCleanUp'

function MouseContainer() {
  const [display, SetDisplay] = useState(true)
  return (
    <div>
      <button
        onClick={() => {
          SetDisplay(!display)
        }}
      >
        Toggle Display
      </button>
      {display && <HookMouse />}
      {display && <HookMouseWithCleanUp />}
    </div>
  )
}

export default MouseContainer
