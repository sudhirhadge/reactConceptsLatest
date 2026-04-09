import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./action";
import "./Counter.css";

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

export default Counter;
