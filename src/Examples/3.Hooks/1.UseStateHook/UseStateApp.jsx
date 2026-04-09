import React from 'react'
import ClassCounter from './1.ClassCounter'
import HookCounter from './2.HookCounter'
import HookCounterWithPreviousValue from './3.HookCounterWithPreviousValue'
import HookCounterWithPreviousValueSolved from './3.HookCounterWithPreviousValueSolved'
import HookCounterObject from './4.0HookCounterObject'
import HookCounterObjectSolved from './4.1HookCounterObjectSolved'

function Main() {
  return (
    <div>
      {/* <ClassCounter />
      <HookCounter /> */}
      {/* <HookCounterWithPreviousValue />
      <HookCounterWithPreviousValueSolved />{' '} */}
      {/*HookCounterWithPreviousValueSolved:  same can be taken care in Class components*/}
      <HookCounterObject />
      <HookCounterObjectSolved />
    </div>
  )
}

export default Main
