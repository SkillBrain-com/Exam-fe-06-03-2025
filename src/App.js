import React from "react";
import MentorNotes from "./pages/mentor/AddNotes";
import AddNotes from "./pages/andreea-cirstea/AddNotes.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className='App'>
        <h1>Note App</h1>
        <Routes>
          <Route path='/' element={<MentorNotes />} />
          <Route path='/pages/andreea-cirstea' element={<AddNotes />} />
          {/* Add your route here */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
