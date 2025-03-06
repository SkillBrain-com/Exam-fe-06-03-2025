import React, { useState } from "react";
import AddNoteTemplate from "./AddNoteTemplate";
import NoteList from "./NoteList";

const AddNote = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <div>
      <h1>Notițele mele</h1>
      <AddNoteTemplate onAddNote={addNote} />
      <NoteList notes={notes} />
    </div>
  );
};

export default AddNote;
