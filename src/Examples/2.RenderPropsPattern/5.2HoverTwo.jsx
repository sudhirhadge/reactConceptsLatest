import React, { Component } from 'react'

export class HoverTwo extends Component {
  render() {
    const { counter, increamentCount } = this.props
    return (
      <div onMouseEnter={increamentCount}>
        {' '}
        RenderProps: i am hovered {counter} times
      </div>
    )
  }
}

export default HoverTwo
