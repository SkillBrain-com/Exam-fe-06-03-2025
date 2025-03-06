import React from "react";
import AddNote from "./AddNote";
import NoteCard from "../../components/NoteCard";

const initialNote = {
  title: "To do list",
  content: "This is my first note",
};

function AddNotes() {
  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", background: "#5F9964" }}>
      <AddNote />
      <NoteCard title={initialNote.title} content={initialNote.content} />
    </div>
  );
}

export default AddNotes;
