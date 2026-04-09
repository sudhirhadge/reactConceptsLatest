import { UPDATE_MESSAGE } from "./actionType";

// Initial states
const initialMessageState = { message: "Hello, Redux!" };

export const messageReducer = (state = initialMessageState, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};
