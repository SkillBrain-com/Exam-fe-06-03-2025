import React, { useState } from "react";
import AddNote from "./AddNote";
import NoteList from "./NoteList";
import "./paraschiv_lorena.css";

const AddNotes = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (title, content) => {
    const newNote = { id: Date.now(), title, content };
    setNotes([...notes, newNote]);
  };

  return (
    <div className="app-container">
      <div className="notes-container">
        <h1>Notițele mele</h1>
        <AddNote onAddNote={addNote} />
        <NoteList notes={notes} />
      </div>
    </div>
  );
};

export default AddNotes;
