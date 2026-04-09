import { INCREMENT, DECREMENT, UPDATE_MESSAGE } from "./actionType";

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const updateMessage = (message) => ({
  type: UPDATE_MESSAGE,
  payload: message,
});
