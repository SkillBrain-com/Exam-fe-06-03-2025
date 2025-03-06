import NoteCard from "../../components/NoteCard";

function NoteList({ notes }) {
  return (
    <div>
      {notes.length > 0 ? (
        notes.map((note, index) => (
          <NoteCard key={index} title={note.title} content={note.content} />
        ))
      ) : (
        <p>There are no notes added yet!</p>
      )}
    </div>
  );
}

export default NoteList;
