import React from 'react'

export default function LazyComponent() {
  return (
    <div style={{ border: '1px dashed #0077cc', padding: 12, margin: 8 }}>
      <h3>Lazy Component loaded</h3>
      <p>This component is loaded with React.lazy and Suspense.</p>
    </div>
  )
}
