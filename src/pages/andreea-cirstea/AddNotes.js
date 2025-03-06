import React, { useState } from "react";
import AddNote from "./AddNote";
import NoteCard from "../../components/NoteCard";

function AddNotes() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (title, content) => {
    setNotes([...notes, { title, content }]);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", background: "#81A784" }}>
      <h2 style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold", color: "#2E7D32" }}>To Do List</h2>
      <AddNote onAddNote={handleAddNote} />
      <div className='note-list' style={{ marginTop: "20px" }}>
        {notes.map((note, index) => (
          <NoteCard key={index} title={note.title} content={note.content} />
        ))}
      </div>
    </div>
  );
}

export default AddNotes;
