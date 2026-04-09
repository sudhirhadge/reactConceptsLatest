import React, { Component } from 'react'
import Counter from './1.Counter'
import Hover from './2.Hover'
import User from './4.user'
import CounterLogic from './5.0CounterLogic'
import CounterTwo from './5.1CounterTwo'
import HoverTwo from './5.2HoverTwo'

export class RenderProps extends Component {
  //the term render prop referes to a technique for sharing code between react components using props whose value is a function.
  render() {
    return (
      <div>
        <Counter />
        <Hover />
        {/* <User name="sudhiR" /> */}
        {/* <User
          name={(isLoggedIn) => (isLoggedIn ? 'functionSudhir' : 'Guest')}
        /> */}
        <User
          render={(isLoggedIn) => (isLoggedIn ? 'functionSudhir' : 'Guest')}
        />
        <CounterLogic
          render={(counter, increamentCount) => (
            <CounterTwo counter={counter} increamentCount={increamentCount} />
          )}
        />
        <CounterLogic
          render={(counter, increamentCount) => (
            <HoverTwo counter={counter} increamentCount={increamentCount} />
          )}
        />
      </div>
    )
  }
}

export default RenderProps
