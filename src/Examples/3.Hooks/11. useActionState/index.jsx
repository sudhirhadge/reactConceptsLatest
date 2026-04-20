import React from 'react'
import WithoutUseActionState from './WithoutUseActionState.jsx/index.jsx'
import WithUseActionState from './WithUseActionState/index.jsx'
import RetainingInputValue from './WithUseActionState/RetainingInputValue.jsx'

/**
 * Hooks (Demo Aggregator)
 * ----------------------
 * This file is intentionally a "showcase container" for comparing approaches.
 *
 * Goal:
 * 1) Show classic form submit flow WITHOUT useActionState
 * 2) Show modern React approach WITH useActionState (state + pending in one hook)
 * 3) Show a common UX fix: retaining input values on validation errors / failed / success submit
 *
 * Why this matters:
 * - Traditional approach usually needs multiple useState hooks for:
 *   loading + success/error + resetting/retaining fields.
 * - useActionState centralizes the async action lifecycle:
 *   [state, formAction/dispatch, isPending]
 */
function UseActionStateHook() {
  return (
    <div>
      <UseActionStateSummary />
      <div>
        {/**
         * Example 1: Without useActionState
         * - Typical pattern: preventDefault + local isLoading state + manual state updates
         * - Easy to end up with boilerplate and scattered logic across handler + UI
         */}
        <h4>❌ Before: Manual State Handling</h4>
        <WithoutUseActionState />
        <hr />

        {/**
         * Example 2: With useActionState
         * - useActionState ties an "Action" (async submit) to UI state updates
         * - returns:
         *   1) state     -> latest result returned from the action (success/errors/data)
         *   2) action    -> function to wire into <form action={action}> OR call manually
         *   3) isPending -> automatic loading flag while the action is running
         */}
        <h4>✅ After: useActionState</h4>
        <WithUseActionState />
        <hr />

        {/**
         * Example 3: RetainingInputValue (UX improvement)
         * - Common issue: after submit, browser/React form reset behavior may clear inputs
         * - This demo focuses on preserving input value on errors/retries
         * - Useful for validation flows: user should not retype input after an error
         */}
        <h4>✨ UX Enhancement: Retaining Input Value</h4>
        <RetainingInputValue />
      </div>
    </div>
  )
}

export default UseActionStateHook


function UseActionStateSummary() {
  return (
    <section style={{ borderBottom: '1px solid #e5e5e5', marginBottom: 24 }}>
      <h2>useActionState – Summary</h2>

      <p>
        <strong>useActionState</strong> is a React Hook that helps manage state
        transitions caused by user actions such as form submissions or async
        events. Instead of manually tracking loading, success, and error states,
        the hook centralizes the entire action lifecycle into a single API.
      </p>

      <h3>Key Takeaways</h3>
      <ul>
        <li>Nice for dealing with forms in React without <code>useForm</code>. </li>
        <li>Earlier : forms management - state for errors, input fields , loading, etc ; </li>
        <li>
          Now it Eliminates multiple <code>useState</code> hooks for loading, error, and
          success handling.
        </li>
        <li>
          Returns three values: <code>state</code>, <code>action</code>, and
          <code>isPending</code>, making async flows predictable.
        </li>
        <li>
          Facilitates error handling, retrying, and progressive updates.
        </li>
        <li>
          Improves code organization by centralizing async action lifecycle.
        </li>
        <li>Actions are the functions which are called when form is submitted, can be run on server or client
          depending on how you use them.

        </li>
        <li>
          Automatically tracks pending state during async actions without
          <code>try / finally</code>.
        </li>
        <li>
          Action receives <code>previousState</code>, enabling retries,
          validation flows, and progressive updates.
        </li>
        <li>
          Improves UX by enabling patterns like retaining input values after
          validation errors.
        </li>

      </ul>
    </section>
  )
}
