import React, { Suspense } from 'react'

const LazyComponent = React.lazy(() => import('./LazyComponent'))

export default function SuspenseLazyDemo() {
  return (
    <div style={{ margin: 12, padding: 12, border: '1px solid #ccc' }}>
      <h2>Suspense + Lazy Loading Demo</h2>
      <Suspense fallback={<div>Loading lazy component...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  )
}
