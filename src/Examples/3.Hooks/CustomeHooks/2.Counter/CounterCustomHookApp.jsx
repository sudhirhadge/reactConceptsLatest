import React from 'react'
import CounterOne from './CounterOne'
import CounterTwo from './CounterTwo'
import CounterWithCustomHook from './CounterWithCustomHook'

function CounterCustomHookApp() {
  return (
    <div>
      <CounterOne />
      <CounterTwo />
      <CounterWithCustomHook />
    </div>
  )
}

export default CounterCustomHookApp
