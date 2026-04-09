/**
 * useOptimistic Demo – Optimistic Todo List
 *
 * Concept explanation:
 * `useOptimistic` is a React hook that lets you show a temporary "optimistic" state
 * while an async action (e.g., network call) is in progress. Once the async action
 * resolves, React re‑renders using the actual server state, but the UI update feels
 * instant to the user.
 *
 * - First parameter: the **base state** (current todos).
 * - Second parameter: an **updater function** that returns what the UI should look
 *   like *while* the async action is pending.
 *
 * Why use it?
 * - Avoids showing loaders for every mutation.
 * - Makes UI feel fast even with slow backends.
 * - Handles race conditions and rollback implicitly.
 *
 * Gotchas / tradeoffs:
 * - Only works if your mutations are **pure** and can be safely applied beforehand.
 * - If server rejects, you may need additional rollback logic outside `useOptimistic`.
 * - Best paired with `startTransition` or server actions in React 18+/19. [web:11][web:16]
 *
 * Real‑world examples:
 * - Adding/removing items in a todo list or cart.
 * - Upvoting/liking posts.
 * - Commenting or messaging.
 */

import React, { useOptimistic, startTransition, useState } from "react";

/**
 * Simulates a backend API for adding a todo.
 * In real code this would be a fetch, async action, or mutation.
 */
async function addTodoBackend(todo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate a slow network or processing
      resolve({ ...todo, id: `server_${todo.id}` });
    }, 1000);
  });
}

/**
 * Main demo component: Optimistic Todo List
 *
 * - Uses `useOptimistic` to show todos immediately on add.
 * - Uses `startTransition` because adding a todo is a non‑urgent update.
 * - Demonstrates pending state via a `pending` flag on each todo.
 */
export function OptimisticTodoList() {
  const [todos, setTodos] = useState([
    { id: "1", text: "Learn React hooks", pending: false },
  ]);

  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (currentTodos, newTodo) => [
      ...currentTodos,
      { id: newTodo.id, text: newTodo.text, pending: true },
    ]
  );

  const [inputValue, setInputValue] = useState("");

  /**
   * Handles adding a new todo.
   * - Optimistically updates the UI with `addOptimisticTodo`.
   * - Then runs the async backend call in a `startTransition`.
   */
  const handleAddTodo = () => {
    if (!inputValue.trim()) return;

    const newTodo = {
      id: crypto.randomUUID(),
      text: inputValue.trim(),
    };

    // 1. Optimistically update UI immediately
    addOptimisticTodo(newTodo);

    // 2. Run async action in a transition so UI stays responsive
    startTransition(async () => {
      try {
        const result = await addTodoBackend(newTodo);
        setTodos((prev) =>
          prev.map((t) =>
            t.id === newTodo.id ? { ...result, pending: false } : t
          )
        );
      } catch (error) {
        // If API fails, remove the optimistic todo
        setTodos((prev) => prev.filter((t) => t.id !== newTodo.id));
      }
    });

    setInputValue("");
  };

  const handleRemoveTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <section className="optimistic-todo-list">
      <h2>useOptimistic – Optimistic Todo List</h2>

      <p>
        Typing a todo and clicking "Add" will show it immediately in the list
        (optimistic UI). After ~1s the UI updates again with the server version.
      </p>

      <div className="controls" style={{ marginBottom: 16 }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a todo..."
          aria-label="New todo text"
        />
        <button onClick={handleAddTodo} disabled={!inputValue.trim()}>
          Add Todo
        </button>
      </div>

      <ul className="todo-list">
        {optimisticTodos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: 8 }}>
            {todo.text}{" "}
            {todo.pending && (
              <span style={{ color: "red", fontSize: "0.8em" }}>
                (Adding...)
              </span>
            )}
            <button
              onClick={() => handleRemoveTodo(todo.id)}
              style={{ marginLeft: 8 }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      {/* Educational takeaways */}
      <details>
        <summary>
          <strong>Educational Takeaways</strong>
        </summary>
        <ul>
          <li>
            <code>useOptimistic</code> gives you a temporary UI state while async
            work runs.
          </li>
          <li>
            The updater function should be pure and deterministic so optimistic
            and server states can converge cleanly.
          </li>
          <li>
            Pairing with <code>startTransition</code> keeps the UI responsive
            during non‑urgent updates.
          </li>
          <li>
            If you need to rollback on error, update the base state (e.g.,
            <code>setTodos</code>) after the async call rejects.
          </li>
        </ul>
      </details>
    </section>
  );
}

/**
 * Default export for the demo so this can be plugged into App.js.
 */
export default function Demo_useOptimistic() {
  return (
    <div>
      <h1>React Concept: useOptimistic</h1>
      <OptimisticTodoList />
    </div>
  );
}