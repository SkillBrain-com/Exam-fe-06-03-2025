import React from "react";
import MentorNotes from "./pages/mentor/AddNotes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AddNote from "./pages/mentor/AddNote";

function App() {
  return (
    <Router>
      <div className='App'>
        <h1>Note App</h1>
        <Routes>
          <Route path='/' element={<MentorNotes />} />
          {AddNote}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
