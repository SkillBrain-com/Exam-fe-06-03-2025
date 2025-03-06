import React, { useState } from "react";
import AddNote from "./AddNote";
import NoteList from "./NoteList";
import "./styles.css";
const AddNotes = () => {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <div className="notes-container">
      <h1>Notes Application</h1>
      <div className="app-layout">
        <div className="add-note-section">
          <h2>Add a New Note</h2>
          <AddNote onAddNote={handleAddNote} />
        </div>
        <NoteList notes={notes} />
      </div>
    </div>
  );
};

export default AddNotes;
