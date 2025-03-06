import React, { useState } from "react";
import NoteCard from "../../components/NoteCard.js";
import AddNotes from "./AddNotes.js";

function AddNote({onAddNote})  {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  if (title.trim() && content.trim()) {
    onAddNote(title, content);
    setTitle("");
    setContent("");
  }
};


  return (
   <div style= {{maxWidth: "600px", margin: "40px auto", padding: "20px", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", background: "#A3D6A5"}}>
      <form onSubmit={handleSubmit} className='add-note-form' style={{display: "flex", flexDirection: "column", gap: "15px", color: "ccc", background: "#ACAAA6" }}>
        <input 
          className='title-input' 
          type='text' 
          placeholder='Title' 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ccc", fontSize: "16px"}}
        />
        <textarea 
          className='content-input' 
          placeholder='Content' 
          value={content} 
          onChange={(e) => setContent(e.target.value)}
          style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ccc", fontSize: "16px", minHeight: "100px"}}
        />
        <button className='submit-button' type='submit' style={{ padding: "12px", borderRadius: "8px", border: "none", fontWeight: "bold", background: "#5F9964", color: "white", fontSize: "16px", cursor: "hand"}}>
          Add Note
        </button>
      </form>
      <div className='note-list' style = {{ marginTop: "20px"}}>
        {notes.map((note, index) => (
          <NoteCard key={index} title={note.title} content={note.content} />
        ))}
      </div>
    </div>
  );
}

export default AddNote;
