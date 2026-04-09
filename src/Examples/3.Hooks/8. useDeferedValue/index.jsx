import React from "react";
import LargeListInput from "./LargeListInput";
import LargeListWithDeferredValue from "./LargeListWithDeferredValue";

export default function UseDeferedValue() {
  return (
    <div style={{ padding: 12 }}>
      <h1>useDeferredValue Hook Example</h1>
      Before useDeferredValue, when we have a component that generates a large list of items based on user input, it can cause performance issues like UI lag or freezes as the component re-renders on every keystroke, especially when generating a large list.
      <br />
      <br />
      <LargeListInput />
      with useDeferredValue, we can defer the value update, allowing the input field to remain responsive while the expensive list rendering happens in the background. This way, the UI remains smooth and responsive even when generating a large list of items.
      <br />
      <br />
      <LargeListWithDeferredValue />
    </div>
  );
}