//this is with class components. snippet is rce.
//snippet for constructor is rconst

// why there is a need of render prop ?

import React, { Component } from 'react'

export class CounterTwo extends Component {
  render() {
    const { counter, increamentCount } = this.props
    return (
      <button onClick={increamentCount}>
        {' '}
        RenderProps: I have cliked {counter} times{' '}
      </button>
    )
  }
}

export default CounterTwo
