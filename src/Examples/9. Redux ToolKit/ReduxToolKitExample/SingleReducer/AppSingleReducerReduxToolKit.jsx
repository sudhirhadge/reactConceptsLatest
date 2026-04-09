import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store, { increment, decrement } from "./store";
import "./AppSingleReducerReduxToolKit.css";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div className="counter">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

const AppSingleReducerReduxToolKit = () => (
  <Provider store={store}>
    <h2>Single Reducer - Redux toolKit</h2>
    <Counter />
  </Provider>
);

export default AppSingleReducerReduxToolKit;
