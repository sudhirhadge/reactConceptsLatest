import React from 'react'

function UseLayoutEffect() {
    return (
        <div>
            <h1>useLayoutEffect – Key Points</h1>

            <p>
                <b>useLayoutEffect</b> is similar to <b>useEffect</b>, but it runs
                <b> synchronously before the browser paints the screen</b>.
            </p>

            <h2>⚡ When it runs</h2>
            <ul>
                <li>Runs after DOM updates</li>
                <li>Runs before the browser repaint</li>
                <li>Blocks visual updates until it finishes</li>
            </ul>

            <h2>🔄 useLayoutEffect vs useEffect</h2>
            <ul>
                <li><b>useLayoutEffect:</b> Runs before paint (synchronous)</li>
                <li><b>useEffect:</b> Runs after paint (asynchronous)</li>
            </ul>

            <h2>✅ When to use</h2>
            <ul>
                <li>Measuring DOM elements (height, width, position)</li>
                <li>Applying layout changes before user sees UI</li>
                <li>Preventing flickering during UI updates</li>
            </ul>

            <h2>⚠️ Important</h2>
            <ul>
                <li>Can hurt performance if overused</li>
                <li>Blocks rendering → may slow UI</li>
                <li>Prefer <b>useEffect</b> when possible</li>
            </ul>

            <h2>📌 Rule of thumb</h2>
            <p>
                Use <b>useEffect</b> by default.
                Switch to <b>useLayoutEffect</b> only when you must read or modify layout
                before the screen updates.
            </p>

            <a
                href="https://react.dev/reference/react/useLayoutEffect"
                target="_blank"
                rel="noopener noreferrer"
            >
                React useLayoutEffect Docs
            </a>
        </div>
    )
}

export default UseLayoutEffect