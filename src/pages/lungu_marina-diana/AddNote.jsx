import React from "react";
import { useState } from "react";
import "./AddNote.css";

const AddNote = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      setTitle("");
      setContent("");
      return;
    }

    onAdd({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-note-form">
      <input
        className="title-input"
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        className="content-input"
        placeholder="Content"
        value={content}
        onChange={handleContentChange}
      />
      <button className="submit-button" type="submit">
        Add Note
      </button>
    </form>
  );
};

export default AddNote;
