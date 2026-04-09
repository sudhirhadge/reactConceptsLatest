import React from 'react'
import ErrorBoundaryDemo from './ErrorBoundaryDemo'
import SuspenseLazyDemo from './SuspenseLazyDemo'
import PortalDemo from './PortalDemo'
import ControlledFormDemo from './ControlledFormDemo'

export default function AdvancedExamples() {
  return (
    <div style={{ padding: 12 }}>
      <h1>Advanced React Concepts</h1>
      <ErrorBoundaryDemo />
      <SuspenseLazyDemo />
      <PortalDemo />
      <ControlledFormDemo />
    </div>
  )
}
