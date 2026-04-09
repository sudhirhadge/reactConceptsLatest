import React, { useState, useEffect, useRef } from "react";
import "./InputTracker.css";

function InputTracker() {
  const [inputValue, setInputValue] = useState("");
  const prevInputValueRef = useRef();

  useEffect(() => {
    prevInputValueRef.current = inputValue;
  }, [inputValue]);

  const prevInputValue = prevInputValueRef.current;

  return (
    <>
      <h2>Real Life use case</h2>
      <p>
        A real-life scenario where this might be useful is in form validation.
        For instance, if you want to compare the current input value with the
        previous one to check if the user has made any changes:
      </p>

      <div className="input-tracker-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="input-field"
          placeholder="Type something..."
        />
        <p className="current-input">Current Input: {inputValue}</p>
        <p className="previous-input">Previous Input: {prevInputValue}</p>
      </div>
    </>
  );
}

export default InputTracker;
