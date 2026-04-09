import React from "react";
import LargeListInput from "./LargeListInput";
import LargeListWithUseTransition from "./LargeListWithUseTransition";

export default function UseTransition() {
  return (
    <div style={{ padding: 12 }}>
      <h1>useTransition Hook Example</h1>
      Before useTransition, when we have a component that generates a large list of items 
      based on user input, it can cause performance issues like UI lag or freezes as the component re-renders on every keystroke, especially when generating a large list.
      <br />
      <br />
      <LargeListInput />
      with useTransition, we can defer the value update, allowing the input field to remain 
      responsive while the expensive list rendering happens in the background. 
      This way, the UI remains smooth and responsive even when generating a large list of items.
      <br />
      When to Use Alternatives
Switch to useDeferredValue only if you can't wrap the setter (e.g., prop-driven), but useTransition is ideal here for explicit control. Avoid both together—they overlap.
      <br />
      <LargeListWithUseTransition />
    </div>
  );
}