import React from "react";
import Counter from './1.Counter'
import Hover from './2.Hover'

function HOCexample() {
  return (
    <div className="App">
      <Counter wifeName="Rucha" />
      <Hover lastName="hadge" />
    </div>
  )
}

export default HOCexample
