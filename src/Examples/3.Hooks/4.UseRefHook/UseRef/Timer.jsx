import React, { useRef, useState, useEffect } from "react";
import "./Timer.css"; // Import the CSS file

function Timer() {
  const [count, setCount] = useState(0);
  // Create a ref to keep a mutable reference to the count value
  const countRef = useRef(count);

  useEffect(() => {
    // Update the ref whenever count changes
    countRef.current = count;
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Access the latest count value without causing a re-render
      console.log("Count:", countRef.current);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h2>Example 2: Keeping a Mutable Variable with Responsive CSS</h2>

      <div className="timer-container">
        <p className="count">{count}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="increment-button"
        >
          Increment - Check Console
        </button>
      </div>
      <div>
        Without useRef: You would need to use state to manage the interval,
        which could lead to performance issues and more complex code. Importance
        of useRef: Performance: Avoids unnecessary re-renders. Simplicity:
        Simplifies code when dealing with mutable values or direct DOM access.
        Flexibility: Allows you to persist values across renders without
        triggering updates.
      </div>
    </>
  );
}

export default Timer;
