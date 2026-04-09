import React, { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store, { increment, decrement, updateMessage } from "./store";
import "./AppMultipleReducerReduxToolKit.css";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="counter">
      <h1 className={animate ? "animate" : ""}>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

const Message = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message.message);

  return (
    <div className="message">
      <h2>{message}</h2>
      <input
        type="text"
        onChange={(e) => dispatch(updateMessage(e.target.value))}
        placeholder="Update message"
      />
    </div>
  );
};

const AppMultipleReducerReduxToolKit = () => (
  <Provider store={store}>
    <div className="app">
      <Counter />
      <Message />
    </div>
  </Provider>
);

export default AppMultipleReducerReduxToolKit;
