import React, { useState } from "react";
import NoteList from "./NoteList";
import "./AddNote.css";

function AddNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() && content.trim()) {
      setNotes((prevNotes) => [...prevNotes, { title, content }]);
    }
    setContent("");
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="add-note-form">
        <input
          onChange={handleTitleChange}
          className="title-input"
          type="text"
          placeholder="Title"
          value={title}
        />
        <textarea
          onChange={handleContentChange}
          className="content-input"
          placeholder="Content"
          value={content}
        />
        <button className="submit-button" type="submit">
          Add Note
        </button>
      </form>
      <NoteList notes={notes} />
    </div>
  );
}

export default AddNote;
