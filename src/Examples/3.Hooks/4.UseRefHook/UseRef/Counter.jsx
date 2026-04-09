import React, { useState, useEffect, useRef } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const prevCount = prevCountRef.current;

  return (
    <>
      <h2>Example: Tracking Previous State Value</h2>
      <p>
        Imagine you have a counter component, and you want to display the
        previous count value each time the count changes. Here’s how you can
        achieve this using useRef:
      </p>
      <div className="counter-container">
        <h1 className="count">Current Count: {count}</h1>
        <h2 className="prev-count">Previous Count: {prevCount}</h2>
        <button
          className="increment-button"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
    </>
  );
}

export default Counter;
