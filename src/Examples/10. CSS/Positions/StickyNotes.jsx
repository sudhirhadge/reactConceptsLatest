import React, { useState } from "react";
import "./StickyNotes.css";

/*
App Overview:
This app demonstrates different CSS positioning styles in a practical scenario.
- Static Positioning: The main container and header.
- Relative Positioning: Notes within the board.
- Absolute Positioning: Buttons within each note.
- Fixed Positioning: A toolbar that stays at the top of the viewport.
- Sticky Positioning: A sidebar that sticks to the top of the container when scrolling.

Explanation:
App Component: Contains different boxes demonstrating various CSS positioning styles.
CSS:
- Static Positioning: Default positioning where elements follow the normal document flow.
- Relative Positioning: Elements are positioned relative to their normal position using top, right, bottom, and left properties.
- Absolute Positioning: Elements are positioned relative to the nearest positioned ancestor. If none, they are positioned relative to the document body.
- Fixed Positioning: Elements are positioned relative to the viewport and remain fixed even when the page is scrolled.
- Sticky Positioning: Elements toggle between relative and fixed positioning based on the scroll position.
*/

function StickyNotes() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");

  const addNote = () => {
    if (noteText.trim()) {
      setNotes([...notes, noteText]);
      setNoteText("");
    }
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Sticky Notes App</h1>
      </header>
      <div className="toolbar">
        <input
          type="text"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Enter note text"
          className="note-input"
        />
        <button onClick={addNote} className="add-button">
          Add Note
        </button>
      </div>
      <div className="board">
        {notes.map((note, index) => (
          <div key={index} className="note">
            <p>{note}</p>
            <button className="delete-button" onClick={() => deleteNote(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
      <aside className="sidebar">
        <p>Sticky Sidebar</p>
      </aside>
    </div>
  );
}

export default StickyNotes;
