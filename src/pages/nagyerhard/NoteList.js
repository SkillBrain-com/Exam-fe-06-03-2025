import React from "react";
import NoteCard from "../../components/NoteCard";
import "./styles.css";

const NoteList = ({ notes }) => {
  return (
    <div className="notes-list">
      <h2>My Notes</h2>
      <div className="notes-grid">
        {notes.length === 0 ? (
          <p className="empty-message">No notes yet. Add one!</p>
        ) : (
          notes.map((note, index) => (
            <NoteCard key={index} title={note.title} content={note.content} />
          ))
        )}
      </div>
    </div>
  );
};

export default NoteList;
