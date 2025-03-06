import { useState } from "react";
import "./AddNotes.css";
import AddNote from "./AddNote";
import NoteList from "./NoteList";

const AddNotes = () => {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (note) => {
    setNotes([...notes, note]);
  };

  return (
    <>
      <AddNote onAdd={handleAddNote} />
      <NoteList notes={notes} />
    </>
  );
};

export default AddNotes;
