import { useState, startTransition, useTransition } from "react";

/*
===========================================================
🔹 startTransition (React Concurrent Feature)
===========================================================

👉 Definition:
- startTransition is used to mark updates as NON-URGENT.
- React will prioritize urgent updates (like typing, clicks)
  over these non-urgent updates.

👉 Syntax:
startTransition(() => {
  // non-urgent state updates
});

👉 Key Points:
1. Does NOT block UI → keeps app responsive
2. Used for heavy UI updates (filtering, large lists, charts)
3. No loading state built-in
4. Works without hooks (can be used anywhere)

===========================================================
🔹 useTransition (Hook version)
===========================================================

👉 Definition:
- useTransition gives you:
   1. startTransition function
   2. isPending (loading indicator)

👉 Syntax:
const [isPending, startTransition] = useTransition();

👉 Key Points:
1. Same as startTransition BUT gives loading state
2. Useful when you want spinner / loader
3. Best for UX improvements

===========================================================
🔹 Urgent vs Non-Urgent Updates
===========================================================

URGENT (High Priority):
- Typing input
- Button clicks
- Navigation

NON-URGENT (Low Priority):
- Filtering large list
- Rendering heavy UI
- Data visualization

===========================================================
*/

const items = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);

export default function StartTransition() {
  const [input, setInput] = useState("");
  const [filtered, setFiltered] = useState(items);

  // useTransition hook (optional)
  const [isPending, startTransitionHook] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;

    /*
    ===========================================================
    🔹 URGENT UPDATE
    ===========================================================
    - This runs immediately
    - Keeps typing smooth
    */
    setInput(value);

    /*
    ===========================================================
    🔹 NON-URGENT UPDATE (using startTransition)
    ===========================================================
    - Heavy operation (filtering 10k items)
    - React can delay this to keep UI responsive
    */
    startTransition(() => {
      const result = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFiltered(result);
    });

    /*
    ===========================================================
    🔹 SAME THING using useTransition
    ===========================================================
    - Gives isPending (loading state)
    */
    startTransitionHook(() => {
      const result = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFiltered(result);
    });
  };

  return (
    <div>
      {/* 
      ===========================================================
      🔹 INPUT FIELD
      ===========================================================
      - Should always be fast (urgent update)
      */}
      <input value={input} onChange={handleChange} />

      {/* 
      ===========================================================
      🔹 LOADING STATE (only with useTransition)
      ===========================================================
      */}
      {isPending && <p>Loading...</p>}

      {/* 
      ===========================================================
      🔹 LIST RENDERING
      ===========================================================
      - Potentially slow (large list)
      - That’s why wrapped in transition
      */}
      <ul>
        {filtered.slice(0, 50).map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

/*
===========================================================
🔥 INTERVIEW QUICK SUMMARY
===========================================================

Q: Why use startTransition?
A: To prevent UI lag during heavy updates

Q: Difference?
- startTransition → no loading state
- useTransition → gives isPending

Q: Real use cases?
- Search filtering
- Tab switch
- Large lists
- Charts

Q: When NOT to use?
- Form inputs
- Critical updates
- Small operations

===========================================================
*/