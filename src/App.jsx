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
  const [activeComponent, setActiveComponent] = useState(null);
  const [expanded, setExpanded] = useState({});
  const [darkMode, setDarkMode] = useState(true);
  const [activeName, setActiveName] = useState('');

  const toggle = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const ActiveComponent = activeComponent;

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>

      {/* HEADER */}
      <header className="header">
        <div className="header-left">
          <h2>Welcome back 👋</h2>
          <span className="badge">v1.0</span>
        </div>

        <div className="header-center">
          <input placeholder="Search concepts..." />
        </div>

        <div className="header-right">
          <button className="icon">🔔</button>
          <button className="icon">⚙️</button>

          <div className="avatar">S</div>

          <button onClick={() => setDarkMode((p) => !p)}>
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </header>

      <div className="layout">

        {/* SIDEBAR */}
        <aside className="sidebar">
          {demos.map((demo, i) => (
            <div key={i} className="menu-item">

              <div className="menu-title">
                {/* NAME */}
                <span
                  className={activeName === demo.name ? "active" : ""}
                  onClick={() => {
                    setActiveComponent(() => demo.component);
                    setActiveName(demo.name);
                  }}
                >
                  {demo.name}
                </span>

                {/* RIGHT ARROW */}
                {demo.subTopics && (
                  <button
                    className="arrow"
                    onClick={() => toggle(i)}
                  >
                    {expanded[i] ? "▼" : ">"}
                  </button>
                )}
              </div>

              {/* SUBTOPICS */}
              {expanded[i] && demo.subTopics && (
                <div className="submenu">
                  {demo.subTopics.map((sub, j) => (
                    <div
                      key={j}
                      className="submenu-item"
                      onClick={() =>
                        setActiveComponent(() => sub.component)
                      }
                    >
                      • {sub.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </aside>

        {/* CONTENT */}
        <main className="content">
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<p>Loading...</p>}>
              {ActiveComponent ? (
                <ActiveComponent />
              ) : (
                <p>Select a concept</p>
              )}
            </Suspense>
          </ErrorBoundary>
        </main>
      </div>
      <footer className="footer">
        <div>© 2026 React Playground</div>

        <div className="footer-links">
          <span>Docs</span>
          <span>GitHub</span>
          <span>Privacy</span>
        </div>
      </footer>
    </div>
  );
}

export default App;