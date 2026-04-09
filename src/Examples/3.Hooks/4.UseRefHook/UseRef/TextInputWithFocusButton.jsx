import React, { useRef } from "react";
import "./TextInputWithFocusButton.css"; // Import the CSS file

function TextInputWithFocusButton() {
  // Create a ref using useRef
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // Access the DOM element directly using the ref
    inputEl.current.focus();
  };

  return (
    <>
      <h2>Example 1: Accessing a DOM Element with Responsive CSS</h2>
      <div className="container">
        {/* Attach the ref to the input element */}
        <input ref={inputEl} type="text" className="input" />
        <button onClick={onButtonClick} className="button">
          Focus the input
        </button>
      </div>
      <div>
        Without useRef: You would need to use state to manage the focus, which
        would cause unnecessary re-renders and make the code more complex.
      </div>
    </>
  );
}

export default TextInputWithFocusButton;
