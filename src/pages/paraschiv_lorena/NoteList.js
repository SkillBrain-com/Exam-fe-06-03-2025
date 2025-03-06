import React from "react";

const NoteList = ({ notes }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <div key={note.id} className="note-card">
          <h3>{note.title}</h3>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
