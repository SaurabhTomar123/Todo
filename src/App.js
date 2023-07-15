import "./styles.css";
import { useState } from "react";

const initialNote = [
  { name: "Note1", date: "2020-10-23", id: 1 },
  { name: "Note2", date: "2019-23-04", id: 2 }
];

export default function App() {
  const [Note, setNote] = useState(initialNote);

  function handleNotes(n) {
    setNote((Note) => [...Note, n]);
  }

  return (
    <div className="App">
      <InputNote addNote={handleNotes} />
      <ShowNote Notes={Note} />
    </div>
  );
}

function InputNote({ addNote }) {
  const [inputNote, setInputNote] = useState("");
  const [inputDate, setInputDate] = useState("");

  function handleAdd() {
    const newNote = { name: inputNote, date: inputDate };
    console.log(newNote);
    if (newNote.name === "") {
      alert("Add a note  first ");
      return;
    }
    if (!newNote.date) {
      alert("Add date first ");
      return;
    }
    addNote(newNote);
    setInputNote("");
    setInputDate("");
  }
  return (
    <div className="input-field">
      <input
        type="text"
        placeholder="Add a note"
        value={inputNote}
        onChange={(e) => setInputNote(e.target.value)}
      />
      <input
        type="date"
        value={inputDate}
        onChange={(e) => setInputDate(e.target.value)}
      />
      <button className="add-btn" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

function ShowNote({ Notes }) {
  const updatedNote = Notes;
  return (
    <ul className="task-list">
      {updatedNote.map((note) => (
        <Note note={note} key={note.id} />
      ))}
    </ul>
  );
}

function Note({ note }) {
  return (
    <li className="task-item">
      <span className="task"> {note.name} </span>
      <span className="date">{note.date} </span>
    </li>
  );
}
