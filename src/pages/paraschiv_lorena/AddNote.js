import React, { useState } from "react";

const AddNote = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAdd = () => {
    if (title && content) {
      onAddNote(title, content);
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="add-note-container">
      <h2>Adaugă o Notiță</h2>
      <input
        type="text"
        placeholder="Titlu"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Conținut"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleAdd}>Adaugă Notiță</button>
    </div>
  );
};

export default AddNote;
