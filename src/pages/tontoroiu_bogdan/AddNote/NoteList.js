import React from "react";
import NoteCard from "./NoteCard";

const NoteList = ({ notes }) => {
  return (
    <div className="notes-list">
      {notes.map((note, index) => (
        <NoteCard key={index} note={note} />
      ))}
    </div>
  );
};

export default NoteList;