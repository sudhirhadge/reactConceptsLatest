import React from "react";
import LargeListInput from "./LargeListInput";
import LargeListWithDeferredValue from "./LargeListWithDeferredValue";

export default function UseDeferedValue() {
  return (
    <div style={{ padding: 12 }}>
      <h1>useDeferredValue Hook Example</h1>
      1. Before useDeferredValue, when we have a component that generates a large list of items based on user input, it can cause performance issues like UI lag or freezes as the component re-renders on every keystroke, especially when generating a large list.
      <br />
      2. This hook also helps reacts <strong>concurrent rendering </strong>by deferring the value update, allowing the input field to remain responsive while the expensive list rendering happens in the background.
      Without such hooks react batch updates and causes performance issues.(batch updates are when react updates multiple components at once, which can cause performance issues- Batch rendering)
      <h5>Other apis which helps Reacts concureent rendering are <u>startTransition and useTransition</u></h5>
      <br />
      3. During reconcillation process, react batches updates and causes performance issues. Hence we use useDeferredValue hook (or other APIs like useTransition) to defer the value update, allowing the input field to remain responsive while the expensive list rendering happens in the background.
      <br />
      <hr />
      <LargeListInput />
      with useDeferredValue, we can defer the value update, allowing the input field to remain responsive while the expensive list rendering happens in the background. This way, the UI remains smooth and responsive even when generating a large list of items.
      <br />
      <br />
      <LargeListWithDeferredValue />
    </div>
  );
}