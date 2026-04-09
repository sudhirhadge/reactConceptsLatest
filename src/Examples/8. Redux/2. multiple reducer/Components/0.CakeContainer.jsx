import React from 'react'
import { buyCake } from '../Redux/Cake/2.cakeAction'
import { connect } from 'react-redux'

function CakeContainer(props) {
  return (
    <>
      <h2>No of cakes : {props.numOfCakes} </h2>
      <button onClick={props.buyCake}> Buy Cake </button>
    </>
  )
}

//Step 7
/* To define Buy Cake as an action we will do it in three stpes 
Define new function mapStateToProps which takes redux state as a parameter and returns a object
const mapStateToProps = state => {
   return {

   }
}
to access redux state in your component you define mapStateToProps. It get Redux state as a parameter which helpful to retrieve appropriate state parameter.

Selectors -
maintain seperate file called selectors just like action 
and reducers there will be selectors
It returns some state information from redux store like selecting no of cakes.
In larger applications you might perform some data 
transformation and then select only what is required.
So instead of writing couple of lines of code in mapStateToProps function it extracted in a file called
selectors. 

second method is mapDispatchToProps
it takes redux dispatch method as a parameter and return an object. Allow us to map action creators to props on our components. We map dispatching buyCake() to a prop buyCake
const mapDispatchToProps = dispatch =>{
  return {
        //here we have only one action creator. 
       //create a property called buyCake which is a 
       //arrow function which dispatches action creator from redux.
  }
}

//step 8

Connect these two functions with react component
We use connect function or connect higher order component from react redux library
import {connect } from react-redux
at bottom while exporting a component we connect two functions
export default connect (mapStateToProps,mapDispatchToProps)(CakeContainer);

What this connet function does is -
in first function mapStateToProps- the state from redux store is mapped to our component props.
so apart from other props cakeConatiner was receiving it will now receive a additional prop called noOfCakes which reflects the
noOfCakes in redux store.

in second function mapDispatchToProps - it will basically map a dispatch of action creator to a prop in our component
so in component it will receive a second additional prop pof buyCake which will basically dispatch a buyCake() action.

*/

const mapStateToProps = (state) => {
  return {
    //numOfCakes: state.numOfCakes, //Selecting no of cakes from redux store.
    numOfCakes: state.cake.numOfCakes, //step 15 Selecting no of cakes from redux store.
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //we have only one action creator.
    //create a property called buyCake which is a arrow function which dispatches action creator from redux.
    buyCake: () => dispatch(buyCake()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
