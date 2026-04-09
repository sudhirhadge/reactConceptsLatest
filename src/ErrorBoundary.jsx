import React, { useState } from "react";

/*
  Internal class (required by React)
*/


// instead of using react-error-boundary package, we can create our own error boundary component using class component and 
// use it in our app. This is a simple implementation of error boundary which catches errors in its child components 
// and displays a fallback UI. The retry button allows us to reset the error state and try loading the component again.

class ErrorBoundaryImpl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Lazy component failed:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

/*
  Functional wrapper (what your app uses)
*/
export default function ErrorBoundary({ children }) {
  const [retryKey, setRetryKey] = useState(0);

  return (
    <ErrorBoundaryImpl
      key={retryKey}
      fallback={
        <div>
          <p>Failed to load component.</p>
          <button onClick={() => setRetryKey((k) => k + 1)}>
            Retry
          </button>
        </div>
      }
    >
      {children}
    </ErrorBoundaryImpl>
  );
}