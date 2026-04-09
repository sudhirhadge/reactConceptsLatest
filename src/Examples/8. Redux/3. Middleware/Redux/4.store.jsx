import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import rootReducer from './11.rootReducer'
/*
import cakeReducer from "./Cake/3.cakeReducer";
const store = createStore(cakeReducer);
*/

const store = createStore(rootReducer, applyMiddleware(logger)) // rootReducer-step 12 derived after step 11 ; applyMiddleware(logger) is a step 16.
export default store

//Now to provide this store facility to react ; we need to use react-redux library.
//This library exports a component called <Provider/>.
//Use this component at the top of application and with prop store.

/* step 16 - Middleware : npm install redux-logger
import logger from redux logger - it logs information of redux store in console.
Third step is to apply this logger middleware
For that we first import the applyMiddleware funion from redux .
we pass this applyMiddleware as a second parameter to createStore.
And what is our middleware is logger. 

Step 17 in 4. redux devtool extension and Action payload/4.Store.
*/

