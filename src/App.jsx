import React, { useState, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { demos } from "./demos.config";
import "./App.css";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="error">
      <p>Something went wrong.</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Retry</button>
    </div>
  );
}

function App() {
  const [activeDemo, setActiveDemo] = useState(null);

  const ActiveComponent =
    activeDemo !== null ? demos[activeDemo].component : null;

  return (
    <div className="app">
      <header className="header">React Concepts Playground</header>

      <div className="tabs">
        {demos.map((demo, i) => (
          <button
            key={i}
            onClick={() => setActiveDemo(i)}
            className={`tab ${activeDemo === i ? "active" : ""}`}
          >
            {demo.name}
          </button>
        ))}
      </div>

      <main className="content">
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          resetKeys={[activeDemo]}
        >
          <Suspense fallback={<p>Loading...</p>}>
            {ActiveComponent ? (
              <ActiveComponent />
            ) : (
              <p>Select a concept to view the demo.</p>
            )}
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default App;