//within this file we combine all the reducers and export sigle reducer that can be passed to createStore function.

import { combineReducers } from 'redux'
import iceCreamReducer from './10.IceCream/iceCreamReducer'
import cakeReducer from './Cake/3.cakeReducer'

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
})
/* 
Step 14
We have split overall global state into state that is individually managed by seprate reducers
in root reducer the cakeReducer just refer to just cake 
and iceCreamReducer refereered to just iceCream.
 what this means is that the state objects we have defined seperately in the reduce file also need to be accessed differently. 
 step 15 is in 9.HooksCakeContainer & 0.CakeContainer
 */

export default rootReducer
