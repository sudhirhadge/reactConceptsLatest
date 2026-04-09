import React, { Component } from 'react'

class CounterLogic extends Component {
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
    return (
      <div>{this.props.render(this.state.counter, this.increamentCount)}</div>
    )
  }
}

export default CounterLogic
