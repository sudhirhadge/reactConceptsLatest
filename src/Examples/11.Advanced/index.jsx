import React from 'react'
import ErrorBoundaryDemo from './ErrorBoundaryDemo'
import SuspenseLazyDemo from './SuspenseLazyDemo'
import PortalDemo from './PortalDemo'
import ControlledFormDemo from './ControlledFormDemo'

export default function AdvancedExamples() {
  return (
    <div style={{ padding: 12 }}>
    <h1>Advanced React Concepts</h1>
      <div style={{ margin: '20px 0', padding: '12px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <p className="description">
          This section showcases advanced React patterns essential for production applications:
        </p>
        <p>
          • <strong>Error Boundaries</strong>: Catch JavaScript errors in component trees to prevent app crashes.<br />
          • <strong>Suspense &amp; Lazy</strong>: Enable code-splitting and dynamic imports for better performance.<br />
          • <strong>Portals</strong>: Render children into DOM nodes outside the parent hierarchy (e.g., modals).<br />
          • <strong>Controlled Forms</strong>: Manage form state and validation using React state.<br />
        </p>
      </div>
      <ErrorBoundaryDemo />
      <SuspenseLazyDemo />
      <PortalDemo />
      <ControlledFormDemo />
    </div>
  )
}
