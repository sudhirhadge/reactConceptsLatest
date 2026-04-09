import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk"; //step 23
import rootReducer from "./11.rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
/*
import cakeReducer from "./Cake/3.cakeReducer";
const store = createStore(cakeReducer);
*/

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk)) // thunk added in step 23 , go to 21.2userAction.js for step 24
); // rootReducer-step 12 derived after step 11 ;applyMiddleware(logger) is a step 16.
//step 17 is composeWithDevTools
export default store;

//Now to provide this store facility to react ; we need to use react-redux library.
//This library exports a component called <Provider/>.
//Use this component at the top of application and with prop store.

/* step 16 - Middleware : npm install redux-logger
import logger from redux logger - it logs information of redux store in console.
Third step is to apply this logger middleware
For that we first import the applyMiddleware funion from redux .
we pass this applyMiddleware as a second parameter to createStore.
And what is our middleware is logger. 
*/

/* 
step 17
Working Tools when it comes redux
Redux Devtool Extension
how to include it in your app and how to use it ?
Google search- redux devtools extension and add it.
google search redux devtools extension and open github link. 
go to -> 
1.3 Useredux-devtools-extension package from npm
npm install --save redux-devtools-extension

step 18 is mentioned in 18.cakeContainerWithInput.js
*/
