import React, { Component } from 'react'

export class Hover extends Component {
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
      <div onMouseEnter={this.increamentCount}>
        {' '}
        i am hovered {counter} times
      </div>
    )
  }
}

export default Hover
