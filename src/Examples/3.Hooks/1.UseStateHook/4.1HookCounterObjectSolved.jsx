import React from 'react'
import { useState } from 'react'

function HookCounterObjectSolved() {
  const [name, setName] = useState({ firstName: '', LastName: '' })

  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.LastName}
        onChange={(e) => setName({ ...name, LastName: e.target.value })}
      />
      <h1>{name.firstName}</h1>
      <h1>{name.LastName}</h1>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  )
}

export default HookCounterObjectSolved
