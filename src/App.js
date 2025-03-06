import React from "react";
import MentorNotes from "./pages/mentor/AddNotes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AddNotes from "./pages/nagyerhard/AddNotes";

function App() {
  return (
    <Router>
      <div className='App'>
        <h1>Note App</h1>
        <Routes>
          <Route path='/' element={<MentorNotes />} />
          <Route path="/nagy_erhard" element={<AddNotes />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
