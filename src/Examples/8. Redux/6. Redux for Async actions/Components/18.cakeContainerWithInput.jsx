import React, { useState } from 'react'
import { buyCake } from '../Redux/Cake/2.cakeAction'
import { connect } from 'react-redux'

function CakeContainerWithInput(props) {
  const [inputData, setInputData] = useState('')
  return (
    <>
      <h2> No of cakes : {props.numOfCakes} </h2>
      <input
        type="text"
        value={inputData}
        placeholder="Type how many you want..."
        onChange={(e) => setInputData(e.target.value)}
      />
      <button onClick={() => props.buyCake(inputData)}>
        {' '}
        Buy {inputData} Cake{' '}
      </button>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CakeContainerWithInput)
