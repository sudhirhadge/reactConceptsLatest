import React from 'react'

function BuggyCounter({ onError }) {
  const [count, setCount] = React.useState(0)

  const increment = () => {
    const next = count + 1
    if (next > 5) {
      onError?.(new Error('Counter limit exceeded: count > 5'))
      return
    }
    setCount(next)
  }

  return (
    <div style={{ border: '1px solid #ddd', padding: 8, margin: 8 }}>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <p>(At 6+ it triggers a functional error state)</p>
    </div>
  )
}

export default function ErrorBoundaryDemo() {
  const [error, setError] = React.useState(null)

  const reset = () => {
    setError(null)
  }

  return (
    <div style={{ margin: 12, padding: 12, border: '1px solid #ccc' }}>
      <h2>Error Handling Demo (Function Component)</h2>
      {error ? (
        <div style={{ border: '1px solid red', padding: 12 }}>
          <p>Functional error caught:</p>
          <pre>{error.message}</pre>
          <button onClick={reset}>Reset</button>
        </div>
      ) : (
        <BuggyCounter onError={setError} />
      )}
    </div>
  )
}
