import { DECREMENT, INCREMENT } from "./actionType";

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});
