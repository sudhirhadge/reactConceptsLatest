import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import "./AppMultipleReducer.css";
import Counter from "./Counter";
import Message from "./Message";

const AppMultipleReducer = () => {
  return (
    <Provider store={store}>
      <hr />
      <h2>Redux - Multiple Reducers</h2>
      <Counter />
      <Message />
    </Provider>
  );
};

export default AppMultipleReducer;
