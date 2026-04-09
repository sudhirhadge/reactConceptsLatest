import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../Redux/10.IceCream/iceCreamAction'
import { buyCake } from '../Redux/Cake/2.cakeAction'

function ItemContainer(props) {
  return (
    <div>
      <h2>No of items : {props.item}</h2>
      <button onClick={props.buyItem}>Buy</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.sendingProp_forCake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCream
  return {
    item: itemState,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchfunction = ownProps.sendingProp_forCake
    ? () => {
        dispatch(buyCake())
      }
    : () => {
        dispatch(buyIceCream())
      }
  return {
    buyItem: dispatchfunction,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
/*
if we dont want to send second paratmter in connect function.
connect(mapStateToProps)(ItemContainer)
if we dont want to send first paratmter in connect function.
//export default connect(null, mapDispatchToProps)(ItemContainer)
*/
