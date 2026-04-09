import React, { forwardRef, useRef, useImperativeHandle } from 'react'

/**
 * ForwardRef Concept Explanation:
 *
 * ForwardRef is a React feature that allows parent components to access DOM elements
 * or refs of child components. This is useful when you need to expose internal refs
 * from a component to its parent, enabling direct manipulation of DOM elements.
 *
 * Concept:
 * - forwardRef is a function that takes a component and returns a new component that
 *   can receive a ref prop.
 * - The ref is passed as the second parameter to the component function.
 * - This allows parent components to get direct access to child DOM elements.
 *
 * Real-life Examples:
 * 1. Custom input components that need focus management from parent.
 * 2. Modal dialogs where parent needs to control focus or scroll.
 * 3. Third-party library integrations requiring DOM access.
 * 4. Animation libraries needing direct element references.
 *
 * Tradeoffs:
 * Pros:
 * - Enables imperative control over child components.
 * - Useful for integrating with non-React code or libraries.
 * - Allows parent to manage focus, scrolling, or measurements.
 *
 * Cons:
 * - Breaks React's declarative nature; encourages imperative code.
 * - Can make components harder to test and reason about.
 * - May lead to tight coupling between parent and child.
 * - Not suitable for all use cases; prefer props and state when possible.
 */

// Custom Input Component using forwardRef
const FancyInput = forwardRef((props, ref) => {
  // this is Uncontrolled component as we are not using state to control value, we are directly manipulating DOM element
  //this ccomponent is just for demonstration of forwardRef, in real world you would want to use state to control value and make it controlled component
  return (
    <input
      ref={ref}
      {...props}
      style={{
        padding: '8px',
        border: '2px solid #007bff',
        borderRadius: '4px',
        fontSize: '16px',
        outline: 'none',
        ...props.style
      }}
    />
  )
})

// Component demonstrating useImperativeHandle
const ControlledInput = forwardRef((props, ref) => {
  // but this is Uncontrolled component as we are not using state to control value, we are directly manipulating DOM element
  const inputRef = useRef()

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
    clear: () => inputRef.current.value = '',
    getValue: () => inputRef.current.value,
    setValue: (value) => inputRef.current.value = value
  }))

  return (
    <input
      ref={inputRef}
      {...props}
      style={{
        padding: '8px',
        border: '2px solid #28a745',
        borderRadius: '4px',
        fontSize: '16px',
        outline: 'none',
        ...props.style
      }}
    />
  )
})

export default function ForwardRefDemo() {
  const fancyInputRef = useRef()
  const controlledInputRef = useRef()

  const focusFancyInput = () => {
    fancyInputRef.current.focus()
  }

  const focusControlledInput = () => {
    controlledInputRef.current.focus()
  }

  const clearControlledInput = () => {
    controlledInputRef.current.clear()
  }

  const logControlledValue = () => {
    console.log('Controlled input value:', controlledInputRef.current.getValue())
  }

  const setControlledValue = () => {
    controlledInputRef.current.setValue('Hello from parent!')
  }

  return (
    <div style={{ margin: 12, padding: 12, border: '1px solid #ccc' }}>
      <h2>ForwardRef Demo</h2>

      <div style={{ marginBottom: 20 }}>
        <h3>Basic ForwardRef Example</h3>
        <FancyInput type="text" ref={fancyInputRef} placeholder="Click focus button sudhir" />
        <button onClick={focusFancyInput} style={{ marginLeft: 10 }}>
          Focus Fancy Input
        </button>
        <p>Parent can control focus on child input via ref.</p>
      </div>

      <div style={{ marginBottom: 20 }}>
        <h3>useImperativeHandle Example</h3>
        <ControlledInput type="text" ref={controlledInputRef} placeholder="Type something..." />
        <div style={{ marginTop: 10 }}>
          <button onClick={focusControlledInput}>Focus</button>
          <button onClick={clearControlledInput} style={{ marginLeft: 10 }}>Clear</button>
          <button onClick={logControlledValue} style={{ marginLeft: 10 }}>Log Value</button>
          <button onClick={setControlledValue} style={{ marginLeft: 10 }}>Set Value</button>
        </div>
        <p>Parent has imperative control over child's methods via useImperativeHandle.</p>
      </div>

      <div style={{ backgroundColor: '#f8f9fa', padding: 12, borderRadius: 4 }}>
        <h4>Key Takeaways:</h4>
        <ul>
          <li>forwardRef allows parent components to access child DOM elements.</li>
          <li>useImperativeHandle customizes the ref object exposed to parent.</li>
          <li>Use sparingly; prefer props and state for most interactions.</li>
          <li>Great for focus management, measurements, and library integrations.</li>
        </ul>
      </div>
    </div>
  )
}