//action creators. It is a function which Returns action
//action is an object with type key and constant value.

import { BUY_CAKE } from './1.cakeTypes'
/*
export const buyCake = () => {
  return {
    type: BUY_CAKE,
  }
} */

/* for step 18 */
export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number,
  }
}
