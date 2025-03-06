import React, { useState } from "react";
import "./styles.css";

const AddNote = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onAddNote({ title, content });
      setTitle("");
      setContent("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="add-note-form">
      <input
        className="title-input"
        type="text"
        placeholder="Note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="content-input"
        placeholder="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit" className="button">
        Add Note
      </button>
    </form>
  );
};

export default AddNote;
