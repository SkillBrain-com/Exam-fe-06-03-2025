import NoteCard from "../../components/NoteCard";
import "./NoteList.css";

const NoteList = ({ notes }) => {
  return (
    <div className="notes-container">
      {notes.map((note, index) => (
        <NoteCard key={index} title={note.title} content={note.content} />
      ))}
    </div>
  );
};

export default NoteList;
