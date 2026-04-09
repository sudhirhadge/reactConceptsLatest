import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Counter from "./Counter";

const AppSingleReducer = () => {
  return (
    <Provider store={store}>
      <h2>Redux - Single Reducer</h2>
      <Counter />
    </Provider>
  );
};

export default AppSingleReducer;
