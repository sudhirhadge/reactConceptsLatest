import { createStore } from 'redux'
import rootReducer from './11.rooReducer'
/*
import cakeReducer from "./Cake/3.cakeReducer";
const store = createStore(cakeReducer);
*/

const store = createStore(rootReducer) // step 12 derived after step 11
export default store

//Now to provide this store facility to react ; we need to use react-redux library.
//This library exports a component called <Provider/>.
//Use this component at the top of application and with prop store.
