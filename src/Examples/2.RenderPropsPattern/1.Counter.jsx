//this is with class components. snippet is rce.
//snippet for constructor is rconst

// why there is a need of render prop ?

import React, { Component } from 'react'

export class ClickCounter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
    }
  }

  increamentCount = () => {
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 }
    })
  }

  render() {
    const { counter } = this.state
    return (
      <button onClick={this.increamentCount}>
        {' '}
        I have cliked {counter} times{' '}
      </button>
    )
  }
}

export default ClickCounter
