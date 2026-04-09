import React from 'react'
import { useState } from 'react'

function HookCounterObject() {
  const [name, setName] = useState({ firstName: '', LastName: '' })

  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={name.LastName}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>{name.firstName}</h1>
      <h1>{name.LastName}</h1>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  )
}

export default HookCounterObject
